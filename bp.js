function goToPage(page) {
    window.location.href = page;
}

const checkboxes = document.querySelectorAll('.item');
        const totalRevenueElement = document.getElementById('totalRevenue');

        let totalRevenue = 0;

        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    totalRevenue += parseFloat(this.getAttribute('data-price'));
                } else {
                    totalRevenue -= parseFloat(this.getAttribute('data-price'));
                }

                totalRevenueElement.textContent = totalRevenue.toFixed(2);
            });
        });



sessionStorage.setItem('totalRevenue', totalRevenue);
var totalAmount = parseInt(sessionStorage.getItem('totalRevenue'));
var totalRevenueDisplay = document.getElementById('totalRevenueDisplay');
totalRevenueDisplay.textContent = "Total Revenue: Rs." + parseInt(totalAmount);



