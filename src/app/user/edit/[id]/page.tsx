import React from "react";

const page = () => {
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Edit Form</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            {" "}
            Full Name:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Enter Your Full Name"
            name="name"
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Email:
          </label>
          <input
            type="email"
            className="input input-bordered input-primary w-full max-w-xs"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Age:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            id="age"
            placeholder="Enter age"
            name="age"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default page;
