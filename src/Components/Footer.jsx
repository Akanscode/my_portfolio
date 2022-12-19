import React, { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <section id="footer" className="bg-black w-full">
      <div className="container mx-auto py-6">
        <div className="items-center justify-center flex ">
          <span className="text-white  p-lg text-center">
            Copyright &copy; {date} KanscodeHUB, All rights reserved..
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
