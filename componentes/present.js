import Image from "next/image"

export default function Present(){
	return(
			<header className="container-present">
				<div className="img-present">
				<Image 
				src="/perfil.jpg"
				width={160}
				height={200}
				alt="Foto de perfil"
				/>
				</div>

				<div className="text-present">
					<h1>Julio Cesar Nieto</h1>
					<h3>Desarrollador web</h3>
					<p>Estudiante en el area de ingenieria en sistemas con conocimientos en el area de
					programacion web tanto fron-end como back-end utilizando javascript, html, css, python
					y algunos de sus frameworks y librerias correspondientes</p>
				</div>
			</header>
		)
}