
import { Outlet } from "react-router-dom";
import Navbar from "../navabr/Navbar";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}