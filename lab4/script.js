function Timer()
{
    const deadine = new Date(2024,5,30);

    
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let timer_interval = setInterval(() => {
        let now = new Date();
        let time_left = deadine - now;

        if (time_left < 0) {
            clearInterval(timer_interval);
            return;
        }

        let days_left = Math.floor(time_left / (1000 * 60 * 60 * 24));
        let hours_left = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes_left = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
        let seconds_left = Math.floor((time_left % (1000 * 60)) / 1000);

        days.innerHTML = days_left;
        hours.innerHTML = hours_left;
        minutes.innerHTML = minutes_left;
        seconds.innerHTML = seconds_left;
    });
}

Timer();