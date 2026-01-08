import { Routes, Route } from "react-router";
import { StreamAddPage } from "./pages/StreamAddPage";
import { HomePage } from "./pages/HomePage";
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="add-streams" element={<StreamAddPage />} />
    </Routes>
  )
};

