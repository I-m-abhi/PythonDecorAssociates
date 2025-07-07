import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import QuotePopup from "./QuotePopup";

const Body = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuotePopup = () => setIsQuoteOpen(true);
  const closeQuotePopup = () => setIsQuoteOpen(false);

  return (
    <>
      <QuotePopup isOpen={isQuoteOpen} onClose={closeQuotePopup} />
      <TopBar />
      <Header onQuoteClick={openQuotePopup}/>
      <Outlet context={{ openQuotePopup }}/>
      <Footer />
    </>
  )
};

export default Body;