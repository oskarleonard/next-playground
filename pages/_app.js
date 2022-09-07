import '../styles/globals.css';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ErrorBoundary from 'components/atoms/errorBoundary/ErrorBoundary';
import Navbar from 'components/molecules/navbars/navbar/Navbar';
import Footer from 'components/molecules/footer/Footer';
import MetaTags from 'components/molecules/metaTags/MetaTags';
import { minutes } from 'shared/utils/generalUtils/generalUtils';
import useScrollRestoration from 'components/hooks/useScrollRestoration/useScrollRestoration';
import styles from '../styles/app.module.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: minutes(5),
      staleTime: minutes(5),
    },
  },
});

function MyApp({ Component, pageProps, router }) {
  return (
    <ErrorBoundary>
      <CookiesProvider>
        <AppFrame Component={Component} pageProps={pageProps} router={router} />
      </CookiesProvider>
    </ErrorBoundary>
  );
}

export default MyApp;

const AppFrame = ({ Component, pageProps, router }) => {
  useScrollRestoration(router);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <MetaTags
          title={'Playground - Next.js'}
          description={
            'A playground for Next.js, testing out different libraries in a Next.js environment'
          }
        />
        <div className={styles.main}>
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};
