document.addEventListener('DOMContentLoaded', function () {
    // Set the current date and time
    const currentDate = new Date('October 3, 2023 00:00:00').getTime();

    // Set your friend's birthday date and time
    const birthdayDate = new Date('October 7, 2023 00:00:00').getTime();

    // Calculate the time remaining
    const timeDifference = birthdayDate - currentDate;

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const distance = birthdayDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('days').innerHTML = days + 'd';
        document.getElementById('hours').innerHTML = hours + 'h';
        document.getElementById('minutes').innerHTML = minutes + 'm';
        document.getElementById('seconds').innerHTML = seconds + 's';

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('timer').innerHTML = 'Happy Birthday!';
        }
    }, 1000);
});
