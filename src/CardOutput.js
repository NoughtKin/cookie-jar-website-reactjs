export function CardOutput({ filteredCards }) {
  return (
    <div className="card">
      {filteredCards.map((cookie, index) => (
        <div key={index}>
          <div className="card-title">{cookie.title}</div>
          <div className="card-description">{cookie.description}</div>
          <div className="card-date">{cookie.date}</div>
        </div>
      ))}
    </div>
  );
}
