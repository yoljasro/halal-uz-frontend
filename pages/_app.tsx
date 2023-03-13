import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { Layout } from "../components/Layout";

type PagePropsType = {
  messages: typeof import("../messages/en.json");
};

export default function App({ Component, pageProps }: AppProps<PagePropsType>) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Script type="text/javascript" id="script">
        {`window.replainSettings = { id: 'df4fee06-ab83-4c56-b22d-6d341558aff3' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js')`}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
}
