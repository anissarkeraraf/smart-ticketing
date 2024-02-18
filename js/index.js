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

    } else {
        // If four seats are already selected, disable further selection
        alert('You can only select up to 4 seats.');
       
   
    }

    // console.log('Number of selected seats:', numSelectedSeats);

}
buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});


// coupon

const newCoupleCouponButton = document.getElementById('coupon-btn');

newCoupleCouponButton.addEventListener('click', function(){
    let newCouplecouponInput = document.getElementById('coupon-input').value.toUpperCase();

    if(newCouplecouponInput === 'NEW15' || newCouplecouponInput === 'COUPLE 20'){
        document.getElementById('coupon-input').classList.add('hidden');
        newCoupleCouponButton.classList.add('hidden');

    }else{
        alert('Invalid Your Coupon Code');
    }
})

const allBtn = document.getElementsByClassName('btn');

for (const btns of allBtn){
    btns.addEventListener('click', function(e){
        
        const ticketName = e.target.parentNode.innerText;
        console.log(e.target.parentNode.innerText)
        const classPriceContainer = document.getElementById('class-price')

        const ticketPrice = 550;
        const ticketSeat = 'Economoy';

        const li = document.getElementById('li');
        const p = document.getElementById('p');
        p.innerText = ticketName;
        const p2 = document.getElementById('p');
        p2.innerText = ticketPrice;
        const p3 = document.getElementById('p');
        p3.innerText = ticketSeat;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);

        classPriceContainer.appendChild(li)

    })
}

