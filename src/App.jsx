import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/Landing";
import ParentOverview from "./parent/Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="" element={<LandingPage />} /> */}
          <Route path="" element={<ParentOverview />} />
          <Route path="/parent" element={<ParentOverview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
