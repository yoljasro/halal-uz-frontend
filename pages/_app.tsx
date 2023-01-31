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

const usePreviousRoute = () => {
  const { asPath } = useRouter();

  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return ref.current;
};

export default function App({ Component, pageProps }: AppProps) {
  const previousRoute = usePreviousRoute();
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Script type="text/javascript">
        {`window.replainSettings = { id: '048df61b-d542-4f8e-889a-2cf59dc2bb83' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js')`}
      </Script>

      <Layout>
      <Component {...pageProps} {...{ previousRoute: previousRoute }} />
      </Layout>
    </NextIntlProvider>
  );
}
