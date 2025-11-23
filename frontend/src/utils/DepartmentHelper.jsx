export const columns = [
    {
        name: "S NO",
        selector: (row) => row.sno
    },
    {
        name: "Department name",
        selector: (row) => row.dep_name
    },
    {
        name: "Action",
        selector: (row) => row.action
    },
]

export const DepartmentButtons = () => {
    return (
        <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-teal-600 text-white font-medium shadow-md hover:bg-teal-700 hover:shadow-lg active:scale-95 transition">
                Edit
            </button>
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium shadow-md hover:bg-red-700 hover:shadow-lg active:scale-95 transition">
                Delete
            </button>
        </div>
    );
};

