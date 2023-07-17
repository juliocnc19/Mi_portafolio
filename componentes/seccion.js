export default function Seccion(){
	return(
			<div className="seccion-container">
				<div className="habilidades-container">
					<h2>Habilidades</h2>
					<ul className="ul-progress">
						<li className="li-progress">
							<label>Html y CSS</label>
							<progress className="progress-bar" id="html" max="100" value="80"></progress>
						</li>

						<li className="li-progress">
							<label>Javascript</label>
							<progress className="progress-bar" id="javascript" max="100" value="80"></progress>
						</li>
					
						<li className="li-progress">
							<label>Python</label>
							<progress className="progress-bar" id="python" max="100" value="50"></progress>
						</li>

						<li className="li-progress">
						 	<label>Node.js</label>
							<progress className="progress-bar" id="node" max="100" value="70"></progress>
						</li>

						<li className="li-progress">
							<label>Express</label>
							<progress className="progress-bar" id="express" max="100" value="70"></progress>
						</li>

						<li className="li-progress">
							<label>Django</label>
							<progress className="progress-bar" id="django" max="100" value="40"></progress>
						</li>

						<li className="li-progress">
							<label>PHP</label>
							<progress className="progress-bar" id="php" max="100" value="40"></progress>
						</li>

						<li className="li-progress">
							<label>Next</label>
							<progress className="progress-bar" id="next" max="100" value="60"></progress>
						</li>
					</ul>
				</div>

				<div className="experiencia-container">
					<h2>Experiencia</h2>
						
						<ul>
						<h3>Formacion</h3>
							<li>
								<p>U.E.P José Angel de Alamo - Bachillerato (2015-2020)</p>
							</li>

							<li>
								<p>Universidad Nacional Experimental Romulo Gallegos - Grado en Ingenieria en sistemas(2020-actualidad)</p>
							</li>
						</ul>

						<ul>
						<h3>Idiomas</h3>
							<li>
								<p>Ingles - nivel basico - intermedio</p>
							</li>
						</ul>

						<ul>
						<h3>Resumen de herramientas</h3>
							<li>
								<p>Manejor tanto frameworks de back-end como front-end tales como Express,
								Next y React por parte de Javascript y Django por porte de Python ademas de conocimientos
								en diferentes gestores de bases de datos como MySQL, Sqlite3 y Mongodb. Tambien manejo
								Git y sistemas operativos Linux, es decir que se manejar la terminal y mayoria de herramientas
								que estos contengan.Ademas, de conocimientos de servicio en la nube. </p>
							</li>
						</ul>
				</div>

			</div>
		)
}
