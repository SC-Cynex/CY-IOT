import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const routes = [
  { path: "/", component: Home }
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
