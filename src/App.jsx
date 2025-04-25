import AppRoutes from "@/routes";
import { BrowserRouter } from "react-router-dom"; // pastikan ini ada

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
