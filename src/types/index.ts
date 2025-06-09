export interface StatCard {
  label: string;
  value: number | string;
}

export interface SignupData {
  month: string;
  count: number;
}

export interface MealDistribution {
  type: string;
  value: number;
}

export interface Meal {
  id: number;
  name: string;
  category: string;
  status: "Visible" | "Hidden";
}
