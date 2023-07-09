import { Route, Routes } from "react-router";
import "./App.css";
import Continents from "./pages/Continents";
import Destination from "./pages/Destination";
import Country from "./pages/Country";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries/:countryId" element={<Country />} />
        <Route path="/destinations/:destinationId" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
