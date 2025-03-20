import { useState, useEffect } from "react";
import UpdateItem from "./components/UpdateItem";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);

  // Fetch the existing door from the API
  useEffect(() => {
    fetch(`${API_URI}/1`) // Replace '1' with the actual ID you want to fetch
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching item:", error));
  }, []);

  return (
    <div>
      <h1>Update Door</h1>
      {item ? <UpdateItem item={item} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;