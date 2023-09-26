



version 0.01
<script>
        const calendarBody = document.getElementById("calendar-body");
        const monthAndYear = document.getElementById("monthAndYear");
        const currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();

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

        // Botones para navegar entre los meses
        document
            .getElementById("nextMonthBtn")
            .addEventListener("click", nextMonth);
        document
            .getElementById("prevMonthBtn")
            .addEventListener("click", prevMonth);

        // Genera el calendario actual
        generateCalendar(currentYear, currentMonth);
    </script>






version 0.02
<script>
    const calendarBody = document.getElementById("calendar-body");
    const monthAndYear = document.getElementById("monthAndYear");
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

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
            // Obtén la fecha haciendo clic en el atributo data-date
            const dateParts = dateClicked.split("-");
            const year = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]) - 1; // Resta 1 para el índice de meses
            const day = parseInt(dateParts[2]);

            // Agrega un párrafo y una imagen en función de la fecha
            const eventContainer = document.getElementById("event-container");
            eventContainer.innerHTML = `
                <p>Fecha seleccionada: ${day}/${month + 1}/${year}</p>
                <img src="imagen_evento.jpg" alt="Evento">
                <p>Descripción del evento para la fecha seleccionada.</p>
            `;
        }
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
</script>



version 0.03
<script>
    const calendarBody = document.getElementById("calendar-body");
    const monthAndYear = document.getElementById("monthAndYear");
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    // Objeto para almacenar la descripción de los eventos por fecha
    const eventos = {
        "2023-09-02": "Descripción del evento para el 2 de Septiembre de 2023",
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
    
            // Agrega un párrafo y una imagen en función de la fecha y la descripción del evento
            const eventContainer = document.getElementById("event-container");
            eventContainer.innerHTML = `
                <p>Fecha seleccionada: ${formattedDate}</p>
                <img src="imagen_evento.jpg" alt="Evento">
                <p>${eventDescription}</p>
            `;
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
</script>


version 0.04
<script>
    const calendarBody = document.getElementById("calendar-body");
    const monthAndYear = document.getElementById("monthAndYear");
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    // Objeto para almacenar la descripción de los eventos por fecha
    const eventos = {
        "2023-09-02": "Descripción del evento para el 2 de Septiembre de 2023",
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

</script>
