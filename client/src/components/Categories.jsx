import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { categories } from "../assets/data";

const Categories = () => {
  const { navigate } = useContext(ShopContext);
  const color = ["bg-[#aedae6]", "bg-[#fff6c9]", "bg-[#fddbdb]"];
  
  return (
    <section className="max-padd-container pt-16 pb-4">
      <Title
        title1={"Category"}
        title2={"List"}
        titleStyles={"pb-6"}
        paraStyles={"hidden"}
      />
      <div className="flex gap-9 flex-wrap">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`shop/${cat.name.toLowerCase()}`)}
            className="flexCenter flex-col cursor-pointer group"
          >
            <div
              className={`flexCenter flex-col h-36 w-36 sm:h-40 sm:w-40 rounded-xl ${
                color[index % 3]
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                width={46}
                height={46}
                className="object-cover"
              />
              <h5 className="h5 capitalize mt-6">{cat.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
