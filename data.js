// SKU mapping with associated revenue
const skuDetails = {
    "SKU001": { revenue: 1200 },
    "SKU002": { revenue: 800 },
    "SKU003": { revenue: 200 },
    "SKU004": { revenue: 150 },
    "SKU005": { revenue: 1000 },
    "SKU006": { revenue: 300 }
};

// Sales data array (fetch existing data from localStorage or start with an empty array)
let salesData = JSON.parse(localStorage.getItem('salesData')) || [];

// Function to save sales data to localStorage
function saveSalesData() {
    localStorage.setItem('salesData', JSON.stringify(salesData));
}
