import React from "react"
import { restaurantes } from "../restaurantes"
import Resto from "./Resto"
const RestoCard = () => {
	return (
		<>
			<div className="restocard-header">
				<h2>Restaurantes</h2>
				<p className="restocard-description">
					Aca encontraras los restaurantes con mejor puntuación
				</p>
			</div>
			<div className="restocard-body">
				{restaurantes.map((rest) => (
					<Resto key={rest.idpoi} lista={rest} />
				))}
			</div>
		</>
	)
}

export default RestoCard
