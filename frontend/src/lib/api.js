import axios from "axios";

const API_URL = "http://localhost:5000/api/record";

export const api = {
  getRecords: async () => {
    const res = await axios.get(API_URL);
    return res.data;
  },
  createRecord: async (data) => {
    const res = await axios.post(API_URL, data);
    return res.data;
  },
  updateRecord: async (id, data) => {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data;
  },
  deleteRecord: async (id) => {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  },
};
