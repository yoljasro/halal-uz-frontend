import React from "react";
import { RestoranTitle } from "../../components/restoranTitle";
// next components
import Image from "next/image";
import Link from "next/link";

const Khanahmad = () => {
  return (
    <div>
      <RestoranTitle 
        subtitle="KHAN AHMAD"
        description="Lorem ipsum dolor sit amet consectetur. Eros commodo nulla dis vestibulum nisl eget amet molestie. Elit cras tincidunt urna donec a dis. Quis faucibus suspendisse malesuada feugiat."
        img="/assets/img/ahmad1.jpg"
        img2="/assets/img/ahmad2.jpg"
        img3="/assets/img/ahmad3.jpg"
        img4="/assets/img/ahmad4.jpg"
        img5="/assets/img/ahmad5.jpg"   
        img6="/assets/img/ahmad6.jpg"
        instagram="https://instagram.com/khanahmad_restaurant?igshid=NDk5N2NlZjQ="
        facebook="https://www.facebook.com/profile.php?id=100054751930596&mibextid=LQQJ4d"
      />
    </div>
  );
};

export default Khanahmad;
