import { useEffect, useState } from "react";
import MealSkeleton from "../components/Meals/MealSkeleton";
import MealTable from "../components/Meals/MealTable";
import AddMealModal from "../components/Meals/AddMealModal";
import type { Meal } from "../types";

const LOCAL_KEY = "meals_data";

const Meals = () => {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) setMeals(JSON.parse(stored));
    else {
        const initial: Meal[] = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          name: `Sample Meal ${i + 1}`,
          category: i % 2 === 0 ? "Lunch" : "Breakfast",
          status: i % 3 === 0 ? "Hidden" : "Visible",
        }));
      setMeals(initial);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(initial));
    }
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const saveMeals = (newMeals: Meal[]) => {
    setMeals(newMeals);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newMeals));
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-start mb-4 gap-4">
        <h2 className="lg:text-2xl text-xl text-[#147e03] font-[cursive] font-bold whitespace-nowrap">
          Meal Management
        </h2>
        <button
          onClick={() => setShowAdd(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition cursor-pointer lg:w-auto w-full"
        >
          + Add Meal
        </button>
      </div>

      {loading ? (
        <MealSkeleton />
      ) : (
        <MealTable meals={meals} setMeals={saveMeals} />
      )}

      {showAdd && (
        <AddMealModal
          existingIds={meals.map((m) => m.id)}
          onAdd={(m) => {
            const next = [...meals, m];
            saveMeals(next);
            setShowAdd(false);
          }}
          onClose={() => setShowAdd(false)}
        />
      )}
    </div>
  );
};

export default Meals;
