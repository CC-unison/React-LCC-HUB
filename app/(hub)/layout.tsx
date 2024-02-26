import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Container, CssBaseline } from "@mui/material";

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
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default HubLayout;
