interface HabitDayProps {
  disabled?: boolean;
}

export function HabitDay({ disabled }: HabitDayProps) {
  return (
    <div
      className={`w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      }`}
    ></div>
  );
}
