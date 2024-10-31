document.addEventListener("DOMContentLoaded", () => {
    const productDropdown = document.getElementById('product');
    const accountTypeDropdown = document.getElementById('accountType');
    const consumerDetailsSection = document.getElementById('consumerDetails');
    const businessDetailsSection = document.getElementById('businessDetails');
    const soleTraderOrLtdDropdown = document.getElementById('soleTraderOrLtd');
    const soleTraderDetailsSection = document.getElementById('soleTraderDetails');
    const ltdCompanyDetailsSection = document.getElementById('ltdCompanyDetails');
    const salesForm = document.getElementById("salesForm");

    // Function to show/hide sections based on product and account type
    function updateSections() {
        const productValue = productDropdown.value;
        const accountTypeValue = accountTypeDropdown.value;

        if (productValue === 'NEW SIMO' && accountTypeValue === 'Consumer') {
            consumerDetailsSection.style.display = 'block';
        } else {
            consumerDetailsSection.style.display = 'none';
        }

        if (accountTypeValue === 'Business') {
            businessDetailsSection.style.display = 'block';
        } else {
            businessDetailsSection.style.display = 'none';
            soleTraderDetailsSection.style.display = 'none';
            ltdCompanyDetailsSection.style.display = 'none';
        }
    }

    // Function to show/hide Sole Trader or LTD Company sections
    function updateBusinessDetails() {
        const businessType = soleTraderOrLtdDropdown.value;

        if (businessType === 'Sole Trader') {
            soleTraderDetailsSection.style.display = 'block';
            ltdCompanyDetailsSection.style.display = 'none';
        } else if (businessType === 'LTD Company') {
            soleTraderDetailsSection.style.display = 'none';
            ltdCompanyDetailsSection.style.display = 'block';
        } else {
            soleTraderDetailsSection.style.display = 'none';
            ltdCompanyDetailsSection.style.display = 'none';
        }
    }

    // Collect selected proof of business values
    function getSelectedProofs(proofName) {
        const checkboxes = document.querySelectorAll(`input[name="${proofName}"]:checked`);
        const selectedProofs = Array.from(checkboxes).map(checkbox => checkbox.value);
        return selectedProofs;
    }

    // Handle form submission
    salesForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Collecting selected proofs for sole trader or LTD company
        const businessType = soleTraderOrLtdDropdown.value;
        let selectedProofs = [];
        
        if (businessType === 'Sole Trader') {
            selectedProofs = getSelectedProofs("soleTraderProof");
        } else if (businessType === 'LTD Company') {
            selectedProofs = getSelectedProofs("ltdCompanyProof");
        }

        console.log("Selected Proofs of Business:", selectedProofs);
        // Additional form processing code here (e.g., storing data, saving to local storage)
        
        // Clear form after submission if required
        salesForm.reset();
    });

    // Event listeners for dropdowns
    productDropdown.addEventListener('change', updateSections);
    accountTypeDropdown.addEventListener('change', updateSections);
    soleTraderOrLtdDropdown.addEventListener('change', updateBusinessDetails);
});


