import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Main page with Buy Now button
import PresalePage from "./PresalePage"; // The presale page

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/presale" element={<PresalePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
