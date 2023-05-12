import { CardOutput } from "./CardOutput";

export function Card({ filteredCards }) {
  return (
    <div>
      <CardOutput filteredCards={filteredCards}></CardOutput>
    </div>
  );
}
