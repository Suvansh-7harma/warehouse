import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWarehouses } from "../redux/warehouseSlice";
import WarehouseList from "../components/WarehouseList";
import WarehouseFilters from "../components/WarehouseFilters";
import "../App.css";

const WarehouseListPage = () => {
  const dispatch = useDispatch();
  const { warehouses, loading } = useSelector((state) => state.warehouses);
  const [filters, setFilters] = useState({
    city: "",
    cluster: "",
    spaceAvailable: "",
  });

  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  const filteredWarehouses = warehouses.filter((warehouse) => {
    return (
      (filters.city ? warehouse.city === filters.city : true) &&
      (filters.cluster ? warehouse.cluster === filters.cluster : true) &&
      (filters.spaceAvailable
        ? warehouse.space_available <= parseInt(filters.spaceAvailable)
        : true)
    );
  });

  return (
    <div className="warehouse">
      <div className="heading-wrapper">
        <div className="heading">
          <h1>Warehouses</h1>
        </div>
      </div>
      <div className="filter-list-wrapper">
        <div className="filter-list-component">
          <div className="filter-component">
            <WarehouseFilters setFilters={setFilters} />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="warehouseList-component">
            <WarehouseList warehouses={filteredWarehouses} /></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WarehouseListPage;
