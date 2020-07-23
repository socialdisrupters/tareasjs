(function(){
	// Constante
	const lista = document.getElementById("lista"),
		texto = document.getElementById("texto"),
		btnLista = document.getElementById("btn-agregar");

	// Funciones
	const agregarLista = function(){
		const Lista = texto.value,
			nuevaLista = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(Lista);

		if (Lista === "") {
			texto.setAttribute("placeholder", "Agrega una lista valida");
			texto.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva lista (li)
		nuevaLista.appendChild(enlace);
		// Agregamos la nueva lista
		lista.appendChild(nuevaLista);

		texto.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};

	const eliminarLista = function(){
		this.parentNode.removeChild(this);
	};

	// Agregar Lista
	btnLista.addEventListener("click", agregarLista);

	// Comprobar Input
	texto.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarLista);
	}
}());