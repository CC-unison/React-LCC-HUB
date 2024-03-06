import { MainNavbar } from "./_components/MainNavbar";

const HubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MainNavbar />
      {children}
    </div>
  );
};

export default HubLayout;
