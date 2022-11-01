const borrarFunc = () => {
    document.getElementById('Nombre').value = ' ';
    document.getElementById('Apellido').value = ' ';
    document.getElementById('Correo').value = ' ';
    Cantidad.value = ' ';
    Categoría.value = 'nada';
    document.getElementById('total-a-pagar').innerHTML = 'Total a Pagar: $';
};

const resumenFunc = () => {
    let Cantidad = document.getElementById('Cantidad').value;
    let Categoría = document.getElementById('Categoría').value;
    let mostrarResultado = document.getElementById('total-a-pagar');
    let ticket = 200;
    let total;

    if (Cantidad > 0 || !Cantidad == Number) {
        switch (Categoría) {
            case 'Estudiante':
                total = (ticket - (ticket * 80) / 100) * Cantidad;
                mostrarResultado.innerHTML = `Total a Pagar: $ ${total}`;
                break;
            case 'Trainee':
                total = (ticket - (ticket * 50) / 100) * Cantidad;
                mostrarResultado.innerHTML = `Total a Pagar: $ ${total}`;
                break;
            case 'Junior':
                total = (ticket - (ticket * 15) / 100) * Cantidad;
                mostrarResultado.innerHTML = `Total a Pagar: $ ${total}`;
                break;
        }
    } else {
        total = ticket * Cantidad;
        mostrarResultado.innerHTML = `Total a Pagar: $ ${total}`;
    }    
};