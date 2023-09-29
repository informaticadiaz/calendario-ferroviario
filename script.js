const calendarBody = document.getElementById("calendar-body");
const monthAndYear = document.getElementById("monthAndYear");
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Objeto para almacenar la descripción de los eventos por fecha
const eventos = {
    // Enero.
    "2023-01-12": {
        descripcion: "12 de enero de 1984, concesión del 1er ferrocarril en Argentina.",
        imagen: "ferrocarril.jpg"
    },
    "2023-01-14": {
        descripcion: "14 de enero de 1951, Perón inaugura más de 40 escuelas sindicales en todo el país",
        imagen: "ferrocarril.jpg"
    },
    "2023-01-23": {
        descripcion: "23 de enero de 1945, con el decreto 1940 Perón establece el derecho a los trabajadores del goce de vacaciones pagas.",
        imagen: "ferrocarril.jpg"
    },
    // Febrero
    "2023-02-19": {
        descripcion: "19 de febrero, cumpleaños Cristina Fernández de Kirchner.",
        imagen: "ferrocarril.jpg"
    },
    "2023-02-24": {
        descripcion: "24 de febrero de 1946, Perón gana las primeras elecciones. 24 de febrero año 1947) Perón proclama los derechos del trabajador.",
        imagen: "ferrocarril.jpg"
    },
    "2023-02-25": {
        descripcion: "25 de febrero, nacimiento de San Martín y de Néstor Kirchner.",
        imagen: "ferrocarril.jpg"
    },
    // Marzo
    "2023-03-01": {
        descripcion: "1 de marzo, Día de la trabajadora y el trabajador Ferroviario",
        imagen: "ferrocarril.jpg"
    },
    "2023-03-07": {
        descripcion: "7 de marzo, Día del trabajador Ferroportuario.",
        imagen: "ferrocarril.jpg"
    },
    "2023-03-08": {
        descripcion: "8 de marzo, Día internacional de la Mujer.",
        imagen: "ferrocarril.jpg"
    },
    "2023-03-11": {
        descripcion: "11 de marzo de 1973, el FREJULI gana las elecciones.",
        imagen: "ferrocarril.jpg"
    },
    "2023-03-16": {
        descripcion: "16 de marzo de 1949, Perón proclama la nueva constitución nacional.",
        imagen: "ferrocarril.jpg"
    },
    "2023-03-22": {
        descripcion: "22 de marzo, Cumpleaños de Mujica. Día mundial del agua.",
        imagen: "ferrocarril.jpg"
    },
    "2023-03-24": {
        descripcion: "24 de marzo, día de la Memoria, la verdad y la Justicia.",
        imagen: "ferrocarril.jpg"
    },
    // Abril
    "2023-04-02": {
        descripcion: "2 de abril, Día del veterano y los caídos en Malvinas.",
        imagen: "ferrocarril.jpg"
    },
    "2023-04-09": {
        descripcion: "9 de abril, Pascuas.",
        imagen: "ferrocarril.jpg"
    },
    "2023-04-15": {
        descripcion: "15 de abril, Fecha límite entrega de solicitudes por estudio nivel terciario y universitarios, especiales y de rehabilitación.",
        imagen: "ferrocarril.jpg"
    },
    "2023-04-17": {
        descripcion: "17 de abril, aniversario de la OSFE. Creada en 1944.",
        imagen: "ferrocarril.jpg"
    },
    "2023-04-24": {
        descripcion: "24 de abril, Día de la acción por tolerancia y el respeto de los pueblos.",
        imagen: "ferrocarril.jpg"
    },
    "2023-04-27": {
        descripcion: "27 de abril de 1979, aniversario del primer Paro general contra la dictadura militar.",
        imagen: "ferrocarril.jpg"
    },
    "2023-04-28": {
        descripcion: "28 de abril, Día mundial de la seguridad y la salud en el trabajo.",
        imagen: "ferrocarril.jpg"
    },
    // Mayo
    "2023-05-01": {
        descripcion: "1 de mayo, Día de la y el Trabajador.",
        imagen: "ferrocarril.jpg"
    },
    "2023-05-07": {
        descripcion: "7 de mayo, Nacimiento de Evita Perón.",
        imagen: "ferrocarril.jpg"
    },
    "2023-05-17": {
        descripcion: "17 de mayo, Día internacional contra la homofobia, la bifobia y la transfobia. Día mundial del reciclaje.",
        imagen: "ferrocarril.jpg"
    },
    "2023-05-18": {
        descripcion: "18 de mayo, Día de la escarapela.",
        imagen: "ferrocarril.jpg"
    },
    "2023-05-23": {
        descripcion: "23 de mayo de 1947, nace el partido justicialista.",
        imagen: "ferrocarril.jpg"
    },
    "2023-05-25": {
        descripcion: "25 de mayo de 1810, Día de la Revolución de Mayo. Año 2003 asunción de Néstor Kirchner.",
        imagen: "ferrocarril.jpg"
    },
    "2023-05-31": {
        descripcion: "31 de mayo, Fecha límite de entrega de formularios estímulo nivel secundario.",
        imagen: "ferrocarril.jpg"
    },
    // Junio
    "2023-06-02": {
        descripcion: "2 de junio, Día del bombero voluntario.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-03": {
        descripcion: "3 de junio, Día del Ni una Menos.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-04": {
        descripcion: "4 de Junio de 1946, Perón asume la primer presidencia.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-09": {
        descripcion: "9 de junio, Día de la resistencia Peronista.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-10": {
        descripcion: "10 de junio, día la reafirmación de los derechos Argentinos sobre Malvinas.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-12": {
        descripcion: "12 de junio de 1974, Perón hace su último discurso.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-14": {
        descripcion: "14 de junio de 1982 fin de la guerra de Malvinas.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-16": {
        descripcion: "16 de junio de 1955, bombardeo a la plaza de Mayo.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-17": {
        descripcion: "17 de junio paso a la inmortalidad de Güemes.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-20": {
        descripcion: "20 de junio, Día de la Bandera. Fallecimiento de Belgrano (año 1820). Año 1973 Perón vuelve definitivamente a la Argentina.",
        imagen: "ferrocarril.jpg"
    },
    "2023-06-28": {
        descripcion: "28 de junio, día del orgullo LGBTTIQ+.",
        imagen: "ferrocarril.jpg"
    },
    // Julio
    "2023-07-01": {
        descripcion: "1 de julio de 1974, paso a la inmortalidad de Juan Perón.",
        imagen: "ferrocarril.jpg"
    },
    "2023-07-09": {
        descripcion: "9 de julio, día de la independencia Argentina.",
        imagen: "ferrocarril.jpg"
    },
    "2023-07-20": {
        descripcion: "20 de julio, día del amigo.",
        imagen: "ferrocarril.jpg"
    },
    "2023-07-25": {
        descripcion: "25 de julio de 1949, fundación del partido justicialista.",
        imagen: "ferrocarril.jpg"
    },
    "2023-07-26": {
        descripcion: "26 de julio de 1952, paso a la inmortalidad de Evita. 26 de julio de 1949, proclamación del partido peronista femenino.",
        imagen: "ferrocarril.jpg"
    },
    "2023-07-29": {
        descripcion: "29 de julio de 1966 Noche de los bastones largos.",
        imagen: "ferrocarril.jpg"
    },
    //Agosto
    "2023-08-02": {
        descripcion: "2 de agosto de 1948, la CGT lanza candidatura PERON-PERON.",
        imagen: "ferrocarril.jpg"
    },
    "2023-08-12": {
        descripcion: "12 de agosto, día internacional de las juventudes.",
        imagen: "ferrocarril.jpg"
    },
    "2023-08-17": {
        descripcion: "17 de agosto de 1850, paso a la inmortalidad de San Martín.",
        imagen: "ferrocarril.jpg"
    },
    "2023-08-20": {
        descripcion: "20 de agosto, día de las infancias.",
        imagen: "ferrocarril.jpg"
    },
    "2023-08-23": {
        descripcion: "23 de agosto de 1962, primer desaparecido de la dictadura trabajador de la UOM Felipe Vallese.",
        imagen: "ferrocarril.jpg"
    },
    "2023-08-28": {
        descripcion: "28 de agosto de 1948 Evita proclama los derechos de la ancianidad.",
        imagen: "ferrocarril.jpg"
    },
    "2023-08-29": {
        descripcion: "29 de agosto de 1857, hace su viaje inaugural LA PORTEÑA el primer tren en circular en la Argentina.",
        imagen: "ferrocarril.jpg"
    },
    "2023-08-30": {
        descripcion: "30 de agosto, Día de los Ferrocarriles Argentinos.",
        imagen: "ferrocarril.jpg"
    },
    "2023-08-31": {
        descripcion: "31 de agosto de 1951, Renunciamiento de Eva.",
        imagen: "ferrocarril.jpg"
    },
    // Septiembre
    "2023-09-01": {
        descripcion: "1 de septiembre día del jubilado Ferroviario.",
        imagen: "ferrocarril.jpg"
    },
    "2023-09-16": {
        descripcion: "16 de septiembre de 1955, Golpe de estado a Perón. Año 1969 huelga Ferroviaria de 19 días. Año 1976 Noche de los lápices.",
        imagen: "ferrocarril.jpg"
    },
    "2023-09-21": {
        descripcion: "21° Cumpleaños de Curcio, Día del estudiante y de la primavera.",
        imagen: "ferrocarril.jpg"
    },
    "2023-09-22": {
        descripcion: "22 de septiembre de 1982 Marcha por Paz, pan y trabajo",
        imagen: "ferrocarril.jpg"
    },
    "2023-09-23": {
        descripcion: "23 de septiembre tercer triunfo electoral de Perón, Promulgación de la ley 13010 (voto Femenino)",
        imagen: "ferrocarril.jpg"
    },
    "2023-09-25": {
        descripcion: "25 de septiembre de 1973, asesinato de José Ignacio Rucci secretaria general de la CGT.",
        imagen: "ferrocarril.jpg"
    },
    "2023-09-27": {
        descripcion: "27 de septiembre de 1930, Aniversario nacimiento de la CGT.  Primer secretario general es de la Unión Ferroviaria LUIS CERRUTI.",
        imagen: "ferrocarril.jpg"
    },
    // Octubre
    "2023-10-06": {
        descripcion: "6 de octubre, Aniversario de la Unión Ferroviaria.",
        imagen: "ferrocarril.jpg"
    },
    "2023-10-08": {
        descripcion: "8 de octubre de 1895, nace Juan Domingo Perón.",
        imagen: "ferrocarril.jpg"
    },
    "2023-10-12": {
        descripcion: "12 de octubre, Día del respeto a la diversidad cultural. Año 1973 Perón asume su tercer presidencia.",
        imagen: "ferrocarril.jpg"
    },
    "2023-10-15": {
        descripcion: "15 de octubre, de 1944, se da a conocer el estatuto del peón rural.",
        imagen: "ferrocarril.jpg"
    },
    "2023-10-17": {
        descripcion: "17 de octubre, Día de la Lealtad. Año 1945, día que Perón es liberado de la isla Martin García por movilización obrera.",
        imagen: "ferrocarril.jpg"
    },
    "2023-10-23": {
        descripcion: "23 de octubre de 1951, Inauguración del ferrocarril Roca electrificado.",
        imagen: "ferrocarril.jpg"
    },
    // Noviembre
    "2023-11-01": {
        descripcion: "1 de noviembre, Día de todos los Santos.",
        imagen: "ferrocarril.jpg"
    },
    "2023-11-17": {
        descripcion: "17 de noviembre, Día del militante.",
        imagen: "ferrocarril.jpg"
    },
    "2023-11-19": {
        descripcion: "19 de noviembre de 1845, nace el ferrocarril en Argentina.",
        imagen: "ferrocarril.jpg"
    },
    "2023-11-20": {
        descripcion: "20 de noviembre, Día de la Soberanía Nacional. Año 1845, batalla de la Vuelta de Obligado.",
        imagen: "ferrocarril.jpg"
    },
    "2023-11-22": {
        descripcion: "22 de noviembre, Día de la música.",
        imagen: "ferrocarril.jpg"
    },
    "2023-11-25": {
        descripcion: "25 de noviembre, Día internacional de la eliminación de la violencia contra la mujer.",
        imagen: "ferrocarril.jpg"
    },
    // Diciembre
    "2023-12-02": {
        descripcion: "2 de diciembre de 2007, asunción de Cristina Fernández de Kirchner como presidenta.",
        imagen: "ferrocarril.jpg"
    },
    "2023-12-08": {
        descripcion: "8 de diciembre, Día de la virgen.",
        imagen: "ferrocarril.jpg"
    },
    "2023-12-09": {
        descripcion: "9 de diciembre de 1945, día de la democracia.",
        imagen: "ferrocarril.jpg"
    },
    "2023-12-10": {
        descripcion: "10 de diciembre de 1983, asunción de Raúl Alfonsín.",
        imagen: "ferrocarril.jpg"
    },
    "2023-12-17": {
        descripcion: "17 de diciembre de 2001, estallido social.",
        imagen: "ferrocarril.jpg"
    },
    "2023-12-20": {
        descripcion: "20 de diciembre de 2001, renuncia de De la Rúa.",
        imagen: "ferrocarril.jpg"
    },
    "2023-12-24": {
        descripcion: "24 de diciembre, Nochebuena.",
        imagen: "ferrocarril.jpg"
    },
    "2023-12-25": {
        descripcion: "25 de diciembre, Navidad.",
        imagen: "ferrocarril.jpg"
    },
    "2023-12-31": {
        descripcion: "31 de diciembre, Fin de año.",
        imagen: "ferrocarril.jpg"
    }
};


function generateCalendar(year, month) {
    calendarBody.innerHTML = "";
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let dayCounter = 1;

    monthAndYear.textContent = `${getMonthName(month)} ${year}`;

    let row; // Variable para la fila actual

    for (let i = 0; i < 6; i++) {
        row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDayOfMonth.getDay()) {
                cell.textContent = "";
            } else if (dayCounter <= daysInMonth) {
                const cellDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCounter).padStart(2, '0')}`;
                cell.textContent = dayCounter;
                cell.setAttribute("data-date", cellDate);
                dayCounter++;

                // Comprueba si la fecha tiene un evento y agrega una clase si es así
                if (eventos[cellDate]) {
                    cell.classList.add("event-date");
                }
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);

        // Si hemos completado todos los días del mes, sal del bucle
        if (dayCounter > daysInMonth) {
            break;
        }
    }

    // Agrega un evento de clic a todas las celdas
    const cells = calendarBody.querySelectorAll("td");
    cells.forEach((cell) => {
        cell.addEventListener("click", handleDateClick);
    });
}


function getMonthName(month) {
    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    return months[month];
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
}

function handleDateClick(event) {
    const dateClicked = event.target.getAttribute("data-date");
    if (dateClicked) {
        // Formatea la fecha para que coincida con el formato en el objeto eventos (agrega ceros a la izquierda)
        const formattedDate = formatDate(dateClicked);

        // Obtén la información del evento en función de la fecha formateada
        const eventInfo = eventos[formattedDate];

        // Agrega un párrafo con la descripción del evento y una imagen dinámica en función de la fecha
        const eventContainer = document.getElementById("event-container");
        if (eventInfo) {
            const { descripcion, imagen } = eventInfo;
            eventContainer.innerHTML = `
                <p>Fecha seleccionada: ${formattedDate}</p>
                <p>${descripcion}</p>
                <img src="${imagen}" alt="Evento" class="img-calendario">
            `;
        } else {
            eventContainer.innerHTML = `
                <p>Fecha seleccionada: ${formattedDate}</p>
                <p>No hay eventos para esta fecha.</p>
            `;
        }
    }
}


// Función para formatear la fecha (agrega ceros a la izquierda)
function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

// Botones para navegar entre los meses
document
    .getElementById("nextMonthBtn")
    .addEventListener("click", nextMonth);
document
    .getElementById("prevMonthBtn")
    .addEventListener("click", prevMonth);

// Genera el calendario actual
generateCalendar(currentYear, currentMonth);
