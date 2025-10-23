import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "recommended", label: "Recommended" },
  ];

  return (
    <div className="bg-[#363c43] rounded-[18px] shadow-[5px_5px_10px_rgba(0,0,0,0.4)] w-[720px] h-[316px]">
      <div className="flex items-center gap-2 px-6 pt-4 pb-4">
        <HelpCircle className="w-5 h-5 text-gray-400" />
        <div className="relative flex gap-1 bg-[#171717] rounded-[18px] p-1 w-full">
          {/* Sliding highlight */}
          <div
            className="absolute top-0 left-0 h-full w-[33.33%] bg-[#28292f] rounded-[14px] transition-all duration-300 ease-in-out"
            style={{
              transform: `translateX(${tabs.findIndex(tab => tab.id === activeTab) * 100}%)`,
            }}
          ></div>

          {/* Buttons */}
          {tabs.map((tab) => (
          <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative z-10 px-6 py-2 w-full text-center rounded-[14px] 
                      text-white text-opacity-80 transition-colors duration-300 ease-in-out
                      ${activeTab === tab.id 
                        ? ' text-opacity-100 shadow-md'  // active button
                        : 'hover:bg-gray-800 hover:text-opacity-100 ' // inactive buttons
                      }`}
        >
          {tab.label}
        </button>
        
        
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 text-[#969696] font-[Plus Jakarta Sans] text-[20px] leading-relaxed w-[611px] text-left m-auto h-[175px] overflow-y-auto-hidden">
  {activeTab === "about" && (
    <>
      <p>
        I’m <span className="text-white font-medium">Piyush Solanki</span>, 
        a passionate front-end developer who loves creating clean and responsive 
        web interfaces. I focus on building real-world projects that blend good design 
        with strong functionality.
      </p>
      <p>
        My goal is to master the MERN stack and work with modern tech that solves 
        everyday problems. I enjoy turning ideas into interactive experiences through 
        thoughtful code and design.
      </p>
    </>
  )}

  {activeTab === "experience" && (
    <>
      <p>
        I’ve built several projects using <span className="text-white">React, JavaScript, and Tailwind CSS</span> — 
        including a podcast site, job portal, mood tracker, and fitness web app.
      </p>
      <p>
        Through these projects, I’ve gained hands-on experience with state management, 
        responsive layouts, and API integration while focusing on performance and user experience.
      </p>
    </>
  )}

  {activeTab === "recommended" && (
    <>
      <p>
        Known for writing clean, maintainable code and learning fast, I bring consistency, 
        focus, and a growth mindset to every project I work on.
      </p>
      <p>
        I believe in simplicity, precision, and building products that make the web a little 
        smoother and smarter each time.
      </p>
    </>
  )}
</div>


    </div>
  );
};

export default About;
