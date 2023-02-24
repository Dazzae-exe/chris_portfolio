import { Outlet } from "react-router-dom";
import Footer from "../features/layouts/root/Footer";
import Navbar from "../features/layouts/root/Navbar";

function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
