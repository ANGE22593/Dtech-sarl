import React from 'react';

interface ComputerFrameProps {
  children: React.ReactNode;
  className?: string;
}

const ComputerFrame: React.FC<ComputerFrameProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-5xl mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-[6px] border-gray-700 ${className}`}>
      {/* Barre supérieure type navigateur */}
      <div className="flex items-center justify-start h-10 px-4 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-white h-[500px] overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default ComputerFrame;
