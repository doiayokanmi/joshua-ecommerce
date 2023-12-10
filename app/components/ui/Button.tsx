
import React from "react";

interface Props {
    title: string;
    icon: JSX.Element;
    func: () => void;
}
const Button = ({title, icon, func}: Props) => {
  return (
    <>
      <button onClick={func} className="bg-primary mb-4 w-full flex justify-center items-center text-white p-2">
        {icon} {title}
      </button>
    </>
  );
};

export default Button;
