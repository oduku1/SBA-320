import { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";

export default function SearchBar() {
  const { location, setLocation } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState(location);

  const handleSearch = () => {
    setLocation(inputValue);
    setInputValue("")
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter location"
        className="search"
      />
      <button onClick={handleSearch} className="search-btn">Search</button>
    </>
  );
}
