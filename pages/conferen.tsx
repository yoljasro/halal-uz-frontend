import * as React from "react";
// styles
import styles from "../styles/newsMain.module.sass";
// next
import Image from "next/image";
import type { NextPage, GetStaticProps } from "next";
//component
import { MainPageTitle } from "../components/MainPageTitle";
// mui
import { Button } from "@material-ui/core";

const Conferen = () => {
    return (
        <div className={styles.newsMain}>
            <h1 className={styles.newsMain__title}>
                Международная неделя паломнического туризма
            </h1>
            <div className={styles.newsMain__images}>
                <Image
                    src={"/assets/img/konferensiya.png"}
                    alt="kazanImage"
                    width={600}
                    height={400}
                />
                <Image
                    src={"/assets/img/fff.png"}
                    alt="kazanImage"
                    width={600}
                    height={400}
                />

            </div>
            <div className={styles.newsMain__conferen}>
                <video width="250" height="450" controls autoPlay>
                    <source src={"/assets/video/konferensiya.mp4"} />
                    <source src={"/assets/video/konferensiya.mp4"} />
                </video>

                <video width="250" height="450" controls autoPlay>
                    <source src={"/assets/video/konferensiya2.mp4"} />
                    <source src={"/assets/video/konferensiya2.mp4"} />
                </video>
            </div>
            <div className={styles.newsMain__text}>
                <p className={styles.newsMain__description}>
                    На конференции выступил председатель Всемирного комитета Халяль. ✅
                    <br />
                    Нам очень приятно, когда мы вносим свой вклад в развитие нашей страны.
                    <br /> <br />
                </p>
            </div>
        </div>
    );
};
export default Conferen;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default,
        },
    };
};
