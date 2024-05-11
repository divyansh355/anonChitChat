import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import Room from "./pages/Room";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
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
      </div>
    </div>
  );
}

export default App;
