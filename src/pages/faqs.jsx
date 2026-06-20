import { useState } from "react";
import AnimatedText from "../components/font";

const faqs = [
  {
    question: "What is the Shadow Program?",
    answer:
      "The Shadow Program, run by the Student Alumni Relations Cell (SARC), IIT Bombay, is like a guided company tour where students get the chance to accompany alumni or professionals in their workplace. It allows participants to experience industry operations up close, explore different career paths, and understand workplace culture, offering learning that goes far beyond lectures and textbooks.",
  },
  {
    question: "Who can apply for the program?",
    answer:
      "The program is open to all IIT Bombay students, though the number of participants is limited. Selections are based on FCFS basis, and in some cases, specific eligibility criteria announced before each program.",
  },
  {
    question: "What do students gain from the program?",
    list: [
      "Industry exposure and workplace tour.",
      "Networking opportunities with IITB alumni and industry experts.",
      "Clarity on career choices through real workplace experiences.",
      "Mentorship and guidance from professionals.",
    ],
  },
  {
    question: "Is there any cost involved?",
    answer:
      "No, the Shadow Program is completely free for IIT Bombay students. A sum of Rs. 200 is collected at the time of registration which is completely refunded after the program.",
  },
  {
    question: "Who should I contact for queries?",
    answer:
      "For queries, you can reach out to the ASMP Team. Contact details are given on the team page.",
  },
];

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      className="bg-black/60 backdrop-blur-base border-b transition-colors duration-300"
      style={{ borderColor: "rgba(102, 153, 255, 0.25)" }}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="font-semibold text-base sm:text-lg leading-snug transition-colors duration-300"
          style={{ color: isOpen ? "#6699ff" : "#f5f7ff" }}
        >
          {item.question}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
          style={{
            color: "#6699ff",
            border: "1.5px solid #3366ff",
            backgroundColor: isOpen ? "rgba(51, 102, 255, 0.15)" : "transparent",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "400px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-5 pr-8">
          {item.answer && (
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "rgba(229, 233, 245, 0.85)" }}
            >
              {item.answer}
            </p>
          )}
          {item.list && (
            <ul className="space-y-2">
              {item.list.map((li, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm sm:text-base leading-relaxed"
                  style={{ color: "rgba(229, 233, 245, 0.85)" }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#3366ff" }}
                  />
                  {li}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-black/60 backdrop-blur-[2px] h-fit w-full  px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="h-[100px] text-center">
          <AnimatedText text="Faqs"></AnimatedText>
        </div>

        <div>
          {faqs.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}