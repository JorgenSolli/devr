window.onload = function() {
    let devr = document.getElementById('devr')
    if (!devr) {
        devr = document.createElement('div');
        document.body.appendChild(devr);
        devr.innerText = 'Dev mode';
        devr.id = 'devr';
    }

    devr.addEventListener('click', function() {
        devr.remove()
    })
}
