import React, { useEffect, useState } from "react";
import axios from "axios";
import NewRecordDialog from "../components/NewRecordDialog";
import RecordCard from "../components/RecordCard";

const API_BASE = "http://localhost:5000/api/record";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🟢 Fetch all records
  const fetchRecords = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_BASE);
      setRecords(res.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🟢 Add new record
  const addRecord = async (record) => {
    try {
      await axios.post(API_BASE, record);
      fetchRecords(); // Refresh after adding
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  // 🟡 Update record
  const updateRecord = async (id, updatedData) => {
    try {
      await axios.put(`${API_BASE}/${id}`, updatedData);
      fetchRecords(); // Refresh after update
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  // 🔴 Delete record
  const deleteRecord = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setRecords((prev) => prev.filter((r) => r._id !== id)); // Optimistic update
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Hospital Records</h2>
        <NewRecordDialog onSubmit={addRecord} />
      </div>

      {loading ? (
        <p className="text-gray-500">Loading records...</p>
      ) : records.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {records.map((record) => (
            <RecordCard
              key={record._id}
              record={record}
              onDelete={() => deleteRecord(record._id)}
              onUpdate={updateRecord}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No records found.</p>
      )}
    </div>
  );
};

export default Dashboard;
