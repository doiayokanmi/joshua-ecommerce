
import React from "react";

interface Props {
    title: string;
    icon: JSX.Element;
    func: () => void;
    extraStyle: string;
}
const Button = ({title, icon, func, extraStyle}: Props) => {
  return (
    <>
      <button onClick={func} className={`${extraStyle ? extraStyle : 'bg-primary w-full'} mb-4 flex justify-center items-center text-white p-2`}>
        {icon} {title}
      </button>
    </>
  );
};

export default Button;
