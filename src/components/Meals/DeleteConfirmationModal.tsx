import type { Meal } from "../../types";

interface Props {
  meal: Meal;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal = ({ meal, onClose, onConfirm }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white max-w-sm p-6 rounded-xl shadow-md text-center">
        <p className="mb-4">
          Are you sure you want to delete <strong>{meal.name}</strong>?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
