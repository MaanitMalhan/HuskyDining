import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { LogoLarge } from "../navigation/Logo";
import { Button } from "../shared/Button";

export const FinalCTA = () => {
  return (
    <section className="-mt-8 bg-white px-2 py-24 md:px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <LogoLarge />
        <SectionHeading>Ready to go?</SectionHeading>
        <p className="mx-auto mb-8 text-center text-base leading-relaxed md:text-xl md:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          blanditiis?
        </p>
        <Button intent="primary">
          <span className="font-bold">Get started - </span> no CC required
        </Button>
      </div>
    </section>
  );
};
