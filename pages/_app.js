import '../styles/globals.css'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
