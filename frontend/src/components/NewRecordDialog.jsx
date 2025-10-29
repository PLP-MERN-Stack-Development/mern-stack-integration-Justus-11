import React, { useState } from "react";

const NewRecordDialog = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ title: "", content: "", userId: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Title is required");
    onSubmit(form);
    setForm({ title: "", content: "", userId: "" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open dialog */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
      >
        + New Record
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Add New Record</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter record title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter record details"
                  rows={3}
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">User ID (optional)</label>
                <input
                  type="text"
                  name="userId"
                  value={form.userId}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter user ID if available"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewRecordDialog;
