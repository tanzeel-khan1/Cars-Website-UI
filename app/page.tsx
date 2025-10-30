"use client";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import New from "./pages/New";
import Page from "./pricing/page"
import Cars from "./pages/Cars";
import Ser from "./service/Ser";

function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Hero />
        <New />
        <Page />
        <Cars />
        <Ser/>
      </div>
    </>
  );
}
export default Home;
