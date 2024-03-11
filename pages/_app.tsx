import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { wrapper } from "redux/store";
import DefaultLayout from "layout/DefaultLayout";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingScreen from "components/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
export default wrapper.withRedux(appWithTranslation(MyApp));
