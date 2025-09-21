import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Window from "./pages/Window";
import Login from "./pages/Login";
import Privacy from "./components/user/Privacy";
import Terms from "./components/user/Terms";
import CancellationRefund from "./components/user/CancellationRefund";
import ShippingPolicy from "./components/user/ShippingPolicy";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/window" element={<Window />} />
                <Route path="/login" element={<Login />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cancellation" element={<CancellationRefund />} />
                <Route path="/shipping" element={<ShippingPolicy />} />
            </Routes>
        </div>
    );
};

export default App;
