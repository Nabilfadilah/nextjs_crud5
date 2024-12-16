"use client";

import axios from "axios";
import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";

// Definisi tipe daata untuk user
interface User {
  _id: string;
  name: string;
  email: string;
  age: string;
}

const page = () => {
  const {id} = useParams();

  console.log(id);

  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://localhost:3001/get/" + id);
      console.log(result.data);
      setUser(result.data);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">View User</h1>
      <table className="table table-zebra">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
          <tr>
            <th>ID User</th>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user ? (
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default page;
