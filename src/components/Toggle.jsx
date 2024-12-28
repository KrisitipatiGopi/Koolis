import React, { useState } from "react";

const Toggle = () => {
    const [isShow, setIsShow] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-10">
        {isShow ? "Hide Paragraph" : "Show Paragraph"} <span className="cursor-pointer" onClick={()=>setIsShow(!isShow)}>{isShow ? "⬆️" : "⬇"}</span>
      </h1>
      {isShow ? <p className="flex flex-wrap w-[30%] mt-5">
        The rapid advancement of technology has significantly transformed the
        way we live and work. From smartphones and wearable devices to
        artificial intelligence and cloud computing, innovations are becoming an
        integral part of our daily lives. These advancements have not only
        improved communication and efficiency but also opened new opportunities
        for education, healthcare, and entertainment. However, with these
        benefits come challenges, such as data privacy concerns and the need for
        constant upskilling to stay relevant in a fast-changing world. Striking
        a balance between embracing technology and addressing its implications
        is essential for a sustainable future.
      </p> : ""}
      
    </div>
  );
};

export default Toggle;
