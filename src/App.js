import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import AdminScreen from "./screens/AdminScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
      </Routes>
    </div>
  );
}

export default App;
