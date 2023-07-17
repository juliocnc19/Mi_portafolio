import Link from "next/link"

export default function Nav(){
  return (
    <nav className="nav-container">

      <ul className="ul-nav">
        <li className="li-nav">
          <Link href="/" className="link">Principal</Link>
        </li>

        <li className="li-nav">
          <Link href="/portafolio" className="link">portafolio</Link>
        </li>
        
        <li className="li-nav">
          <Link href="/contacto" className="link">Contacto</Link>
        </li>
        
      </ul>
        
    </nav>
    )

}
