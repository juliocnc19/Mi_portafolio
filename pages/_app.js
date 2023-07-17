// add bootstrap css 
// own css files here
import '../public/css/style.css'
import 'normalize.css/normalize.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}