import { useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { SearchBar } from "./SearchBar";
import { Card } from "./Card";
import cardExample from "./card-example.json";

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

  const [search, setSearch] = useState("");

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
      <SearchBar handleSearch={handleSearch} />
      <Card filteredCards={filteredCards}></Card>
      <div className="card">
        {cardExample["cardExample"].map((card, index) => (
          <div key={index}>
            <div className="card-title">{card.title}</div>
            <div className="card-description">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
