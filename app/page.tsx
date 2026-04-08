import Image from "next/image";
import Card from "@/components/Card";



export default function Home() {
  return (
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
  <Card
    icon="💻"
    title="Portfolio"
    description="Programs, robots, and science projects"
    href="/portfolio"
  />
  <Card
    icon="📓"
    title="Notes"
    description="Robotics and competition journals"
    href="/notes"
  />
  <Card
    icon="🏆"
    title="Leadership"
    description="Teams and competitions"
    href="/leadership"
  />
</div>


  );
}
