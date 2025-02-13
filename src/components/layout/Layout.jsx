
import { Outlet } from "react-router-dom";
import Navbar from "../navabr/Navbar";
import ContextData from "../Provider/ContextData";


export default function Layout() {
  return (
    <>
    <ContextData>
      <header className="fixed w-full top-0">
        <Navbar />
      </header>
      <main className="mt-[70px]">
        <Outlet />
      </main>
    </ContextData>
    </>
  );
}