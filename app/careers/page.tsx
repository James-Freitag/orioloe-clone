import Image from "next/image";
// Image
import careersImage from "../../public/ori-pics/careers-pic.jpg";

const Careers = () => {
  return (
    <section className="w-full h-auto pl-64 min-h-[420px]">
      <div className="grid grid-cols-2 gap-8 mx-auto place-content-center p-16 w-full h-full">
        <div className="max-w-[21.8rem] flex flex-col justify-items-start w-full h-full space-y-6 text-sm place-self-end">
          <div>
            <p className="uppercase text-lg font-thin pb-3 text-[#2D2A2A]">
              careers
            </p>
            <p className="italic text-[#666666] text-sm">
              Oriole is an inclusive and collaborative team that thrives on each
              member&apos;s input and enthusiasm.
            </p>
          </div>
          <div>
            <p className="uppercase text-md pb-3 text-[#2D2A2A]">
              back of house
            </p>
            <p className="italic text-[#666666] text-sm">
              All culinary roles are currently filled.
            </p>
          </div>
          <div>
            <p className="uppercase text-md pb-3 text-[#2D2A2A]">
              front of house
            </p>
            <p className="italic text-[#666666] text-sm">
              We are in search of a Back Waiter, who is passionate about food,
              wine, and service.
            </p>
          </div>
          <div>
            <p className="italic text-[#666666] text-sm pb-3">
              Please send CV and cover letter to careers@oriolechicago.com.
            </p>
            <p className="uppercase text-md pb-3 text-[#2D2A2A]">
              ADMINISTRATIVE
            </p>
            <p className="italic text-[#666666] text-sm">
              All office and adminstrative roles are currently filled.{" "}
            </p>
          </div>
        </div>
        <div>
          <Image
            src={careersImage}
            alt="plates of food"
            width={350}
            className="h-[437px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Careers;
