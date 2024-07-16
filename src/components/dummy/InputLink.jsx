import Button from "../Button";
import { Input } from "@material-tailwind/react";
import Section from "../Section";

const InputLink = () => {
  return (
    <Section
      className="pt-[10rem] -mt-[5rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="inputField"
    >
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h3 mb-6">Paste your podcast link below
        <div className="flex w-auto flex-col items-end gap-6 mt-5">

           <Input size="lg" label="Paste Link" className="items-center h-7" color="purple" />
        </div>
        </h1>
       

        <Button className={"mt-5 "} href="/generate">Generate FlashCards</Button>
      </div>
    </Section>
  );
};

export default InputLink;
