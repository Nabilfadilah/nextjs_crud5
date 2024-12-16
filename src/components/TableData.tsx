"use client";

import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";

// Definisikan tipe data untuk user
interface User {
  _id: string;
  name: string;
  email: string;
  age: string;
}

const TableData = () => {
  // state menyimpan data user
  const [userData, setUserData] = useState<User[]>([]);

  // fetch data api user
  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:3001");
      console.log("Data user all : ", result.data);
      setUserData(result.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <table className="table-fixed">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">No.</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Age</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((rs, index) => (
          <tr key={index} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}.</td>
            <td className="py-3 px-6">{rs.name}</td>
            <td className="py-3 px-6">{rs.email}</td>
            <td className="py-3 px-6">{rs.age}</td>
            <td className="flex justify-center gap-1 py-3">
              <Link href={`/user/view/${rs._id}`} className="btn btn-info">
                View
              </Link>
              <Link href={`/user/edit/${rs._id}`} className="btn btn-primary">
                Edit
              </Link>
              <button className="btn btn-secondary">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
