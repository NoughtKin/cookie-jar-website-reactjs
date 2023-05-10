import React, { useState } from "react";

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
      <h1>Cookie Jar</h1>
      <p>
        Write down your experiences that you've achieved or overcome as
        "cookies".
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <br />
        <br />
        <label>Description:</label>
        <br />
        <textarea
          name="description"
          rows="5"
          value={description}
          onChange={handleDescriptionChange}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit" className="btn">
          Add Cookie
        </button>
      </form>
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
