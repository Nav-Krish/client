import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import User from "./components/User";

// This the Main App Component

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navbar />
      {/* All Required Routes path are assigned */}
      {/* This container is used to display the diff. types of pages loading using router */}
      {/* All components all called when the link is clicked in the NavBar Component */}

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;