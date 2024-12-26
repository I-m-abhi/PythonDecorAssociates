import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import TopBar from "./TopBar";

const AppLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default AppLayout;