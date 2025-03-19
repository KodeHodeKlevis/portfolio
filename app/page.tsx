import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <div className=" w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "hero", icon: <FaHome/>, },
        ]}
          />
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
