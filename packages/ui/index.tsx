"use client";

export function Button({ label }: { label: string }) {
  return (
    <button
      className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
      onClick={() => alert(`Bạn vừa nhấn: ${label}`)}
    >
      {label}
    </button>
  );
}
