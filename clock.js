const timeElement= document.getElementById("time");
const dateElement= document.getElementById("date");

function updateClock() {
    const now = new Date();
    const time= now.toLocaleTimeString([],{
        hour: "2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12: true
    });
    const date=now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    timeElement.textContent = time;
    dateElement.textContent = date;
}

updateClock();
setInterval(updateClock, 1000);