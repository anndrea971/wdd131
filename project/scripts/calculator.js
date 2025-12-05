// Data: 12. JavaScript Objects & 13. JavaScript Arrays and Array Methods
const SERVICE_DATA = [
    // Nuevas 4 Opciones Requeridas
    { id: 'infantil', type: 'Infantil', name: 'Terapia de Lenguaje Infantil', baseFee: 80, description: 'Sesiones enfocadas en desarrollo de lenguaje y articulación (45 min).' },
    { id: 'adulto', type: 'Adulto', name: 'Rehabilitación Neuro-Cognitiva Adulto', baseFee: 95, description: 'Terapia post-accidente cerebrovascular o daño cerebral adquirido (60 min).' },
    { id: 'voz', type: 'Voz', name: 'Terapia Vocal y Voz Profesional', baseFee: 90, description: 'Diagnóstico y tratamiento de disfonías y técnicas vocales (60 min).' },
    { id: 'audiologia', type: 'Audiología', name: 'Screening Auditivo y Orientación', baseFee: 70, description: 'Prueba auditiva básica y guía para manejo de audífonos o implantes (45 min).' }
];

// Helper function to render options (✔ More than one function)
function renderServiceOptions() {
    const selectElement = document.getElementById('primaryService'); 
    
    // 13. Array Method: map() para construir el string de opciones
    const optionsHTML = SERVICE_DATA.map(service => {
        // 14. JavaScript Template Literals
        return `<option value="${service.id}">${service.type}: ${service.name} ($${service.baseFee})</option>`;
    }).join('');

    // 10. DOM Interaction: Modify Element
    selectElement.innerHTML = `<option value="" disabled selected>-- Choose a Service --</option>` + optionsHTML;
}

// Main calculation function (✔ More than one function)
function calculateFee() {
    const serviceSelect = document.getElementById('primaryService');
    const discountCheckbox = document.getElementById('packageDiscount');
    const outputElement = document.getElementById('totalFeeOutput');
    const detailsElement = document.getElementById('serviceDetails');

    const selectedId = serviceSelect.value;
    
    // 13. Array Method: find()
    const selectedService = SERVICE_DATA.find(service => service.id === selectedId);

    if (!selectedService) {
        // Si no hay servicio seleccionado, mostrar el estado inicial
        outputElement.textContent = 'TBD';
        detailsElement.innerHTML = 'Seleccione un servicio para ver los detalles.';
        return;
    }

    let totalFee = selectedService.baseFee;
    let detailsText = `Servicio: ${selectedService.name}. Tarifa Base: $${totalFee}. ${selectedService.description}`;

    // 11. JavaScript Conditional Branching
    if (discountCheckbox.checked) {
        const discountAmount = totalFee * 0.10;
        totalFee -= discountAmount;
        // 14. JavaScript Template Literals
        detailsText += `\nAplicado Descuento de Paquete: -10% (-$${discountAmount.toFixed(2)})`;
    }

    // 10. DOM Interaction: Modify Element & 14. JavaScript Template Literals
    outputElement.textContent = `$${totalFee.toFixed(2)}`;
    detailsElement.innerHTML = `<h3>Detalles del Servicio</h3><p>${detailsText.replace(/\n/g, '<br>')}</p>`;
}

// Initialization and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderServiceOptions();

    // 10. DOM Interaction: Event Listener
    const form = document.getElementById('feeCalculatorForm');
    if (form) {
        // Usa el evento 'input' o 'change' para recalcular automáticamente
        form.addEventListener('change', calculateFee);
        // Llama a calculateFee para inicializar el output si hay un valor por defecto
        calculateFee(); 
    }
});