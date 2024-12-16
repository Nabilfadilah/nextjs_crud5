import Link from "next/link";
import React from "react";

const TableData = () => {
  return (
    <table className="table table-zebra">
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
        <tr key="" className="bg-white border-b">
          <td className="py-3 px-6">1.</td>
          <td className="py-3 px-6">Nabil ganteng</td>
          <td className="py-3 px-6">nabill@gmail.com</td>
          <td className="py-3 px-6">23</td>
          <td className="flex justify-center gap-1 py-3">
            <Link href={`/user/view/`} className="btn btn-info">
              View
            </Link>
            <Link href={`/user/edit/`} className="btn btn-primary">
              Edit
            </Link>
            <button className="btn btn-secondary">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableData;
