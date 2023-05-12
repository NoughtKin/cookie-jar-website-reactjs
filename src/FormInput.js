import { useState } from "react";

export function FormInput({ addCardOutput }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    addCardOutput(title, description);

    setTitle("");
    setDescription("");
  };

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
          onChange={(event) => setTitle(event.target.value)}
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
          onChange={(event) => setDescription(event.target.value)}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit" className="btn">
          Add Cookie
        </button>
      </form>
    </div>
  );
}
