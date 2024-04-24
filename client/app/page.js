import Navbar from "@/components/Navbar";
import LandingPage from "./Landing/page";



export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between px-10 py-6">
      <Navbar />
      <LandingPage />
    </main>
  );
}
