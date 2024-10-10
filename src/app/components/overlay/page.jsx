import React from "react";

const Overlay = ({children}) => {
  return (
    <div className="overlay absolute left-0 top-0 opacity-0 w-full h-full transtion duration-300 ease-in bg-indigo-500 group-hover:opacity-100">
      <div className="w-full h-full flex justify-center items-start flex-col gap-4 py-6 px-10">
        {children}
      </div>
    </div>
  );
};

export default Overlay;
