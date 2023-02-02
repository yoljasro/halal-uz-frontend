import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";

const Apexpizza = () => {
  return (
    <div>
      <RestoranTitle
        subtitle="apexpizza"
        description="Lorem ipsum dolor sit amet consectetur. Eros commodo nulla dis vestibulum nisl eget amet molestie. Elit cras tincidunt urna donec a dis. Quis faucibus suspendisse malesuada feugiat."
        img="/assets/img/ap1.jpeg"
        img2="/assets/img/ap2.jpeg"
        img3="/assets/img/ap3.jpeg"
        img4="/assets/img/ap4.jpeg"
        img5="/assets/img/ap5.jpeg"
        img6="/assets/img/ap6.jpeg"
        instagram="https://instagram.com/apexpizza.uz?igshid=NDk5N2NlZjQ="
        facebook="https://www.facebook.com/apexpizza.uz?mibextid=LQQJ4d"
      />
    </div>
  );
};

export default Apexpizza;
