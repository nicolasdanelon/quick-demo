import { Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "./pages/home";
import Users from "./pages/users";

export default function App() {
  return (
    <div className="content">
      <Nav />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
