import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/layout";
import Head from "next/head";
import { AuthProvider } from "../context/auth-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
