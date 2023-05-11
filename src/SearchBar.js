import { useState } from "react";

export function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <div>
      <p>Reach for them in time of need.</p>
      <div className="search-bar">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          placeholder="Enter keywords"
          className="search-input"
        />
        <button className="btn">Search</button>
      </div>
    </div>
  );
}
