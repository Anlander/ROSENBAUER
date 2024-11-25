import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="h-full lg:h-full bg-[#263568] px-20 py-10 flex lg:gap-10 items-center text-center lg:text-left justify-center lg:justify-start">
      <div>
        <h2 className="text-[24px] font-bold text-[#D8B75D] uppercase">
          KONTAKT <br />
          SES PROTECTION
        </h2>
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-5 text-white font-semibold">
            <h3 className="mt-10">FÖRSÄLJNINGS- OCH MARKNADSCHEF</h3>
            <span>
              MAGNUS HOLMBERG <br />
              MAGNUS.HOLMBERG@SESINTEG.COM <br />
              <Link href="tel:+46 720 64 29 33">+46(0) 720 64 29 33</Link>
            </span>
          </div>
          <div className="flex flex-col gap-5 text-white font-semibold">
            <h3 className="mt-10">TEKNISK SÄLJARE</h3>
            <span>
              RONNIE HANSSON <br />
              RONNIE.HANSSON@SESINTEG.COM <br />
              <Link href="tel:+46 760 10 39 86">+46(0) 760 10 39 86</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
