
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import Room from "./pages/Room";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <div className="mockup-browser border bg-base-300 m-12">
      <div className="mockup-browser-toolbar">
        <div className="input">https://anonchitchat.com</div>
      </div>
      <div className="flex justify-center px-4 py-16 bg-base-200">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Room />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
