import AnimationFont from "./../components/font.jsx";

const benefits = [
  "Students get the chance to interact with alumni and professionals working in their field of interest.",
  "The visit and talk with the employees will help them in making informed decisions in their career life.",
  "Through interactions with professionals and visits to companies, students gain valuable insights into industry trends, challenges, and innovations.",
];

const activities = [
  "An extensive workplace tour",
  "Interaction with the Alumni of the company",
  "Meeting the employees",
  "Understanding work methodology and company culture",
];

const stats = [
  { value: "9+", label: "Companies Visited" },
  { value: "100+", label: "Students Impacted" },
  { value: "5+", label: "Years Running" },
  { value: "1 Day", label: "Immersive Experience" },
];

export default function About() {
  return (
    <div className="bg-black/60 backdrop-blur-[2px] px-4 py-12 w-full">

      {/* Heading */}
      <div className="text-center mb-4">
        <p className="text-xs tracking-[0.2em] uppercase text-[#3366ff] font-medium mb-2">
          Who we are
        </p>
        <div className="flex justify-center h-[80px] items-center">
          <AnimationFont text="ABOUT" />
        </div>
      </div>

      {/* Intro: text + image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto mt-6">
        <div className="text-white order-2 md:order-1 max-w-lg text-center md:text-left">
          <h3 className="text-xl font-bold mb-3 text-[#3366ff]">
            About Shadow Program
          </h3>
          <p className="leading-relaxed text-gray-300 text-sm">
            The Shadow Program, conducted by the Student Alumni Relations Cell
            (SARC), is a one-day experiential initiative that offers students
            a unique opportunity to visit the workplaces of distinguished
            alumni and engage with them in a professional setting. Designed
            to bridge the gap between academic learning and real-world
            industry exposure, the program allows students to observe
            firsthand the work culture of leading companies and gain insights
            into various career paths. By interacting not only with alumni
            but also with other professionals working in their field of
            interest, students are able to explore potential roles,
            understand organizational dynamics, and gather practical
            knowledge that goes beyond textbooks.
          </p>
        </div>
        <div className="order-1 md:order-2 md:w-1/2 flex justify-center">
          <img
            src="/image.png"
            className="w-full max-w-sm rounded-xl border border-[#3366ff]/20"
            alt="Shadow Program"
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white/[0.04] border border-[#3366ff]/20 rounded-xl p-4 text-center"
          >
            <p className="text-2xl font-bold text-[#3366ff]">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1 tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Benefits + Activities */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto mt-10">
        <div className="flex-1 bg-white/[0.03] border border-[#3366ff]/20 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-[#3366ff]">
            How is it beneficial?
          </h3>
          <ul className="space-y-4">
            {benefits.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3366ff] shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-white/[0.03] border border-[#3366ff]/20 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-[#3366ff]">
            What do we do?
          </h3>
          <ul className="space-y-4">
            {activities.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3366ff] shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Program Details cards */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="text-center mb-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#3366ff] font-medium mb-1">
            Everything you need to know
          </p>
          <h3 className="text-xl font-bold text-white">Program Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="bg-white/[0.04] border border-[#3366ff]/20 rounded-xl p-6 hover:border-[#3366ff]/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#3366ff]/15 border border-[#3366ff]/30 flex items-center justify-center text-[#3366ff] font-bold text-sm shrink-0">1</span>
              <h4 className="text-white font-semibold text-sm">What is the Shadow Program?</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Shadow Program, run by SARC IIT Bombay, is like a guided company tour where students get the chance to accompany alumni or professionals in their workplace. It allows participants to experience industry operations up close, explore different career paths, and understand workplace culture — offering learning that goes far beyond lectures and textbooks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.04] border border-[#3366ff]/20 rounded-xl p-6 hover:border-[#3366ff]/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#3366ff]/15 border border-[#3366ff]/30 flex items-center justify-center text-[#3366ff] font-bold text-sm shrink-0">2</span>
              <h4 className="text-white font-semibold text-sm">Who can apply?</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The program is open to all IIT Bombay students, though the number of participants is limited. Selections are based on a first-come-first-served basis, and in some cases, specific eligibility criteria are announced before each program.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/[0.04] border border-[#3366ff]/20 rounded-xl p-6 hover:border-[#3366ff]/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#3366ff]/15 border border-[#3366ff]/30 flex items-center justify-center text-[#3366ff] font-bold text-sm shrink-0">3</span>
              <h4 className="text-white font-semibold text-sm">What do students gain?</h4>
            </div>
            <ul className="space-y-2 mt-1">
              {[
                "Industry exposure and workplace tour",
                "Networking with IITB alumni and industry experts",
                "Clarity on career choices through real workplace experiences",
                "Mentorship and guidance from professionals",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3366ff] shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white/[0.04] border border-[#3366ff]/20 rounded-xl p-6 hover:border-[#3366ff]/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#3366ff]/15 border border-[#3366ff]/30 flex items-center justify-center text-[#3366ff] font-bold text-sm shrink-0">4</span>
              <h4 className="text-white font-semibold text-sm">Is there any cost involved?</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              No, the Shadow Program is completely free for IIT Bombay students. A refundable deposit of ₹200 is collected at the time of registration, which is fully refunded after the program.
            </p>
          </div>

          {/* Card 5 — full width */}
          <div className="md:col-span-2 bg-white/[0.04] border border-[#3366ff]/20 rounded-xl p-6 hover:border-[#3366ff]/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#3366ff]/15 border border-[#3366ff]/30 flex items-center justify-center text-[#3366ff] font-bold text-sm shrink-0">5</span>
              <h4 className="text-white font-semibold text-sm">Who should I contact for queries?</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              For queries, you can reach out to the ASMP Team. Contact details are available on the{" "}
              <a href="#team" className="text-[#3366ff] underline underline-offset-2 hover:text-blue-300 transition-colors">
                team page
              </a>.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}