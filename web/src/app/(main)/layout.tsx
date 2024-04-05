import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
