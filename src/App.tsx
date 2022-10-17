import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Snake from "./components/Organisms/Snake/Snake";
import { isMobile } from "react-device-detect";
import { insertVisitor } from "./api/functionApis";
import Header from "./components/Molecules/Header/Header";
import Footer from "./components/Molecules/Footer/Footer";

function App() {
  const dataFetchedRef = useRef(false);
  const [isLoading, setLoading] = useState(true);

  const insertingVisitor = () => {
    insertVisitor(isMobile ? 1 : 0).then((x) => {
      setLoading(false);
    });
  };

  useEffect(() => {
    document.title = "Playing Exponential";
  });

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    insertingVisitor();
  }, []);

  return (
    <>
      <Header />
      <Snake />
      <Footer />
    </>
  );
}

export default App;
