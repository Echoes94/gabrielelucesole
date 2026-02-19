import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply dark mode class by default (brand identity: navy dark)
document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(<App />);
