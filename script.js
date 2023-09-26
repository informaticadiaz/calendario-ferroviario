const calendarBody = document.getElementById("calendar-body");
const monthAndYear = document.getElementById("monthAndYear");
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Objeto para almacenar la descripción de los eventos por fecha
const eventos = {
    // Enero.
    "2023-01-12": "12 de enero de 1984, concesión del 1er ferrocarril en Argentina.",
    "2023-01-14": "14 de enero de 1951, Perón inagura mas de 40 escuelas sindicales en todo el país",
    "2023-01-23": "23 de enero de 1945, con el decreto 1940 Perón establece el derecho a los trabajadores del goce de vacaciones pagas.",
    // Febrero
    "2023-02-19": "19 de febrero, cumpleaños Cristina Fernández de Kirchner.",
    "2023-02-24": "24 de febrero de 1946, Peron gana las primeras elecciones. 24 de febrero año 1947) Perón procalama los derechos del trabajador.",
    "2023-02-25": "25 de febrero, nacimiento de San Martín y de Néstor Kirchner. ",
    // Marzo
    "2023-03-01": "1 de marzo, Dia de la trabajadora y el trabajador Ferroviario",
    "2023-03-07": "7 de marzo, Día del trabajador Ferroportuario.",
    "2023-03-08": "8 de marzo, Día internacional de la Mujer.",
    "2023-03-11": "11 de marzo de 1973, el FREJULI gana las elecciones.",
    "2023-03-16": "16 de marzo de 1949, Perón proclama la nueva constitución nacional.",
    "2023-03-22": "22 de marzo, Cumpleaños de Mujica. Día mundial del agua.",
    "2023-03-24": "24 de marzo, día de la Memoria, la verdad y la Justicia.",
    // Abril
    "2023-04-02": "2 de abril, Día del veterano y los caídos en Malvinas.",
    "2023-04-09": "9 de abril, Pascuas.",
    "2023-04-15": "15 de abril, Fecha límite entrega de solicitudes por estudio nivel terciario y universitarios, especiales y de rehabilitación.",
    "2023-04-17": "17 de abril, aniversario de la OSFE. Creada en 1944.",
    "2023-04-24": "24 de abril, Día de la acción por tolerancia y el respeto de los pueblos.",
    "2023-04-27": "27 de abril de 1979, aniversario del primer Paro general contra la dictadura militar.",
    "2023-04-28": "28 de abril, Día mundial de la seguridad y la salud en el trabajo.",
    // Mayo
    "2023-05-01": "1 de mayo, Día de la y el Trabajador.",
    "2023-05-07": "7 de mayo, Nacimiento de Evita Perón.",
    "2023-05-17": "17 de mayo, Día internacional contra la homofobia, la bifobia y la transfobia. Día mundial del reciclaje.",
    "2023-05-18": "18 de mayo, Día de la escarapela.",
    "2023-05-23": "23 de mayo de 1947, nace el partido justicialista.",
    "2023-05-25": "25 de mayo de 1810, Día de la Revolución de Mayo. Año 2003 asunción de Néstor Kirchner.",
    "2023-05-31": "31 de mayo, Fecha límite de entrega de formularios estímulo nivel secundario.",
    // Junio
    "2023-06-02": "2 de junio, Día del bombero voluntario.",
    "2023-06-03": "3 de junio, Día del Ni una Menos.",
    "2023-06-04": "4 de Junio de 1946, Perón asume la primer presidencia.",
    "2023-06-09": "9 de junio, Día de la resistencia Peronista.",
    "2023-06-10": "10 de junio, día la reafirmación de los derechos Argentinos sobre Malvinas.",
    "2023-06-12": "12 de junio de 1974, Perón hace su último discurso.",
    "2023-06-14": "14 de junio de 1982 fin de la guerra de Malvinas.",
    "2023-06-16": "16 de junio de 1955, bombardeo a la plaza de Mayo.",
    "2023-06-17": "17 de junio paso a la inmortalidad de Güemes.",
    "2023-06-20": "20 de junio, Día de la Bandera. Fallecimiento de Belgrano (año 1820). Año 1973 Perón vuelve definitivamente a la Argentina.",
    "2023-06-28": "28 de junio, día del orgullo LGBTTIQ+.",
    // Julio
    "2023-07-01": "1 de julio de 1974, paso a la inmortalidad de Juan Perón.",
    "2023-07-09": "9 de julio, día de la independencia Argentina.",
    "2023-07-20": "20 de julio, día del amigo.",
    "2023-07-25": "25 de julio de 1949, fundación del partido justicialista.",
    "2023-07-26": "26 de julio de 1952, paso a la inmortalidad de Evita.26 de julio de 1949, proclamación del partido peronista femenino.",
    "2023-07-29": "29 de julio de 1966 Noche de los bastones largos.",
    //Agosto
    "2023-08-02": "2 de agosto de 1948, la CGT lanza candidatura PERON-PERON.",
    "2023-08-12": "12 de agosto, día internacional de las juventudes.",
    "2023-08-17": "17 de agosto de 1850, paso a la inmortalidad de San Martín.",
    "2023-08-20": "20 de agosto, día de las infancias.",
    "2023-08-23": "23 de agosto de 1962, primer desaparecido de la dictadura trabajador de la UOM Felipe Vallese.",
    "2023-08-28": "28 de agosto de 1948 Evita proclama los derechos de la ancianidad.",
    "2023-08-29": "29 de agosto de 1857, hace su viaje inaugural LA PORTEÑA el primer tren en circular en la Argentina.",
    "2023-08-30": "30 de agosto, Día de los Ferrocarriles Argentinos.",
    "2023-08-31": "31 de agosto de 1951, Renunciamiento de Eva.",
    // Septiembre
    "2023-09-01": "1 de septiembre día del jubilado Ferroviario.",
    "2023-09-16": "16 de septiembre de 1955, Golpe de estado a Perón. Año 1969 huelga Ferroviaria de 19 días. Año 1976 Noche de los lápices.",
    "2023-09-21": "21° Cumpleaños de Curcio, Día del estudiante y de la primavera.",
    "2023-09-22": "22 de septiembre de 1982 Marcha por Paz, pan y trabajo",
    "2023-09-23": "23 de septiembre tercer triunfo electoral de Perón, Promulgación de la ley 13010 (voto Femenino)",
    "2023-09-25": "25 de septiembre de 1973, asesinato de José Ignacio Rucci secretaria general de la CGT.",
    "2023-09-27": "27 de septiembre de 1930, Aniversario nacimiento de la CGT.  Primer secretario general es de la Unión Ferroviaria LUIS CERRUTI.",
    // Octubre
    "2023-10-06": "6 de octubre, Aniversario de la Unión Ferroviaria.",
    "2023-10-08": "8 de octubre de 1895, nace Juan Domingo Perón.",
    "2023-10-12": "12 de octubre, Día del respeto a la diversidad cultural. Año 1973 Perón asume su tercer presidencia.",
    "2023-10-15": "15 de octubre, de 1944, se da a conocer el estatuto del peón rural.",
    "2023-10-17": "17  de octubre, Día de la Lealtad Peronista.",
    "2023-10-19": "19 de octubre, Día Internacional de la lucha contra el cáncer de mama.",
    "2023-10-22": "22 de octubre, Dia Nacional del derecho a la identidad.",
    "2023-10-27": "27 de octubre, (año 2010)Paso a la inmortalidad de Néstor Kirchner. Año 1945 Casamiento de Perón y Evita por civil en Junín.",
    "2023-10-30": "30 de octubre, (año 1961) huelga Ferroviaria por 42 días contra el plan Larkin.",
    "2023-10-31": "31 de octubre, fecha límite de entrega de provisión de guardapolvos.",
    // Noviembre
    "2023-11-10": "10 de noviembre Día de la tradición.",
    "2023-11-11": "11 de noviembre  (Año 51) reelección de Perón y primer sufragio femenino.",
    "2023-11-15": "15 de noviembre Día de la educación técnica.",
    "2023-11-17": "17 de noviembre Día de la militancia.",
    "2023-11-19": "19 de noviembre paso a la inmortalidad de Saúl Ubaldini.",
    "2023-11-20": "20 de noviembre día de la Soberanía.",
    "2023-11-22": "22 de noviembre de 1949 gratuidad universitaria.",
    "2023-11-30": "30 de noviembre año 1955 la dictadura militar disuelve el partido justicialista.",
    // Diciembre
    "2023-12-10": "10 de diciembre, Día de la restauración de la democracia y de los derechos humanos. Año 1945 casamiento por iglesia en la ciudad de La Plata de Perón y Evita.",
    "2023-12-12": "12 de diciembre de 2018 Aniversario creacion de la Juventud Ferroviaria Nacional.",
    "2023-12-21": "21 de diciembre 1947 presentación del primer plan quinquenal de Perón.",
    "2023-12-24": "24° Navidad.",
    "2023-12-31": "31° Año nuevo.",
    // Agrega más eventos aquí en el formato "YYYY-MM-DD": "Descripción del evento"
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
                cell.textContent = dayCounter;
                cell.setAttribute("data-date", `${year}-${month + 1}-${dayCounter}`);
                dayCounter++;
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

        // Obtén la descripción del evento en función de la fecha formateada
        const eventDescription = eventos[formattedDate];

        // Agrega un párrafo y una imagen en función de la fecha y la descripción del evento, o muestra un mensaje si no hay evento
        const eventContainer = document.getElementById("event-container");
        if (eventDescription) {
            eventContainer.innerHTML = `
                <p>Fecha seleccionada: ${formattedDate}</p>
                <img src="imagen_evento.jpg" alt="Evento">
                <p>${eventDescription}</p>
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
