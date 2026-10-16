// Esperar a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar el formulario de contacto por su ID
    const whatsappForm = document.getElementById('whatsapp-form');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene el recargo de la página

            // Número de WhatsApp de la Notaría (formato internacional sin signo +)
            const telefonoNotaria = "51990884040"; 

            // Obtener y limpiar los valores ingresados por el usuario
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const tel = document.getElementById('telefono').value.trim() || 'No especificado';
            const consulta = document.getElementById('consulta').value.trim();

            // Construir el mensaje formateado con saltos de línea (%0A) y negritas de WhatsApp (*)
            const mensaje = `*CONSULTA DESDE LA WEB NOTARÍA*%0A%0A` +
                            `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
                            `*Correo:* ${encodeURIComponent(correo)}%0A` +
                            `*Teléfono:* ${encodeURIComponent(tel)}%0A%0A` +
                            `*Consulta:*%0A${encodeURIComponent(consulta)}`;

            // Enlace directo a la API de WhatsApp
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefonoNotaria}&text=${mensaje}`;

            // Abrir WhatsApp en una nueva pestaña
            window.open(urlWhatsApp, '_blank');
        });
    }
});