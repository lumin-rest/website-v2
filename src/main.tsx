import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import "./app/globals.css";

import Home from "./pages/Home";
import Key from "./pages/Key";
import KeyRobux from "./pages/KeyRobux";
import Script from "./pages/Script";

const routerBaseName = import.meta.env.BASE_URL;

function App() {
  return (
    <BrowserRouter basename={routerBaseName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/key/" element={<Key />} />
        <Route path="/key/robux/" element={<KeyRobux />} />
        <Route path="/script" element={<Script />} />
      </Routes>
      <Toaster richColors />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
