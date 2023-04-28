import * as React from "react";
// import cardExample from "./markup.json";

export default function FilterableCard() {
  const [title, setTitle] = React.useState("");
  // const [description, setDescription] = useState("");
  const [card, setCard] = React.useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // const handleDescriptionChange = (event) => {
  //   setDescription(event.target.value);
  // };

  const handleClick = (event) => {
    event.preventDefault();

    const nextCard = {
      title: title,
      description: "a",
      date: new Date().toLocaleString(),
    };

    setCard([...card, nextCard]);
    setTitle("");
  };

  return (
    <div>
      <FormInput
        onSubmitClick={() => handleClick}
        titleChange={() => handleTitleChange}
      />
      <SearchBar />
      {/* <CardOutput /> */}
      <CardExample
        title="Graduated with honors"
        description="Graduated from college with a 3.8 GPA"
      />
    </div>
  );
}

function FormInput({ onSubmitClick, titleChange }) {
  return (
    <div className="form-input">
      <h1>Cookie Jar</h1>
      <p>
        Write down your experiences that you've achieved or overcome as
        "cookies".
      </p>
      <form onClick={onSubmitClick}>
        <br />
        <label>Title:</label>
        <br />
        <input onChange={titleChange} />
        <br />
        <br />
        <label>Description:</label>
        <br />
        <textarea></textarea>
        <br />
        <br />
        <button className="btn">Add Cookie</button>
      </form>
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <br />
      <hr />
      <br />
      <p>Reach for them in time of need.</p>
      <div className="search-bar">
        <label>Search:</label>
        <input className="search-input" />
        <button className="btn">Search</button>
      </div>
    </div>
  );
}

// function CardOutput() {
//   return (
//   );
// }

function CardExample({ title, description }) {
  return (
    <div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
}

// export default function App() {
//   return <FilterableCard />;
// }
