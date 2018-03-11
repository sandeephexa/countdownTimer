const countdown = document.querySelector('.countdown');
// set launch date (ms)
const launchDate = new Date('Mar 11, 2019 13:00:00').getTime();

// update every second

const intvl = setInterval(() => {

    // get todays date (ms)
    const now = new Date().getTime();
    //distance
    const dist = launchDate - now;
    // time calculations
    const days = Math.floor(dist / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((dist % (1000 * 60)) / 1000);
    console.log(`days ${days} hours ${hours} mins ${mins} secs ${secs}`);

// display results
countdown.innerHTML = `<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Mins</span></div>
<div>${secs}<span>Secs</span></div>`;

    // if launch date passed
    if (dist < 0) {
            // Stop countdown
            clearInterval(intvl);
            // Style and output text
            countdown.style.color = '#17a2b8';
            countdown.innerHTML = 'Launched!';
          }

}, 1000)


console.log(launchDate);
