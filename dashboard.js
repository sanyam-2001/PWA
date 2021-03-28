let arr = [], labels = [];
let myChart = makeChart(arr, labels, document.getElementById('myChart').getContext('2d'), "CPU vs Usage", "rgba(123, 193, 255, 0.733)");
//Event Handler
window.addEventListener('sendingCPUInfo', (e) => {
    const info = e.detail, processors = e.detail.processors;
    $('.arch').text(info.archName)
    $('.model').text(info.modelName)

    if (!Oldprocessor) {
        Oldprocessor = processors;
        for (let i = 1; i <= processors.length; i++) {
            arr.push(i);
            labels.push(i);
        }

    }
    else {
        for (let i = 0; i < processors.length; i++) {
            const user = processors[i].usage.user - Oldprocessor[i].usage.user;
            const kernel = processors[i].usage.kernel - Oldprocessor[i].usage.kernel;
            const total = processors[i].usage.total - Oldprocessor[i].usage.total;
            const usage = (((user + kernel) / total) * 100);
            arr[i] = usage;
        }
        myChart.update()
        Oldprocessor = processors;

    }
});

//Dashboard Updaters
window.addEventListener('sendingCPUInfo', (e) => {
    const info = e.detail, processors = e.detail.processors;
    $('.arch').text(info.archName)
    $('.model').text(info.modelName)
    $('.CPU-Name').text(info.modelName)
})
window.addEventListener('sendingStorageInfo', (e) => {
    $('.storage').text((e.detail[0].capacity / (1024 * 1024 * 1024)).toFixed(0))
})
window.addEventListener('sendingMemoryInfo', (e) => {
    $('.ram').text((e.detail.capacity / (1024 * 1024 * 1024)).toFixed(0));
})
