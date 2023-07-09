import { Route, Routes } from "react-router";
import "./App.css";
import Continents from "./pages/Continents";
import Destination from "./pages/Destination";
import Country from "./pages/Country";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/continents/:continentId" element={<Country />} />
        <Route path="/countries/:countryId" element={<Destination />} />
        <Route path="/destinations/:destinationId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
