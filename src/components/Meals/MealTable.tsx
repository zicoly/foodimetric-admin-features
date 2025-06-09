import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import type { Meal } from "../../types";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditMealModal from "./EditMealModal";

interface Props {
  meals: Meal[];
  setMeals: (m: Meal[]) => void;
}

const MealTable = ({ meals, setMeals }: Props) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Meal | null>(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 13;

  const filtered = meals.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );
  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const cursor = (enabled: boolean) =>
    enabled ? "cursor-pointer" : "cursor-not-allowed opacity-50";

  return (
    <div className="bg-white shadow rounded-xl p-4 space-y-4 overflow-x-auto">
      <input
        type="text"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-100 font-medium border-b hidden md:table-header-group">
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Category</th>
            <th className="py-2">Status</th>
            <th className="py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((meal) => (
            <tr
              key={meal.id}
              className="border-b hover:bg-slate-50 md:table-row block"
            >
              <td className="py-2 md:table-cell block">
                <span className="font-semibold md:hidden">Name: </span>
                {meal.name}
              </td>
              <td className="py-2 md:table-cell block">
                <span className="font-semibold md:hidden">Category: </span>
                {meal.category}
              </td>
              <td className="py-2 md:table-cell block">
                <span className="font-semibold md:hidden">Status: </span>
                {meal.status}
              </td>
              <td className="py-2 md:table-cell block">
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setSelected(meal);
                      setShowEdit(true);
                    }}
                    className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => {
                      setSelected(meal);
                      setShowDelete(true);
                    }}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

        {filtered.length === 0 && (
          <tfoot>
            <tr>
              <td colSpan={4} className="text-center text-gray-500 py-6">
                No meals match your search.
              </td>
            </tr>
          </tfoot>
        )}
      </table>

      <div className="flex justify-between items-center text-sm mt-2">
        <span>
          Page {page} of {totalPages}
        </span>
        <div className="space-x-2">
          <button
            onClick={() => page > 1 && setPage(page - 1)}
            className={
              cursor(page > 1) +
              " px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-md"
            }
            disabled={page <= 1}
          >
            Prev
          </button>
          <button
            onClick={() => page < totalPages && setPage(page + 1)}
            className={
              cursor(page < totalPages) +
              " px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-md"
            }
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {showEdit && selected && (
        <EditMealModal
          meal={selected}
          onClose={() => setShowEdit(false)}
          onSave={(updated) => {
            setMeals(meals.map((m) => (m.id === updated.id ? updated : m)));
            setShowEdit(false);
          }}
        />
      )}
      {showDelete && selected && (
        <DeleteConfirmationModal
          meal={selected}
          onClose={() => setShowDelete(false)}
          onConfirm={() => {
            const nm = meals.filter((m) => m.id !== selected.id);
            setMeals(nm);
            setShowDelete(false);
          }}
        />
      )}
    </div>
  );
};

export default MealTable;
