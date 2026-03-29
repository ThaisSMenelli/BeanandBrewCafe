const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("bookingForm");
    const message = document.getElementById("formMessage");
    const eventTypeSelect = document.getElementById("eventType");
    const dateSelect = document.getElementById("date");
    const timeSelect = document.getElementById("time");

    const eventsData = {
        "coffee-tasting": [
            { date: "2026-04-29", times: ["10am", "12am", "2pm", "4pm"] }
        ],
        "live-music": [
            { date: "2026-05-01", times: ["5pm", "7pm"] }
        ],
        "student-study": [
            { date: "2026-05-04", times: ["4pm", "6pm", "8pm"] }
        ],
        "seasonal-celebration": [
            { date: "2026-04-05", times: ["10am", "12pm", "2pm", "4pm"] }
        ]
    };

    eventTypeSelect.addEventListener("change", () => {
        const eventType = eventTypeSelect.value;

        dateSelect.innerHTML = `<option value="">-- Select Date --</option>`;
        timeSelect.innerHTML = `<option value="">-- Select Time --</option>`;

        if (!eventType || !eventsData[eventType]) return;

        const today = new Date();
        eventsData[eventType].forEach(session => {
            const sessionDate = new Date(session.date);
            if (sessionDate >= today) {
                const option = document.createElement("option");
                option.value = session.date;
                option.textContent = sessionDate.toDateString();
                dateSelect.appendChild(option);
            }
        });
    });

    dateSelect.addEventListener("change", () => {
        const eventType = eventTypeSelect.value;
        const selectedDate = dateSelect.value;

        timeSelect.innerHTML = `<option value="">-- Select Time --</option>`;

        if (!eventType || !selectedDate) return;

        const session = eventsData[eventType].find(s => s.date === selectedDate);
        if (session) {
            session.times.forEach(time => {
                const option = document.createElement("option");
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            });
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const eventType = form.eventType.value;
        const date = form.date.value;
        const time = form.time.value;
        const msg = form.message.value.trim();

        if (!name || !email || !eventType || !date || !time || !msg) {
            message.style.color = "red";
            message.textContent = "Please fill in all fields.";
            return;
        }

        message.style.color = "green";
        message.textContent = `Thank you, ${name}! Your booking request for "${form.eventType.options[form.eventType.selectedIndex].text}" on ${new Date(date).toDateString()} at ${time} has been received.`;

        form.reset();
        dateSelect.innerHTML = `<option value="">-- Select Date --</option>`;
        timeSelect.innerHTML = `<option value="">-- Select Time --</option>`;
    });

});
