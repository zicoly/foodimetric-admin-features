import { useState } from "react";
import type { Meal } from "../../types";

interface Props {
  meal: Meal;
  onClose: () => void;
  onSave: (meal: Meal) => void;
}

const EditMealModal = ({ meal, onClose, onSave }: Props) => {
  const [form, setForm] = useState(meal);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-bold">Edit Meal</h2>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Meal Name"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Category"
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Visible">Visible</option>
          <option value="Hidden">Hidden</option>
        </select>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(form);
              onClose();
            }}
            className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMealModal;
