export function FormInput() {
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
    </div>
  );
}
