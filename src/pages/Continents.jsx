import { data } from "../db";
import "./styles.css";
import Card from "../components/card/Card";

export default function Continents() {
  return (
    <div className="page-layout">
      <h1>Welcome to Trip Advisor</h1>
      <h2>Top Continents for your next holiday</h2>

      <div className="row-flex">
        {data.continents?.map((place) => (
          <Card key={place.id} {...place} />
        ))}
      </div>
    </div>
  );
}
