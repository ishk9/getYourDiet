import Navbar from "@/components/Navbar";
import LandingPage from "@/pages/Landing";


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between px-10 py-6">
      <Navbar />
      <LandingPage />
    </main>
  );
}
