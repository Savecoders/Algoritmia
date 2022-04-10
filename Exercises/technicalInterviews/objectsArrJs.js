class Calendar {
	constructor(id, data) {
		this.data = data;
		this.cells = [];
		this.workDaysOfMonth = [];
		this.selectedDate = null;
		this.showTemplate();
		this.showCells();
		this.prueba();
	}

	generateWorkDay() {}

	showTemplate() {}

	getTemplate() {
		let template;
		return template;
	}

	addEventListenerControls() {}

	changeMonth(next = true) {}

	showCells() {}

	generateDate(monthToShow = moment()) {}

	addEventListenerToCells() {}

	prueba() {
		let arrayDatos = this.data;
		/*for(let indice of arrayDatos){
            console.log(indice);
        }*/
	}

	getElement() {
		return this.elCalendar;
	}

	value() {
		return this.selectedDate;
	}
}

let variable = [
	{ id: '1', fecha: '2021-06-23', horaInicio: '07:00:00', horaFinal: '13:00:00' },
	{ id: '5', fecha: '2021-06-25', horaInicio: '07:00:00', horaFinal: '13:00:00' },
	{ id: '6', fecha: '2021-06-28', horaInicio: '07:00:00', horaFinal: '13:00:00' },
	{ id: '7', fecha: '2021-07-01', horaInicio: '07:00:00', horaFinal: '13:00:00' },
	{ id: '8', fecha: '2021-07-03', horaInicio: '07:00:00', horaFinal: '13:00:00' },
	{ id: '9', fecha: '2021-07-05', horaInicio: '07:00:00', horaFinal: '13:00:00' },
];

let calendar = new Calendar('calendar', variable);
// console.log(variable);
// console.log(variable[0]);
