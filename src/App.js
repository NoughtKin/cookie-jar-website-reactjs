function FilterableCard() {
  return (
    <div>
      <FormInput />
      <SearchBar />
      <Card />
    </div>
  );
}

function FormInput() {
  return (
    <div>
      <h1>Cookie Jar</h1>
      <p>
        Write down your experiences that you've achieved or overcome as
        "cookies".
      </p>
      <form>
        <form>
          <label>Title:</label>
          <br />
          <input />
          <br />
          <br />
          <label>Description:</label>
          <br />
          <textarea></textarea>
          <br />
          <br />
          <button>Add Cookie</button>
        </form>
        <hr />
      </form>
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <hr />
      <p>Reach for them in time of need.</p>
      <div>
        <label>Search:</label>
        <input />
        <button>Search</button>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div>
      <div className="card-output"></div>
      <div className="card-example"></div>
    </div>
  );
}
export default function App() {
  return <FilterableCard />;
}
