import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import AllPodcasts from "./pages/AllPodcasts";

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
          <Route
            element={
              <MainLayout>
                <AllPodcasts />
              </MainLayout>
            }
            path="/podcasts"
            exact
          />
        </Route>

        <Route element={<Login />} path="/login" />
      </Routes>
    </div>
  );
}

export default App;
