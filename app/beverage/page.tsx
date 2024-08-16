import Image from "next/image";
// Image
import beverageImage from "../../public/ori-pics/beve-pic.jpg";

const Beverage = () => {
  const wineList =
    "https://static1.squarespace.com/static/5636d03ae4b05d222e994744/t/662963d1053c337c4feb0ce2/1713988562021/ORIOLE-WINELIST+APRIL+2024..pdf";
  return (
    <section className="w-full h-auto pl-64 min-h-[420px]">
      <div className="grid grid-cols-2 gap-6 mx-auto place-content-center w-full h-full">
        <div className="max-w-[19rem] flex flex-col justify-items-start w-full h-full space-y-4 text-sm place-self-end">
          <p className="uppercase text-md font-thin">beverage</p>
          <p className="text-sm italic">
            <span className="font-semibold">Oriole</span> offers a variety of
            beverage options, including cocktails created by{" "}
            <span className="font-semibold">Julia Momose</span> of Bar Kumiko
            and a wine list curated by{" "}
            <span className="font-semibold">
              Beverage Director Emily Rosenfeld
            </span>{" "}
            that is old world inspired with a focus on white wines. View the
            list here:
          </p>
          <ul className="list-disc pl-10">
            <li className="uppercase text-[.75rem]">wine list</li>
          </ul>
          <p className="uppercase text-md">pairings</p>
          <p className="text-sm italic">
            Three pairing options are also available to accompany your meal.
            Emily Rosenfeld curates both a standard pairing to match the chefs'
            creations as well as a reserve pairing showcasing special wines of
            older vintages, esteemed producers, and rarer bottles. Additionally,
            a spiritfree pairing created by Julia Momose features creative,
            non-alcoholic beverages made to perfectly complement the menu.
          </p>
          <p className="text-md uppercase font-thin">corkage policy</p>
          <p className="text-sm italic">
            We welcome guests to bring their own special bottle, with a limit of
            two bottles per reservation. There is a $50 corkage fee per bottle.
          </p>
        </div>
        <div>
          <Image src={beverageImage} alt="plates of food" width={413} />
        </div>
      </div>
    </section>
  );
};

export default Beverage;
