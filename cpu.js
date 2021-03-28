let cpuMatrix = [[], [], [], [], [], [], [], []], old, Time = [];

window.addEventListener('sendingCPUInfo', (e) => {
    const info = e.detail, processors = e.detail.processors
    if (!old) {
        old = processors;
    }
    else {
        for (let i = 0; i < processors.length; i++) {
            const user = processors[i].usage.user - old[i].usage.user;
            const kernel = processors[i].usage.kernel - old[i].usage.kernel;
            const total = processors[i].usage.total - old[i].usage.total;
            const usage = (((user + kernel) / total) * 100);
            cpuMatrix[i].push(usage);
            if (cpuMatrix[i].length > 20) {
                cpuMatrix[i].shift()
            }
        }
        if (Time.length < 20) {
            Time.push('.')
        }
        c1.update()
        c2.update()
        c3.update()
        c4.update()
        c5.update()
        c6.update()
        c7.update()
        c8.update()
        old = processors;

    }
})

let c1 = makeChart(cpuMatrix[0], Time, document.getElementById('c1').getContext('2d'), "Processor 1", "rgba(123, 193, 255, 0.733)")
let c2 = makeChart(cpuMatrix[1], Time, document.getElementById('c2').getContext('2d'), "Processor 2")
let c3 = makeChart(cpuMatrix[2], Time, document.getElementById('c3').getContext('2d'), "Processor 3", "rgba(123, 193, 255, 0.733)")
let c4 = makeChart(cpuMatrix[3], Time, document.getElementById('c4').getContext('2d'), "Processor 4", "rgba(123, 193, 255, 0.733)")
let c5 = makeChart(cpuMatrix[4], Time, document.getElementById('c5').getContext('2d'), "Processor 5")
let c6 = makeChart(cpuMatrix[5], Time, document.getElementById('c6').getContext('2d'), "Processor 6", "rgba(123, 193, 255, 0.733)")
let c7 = makeChart(cpuMatrix[6], Time, document.getElementById('c7').getContext('2d'), "Processor 7")
let c8 = makeChart(cpuMatrix[7], Time, document.getElementById('c8').getContext('2d'), "Processor 8", "rgba(123, 193, 255, 0.733)")



