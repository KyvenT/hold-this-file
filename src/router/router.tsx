import { BrowserRouter, Route, Routes } from "react-router";
import App from "./landing/App";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={App}></Route>
      </Routes>
    </BrowserRouter>
  );
};
