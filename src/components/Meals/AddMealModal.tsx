import { useState } from "react";
import type { Meal } from "../../types";

interface Props {
  onClose: () => void;
  onAdd: (meal: Meal) => void;
  existingIds: number[];
}

const AddMealModal = ({ onClose, onAdd, existingIds }: Props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState<"Visible" | "Hidden">("Visible");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Math.max(0, ...existingIds) + 1;
    onAdd({ id, name, category, status });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h3 className="text-lg font-semibold">Add New Meal</h3>
        <input
          className="w-full p-2 border rounded"
          placeholder="Meal Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Category (e.g., Breakfast)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <select
          className="w-full p-2 border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value as "Visible" | "Hidden")}
        >
          <option value="Visible">Visible</option>
          <option value="Hidden">Hidden</option>
        </select>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMealModal;
