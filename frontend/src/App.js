import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import { Search } from "./components";
import { Homepage, CS, IRS, LG, SB, TC, UTH, Login, Signup } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/cs" element={<CS />} />
        <Route exact path="/irs" element={<IRS />} />
        <Route exact path="/lg" element={<LG />} />
        <Route exact path="/sb" element={<SB />} />
        <Route exact path="/uth" element={<UTH />} />
        <Route exact path="/tc" element={<TC />} />
        <Route exact path="/test" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
