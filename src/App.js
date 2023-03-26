import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import { Search } from "./components";
import { CS, IRS, LG, SB, TC, UTH } from "./pages";

function App() {
  return (
    <div className="container-fluid">
      <div>
        <Routes>
          <Route exact path="/cs" element={<CS />} />
          <Route exact path="/irs" element={<IRS />} />
          <Route exact path="/lg" element={<LG />} />
          <Route exact path="/sb" element={<SB />} />
          <Route exact path="/uth" element={<UTH />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
