import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import Dashboard from "./Pages/DashBoard";

const routes = [
  { path: "/", component: Home },
  { path: "/map", component: Map },
  { path: "/dashboard", component: Dashboard },
];

const MainRoutes = () => {
  return (
    <Routes>
      {routes.map((route, key) => (
        <Route
          key={key}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default MainRoutes;
