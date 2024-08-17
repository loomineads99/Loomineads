document.addEventListener('DOMContentLoaded', function() {
    console.log("Landing Page cargada correctamente.");
    
    // Ejemplo de validación adicional
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            event.preventDefault();
            alert('Por favor, rellene todos los campos.');
        }
    });
});
