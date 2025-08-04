import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";
import { useParams } from "react-router-dom";

const CategoryShop = () => {
  const { books, searchQuery } = useContext(ShopContext);
  const [filterBooks, setFilterBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { category } = useParams();

  useEffect(() => {
    let result = books;

    if (category) {
      result = result.filter(
        (book) => book.category.toLowerCase() === category.toLocaleLowerCase()
      );
    }

    if (searchQuery.length > 0) {
      setFilterBooks(
        (result = result.filter((book) =>
          book.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      );
    }
    setFilterBooks(result);
    setCurrentPage(1);
  }, [books, searchQuery, category]);

  const totalPage = Math.ceil(
    filterBooks.filter((b) => b.inStock).length / itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="max-padd-container py-16 pt-28 ">
      <Title title1={category} title2={"Books"} titleStyles={"pb-10"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-8">
        {filterBooks.length > 0 ? (
          filterBooks
            .filter((book) => book.inStock)
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((book) => <Item key={book?._id} book={book} />)
        ) : (
          <h4 className="h4"> Oops! Nothing matched your search </h4>
        )}
      </div>

      <div className="flexCenter flex-wrap gap-2 sm:gap-4 mt-14 mb-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          } btn-dark !py-1 !px-3`}
        >
          Previous
        </button>
        {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`${
              currentPage === index + 1 && "bg-secondary !text-white"
            } btn-light !py-1 !px-3`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`${
            currentPage === totalPage && "opacity-50 cursor-not-allowed"
          } btn-white bg-tertiary !py-1 !px-3`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default CategoryShop;
