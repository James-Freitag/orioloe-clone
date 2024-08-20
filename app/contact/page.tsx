const Contact = () => {
  return (
    <section className="w-full h-auto md:min-h-[420px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto place-content-center w-full h-full">
        <div className="grid grid-cols-1 md:w-[67rem] h-full place-items-center gap-10 md:pl-64">
          <div className="flex justify-center items-center mx-auto w-full h-auto italic text-sm">
            <ul className="flex flex-col space-y-5 justify-center items-center text-center">
              <li>661 W Walnut St, Chicago, IL 60661</li>
              <li>phone (312) 877-5899</li>
              <li>
                general inquiries:{" "}
                <span className="font-semibold text-black hover:text-black/60">
                  hospitality@oriolechicago.com
                </span>
              </li>
              <li>
                media and press inquiries:{" "}
                <span className="font-semibold text-black hover:text-black/60">
                  press@oriolechicago.com
                </span>
              </li>
              <li>
                private event inquiries:{" "}
                <span className="font-semibold text-black hover:text-black/60">
                  events@oriolechicago.com
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col p-6 justify-center items-center max-w-[45.8rem] max-h-[21.44rem] bg-[rgb(0,0,0,.05)]">
            <div className="flex flex-col w-full h-full items-center justify-center space-y-4 text-[#272727]">
              <p className="uppercase text-4xl font-thin">keep in touch</p>
              <p className="pb-8 italic">
                Please follow us by joining our email list for updates and
                reservations. We look forward to seeing you soon!
              </p>
              <input
                type="text"
                placeholder="Email Address"
                className="max-w-64 w-full p-4"
              />
              <button className="w-44 h-14 bg-[#272727] text-white text-lg  font-thin   mx-auto hover:bg-black/75 uppercase tracking-wide">
                join our list
              </button>
              <p className="text-xs italic ">We respect your privacy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
