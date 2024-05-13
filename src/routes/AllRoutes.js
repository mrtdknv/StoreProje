import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteModels from "./RouteModels";

function AllRoutes() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          {RouteModels.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoutes;
