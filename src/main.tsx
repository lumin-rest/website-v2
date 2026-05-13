import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";
import "./app/globals.css";

import Home from "./pages/Home";
import Key from "./pages/Key";
import KeyRobux from "./pages/KeyRobux";

const routerBaseName = import.meta.env.BASE_URL;

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={routerBaseName}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/key/" element={<Key />} />
          <Route path="/key/robux/" element={<KeyRobux />} />
        </Routes>
        <Toaster richColors />
      </BrowserRouter>
    </HelmetProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
