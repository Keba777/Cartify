import Image from "next/image";
import heroHer from "@/../public/assets/heroHer.svg";
import heroHim from "@/../public/assets/heroHim.svg";

const Hero = () => {
  return (
    <section className="p-3 md:p-5 flex justify-center">
      <div className="max-w-screen-lg w-full flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <Image
            src={heroHer}
            alt="Her image"
            width={500}
            className="object-cover w-full"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <Image
            src={heroHim}
            alt="Him image"
            width={500}
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
