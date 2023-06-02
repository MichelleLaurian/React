const Resto = ({ lista }) => {
	console.log(lista)

	return (
		<>
			<div className="restocard-body-grid">
				<h3>{lista.title}</h3>
				<p className="restocard-body-desc">{lista.description}</p>
				<p className="restocard-body-address">Direccion: {lista.address}</p>
				<button className="restocard-body-buttonmas">VER MÁS</button>
				{/* <button>{favorite ? "🎉" : "❤"}</button> */}
			</div>
		</>
	)
}

export default Resto
