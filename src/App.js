import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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

  function addCardOutput(title, description) {
    setCards((currentCard) => {
      return [
        {
          title: title,
          description: description,
          date: new Date().toLocaleString(),
        },
        ...currentCard,
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
      <Helmet>
        <title>Cookie Jar Memo</title>
        <meta name="viewport" content="with=device-width, initial-scale=1.0" />
      </Helmet>
      <FormInput addCardOutput={addCardOutput} />
      <hr />
      <SearchBar handleSearch={handleSearch} />
      <Card filteredCards={filteredCards}></Card>
      <div className="card">
        {cardExample["cardExample"].map((card) => (
          <div key={crypto.randomUUID()}>
            <div className="card-title">{card.title}</div>
            <div className="card-description">{card.description}</div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
