import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";

const Sariqbola = () => {
  return (
    <div>
      <RestoranTitle 
        subtitle="SARIQ BOLA"
        description="Lorem ipsum dolor sit amet consectetur. Eros commodo nulla dis vestibulum nisl eget amet molestie. Elit cras tincidunt urna donec a dis. Quis faucibus suspendisse malesuada feugiat."
        img="/assets/img/sariq1.jpeg"
        img2="/assets/img/sariq2.jpeg"
        img3="/assets/img/sariq3.jpeg"
        img4="/assets/img/sariq4.jpeg"
        img5="/assets/img/sariq5.jpeg"
        img6="/assets/img/sariq6.jpeg"
        instagram="https://www.instagram.com/sariqbola_pizza/"
        facebook="https://www.facebook.com/sariqbolapizza/"
        pdf="/assets/documents/sariq.pdf"
      />
    </div>
  );
};

export default Sariqbola;
