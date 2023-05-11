import React, { useState } from "react";
import { FormInput } from "./FormInput";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      title: title,
      description: description,
      date: new Date().toLocaleString(),
    };

    setCards([...cards, newCard]);
    setTitle("");
    setDescription("");
  };

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(search) ||
      card.description.toLowerCase().includes(search)
  );

  return (
    <div>
      <FormInput />
      <br />
      <hr />
      <br />
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
      <div className="card-output">
        {filteredCards.map((cookie, index) => (
          <div key={index}>
            <div className="card-title">{cookie.title}</div>
            <div className="card-description">{cookie.description}</div>
            <div className="card-date">{cookie.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
