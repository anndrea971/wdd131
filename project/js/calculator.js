// Data: 12. JavaScript Objects & 13. JavaScript Arrays and Array Methods
const SERVICE_DATA = [
    // Nuevas 4 Opciones Requeridas
    { id: 'infantil', type: 'Infants', name: 'Therapy speech for childrens', baseFee: 80, description: 'Session for speech therapy in children (45 min).' },
    { id: 'adult', type: 'Adulto', name: 'Neuro-Cognitiva Adulto', baseFee: 95, description: 'Session for neuro-cognitive rehabilitation in adults (60 min).' },
    { id: 'voice', type: 'Voz', name: 'Vocal therapy and Proffesional use of voice', baseFee: 90, description: 'Session for vocal therapy and professional use of voice (60 min).' },
    { id: 'audiology', type: 'Audiology', name: 'Audiology screening', baseFee: 110, description: 'Complete hearing evaluation and fitting of hearing aids (90 min).' }
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
        detailsElement.innerHTML = 'chose a service to see the details.';
        return;
    }

    let totalFee = selectedService.baseFee;
    let detailsText = `Service: ${selectedService.name}. Total Fee: $${totalFee}. ${selectedService.description}`;

    // 11. JavaScript Conditional Branching
    if (discountCheckbox.checked) {
        const discountAmount = totalFee * 0.10;
        totalFee -= discountAmount;
        // 14. JavaScript Template Literals
        detailsText += `\nDiscount per 10 sesions: -10% (-$${discountAmount.toFixed(2)})`;
    }

    // 10. DOM Interaction: Modify Element & 14. JavaScript Template Literals
    outputElement.textContent = `$${totalFee.toFixed(2)}`;
    detailsElement.innerHTML = `<h3>Details of the service</h3><p>${detailsText.replace(/\n/g, '<br>')}</p>`;
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