import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateWarehouse } from "../redux/warehouseSlice";

const WarehouseDetailsPage = () => {
  const { id } = useParams();
  const warehouse = useSelector((state) =>
    state.warehouses.warehouses.find((w) => w.id === parseInt(id))
  );
  const dispatch = useDispatch();

  const [editData, setEditData] = useState({ ...warehouse });

  const handleEdit = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const handleSave = () => {
    dispatch(updateWarehouse(editData));
  };

  if (!warehouse) return <p>Warehouse not found</p>;

  return (
    <div className="details">
      <h1>{warehouse.name}</h1>
      <div className="form">
        <label>Warehouse Name:</label>
        <input
          value={editData.name}
          onChange={(e) => handleEdit("name", e.target.value)}
        />
      </div>
      <div className="form">
        <label>City:</label>
        <input
          value={editData.city}
          onChange={(e) => handleEdit("city", e.target.value)}
        />
      </div>
      <div className="form">
        <label>Cluster:</label>
        <input
          value={editData.cluster}
          onChange={(e) => handleEdit("cluster", e.target.value)}
        />
      </div>
      <div className="form">
        <label>Space Available:</label>
        <input
          type="number"
          value={editData.space_available}
          onChange={(e) => handleEdit("space_available", e.target.value)}
        />
      </div>
      <div className="form">
        <label>Live Status:</label>
        <input
          type="checkbox"
          checked={editData.is_live}
          onChange={(e) => handleEdit("is_live", e.target.checked)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default WarehouseDetailsPage;
