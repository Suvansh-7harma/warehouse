import React from "react";
import "../App.css";
const WarehouseFilters = ({ setFilters }) => {
  return (
    <div className="filter-section">
      <div className="City">
        <label>City:</label>
        <select
          onChange={(e) =>
            setFilters((filters) => ({ ...filters, city: e.target.value }))
          }
        >
          <option value="">All</option>
          <option value="Delhi">Delhi</option>
          <option value="Chennai">Chennai</option>
          <option value="Indore">Indore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Guwahati">Guwahati</option>
        </select>
      </div>
      <div className="Cluster">
        <label>Cluster:</label>
        <select
          onChange={(e) =>
            setFilters((filters) => ({ ...filters, cluster: e.target.value }))
          }
        >
          <option value="">All</option>
          <option value="cluster-a-1">cluster-a-1</option>
          <option value="cluster-a-2">cluster-a-2</option>
          <option value="cluster-a-21">cluster-a-21</option>
          <option value="cluster-a-32">cluster-a-32</option>
          <option value="cluster-v-2">cluster-v-2</option>
        </select>
      </div>
      <div className="space">
        <label>Space Available:</label>
        <input
          type="number"
          placeholder="Enter max space"
          onChange={(e) =>
            setFilters((filters) => ({
              ...filters,
              spaceAvailable: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default WarehouseFilters;
