"use client";

import axios from "axios";
import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";

const Page: React.FC = () => {
  // parameter id user
  const {id} = useParams();
  console.log(id);

  // state file value
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    age: "",
  });

  // fetch api user
  const fetchUser = async () => {
    try {
      const result = await axios.get("http://localhost:3001/get/" + id);
      console.log(result.data);
      setUserField(result.data);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  // hander value form
  const changeUserFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    console.log(userField);
  };

  // handle submit form edit
  const onSubmitChange = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/update/" + id, userField);
      window.location.href = "/";
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Edit Form</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">ID:</label>
          <input type="text" id="id" name="id" value={id} disabled />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Full Name:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs text-white"
            placeholder="Enter Your Full Name"
            name="name"
            value={userField.name}
            onChange={changeUserFieldHandler}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Email:
          </label>
          <input
            type="email"
            className="input input-bordered input-primary w-full max-w-xs text-white"
            id="email"
            placeholder="Enter email"
            name="email"
            value={userField.email}
            onChange={changeUserFieldHandler}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Age:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs text-white"
            id="age"
            placeholder="Enter age"
            name="age"
            value={userField.age}
            onChange={changeUserFieldHandler}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onSubmitChange}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Page;
