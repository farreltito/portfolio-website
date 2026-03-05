import React from "react";
import { TIMELINE } from "../constants";
import { TimelineItem } from "../types";

const TimelineCard: React.FC<{
  item: TimelineItem;
  side?: "left" | "right";
  isMobile?: boolean;
}> = ({ item, side, isMobile }) => (
  <div
    className={`w-full ${isMobile ? "" : "md:w-[45%]"} bg-white border-2 border-black p-4 md:p-5 neo-shadow hover:neo-shadow-lg transition-all transform hover:-rotate-1 ${!isMobile && side === "left" ? "md:mr-8" : !isMobile ? "md:ml-8" : ""}`}
  >
    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 md:mb-3 gap-1.5">
      <div className="flex gap-2">
        <span
          className={`text-[8px] md:text-[10px] font-black px-2 py-0.5 neo-border shadow-[1px_1px_0_0_#000] md:shadow-[2px_2px_0_0_#000] ${item.type === "experience" ? "bg-blue-300" : "bg-pink-300"}`}
        >
          {item.type.toUpperCase()}
        </span>
        <span className="font-black text-[9px] md:text-xs bg-yellow-200 px-2 border-2 border-black">
          {item.date}
        </span>
      </div>
    </div>
    <h3 className="text-sm sm:text-base md:text-xl font-black mb-1 leading-tight uppercase tracking-tight">
      {item.title}
    </h3>
    <h4 className="text-xs sm:text-sm md:text-base font-bold text-blue-600 mb-2">
      {item.subtitle}
    </h4>
    <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
      {item.description}
    </p>
  </div>
);

const TimelineSection: React.FC<{
  items: TimelineItem[];
  title: string;
  color: string;
}> = ({ items, title, color }) => (
  <div className="mb-10 last:mb-0">
    <div className="flex items-center gap-3 mb-6">
      <h3
        className={`px-3 py-1 text-sm md:text-lg font-black neo-border neo-shadow ${color} uppercase`}
      >
        {title}
      </h3>
      <div className="flex-grow h-0.5 bg-black opacity-20"></div>
    </div>
    <div className="space-y-6">
      {items.map((item) => (
        <TimelineCard key={item.id} item={item} isMobile={true} />
      ))}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  const experiences = TIMELINE.filter((i) => i.type === "experience");
  const educations = TIMELINE.filter((i) => i.type === "education");

  return (
    <section
      id="timeline"
      className="py-12 md:py-24 px-4 max-w-5xl mx-auto overflow-hidden"
    >
      <div className="flex justify-center items-center mb-10 md:mb-20 gap-3">
        <div className="h-1 w-6 md:w-16 bg-black"></div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center uppercase tracking-tighter">
          MY{" "}
          <span className="text-pink-600 underline decoration-2 md:decoration-8 decoration-black">
            JOURNEY
          </span>
        </h2>
        <div className="h-1 w-6 md:w-16 bg-black"></div>
      </div>

      {/* MOBILE & TABLET VERSION: Stacked Cards, No Line, No Dots */}
      <div className="lg:hidden">
        <TimelineSection
          items={experiences}
          title="Work Experience"
          color="bg-blue-300"
        />
        <TimelineSection
          items={educations}
          title="Education History"
          color="bg-pink-300"
        />
      </div>

      {/* DESKTOP VERSION (Large Screens): Central Zig-Zag with Line and Dots */}
      <div className="hidden lg:block relative">
        {/* Modern Stylized Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_50%,#fde047_50%)] bg-[length:100%_40px] animate-[scrollLine_20s_linear_infinite]"></div>
        </div>

        <div className="space-y-16">
          {TIMELINE.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between w-full relative ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-[45%]"></div>

              {/* Central Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-black z-10 rotate-45 flex items-center justify-center neo-shadow">
                <div
                  className={`w-4 h-4 rotate-0 ${item.type === "experience" ? "bg-blue-500" : "bg-pink-500"}`}
                ></div>
              </div>

              <TimelineCard
                item={item}
                side={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
