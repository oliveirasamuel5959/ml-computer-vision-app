import { Routes, Route } from "react-router";
import { StreamAddPage } from "./pages/streams/StreamAddPage";
import { HomePage } from "./pages/home/HomePage";
import { LiveStream } from "./pages/streams/LiveStream";
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="add-streams" element={<StreamAddPage />} />
      <Route path="streams/live/:streamId" element={<LiveStream />} />
    </Routes>
  )
};

