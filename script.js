if (window.location.pathname === '/newhere') {
    window.location.replace('/new-here.html');
  }


document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    const eventDateElement = document.getElementById('event-date');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function getNextEventDate() {
        const now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        
        // Calculate the first Thursday of the month
        const firstThursday = new Date(year, month, 1);
        while (firstThursday.getDay() !== 4) {
            firstThursday.setDate(firstThursday.getDate() + 1);
        }

        // Calculate the third Thursday of the month
        const thirdThursday = new Date(year, month, firstThursday.getDate() + 14);

        let eventDate;
        // Determine the next event date
        if (now < firstThursday.setHours(19, 30, 0, 0)) {
            eventDate = firstThursday;
        } else if (now < thirdThursday.setHours(19, 30, 0, 0)) {
            eventDate = thirdThursday;
        } else {
            // If both Thursdays have passed, move to the next month
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
            // Recalculate the first and third Thursdays for the new month
            const nextFirstThursday = new Date(year, month, 1);
            while (nextFirstThursday.getDay() !== 4) {
                nextFirstThursday.setDate(nextFirstThursday.getDate() + 1);
            }
            eventDate = new Date(nextFirstThursday.getTime());
            eventDate.setHours(19, 30, 0, 0); // Set time to 7:30 PM
        }
        
        return eventDate;
    }

    function formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function updateCountdown() {
        const nextEventDate = getNextEventDate();
        eventDateElement.textContent = formatDate(nextEventDate);

        const now = new Date();
        const timeDifference = nextEventDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
});


// 
// document.addEventListener("DOMContentLoaded", function() {
//     const eventDateElement = document.getElementById('event-date');
//     const daysElement = document.getElementById('days');
//     const hoursElement = document.getElementById('hours');
//     const minutesElement = document.getElementById('minutes');
//     const secondsElement = document.getElementById('seconds');

//     function getNextEventDate() {
//         const now = new Date();
//         let year = now.getFullYear();
//         let month = now.getMonth();
        
//         // Calculate the first Friday of the month
//         const firstFriday = new Date(year, month, 1);
//         while (firstFriday.getDay() !== 5) {
//             firstFriday.setDate(firstFriday.getDate() + 1);
//         }

//         // Calculate the third Friday of the month
//         const thirdFriday = new Date(year, month, firstFriday.getDate() + 14);

//         let eventDate;
//         // Determine the next event date
//         if (now < firstFriday.setHours(19, 30, 0, 0)) {
//             eventDate = firstFriday;
//         } else if (now < thirdFriday.setHours(19, 30, 0, 0)) {
//             eventDate = thirdFriday;
//         } else {
//             // If both Fridays have passed, move to the next month
//             month++;
//             if (month > 11) {
//                 month = 0;
//                 year++;
//             }
//             // Recalculate the first and third Fridays for the new month
//             const nextFirstFriday = new Date(year, month, 1);
//             while (nextFirstFriday.getDay() !== 5) {
//                 nextFirstFriday.setDate(nextFirstFriday.getDate() + 1);
//             }
//             eventDate = new Date(nextFirstFriday.getTime());
//             eventDate.setHours(19, 30, 0, 0); // Set time to 7:30 PM
//         }
        
//         return eventDate;
//     }

//     function formatDate(date) {
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         return date.toLocaleDateString('en-US', options);
//     }

//     function updateCountdown() {
//         const nextEventDate = getNextEventDate();
//         eventDateElement.textContent = formatDate(nextEventDate);

//         const now = new Date();
//         const timeDifference = nextEventDate - now;

//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         daysElement.textContent = String(days).padStart(2, '0');
//         hoursElement.textContent = String(hours).padStart(2, '0');
//         minutesElement.textContent = String(minutes).padStart(2, '0');
//         secondsElement.textContent = String(seconds).padStart(2, '0');

//         setTimeout(updateCountdown, 1000);
//     }

//     updateCountdown();
// });
