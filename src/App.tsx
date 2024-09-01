import { ScrollRestoration } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <MainLayout />
    </>
  );
}

export default App;
