import React, { useState, useEffect } from "react";
import Table from "./components/Table";

function App() {
  const [colleges, setColleges] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleRows, setVisibleRows] = useState(10);

  // Function to fetch data from JSON file
  const fetchData = async () => {
    try {
      const response = await fetch("Colleges.json");
      const data = await response.json();
      setColleges(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to sort colleges based on the selected criteria
  const sortColleges = (criteria) => {
    let sortedColleges = [...colleges];
    sortedColleges.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    setSortBy(criteria);
    setColleges(sortedColleges);
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to load more rows (infinite scroll)
  const loadMoreRows = () => {
    setVisibleRows(visibleRows + 10);
  };

  return (
    <div>
      <input
        className="searchTerm"
        type="text"
        placeholder="Search by college name"
        onChange={handleSearch}
      />
      <Table
        colleges={colleges.filter((college) =>
          college.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        sortBy={sortBy}
        sortColleges={sortColleges}
        visibleRows={visibleRows}
        loadMoreRows={loadMoreRows}
      />
    </div>
  );
}

export default App;
