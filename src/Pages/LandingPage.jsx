import React, { useState } from "react";
import Header from "../components/Header";
import SearchComponent from "../components/SearchComponent";
import Table from "../components/Table";
import data from "../assets/data.json";

function LandingPage() {
  const [searchCriteria, setSearchCriteria] = useState({
    clinic: "",
    city: "",
    zip: "",
  });
  const [filteredData, setFilteredData] = useState(data);
  //handle search
  const handleSearch = () => {
    const filtered = data.filter((item) => {
      return (
        item.clinicName.includes(searchCriteria.clinic) &&
        item.city.includes(searchCriteria.city) &&
        item.zip.includes(searchCriteria.zip)
      );
    });
    setFilteredData(filtered);
  };
  //handle reset
  const handleReset = () => {
    setSearchCriteria({
      clinic: "",
      city: "",
      zip: "",
    });
    setFilteredData(data);
  };

  return (
    <div className="">
      <Header />
      <div className="flex flex-col px-4 max-h-[90vh] md:flex-row">
        <SearchComponent
          searchCriteria={searchCriteria}
          setSearchCriteria={setSearchCriteria}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
        <Table data={filteredData} />
      </div>
    </div>
  );
}

export default LandingPage;
