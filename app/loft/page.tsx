import Image from "next/image";
// Images
import loftPic1 from "../../public/ori-pics/loft-pics/Oriole_loft_02.jpg";
import loftPic2 from "../../public/ori-pics/loft-pics/Oriole_loft_06.jpg";
import loftPic3 from "../../public/ori-pics/loft-pics/Oriole_loft_08.jpg";
import loftPic4 from "../../public/ori-pics/loft-pics/Oriole_loft_20.jpg";
import loftPic5 from "../../public/ori-pics/loft-pics/Oriole_loft_12.jpg";
import loftPic6 from "../../public/ori-pics/loft-pics/Oriole_loft_14.jpg";

const Loft = () => {
  return (
    <section className="w-full h-auto pl-64 min-h-[420px]">
      <div className="grid grid-cols-2 gap-6 mx-auto place-content-center w-full h-full">
        <div className="max-w-[20rem] flex flex-col justify-items-start w-full h-full space-y-4 text-sm place-self-end">
          <p className="uppercase text-md">the loft</p>
          <p className="text-sm italic">
            We invite you to extend your Oriole experience overnight with our
            new{" "}
            <span className="font-semibold">
              Loft and Kitchen Table Package
            </span>
            .
          </p>
          <p className="italic">
            This booking includes a reservation for two at Oriole&apos;s Kitchen
            Table, a front-row dining experience and menu curated by Chef Noah
            Sandoval, as well as a one-night stay in Oriole&apos;s newly debuted
            Loft
          </p>
          <p className="italic">
            Located directly above the restaurant in Chicago&apos;s West Loop,
            the Oriole Loft is your ideal stay after finishing a world-class
            meal at the restaurant.
          </p>
          <p className="italic">
            The space is fully furnished with everything you need for your
            perfect getaway: a King-sized bed, a full bathroom, dining area and
            kitchenette, as well as cookbooks galore, yoga mats, and even a
            full-sized drum kit, guitar and amps for you to jam the night away.
          </p>
          <p className="italic">
            Book your stay now through{" "}
            <span className="underline text-black">Tock</span>.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={loftPic3}
            alt="plates of food"
            width={165}
            className="max-h-[165px] object-cover h-full place-self-end"
          />
          <Image
            src={loftPic5}
            alt="plates of food"
            width={165}
            className="max-h-[165px] object-cover h-full"
          />
          <Image
            src={loftPic6}
            alt="plates of food"
            width={165}
            className="max-h-[165px] object-cover h-full place-self-end"
          />
          <Image
            src={loftPic2}
            alt="plates of food"
            width={165}
            className="max-h-[165px] object-cover h-full"
          />
          <Image
            src={loftPic1}
            alt="plates of food"
            width={165}
            className="max-h-[165px] object-cover h-full place-self-end"
          />
          <Image
            src={loftPic4}
            alt="plates of food"
            width={165}
            className="max-h-[165px] object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Loft;
