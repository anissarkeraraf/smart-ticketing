function booking() {
    const headerSection = document.getElementById('header-section');
    headerSection.classList.add('hidden')
    // console.log(headerSection.classList);

    const footerSection = document.getElementById('footer-section');
    footerSection.classList.add('hidden')

    // show the success section
    const successFullSection = document.getElementById('success');
    successFullSection.classList.remove('hidden')
}

var buttons = document.querySelectorAll('#A1, #A2, #A3, #A4, #B1, #B2, #B3, #B4');
var numSelectedSeats = 0;

function handleClick(event) {

    // var originalPrice = parseFloat(document.getElementById('grandTotal').value);




    // update seat



    var seat = event.target;

    if (numSelectedSeats <= 3) {

        // Select the seat if it's not already selected
        seat.classList.add('selected');
        numSelectedSeats++;
        buttons.forEach(function (button) {
            button.style.backgroundColor = 'bg-green-600';
        });
        event.target.style.backgroundColor = 'green';
        const currentSeatElement = document.getElementById('current-seat');
        const currentSeatText = currentSeatElement.innerText;
        const currenSeat = parseInt(currentSeatText)
        console.log(currenSeat);

        const newSeat = currenSeat + 1;
        currentSeatElement.innerText = newSeat;

        const currentPerSeatElement = document.getElementById('perSeat');
        const addCurrentPerSeat = 550;
        const totalPerSeat = addCurrentPerSeat * newSeat;
        currentPerSeatElement.innerText = totalPerSeat;
        console.log(totalPerSeat);


        const currentSeatElementById = document.getElementById('booking-seat');
        const currentTextSeat = currentSeatElementById.innerText;
        const seatTaxt = parseInt(currentTextSeat);

        const updateSeat = seatTaxt - 1;
        currentSeatElementById.innerText = updateSeat;


        const currentGrandTotalElement = document.getElementById('grandTotal');
        const addCurrentGrandPerSeat = 550;
        const grandtotalSeat = addCurrentGrandPerSeat * newSeat;
        currentGrandTotalElement.innerText = grandtotalSeat;
        console.log(grandtotalSeat);

      






        // coupon

        const newCoupleCouponButton = document.getElementById('coupon-btn');

        newCoupleCouponButton.addEventListener('click', function () {
            let newCouplecouponInput = document.getElementById('coupon-input').value.toUpperCase();

            if (newCouplecouponInput === 'NEW15') {
                if (document.getElementById('new')) {
                    discount1 = totalPerSeat * 0.15; // 15% discount
                    console.log(discount1)

                    grandTotal = grandtotalSeat - discount1;
                    document.getElementById('grandTotal').innerText = grandTotal;
                    document.getElementById('coupon-input').classList.add('hidden');
                    newCoupleCouponButton.classList.add('hidden');

                }






            } else if (newCouplecouponInput === 'COUPLE 20') {
                if (document.getElementById('couple')) {
                    discount2 = totalPerSeat * 0.20; // 15% discount
                    console.log(discount2)

                    grandTotal = grandtotalSeat - discount2;
                    document.getElementById('grandTotal').innerText = grandTotal;
                    document.getElementById('coupon-input').classList.add('hidden');
                    newCoupleCouponButton.classList.add('hidden');

                }


            } else {
                alert('Invalid Your Coupon Code');
            }
        })



    } else {
        // If four seats are already selected, disable further selection
        alert('You can only select up to 4 seats.');


        // Check if discount code COUPLE20 is applied
        // if (document.getElementById('couple').checked) {
        //     discount2 = originalPrice * 0.20; // 20% discount
    }

    // grandTotal = originalPrice - discount1 - discount2;
    // document.getElementById('grandTotal').innerHTML = "Grand Total: $" + grandTotal.toFixed(2);




    // console.log('Number of selected seats:', numSelectedSeats);

}
buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});


function scrollWin() {
    const element = document.getElementById("two-Section");
    element.scrollIntoView();
  }


