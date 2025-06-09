import { useEffect, useState } from "react";
import { mockUsers, type User } from "../../types/dummyUsers";

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const filtered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="mt-8 bg-white shadow-lg rounded-xl p-4">
      <h3 className="text-lg font-[cursive] font-bold text-[#147e03] mb-4">
        User Accounts
      </h3>
      <input
        type="text"
        placeholder="Search user by name or email..."
        className="w-full mb-4 p-2 border rounded-md"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-sm text-left">
          <thead className="bg-gray-100 border-b font-medium">
            <tr>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Credit</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Created At</th>
              <th className="py-2 px-3">Last Login</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length > 0 ? (
              paginated.map((user) => (
                <tr key={user.id} className="border-b hover:bg-slate-50">
                  <td className="py-2 px-3">{user.name}</td>
                  <td className="py-2 px-3">{user.email}</td>
                  <td className="py-2 px-3">{user.credit.toFixed(2)}</td>
                  <td
                    className={`py-2 px-3 font-medium ${
                      user.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="py-2 px-3">{user.createdAt}</td>
                  <td className="py-2 px-3">{user.lastLogin}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span>
          Page {currentPage} of {totalPages || 1}
        </span>
        <div className="space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-slate-200 hover:bg-slate-300"
            }`}
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages || 1))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-slate-200 hover:bg-slate-300"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
