const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from being submitted
    let cantidad = document.getElementById('cantidad').value;
    let descuento; 
    let categoria = document.getElementById('select').value.toLowerCase();
    const totalAPagar = document.getElementById('total');
    switch (categoria) {
        case 'estudiante':
            descuento = 0.2;
            break;
        case 'traineer':
            descuento = 0.5;
            break;
        case 'junior':
            descuento = 0.85;
            break;
        case 'ninguno':
            descuento = 1;
        default:
            descuento = 1;
    }
    totalAPagar.innerText = cantidad * 200 * descuento;
});