import AnimationFont from "./../components/font.jsx";

const testimonials = [
  {
    company: "Deloitte",
    quote:
      "It was an incredible learning experience. Interacting with alumni working at Deloitte was especially insightful, as they shared their journeys and gave us a realistic view of consulting, mainly M&A. The visit offered me a glimpse into the professional environment and having a conversation with alumni who have worked in that profession for many years increased my interest in consulting.",
    name: "Mridul Mangal",
    featured: true,
  },
  {
    company: "WorldQuant",
    quote:
      "The shadow program at WorldQuant offered a great insight into the world of quantitative finance, where data, AI, and research drive global investment strategies. Beyond the learning, the experience was made memorable with authentic Japanese food and WorldQuant goodies, reflecting the firm's professional yet welcoming culture.",
    name: "Gaurav Goyal",
  },
  {
    company: "Bajaj Auto",
    quote:
      "The intercity shadow program at Bajaj Auto gave me valuable exposure to both core mechanical engineering and the company's growing focus on electric mobility. Learning about their advanced manufacturing practices and innovations like the Chetak EV provided me with a clear picture of how traditional automotive engineering is evolving alongside sustainable technologies.",
    name: "Sachin Sharma",
  },
  {
    company: "NSE",
    quote:
      "The NSE shadow program was a memorable experience that went beyond just a normal session that is usually conducted. Along with understanding how trading, clearing, and settlement work, we also got a feel of the scale and pace at which India's largest exchange operates. The interactive discussions, combined with being inside such a significant financial institution, made the visit both exciting and highly educational.",
    name: "Komal Yadav",
  },
  {
    company: "Fynd",
    quote:
      "The Shadow Program at Fynd gave me real workplace insights, valuable mentorship, and clarity on career paths beyond classroom learning.",
    name: "Kapil Raja",
  },
];

function TestimonialCard({ company, quote, name, featured }) {
  return (
    <div
      className={`
        group flex flex-col h-full rounded-2xl p-6
        bg-white/[0.04] border border-[#3366ff]/20
        transition-all duration-300
        hover:border-[#3366ff]/50 hover:-translate-y-1
        ${featured ? "md:col-span-2" : ""}
      `}
    >
      {/* Opening quote mark */}
      <span className="text-5xl leading-none mb-1 font-serif text-[#3366ff]/35 select-none">
        "
      </span>

      {/* Quote body */}
      <p className="text-[#c8d0e8] text-sm leading-relaxed flex-1">{quote}</p>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-white/[0.08]">
        <p className="text-[#e8eeff] font-semibold text-sm">{name}</p>
        <p className="text-[#3366ff] text-xs tracking-wide mt-0.5">{company}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="bg-black/90 backdrop-blur-[2px] rounded-xl px-6 py-12 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-[#3366ff] font-medium mb-2">
          What students say
        </p>
        <div className="flex justify-center h-[80px] items-center">
          <AnimationFont text="TESTIMONIALS" />
        </div>
      </div>

      {/* Grid — featured card spans 2 cols on md+ */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            company={item.company}
            quote={item.quote}
            name={item.name}
            featured={!!item.featured}
          />
        ))}
      </div>
    </div>
  );
}