import { Header } from "./_components/header";
import { MainNavbar } from "./_components/MainNavbar";
import { Footer } from "./_components/footer";
import { Container, CssBaseline } from "@mui/material";
import { Main } from "next/document";

const sections = [
  { title: "Dashboard", url: "/dashboard" },
  { title: "Soy LCC", url: "/" },
  { title: "Noticias", url: "/" },
  { title: "Galeria", url: "/" },
];

const HubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Header title="LCC Hub" sections={sections} /> */}
      <MainNavbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default HubLayout;
