import { Link, useLocation } from "react-router-dom";
import "./Card.css";
export default function Card(place) {
  const { pathname } = useLocation();

  const location = pathname === "/" ? "continents" : "countries";
  console.log(`/${location}/${place.id}`);
  return (
    <div className="card">
      <div className="img-div">
        <img src={place.image} alt={place.name} />
      </div>

      <div className="location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="svg-icon"
        >
          <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
        </svg>
        <span>{place.name}</span>
      </div>
      <Link path={`/${location}/${place.id}`}>
        <div className="overlay"></div>
      </Link>
    </div>
  );
}
