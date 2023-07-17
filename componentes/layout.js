import Nav from "./nav.js"
import Head from "next/head"


export default function Layout({children}){
  return(
      <>
        <Head>
          <title>Mi Portafolio</title>
          <meta name="description" content="Portafolio web hecho con next por Julio Nieto"/>
          <meta name="author" content="Julio Nieto"/>
          <meta name="keywords" content="Portafolio Next.js Julio Nieto"/>
        </Head>
        <Nav/>
        <main className="container-main">
          {children}
        </main>
        
      </>
    ) 
}
