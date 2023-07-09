import "./Card.css";
export default function Card(place) {
  return (
    <div className="card">
      <img src={place.image} alt={place.name} />
    </div>
  );
}
