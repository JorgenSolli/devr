window.onload = function() {
    let divr = document.getElementById('divr')
    if (!divr) {
        divr = document.createElement('div');
        document.body.appendChild(divr);
        divr.innerText = 'Dev mode';
        divr.id = 'devr';
    }

    divr.addEventListener('click', function() {
        divr.remove()
    })
}
