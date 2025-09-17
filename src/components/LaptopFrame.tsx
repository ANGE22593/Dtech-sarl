import React from "react";

interface LaptopFrameProps {
  children: React.ReactNode;
}

const LaptopFrame: React.FC<LaptopFrameProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="relative w-[360px] md:w-[800px] rounded-2xl bg-gray-900 shadow-2xl border-4 border-gray-700 overflow-hidden">
        {/* Écran */}
        <div className="bg-white w-full h-[500px] overflow-hidden">
          {children}
        </div>

        {/* Base du laptop */}
        <div className="w-full h-6 bg-gray-800 rounded-b-2xl mt-[-1px] flex items-center justify-center">
          <div className="w-20 h-1.5 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LaptopFrame;
