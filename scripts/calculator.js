// 12. JavaScript Objects & 13. JavaScript Arrays and Array Methods
const SERVICE_DATA = [
    { id: 'assess', name: 'Initial Diagnostic Assessment', baseFee: 150, description: 'Comprehensive intake and evaluation (90 min).' },
    { id: 'voice', name: 'Voice Therapy Session', baseFee: 85, description: 'Focus on vocal hygiene and technique (45 min).' },
    { id: 'language', name: 'Language & Cognitive Therapy', baseFee: 95, description: 'Targeting aphasia or cognitive communication deficits (60 min).' }
];

// Helper function to render options (More than one function)
function renderServiceOptions() {
    const selectElement = document.getElementById('primaryService');
    // 13. Array Method: map() to build the option string
    const optionsHTML = SERVICE_DATA.map(service => {
        // 14. JavaScript Template Literals
        return `<option value="${service.id}">${service.name} ($${service.baseFee})</option>`;
    }).join('');

    // 10. DOM Interaction: Modify Element
    selectElement.innerHTML = `<option value="" disabled selected>-- Choose a Service --</option>` + optionsHTML;
}

// Main calculation function (More than one function)
function calculateFee() {
    // 10. DOM Interaction: Select Element
    const serviceSelect = document.getElementById('primaryService');
    const discountCheckbox = document.getElementById('packageDiscount');
    const outputElement = document.getElementById('totalFeeOutput');
    const detailsElement = document.getElementById('serviceDetails');

    const selectedId = serviceSelect.value;
    
    // 13. Array Method: find() to get the object data
    const selectedService = SERVICE_DATA.find(service => service.id === selectedId);

    if (!selectedService) {
        outputElement.textContent = 'Please select a service.';
        detailsElement.textContent = '';
        return;
    }

    let totalFee = selectedService.baseFee;
    let detailsText = `Service: ${selectedService.name}. Base Fee: $${totalFee}. ${selectedService.description}`;

    // 11. JavaScript Conditional Branching
    if (discountCheckbox.checked) {
        const discountAmount = totalFee * 0.10;
        totalFee -= discountAmount;
        // 14. JavaScript Template Literals
        detailsText += `\nApplied Package Discount: -10% (-$${discountAmount.toFixed(2)})`;
    }

    // 10. DOM Interaction: Modify Element & 14. JavaScript Template Literals
    outputElement.textContent = `$${totalFee.toFixed(2)}`;
    detailsElement.innerHTML = `<h3>Service Details</h3><p>${detailsText.replace(/\n/g, '<br>')}</p>`;
}

// Initialization and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderServiceOptions();

    // 10. DOM Interaction: Event Listener
    document.getElementById('feeCalculatorForm').addEventListener('change', calculateFee);
});