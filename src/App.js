import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import FinishPurchase from "./pages/FinishPurchase";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<FinishPurchase />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
