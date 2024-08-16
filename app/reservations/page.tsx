// Image
import Image from "next/image";
import reservationImage from "../../public/ori-pics/reserv-pic.jpg";

const Reservations = () => {
  return (
    <section className="w-full h-auto pl-64 min-h-[420px]">
      <div className="grid grid-cols-2 gap-6 mx-auto place-content-center w-full h-full">
        <div className="max-w-[19rem] flex flex-col justify-items-start w-full h-full space-y-4 text-sm place-self-end">
          <p className="uppercase text-md">availability</p>
          <p className="text-sm italic">
            Reservations are now open through{" "}
            <span className="font-semibold">Tock</span>. Bookings are released
            on a 90 day rolling calendar.
          </p>
          <p>
            Enjoy our extended tasting menu in our dining room or kitchen table,
            or join us for an overnight stay.
          </p>
          <button className="w-44 h-14 bg-[#272727] text-white text-xl  font-bold tracking-wider font-mono mx-auto hover:bg-black/75">
            Book now
          </button>
        </div>
        <div>
          <Image src={reservationImage} alt="plates of food" width={349.5} />
        </div>
      </div>
    </section>
  );
};

export default Reservations;
