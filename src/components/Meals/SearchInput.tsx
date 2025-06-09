interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search meals..."
      className="w-full max-w-sm px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default SearchInput;
