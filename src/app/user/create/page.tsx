import React from "react";

const page = () => {
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
              type="text"
              name="name"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Full Name..."
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
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Email..."
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
              type="text"
              name="age"
              id="age"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Age..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
