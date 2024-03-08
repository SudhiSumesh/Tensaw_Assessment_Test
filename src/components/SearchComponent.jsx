import React, { useState } from "react";

const SearchComponent = ({
  searchCriteria,
  setSearchCriteria,
  handleSearch,
  handleReset,
}) => {
  //handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  return (
    <div className="md:-ms-3 mt-6 md:mt-0">
      <div className="mb-6 sm:py-12">
        <div className="mx-auto min-w-[300px] px-6 py-12 bg-white border-0 shadow-md sm:shadow-lg ">
          <h1 className="text-2xl font-bold mb-6">Contacts</h1>
          <form>
            <div className="relative z-0 w-full mb-5">
              <label htmlFor="clinic" className="hidden">
                Clinic
              </label>
              <input
                type="text"
                name="clinic"
                value={searchCriteria.clinic}
                onChange={handleChange}
                placeholder="Clinic"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
           
            </div>
            <div className="relative z-0 w-full mb-5">
              <label htmlFor="city" className="hidden">
                City
              </label>
              <input
                name="city"
                value={searchCriteria.city}
                onChange={handleChange}
                placeholder="City"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
           
            </div>
            <div className="relative z-0 w-full mb-5">
              <label htmlFor="zip" className="hidden">
                Zip
              </label>
              <input
                name="zip"
                value={searchCriteria.zip}
                onChange={handleChange}
                placeholder="Zip"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            
            </div>
            <button
              type="button"
              onClick={() => handleSearch()}
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-[#ec7640] hover:bg-[#ed530b] hover:shadow-lg focus:outline-none"
            >
              SEARCH
            </button>
            <button
              type="button"
              onClick={() => handleReset()}
              className="w-full  px-6 py-3 mt-3 text-lg text-[#ec7640] transition-all duration-150 ease-linear rounded-lg shadow outline-none border border-[#ec7640]  hover:shadow-lg focus:outline-none"
            >
              RESET
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
