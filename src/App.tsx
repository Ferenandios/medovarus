import { type FC, type JSX } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListPage from "./pages/ListPage";
import ItemPage from "./components/ItemPage/ItemPage";
import StatsPage from "./components/StatsPage/StatsPage";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/item" element={<Navigate to="/list" replace />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
