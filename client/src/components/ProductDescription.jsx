import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-14 ring-1 ring-slate-900/10 rounded-lg">
      <div className="flex gap-3">
        <button className="medium-14 p-3 w-32 border-b-2 border-secondary">
          Description
        </button>
        <button className="medium-14 p-3 w-32">Color Guide</button>
        <button className="medium-14 p-3 w-32">Size Guide</button>
      </div>
      <hr className="h-[1px] w-full border-gray-500/30" />
      <div className="flex flex-col gap-3 p-3">
        <div>
          <h5 className="h5">Derail</h5>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est,
            hic architecto, temporibus assumenda consectetur modi, nobis quae
            velit porro minus fuga! Cum nemo veritatis non, nisi cumque neque
            officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            vitae cum natus culpa consectetur iure ut? Quaerat
          </p>
        </div>
        <div>
          <h5 className="h5">Benefit</h5>
          <ul className="list-disc pl-5 text-sm flex flex-col gap-1">
            <li className="text-gray-50">
              Hight-quality materials ensure long-lasting durability and
              comfort.
            </li>
            <li className="text-gray-50">
              Designed to meet the needs of modern, active lifestyle.
            </li>
            <li className="text-gray-50">
              Available in a wide range of colors and trendy colors.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
