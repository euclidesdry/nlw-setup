interface HabitProps {
  completed: number;
}

export function Habit({ completed }: HabitProps) {
  return <p className="habit">{completed}</p>;
}
