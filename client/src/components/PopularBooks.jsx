import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Title from "./Title";
import Item from "./Item";

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const { books } = useContext(ShopContext);

  useEffect(() => {
    const data = books.filter((item) => item.popular);
    setPopularBooks(data.slice(0, 6));
  }, [books]);

  return (
    <section className="max-padd-container py-16">
      <Title
        title1={"Popular"}
        title2={"Books"}
        titleStyles={"pb-10"}
        para={
          "Check out our newest books arriving weekly with fresh ideas, exciting plots, and vibrant voices"
        }
      />
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
        {popularBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <Item book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularBooks;
