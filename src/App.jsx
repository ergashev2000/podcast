import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import PrivateRoutes from "./routes/PrivateRoutes";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
            path="/"
            exact
          />
          <Route
            element={
              <MainLayout>
                <Detail />
              </MainLayout>
            }
            path="/detail/:id"
            exact
          />
        </Route>

        <Route element={<Login />} path="/login" />
      </Routes>
    </div>
  );
}

export default App;
