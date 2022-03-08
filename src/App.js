import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Clients from "./pages/Clients";
import CreateUser from "./pages/CreateUser";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/Clients" element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
