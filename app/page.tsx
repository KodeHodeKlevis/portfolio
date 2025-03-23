import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <div className=" w-full">
        <FloatingNav navItems={navItems}
          />
        <Hero />
        <Grid/>
        <RecentProjects/>
        <Footer/>
      </div>
    </main>
  );
}
