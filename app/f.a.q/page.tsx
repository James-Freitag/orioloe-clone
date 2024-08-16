import React from "react";

const FAQ = () => {
  const questions = [
    {
      question: "is there a dress code?",
      answer:
        "Oriole does not have a dress code. You are welcome to come however you are most comfortable.",
      index: 1,
    },
    {
      question: "where can i find parking?",
      answer:
        "Oriole does not offer valet; using a ride share, taxi, or public transportation is suggested. Metered parking is plentiful along Desplaines Street and Union Avenue and we are happy to refresh your meter! Additionally, a climate-controlled garage is located just half a block north of the restaurant at 650 W Fulton Market. ",
      index: 2,
    },
    {
      question: "how far in advance are reservations available?",
      answer:
        "Reservations can be made online via Tock. Bookings may be made up to 90 calendar days in advance. All available reservations are shown online; we do not hold back any tables.",
      index: 3,
    },
    {
      question: "do you have a wait list?",
      answer:
        "Yes! If a reservation is not available on the date you are looking for, we are happy to reach out to you should one come available.",
      index: 4,
    },
    {
      question: "can dietary restrictions be accommodated?",
      answer:
        "While the chefs make every effort to create thoughtful alternatives for allergies and aversions, some restrictions cannot be accommodated. Please contact us prior to your reservation to assure that changes can be made to the menu. In all cases, we ask guests to alert us at least 24 hours in advance of their booking so the chefs may have ample time to prepare alternate dishes.",
      index: 5,
    },
    {
      question: "can oriole host my private event?",
      answer:
        "Oriole is so excited to introduce our new private dining room. Please contact us at events@oriolechicago.com  for more information.",
      index: 6,
    },
    {
      question: "does oriole offer gift certificates?",
      answer:
        "We do not offer gift certificates, but experiences can be purchased and transferred to another individual.",
      index: 7,
    },
    {
      question: "do you allow photography?",
      answer:
        "We encourage and welcome picture taking, but ask guests to refrain from using flash and flashlights, and from taking video.",
      index: 8,
    },
  ];
  return (
    <section className="w-[77rem] h-auto pl-80">
      <div>
        <p className="uppercase text-center text-lg max-w-[48rem]">
          frequently asked questions
        </p>

        {questions.map((question: any, index: number) => (
          <div className="grid grid-cols-4 gap-4 border-b-[1px] w-[48rem] border-neutral-300 text-sm p-10">
            <p key={index} className="uppercase max-w-[9.8rem] col-end-1">
              {question.question}
            </p>
            <p className="max-w-[33.8rem] col-span-4 italic text-[#666666]">
              {question.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
