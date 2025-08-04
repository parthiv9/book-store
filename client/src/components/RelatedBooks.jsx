import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Item from "./Item";

const RelatedBooks = ({ book, id }) => {
  const [relatedBooks, setRelatedBooks] = useState([]);
  const { books } = useContext(ShopContext);

  useEffect(() => {
    if (books.length > 0) {
      let bookCopy = books.slice();
      bookCopy = bookCopy.filter(
        (item) => item.category === book.category && id !== item._id
      );
      setRelatedBooks(bookCopy.slice(0, 6));
    }
  }, [books]);

  return (
    <section className="py-16">
      <Title title1={"Related"} title2={"Books"} titleStyles={"pb-10"} />
      {
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            355: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="max-h-[333px]"
        >
          {relatedBooks.map((book) => (
            <SwiperSlide key={book._id}>
              <Item book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </section>
  );
};

export default RelatedBooks;
