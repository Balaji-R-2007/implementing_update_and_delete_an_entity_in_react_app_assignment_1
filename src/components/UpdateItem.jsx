
import { useState } from "react";

const UpdateItem = ({ item }) => {
  const [updatedValue, setUpdatedValue] = useState(item ? item.name : "");

  const handleChange = (e) => {
    setUpdatedValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://${import.meta.env.VITE_API_URI}/doors/${item.id}`, {
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: updatedValue }),
      });

      if (!response.ok) {
        throw new Error("Failed to update item");
      }

      const updatedItem = await response.json();
      alert(`Updated successfully: ${updatedItem.name}`);
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Update failed!");
    }
  };

  return (
    <div>
      <h2>Update Door</h2>
      <p>Current Name: {item.name}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={updatedValue} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateItem;