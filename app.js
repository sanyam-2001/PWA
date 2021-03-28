if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./serviceWorker.js', { scope: '/' }).then(registrationObjects => {
        console.log("Supported!");
    }).catch(err => {
        console.log("Not Supported!", err);

    })
}


let Oldprocessor;
const getCPU = new CustomEvent('requestCPUInfo'), getStorage = new CustomEvent('requestStorageInfo'), getMemory = new CustomEvent('requestMemoryInfo');

//Requesting CPU Information Every 5 Seconds for the Dashboard
setInterval(() => {
    window.dispatchEvent(getCPU);
}, 1000);
window.onload = () => {
    window.dispatchEvent(getCPU);
    window.dispatchEvent(getStorage);
    window.dispatchEvent(getMemory);

    updateBattery();
    $('.cpu-screen').fadeOut()
}


//Changing Screens
document.addEventListener('click', (e) => {

    if (e.target.classList.contains('token') && (e.target.id == "CPU" || e.target.id == "Dashboard")) {
        const tokens = document.getElementsByClassName('token');
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].classList.contains('active')) { tokens[i].classList.remove('active') }
        }
        if (e.target.id == "CPU") {
            $('.dashboard-screen').fadeOut();
            $('.memory-screen').fadeOut();
            $('.cpu-screen').fadeIn();
        }
        if (e.target.id == "Dashboard") {
            $('.cpu-screen').fadeOut();
            $('.memory-screen').fadeOut();
            $('.dashboard-screen').fadeIn();

        }
        $(e.target).addClass('active')
    }
})




