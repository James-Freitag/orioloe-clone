import Image from "next/image";
// Images
import eventImg1 from "../../public/ori-pics/event-pics/IMG_0020.jpg";
import eventImg2 from "../../public/ori-pics/event-pics/IMG_0024.jpg";
import eventImg3 from "../../public/ori-pics/event-pics/IMG_0026.jpg";
import eventImg4 from "../../public/ori-pics/event-pics/IMG_0033.jpg";
import eventImg5 from "../../public/ori-pics/event-pics/IMG_0036.jpg";
import eventImg6 from "../../public/ori-pics/event-pics/IMG_0040.jpg";

const Events = () => {
  return (
    <section className="w-full h-auto pl-64 min-h-[420px]">
      <div className="grid grid-cols-1 gap-6 px-6 py-2 mx-auto place-content-center w-full h-full">
        <div className=" flex flex-col justify-items-start w-full h-full space-y-4 text-sm place-self-center pb-4">
          <p className="text-sm italic w-full text-center">
            Our private dining room is available for parties up to 20 guests.
          </p>
          <div className="text-center">
            <a className="text-black text-sm italic font-semibold">
              Click here to book your next event with us.
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 max-w-[22.875rem] gap-2 place-self-center">
          <Image
            src={eventImg2}
            alt="event photo"
            width={110}
            className="max-h-[110px] object-cover h-full"
          />
          <Image
            src={eventImg3}
            alt="event photo"
            width={110}
            className="max-h-[110px] object-cover h-full"
          />
          <Image
            src={eventImg1}
            alt="event photo"
            width={110}
            className="max-h-[110px] object-cover h-full"
          />
          <Image
            src={eventImg4}
            alt="event photo"
            width={110}
            className="max-h-[110px] object-cover h-full"
          />
          <Image
            src={eventImg5}
            alt="event photo"
            width={110}
            className="max-h-[110px] object-cover h-full"
          />
          <Image
            src={eventImg6}
            alt="event photo"
            width={110}
            className="max-h-[110px] object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
