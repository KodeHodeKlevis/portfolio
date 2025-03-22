import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <div className=" w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "/hero", icon: <FaHome/>, },
          { name: "About", link:"/about", icon: <IoPersonOutline/>},
          {name: "Recent Projects", link:"/recprojects"}
        ]}
          />
        <Hero />
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
}
