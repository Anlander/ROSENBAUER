import Image from "next/image";
import Link from "next/link";
import ses from "@/public/ses.png";
import ads from "@/public/awd.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-14 lg:py-0 lg:h-[70vh] gap-10 px-10 lg:px-0 ">
      <h1 className="text-[18px] lg:text-[24px] lg:w-[50%] mx-auto text-center font-bold">
        SES PROTECTION – DIN SVENSKA LEVERANTÖR AV BRANDBEKÄMPNINGSUTRUSTNING
        FRÅN ROSENBAUER
      </h1>
      <div className="flex flex-col gap-10 lg:w-[60%] text-center text-[22px]">
        <p>
          SES Protection är den svenska leverantören av
          brandbekämpningsutrustning från Rosenbauer. I sortimentet finns
          personlig skyddsutrustning från hjälmar till boots, handskar och fulla
          dräkter.
        </p>
        <p>
          För mer information om Rosenbauers produkter besök deras webbplats.
          Vid frågor och beställningar kontakta SES Protection.
        </p>
      </div>
      <Link
        href="https://www.rosenbauer.com/"
        className="border-[2px] border-black px-5 py-4 text-[12px] mt-5 font-semibold"
      >
        ROSENBAUER.COM
      </Link>
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-2">
        <div>
          <Image src={ses} width={300} height={20} alt="Rosenbauer" />
        </div>
        <div>
          <Image src={ads} width={300} height={20} alt="Rosenbauer" />
        </div>
      </div>
    </div>
  );
}
