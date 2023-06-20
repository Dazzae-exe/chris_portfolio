import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />

      <main className="w-full h-fit">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
