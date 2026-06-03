document.addEventListener("DOMContentLoaded", function() {
    
    const calculateBtn = document.getElementById("calculateBtn");
    const resultText = document.getElementById("resultText");

    calculateBtn.addEventListener("click", function() {
        
        const costPerLiter = parseFloat(document.getElementById("costPerLiter").value);
        const litersPurchased = parseFloat(document.getElementById("litersPurchased").value);

        if (isNaN(costPerLiter) || isNaN(litersPurchased)) {
            resultText.textContent = "Please enter valid numbers.";
            return;
        }

        const totalCost = costPerLiter * litersPurchased;

        resultText.textContent = `Total Cost: £${totalCost.toFixed(2)}`;
    });
});