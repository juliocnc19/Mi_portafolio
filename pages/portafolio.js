import Link from "next/link"
import Layout from "../componentes/layout.js"
import {proyectos} from "../perfil.js"

export default function Portafolio(){
	return(
		<Layout>
			<div className="container-github">
			{
				proyectos.map(({url,titulo},id)=>(
					<div className="li-github">
						<h3>{titulo}</h3>
						<a href={url} target="_BLANK">{url}</a>
					</div>	
				))
			}
			</div>
		</Layout>
		)
}
