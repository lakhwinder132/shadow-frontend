import AnimatedText from "../components/font";

const pastShadows = [
  { company: "WorldQuant", logo: "WorldQuant", month: "Oct", year: "2025" },
  { company: "Fynd", logo: "Fynd", month: "Oct", year: "2025" },
  { company: "Deloitte", logo: "Deloitte", month: "Oct", year: "2025" },
  { company: "NSE", logo: "NSE", month: "Oct", year: "2024" },
  { company: "CDSL", logo: "CDSL", month: "Nov", year: "2024" },
  { company: "L&T", logo: "L&T", month: "April", year: "2024" },
  { company: "SBI", logo: "SBI", month: "Jan", year: "2024" },
  { company: "HUL", logo: "HUL", month: "March", year: "2023" },
  { company: "BSE", logo: "BSE", month: "Oct", year: "2022" },
];

function ShadowCard({ company, logo, month, year }) {
  return (
    <div className="group relative w-full max-w-[260px] rounded-xl overflow-hidden border border-[#3366ff]/20 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-[#3366ff]/50 hover:-translate-y-1">
      {/* Logo area */}
      <div className="w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-900/40 to-black/40 flex items-center justify-center">
        <img
          src={`/companies/${logo}.png`}
          alt={company}
          onError={(e) => {
            e.target.style.display = "none";
          }}
          className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card footer */}
      <div className="px-4 py-3 border-t border-[#3366ff]/10">
        <h3 className="text-sm font-semibold text-[#e8eeff] leading-snug">
          {company}
        </h3>
        <p className="text-xs text-[#3366ff] mt-0.5 tracking-wide">
          {month} {year}
        </p>
      </div>
    </div>
  );
}

export default function PastShadows() {
  return (
    <div className="bg-black/60 backdrop-blur-[2px] w-full py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-xs tracking-[0.2em] uppercase text-[#3366ff] font-medium mb-2">
          Our history
        </p>
        <div className="h-[80px] flex items-center justify-center">
          <AnimatedText text="Past Shadows" />
        </div>
      </div>

      {/* Cards grid */}
      <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
        {pastShadows.map((item, index) => (
          <ShadowCard
            key={index}
            company={item.company}
            logo={item.logo}
            month={item.month}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
}