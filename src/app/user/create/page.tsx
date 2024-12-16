"use client";

import axios from "axios";
import React, {useState} from "react";

const page = () => {
  // state menyimpan data
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    age: "",
  });

  const changeUserFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  // handle button submit
  const onSubmitChange = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/create",
        userField
      );
      console.log(response);
      window.location.href = "/";
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New User</h1>
      <div>
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs text-white"
              placeholder="Full Name..."
              onChange={changeUserFieldHandler}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs text-white"
              placeholder="Email..."
              onChange={changeUserFieldHandler}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-900"
            >
              Age
            </label>
            <input
              required
              type="text"
              name="age"
              id="age"
              className="input input-bordered input-primary w-full max-w-xs text-white"
              placeholder="Age..."
              onChange={changeUserFieldHandler}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onSubmitChange}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
