import { useEffect, useState } from "react";
import { FormInput } from "./FormInput";

export default function App() {
  const [cards, setCards] = useState(() => {
    const localItemValue = localStorage.getItem("TITLE");
    if (localItemValue == null) return [];

    const localDescriptionValue = localStorage.getItem("DESCRIPTION");
    if (localDescriptionValue == null) return [];

    return JSON.parse(localItemValue), JSON.parse(localDescriptionValue);
  });

  useEffect(() => {
    localStorage.setItem("TITLE", JSON.stringify(cards));
    localStorage.setItem("DESCRIPTION", JSON.stringify(cards));
  }, [cards]);

  const [search, setSearch] = useState("");

  function addCard(title, description) {
    setCards((currentCard) => {
      return [
        ...currentCard,
        {
          title: title,
          description: description,
          date: new Date().toLocaleString(),
        },
      ];
    });
  }

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
      <FormInput addCard={addCard} />
      <hr />
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
