
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

//LOS NUEVOS CAMBIOS!!

function createForm(){

	var textBox,
		dropList = document.createElement('select'),
		dropOption,
		label,
		form = document.createElement('form'),
		list,
		space,
		submitRegistro = document.createElement('div'),
		columnas = ["Empleado", "Ingreso", "Deduccion", "Transaccion", "Fecha", "Monto"];

	form.className = "form-wrap";
	submitRegistro.className = "btn submit-form";
	submitRegistro.insertAdjacentHTML('afterbegin','Guardar');


	for(i = 0 ; i < columnas.length ; i++ ){

		label = document.createElement('label');
		space = document.createElement("br");
		textBox = document.createElement('input');
			textBox.placeholder = columnas[i]+"...";
			textBox.setAttribute("name", columnas[i]);
		list = document.createElement('div');
		

		label.insertAdjacentHTML('afterbegin', columnas[i]+":");

		list.appendChild(label);
		list.appendChild(space);
		list.appendChild(textBox); 
		form.appendChild(list);

		label.className = "label-form"; 
		list.className = "list-div-form";
		textBox.className = "textBox-form";

	}
	
	form.setAttribute("action", "create.php");
	form.setAttribute("method", "post");
	submitRegistro.setAttribute("type", "button");
	
	submitRegistro.addEventListener("click", function submitForm(){
		form.submit();
	})

	form.appendChild(submitRegistro);
	
	return form;
}


function modalForm(){

	var modalDiv = document.createElement('div'),
		modalWindow = document.createElement('div'),
		modalHeader = document.createElement('div'),
		modalFooter = document.createElement('div'),
		modalTitulo = document.createElement('h2'),
		closeModal = document.createElement('span'),
		saveBtn = document.querySelector('.submit-form');

	closeModal.insertAdjacentHTML('afterbegin', 'x');
	modalTitulo.insertAdjacentHTML('afterbegin', 'Agregar Registro');

	modalWindow.className = "modal-window"; closeModal.className = "close-modal";
	modalDiv.className = "modal-wrap"; modalHeader.className = "modal-header";
	modalFooter.className = "modal-foot";

	modalWindow.appendChild(modalHeader);
	modalHeader.appendChild(closeModal);
	modalHeader.appendChild(modalTitulo);


	modalWindow.appendChild(createForm());
	// modalWindow.appendChild(modalFooter);
	// modalFooter.appendChild(saveBtn);

	
	modalDiv.appendChild(modalWindow);

	return modalDiv;

}
function modalFormShower(){

	var modalDiv = document.querySelector('.modal-wrap'),
		modalWindow = document.querySelector('.modal-window'),
		closeModal = document.querySelector('.close-modal'),
		btnModal = document.querySelector('.btn-nuevo');


	btnModal.addEventListener("click", function showModal(){

		modalDiv.style.display = "block";
		// alert('SUCCESS!');
	});

	// btnModal.onClick = function(){
	// 	modalDiv.style.display = "block";
	// }

	closeModal.addEventListener("click", function closeModal(){

		modalDiv.style.display = "none";
	});

	document.onClick = function(event){
		if (event.target == modalDiv){
			modalDiv.style.display = "none";
			alert('sss');
		}
	};
}


create();
table();
modalFormShower();




