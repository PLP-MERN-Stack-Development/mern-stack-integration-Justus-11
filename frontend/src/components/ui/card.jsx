export default function Card({ children }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      {children}
    </div>
  );
}
