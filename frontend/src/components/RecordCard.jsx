import React, { useState } from "react";

const RecordCard = ({ record, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: record.title,
    content: record.content,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(record._id, form);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            rows={3}
          />
          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold">{record.title}</h3>
          <p className="text-gray-700 mt-2">{record.content}</p>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>{new Date(record.createdAt).toLocaleString()}</span>
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Edit
              </button>
              <button
                onClick={onDelete}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecordCard;
