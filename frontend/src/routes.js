import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import Dashboard from "./Pages/DashBoard";
import Components from "./Pages/Components";
import Settings from "./Pages/Settings";
import About from "./Pages/About";
import { DashboardConfigProvider } from "./Helpers/DashboardConfigContext";

const routes = [
  { path: "/", component: Home },
  { path: "/map", component: Map },
  { path: "/dashboard", component: Dashboard },
  { path: "/components", component: Components },
  { path: "/settings", component: Settings },
  { path: "/about", component: About },
];

const MainRoutes = () => {
  return (
    <DashboardConfigProvider> {/* Envolvendo apenas as rotas */}
      <Routes>
        {routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </DashboardConfigProvider>
  );
};

export default MainRoutes;
