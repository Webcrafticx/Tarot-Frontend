import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Dashboard from "./pages/admin/Dashboard";
import Window from "./pages/admin/Window";
import Login from "./pages/user/Login";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import CancellationRefund from "./pages/legal/Terms";
import ShippingPolicy from "./pages/legal/ShippingPolicy";

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
