import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
