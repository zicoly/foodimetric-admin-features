const DashboardSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-24 bg-gray-200 animate-pulse rounded-md"
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="h-64 bg-gray-200 animate-pulse rounded-md" />
        <div className="h-64 bg-gray-200 animate-pulse rounded-md" />
      </div>
        <div className="h-64 bg-gray-200 animate-pulse rounded-md" />
    </div>
  );
};

export default DashboardSkeleton;
