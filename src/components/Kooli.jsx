import React, { useContext } from "react";
import { AppContext } from "./Context";
import { FaTrash } from "react-icons/fa"; // Importing trash icon

const Kooli = () => {
  const {
    name,
    setName,
    amount,
    setAmount,
    type,
    setType,
    days,
    setDays,
    koolis,
    setKoolis,
  } = useContext(AppContext);

  // Calculate total amount
  const totalAmount = koolis.reduce((acc, kooli) => acc + parseInt(kooli.amount) * parseInt(kooli.days), 0);

  const addKoolis = () => {
    if (!name || !amount || !type || !days) {
      alert("All fields are required!");
      return;
    }
    const newKooli = {
      name: name,
      amount: amount,
      type: type,
      days: days,
      completed: false, // Adding a completed flag
      id: Date.now(), // Unique ID for each Kooli
    };
    setKoolis([...koolis, newKooli]);
    setName(""); // Reset form fields
    setAmount("");
    setType("");
    setDays("");
  };

  // Mark Kooli as completed
  const toggleComplete = (id) => {
    const updatedKoolis = koolis.map((kooli) =>
      kooli.id === id ? { ...kooli, completed: !kooli.completed } : kooli
    );
    setKoolis(updatedKoolis);
  };

  // Delete Kooli
  const deleteKooli = (id) => {
    const updatedKoolis = koolis.filter((kooli) => kooli.id !== id);
    setKoolis(updatedKoolis);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-center font-bold text-3xl mb-10 text-gray-800">
        KOOLI SLIPS
      </h1>
      {/* Total Amount */}
      <div className="text-center font-bold text-xl mb-5 text-gray-800">
        Total Amount: {totalAmount}
      </div>
      {/* Form Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Kooli Type"
          value={type}
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Days"
          value={days}
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setDays(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-6 py-2 w-full sm:w-auto rounded-md font-bold hover:bg-blue-700 transition-all"
          onClick={addKoolis}
        >
          Add
        </button>
      </div>
      {/* Kooli Slips List */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Kooli Slips List
        </h2>
        {koolis.length > 0 ? (
          <>
            {/* Header Row */}
            <div className="hidden sm:grid grid-cols-6 gap-4 bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold text-gray-600">Name</h3>
              <h3 className="font-bold text-gray-600">Amount</h3>
              <h3 className="font-bold text-gray-600">Type</h3>
              <h3 className="font-bold text-gray-600">Days</h3>
              <h3 className="font-bold text-gray-600">Total</h3>
              <h3 className="font-bold text-gray-600">Action</h3>
            </div>
            {/* Data Rows */}
            <div className="mt-4 divide-y divide-gray-200">
              {koolis.map((E, index) => (
                <div
                  key={E.id}
                  className="grid grid-cols-1 sm:grid-cols-6 gap-4 py-2 text-gray-700"
                >
                  {/* Name */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={E.completed}
                      onChange={() => toggleComplete(E.id)}
                      className="h-5 w-5"
                    />
                    <h4
                      className={`font-medium ${
                        E.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {E.name}
                    </h4>
                  </div>
                  {/* Amount */}
                  <h4
                    className={`font-medium ${
                      E.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {E.amount}
                  </h4>
                  {/* Type */}
                  <h4
                    className={`font-medium ${
                      E.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {E.type}
                  </h4>
                  {/* Days */}
                  <h4
                    className={`font-medium ${
                      E.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {E.days}
                  </h4>
                  {/* Total */}
                  <h4
                    className={`font-medium ${
                      E.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {parseInt(E.amount) * parseInt(E.days)}
                  </h4>
                  {/* Actions (Delete & Image) */}
                  <div className="flex items-center gap-2">
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => deleteKooli(E.id)}
                    >
                      <FaTrash size={20} />
                    </button>
                    {E.completed && (
                      <img
                        src="https://thumbs.dreamstime.com/b/completed-sign-sticker-stamp-vector-texture-171675116.jpg"
                        alt="Completed"
                        className="w-20 h-10"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">No Kooli Slips added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Kooli;
