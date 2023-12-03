import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <>
      <p className="py-2 inline-block mr-12 border-b-2 border-primary uppercase font-bold">
        {title}
      </p>
    </>
  );
};

export default Heading;
