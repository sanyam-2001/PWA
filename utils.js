const getOSName = () => {
    if (navigator.userAgent.indexOf("Win") != -1)
        return "Windows OS";
    if (navigator.userAgent.indexOf("Mac") != -1)
        return "Macintosh";
    if (navigator.userAgent.indexOf("Linux") != -1)
        return "Linux OS";
    if (navigator.userAgent.indexOf("Android") != -1)
        return "Android OS";
    if (navigator.userAgent.indexOf("like Mac") != -1)
        return "iOS";
    else return "Unknown OS/ This PC";

}
$('.OS').text(getOSName())



const updateBattery = () => {
    navigator.getBattery().then((battery) => {
        $('.battery').text((battery.level * 100).toFixed(0))
        if (battery.charging) {
            $('.batteryCharge').css({ backgroundColor: "rgb(184, 255, 184)" })
        } else {
            $('.batteryCharge').css({ backgroundColor: "rgb(255, 182, 182)" })
        }
    })
}
setInterval(updateBattery, 1000)
