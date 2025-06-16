import { useMemo } from "react";
import type { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  const consumedCalories = useMemo(() => {
    return activities.reduce((total, activity) => {
      if (activity.category === 1) {
        return total + (activity.calories || 0);
      }
      return total;
    }, 0);
  }, [activities]);

  const burnedCalories = useMemo(() => {
    return activities.reduce((total, activity) => {
      if (activity.category === 2) {
        return total + (activity.calories || 0);
      }
      return total;
    }, 0);
  }, [activities]);

  const netCalories = useMemo(
    () => consumedCalories - burnedCalories,
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={consumedCalories} text="Consumidas" />
        <CalorieDisplay calories={burnedCalories} text="Quemadas" />
        <CalorieDisplay calories={netCalories} text="Diferencia" />
      </div>
    </>
  );
}
