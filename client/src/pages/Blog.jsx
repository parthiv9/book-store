import React from "react";
import { blogs } from "../assets/data";

const Blog = () => {
  return (
    <section className="max-padd-container py-16 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-12 pt-6">
        {blogs.map((blog) => (
          <div key={blog.title} className="relative">
            <img src={blog.image} alt={blog.title} className="rounded-xl" />
            <p>{blog.category}</p>
            <h5 className="h5 mb-1 line-clamp-1">{blog.title}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              delectus quam dolor tenetur atque optio dignissimos quidem
              aperiam, quaerat vel neque. Ducimus quaerat ullam, ipsum veritatis
              accusantium dolorum optio corporis.
            </p>
            <button className="underline mt-2 bold-14 line-clamp-2">
              continue reading
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
