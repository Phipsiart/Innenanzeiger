import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <ProgressBar
        height="4px"
        color="#000"
        options={{ showSpinner: false }}
        shallowRouting
      />
   <Component {...pageProps} />
 </>
  )
}
