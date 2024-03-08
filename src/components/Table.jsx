import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Table({ data }) {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setDetails(data)
  },[data]);
  const navigate = useNavigate();
  const HandleClick = (rowData) => {
    // Navigate to the details page and pass the rowData as state
    navigate("/profile-details", { state: { details: rowData } });
  };
  return (
    <div className="relative ms-1   no-scrollbar overflow-auto md:shadow-md  md:mt-[3rem] ">
      <table className="w-full  text-sm text-left  text-gray-500">
        <thead className="text-xs  text-[#2c2a2a] uppercase sticky top-0 bg-[#ebe8e8] ">
          <tr>
            <th scope="col" className="px-6  py-5">
              Clinic
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>

            <th scope="col" className="px-6 py-3">
              Zip
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Pysician
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className=" py-3">
              Created Date
            </th>
          </tr>
        </thead>
        <tbody>
          {details?.map((data) => (
            <tr
              className=" border-b cursor-pointer "
              key={data.clinicId}
              onClick={() => HandleClick(data)}
            >
              <td
                scope="row"
                className="px-6 min-w-[300px] py-4 font-medium text-gray-900 whitespace-wrap"
              >
                <span className="w-1/2">{data.clinicName}</span>
              </td>
              <td className="px-6 py-4 "> {data.address}</td>
              <td className="px-6 py-4"> {data.city}</td>
              <td className="px-6 py-4"> {data.zip}</td>
              <td className="px-6 py-4 min-w-[180px]">{data.phone}</td>
              <td className="px-6 py-4"> {data.pysicianName}</td>
              <td className="px-6 py-4"> {data.status}</td>
              <td className="px-6 py-4">
                {`${data.createdDate[0]}/${data.createdDate[1]}/${data.createdDate[2]}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* if details not found */}
    { details.length ===0 && <div className="text-center flex w-full text-xl text-[#ec7640] justify-center  items-center mt-12">
        Not Found any data related to your search !
      </div>}
    </div>
  );
}
