import "./Loader.css";

const Loader = () => {
  const rowsPerColumn = [4, 3, 2, 1];

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center bg-slate-100">
      <div className="flex gap-3">
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className="flex flex-col gap-2">
            {Array.from({ length: rowsPerColumn[col] }).map((_, row) => (
              <span
                key={row}
                className="block w-6 h-3 rounded-full animate-pulse-bar"
                style={{ animationDelay: `${col * 150 + row * 100}ms` }}
                data-row={row}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
