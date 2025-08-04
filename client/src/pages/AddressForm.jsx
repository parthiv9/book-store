import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

const AddressForm = () => {
  const { navigate, user, method, setMethod } = useContext(ShopContext);
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress((data) => ({ ...data, [name]: value }));
    console.log(address);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-padd-container py-16 pt-28">
      <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-[2] flex-col gap-3 text-[95%]"
        >
          <Title
            title1={"Delivery"}
            title2={"Information"}
            titleStyles={"pb-5"}
          />
          <div className="flex gap-3">
            <input
              type="text"
              value={address.firstName}
              onChange={onChangeHandler}
              name="firstName"
              placeholder="First Name"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
              required
            />
            <input
              type="text"
              value={address.lastName}
              onChange={onChangeHandler}
              name="lastName"
              placeholder="Last Name"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
              required
            />
          </div>
          <input
            type="email"
            value={address.email}
            onChange={onChangeHandler}
            name="email"
            placeholder="Email"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
            required
          />
          <input
            type="phone"
            value={address.phone}
            onChange={onChangeHandler}
            name="phone"
            placeholder="Phone"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
            required
          />
          <input
            type="text"
            value={address.street}
            onChange={onChangeHandler}
            name="street"
            placeholder="Street"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
            required
          />
          <div className="flex gap-3">
            <input
              type="text"
              value={address.city}
              onChange={onChangeHandler}
              name="city"
              placeholder="City"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
              required
            />
            <input
              type="text"
              value={address.state}
              onChange={onChangeHandler}
              name="state"
              placeholder="State"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
              required
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={address.zipcode}
              onChange={onChangeHandler}
              name="zipcode"
              placeholder="Zipcode"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
              required
            />
            <input
              type="text"
              value={address.country}
              onChange={onChangeHandler}
              name="country"
              placeholder="Country"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
              required
            />
          </div>
          <button type="submit" className="btn-dark rounded-md w-1/2 mt-2">
            Add Address
          </button>
        </form>
        <div className="flex flex-1 flex-col">
          <div className="max-w-[379px] w-full bg-primary p-5 py-10 max-md:mt-16 rounded-xl">
            <CartTotal method={method} setMethod={setMethod} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
