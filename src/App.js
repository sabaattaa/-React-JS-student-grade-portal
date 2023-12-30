import React, { useState } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import routes from "./components/0_routes";
const App = () => {
  return (
   <Provider store={store}>
    <BrowserRouter>
               <Routes>
                  {routes.map((route) => (
                     <Route
                        key={route.path}
                        path={route.path}
                        element={route.component}
                     />
                  ))}
               </Routes>
            </BrowserRouter>
            </Provider>
  );
};

export default App;
