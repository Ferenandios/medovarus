import { type FC, type JSX } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListPage from "./pages/ListPage";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Редирект с / на /list */}
        <Route path="/" element={<Navigate to="/list" replace />} />

        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
