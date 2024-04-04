import Image from "next/image";
import heroHer from "../../public/assets/heroHer.svg";
import heroHim from "../../public/assets/heroHim.svg";

export default function Home() {
  return (
    <div>
      {/* <Image src={heroHer} alt="Hero image" /> */}
      <h2 className="text-3xl font-bold">Cartify</h2>
    </div>
  );
}
