import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "../Redux/Tasks";
import { useState } from "react";

function Body() {
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.tasks);
    const [task, setTask] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddClick = () => {
        dispatch(addTask(task));
        setTask("");
    };

    const handleEditIndex = (index) => {
        setEditIndex(index);
        setTask(tasks[index]);
        setIsEdit(true);
    };

    const handleEditClick = () => {
        dispatch(editTask({ index: editIndex, task }));
        setIsEdit(false);
        setEditIndex(null);
        setTask("");
    };

    return (
        <div className="p-5 bg-white shadow-md rounded-lg w-[90vw] sm:w-[50vw] mx-auto mt-5 h-[75vh] overflow-y-auto">
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add your task here"
                className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={task !== "" ? (isEdit ? handleEditClick : handleAddClick) : () => alert("Add something into your list")}
                className={`w-full py-3 rounded-lg text-white font-semibold ${isEdit ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} transition duration-200`}
            >
                {isEdit ? "Save" : "Add"}
            </button>
            <ol className="list-decimal mt-4">
                {tasks.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border-b py-2">
                        <span className="text-gray-800">{item}</span>
                        <div>
                            <button
                                onClick={() => handleEditIndex(index)}
                                className="text-yellow-500 hover:text-yellow-600 mr-2 transition duration-200"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch(deleteTask(index))}
                                className="text-red-500 hover:text-red-600 transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Body;
