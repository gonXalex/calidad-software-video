
function create(){

	var wrap = document.querySelector('.wrap'),
		// deleteRegi = document.querySelector('.delete-form');	

	cabecera = document.createElement('div'),
	titulo = document.createElement('h2'),
	consulta = document.createElement('input');

	titulo.insertAdjacentHTML('afterbegin', 'Gestion de Transacciones');
	titulo.className = 'titulo'; cabecera.className = 'cabecera';
	consulta.placeholder = "Escriba su consulta..."

	cabecera.appendChild(titulo);
	cabecera.appendChild(consulta);
	cabecera.appendChild(buttons())
	wrap.insertBefore(cabecera, wrap.childNodes[0]);
	wrap.appendChild(modalForm());
	// wrap.appendChild(deleteReg());	
}

function buttons(){

	var btnDiv = document.createElement('div'),
		//btnText = document.createElement('span'),
		btn = document.createElement('span');
		btn.insertAdjacentHTML('afterbegin', 'Nuevo');
		btn.className = 'btn btn-nuevo'; btnDiv.className = 'btn-div';

		btnDiv.appendChild(btn);
	// }
	return btnDiv;
}

//-------------------------------Table Creation

function table(){

	var columnas = ["Opciones", "Monto", "Fecha", "Transaccion", "Deduccion", "Ingreso", "Empleado"],
		theTable = document.querySelector('.tabla-empleado'),
		tHeadRow = document.createElement('div'),
		tHeadCell;
		tHeadRow.className = 'row';

	for(i = 0 ; i < columnas.length ; i++ ){

		tHeadCell = document.createElement('div');
		tHeadCell.insertAdjacentHTML('afterbegin', columnas[i]);
		// theTable.appendChild(tHeadCell);
		theTable.insertBefore(tHeadCell, theTable.childNodes[0]);

		tHeadCell.className = 'cell head-cell';
	}
	// theHeadCell.className = 'header-cell';
	
}




create();
table();
modalFormShower();




