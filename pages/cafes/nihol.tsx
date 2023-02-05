import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";

const Nihol = () => {
  return (
    <div>
      <RestoranTitle
        subtitle="NIHOL"
        description="Lorem ipsum dolor sit amet consectetur. Eros commodo nulla dis vestibulum nisl eget amet molestie. Elit cras tincidunt urna donec a dis. Quis faucibus suspendisse malesuada feugiat."
        img="/assets/img/niholone.jpeg"
        img2="/assets/img/niholtwo.jpeg"
        img3="/assets/img/niholthree.jpeg"
        img4="/assets/img/niholthree.jpeg"
        img5="/assets/img/niholone.jpeg"
        img6="/assets/img/niholtwo.jpeg"
        instagram="https://www.instagram.com/nihol_cafe/?igshid=NDk5N2NlZjQ%3D"
        facebook="https://m.facebook.com/niholjoja.uz?tpclid=facebook.PAAaZ8QzEbRBjEiNiivRswUl341itVzrFkS-WDBhWfMWQMmKaMltK8TH81Vec"
        pdf="/assets/documents/nihol.pdf"
      />
    </div>
  );
};

export default Nihol;
