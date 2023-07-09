import { useParams } from "react-router";
import Card from "../components/card/Card";
import "./styles.css";
import { data } from "../db";
export default function Country() {
  const { id } = useParams();
  console.log(id);
  const findCountry = data.continents(({ id: ID }) => ID == id);
  console.log(findCountry);
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
