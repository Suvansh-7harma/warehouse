import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const WarehouseList = ({ warehouses }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const warehousesPerPage = 5; // Adjust the number of warehouses to display per page

  // Filtering logic based on search
  const filteredWarehouses = warehouses.filter((warehouse) => {
    return warehouse.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredWarehouses.length / warehousesPerPage);

  // Get current page warehouses
  const indexOfLastWarehouse = currentPage * warehousesPerPage;
  const indexOfFirstWarehouse = indexOfLastWarehouse - warehousesPerPage;
  const currentWarehouses = filteredWarehouses.slice(
    indexOfFirstWarehouse,
    indexOfLastWarehouse
  );

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="warehouse-list-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by warehouse name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="warehouse-list">
        <div className="list-heading">
          <h2>Warehouse List</h2>
        </div>
        <div className="lists">
          <ul>
            {currentWarehouses.map((warehouse) => (
              <li key={warehouse.id}>
                <Link to={`/warehouse/${warehouse.id}`}>
                  {warehouse.name} - {warehouse.city} -{" "}
                  {warehouse.space_available} sq ft
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default WarehouseList;
