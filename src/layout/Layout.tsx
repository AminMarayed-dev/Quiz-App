import { ReactNode } from "react";
import Header from "./header/Header";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col justify-between py-6 items-center mt-4 bg-purple-500 mx-auto w-1/2 min-h-[55vh] rounded-lg">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
