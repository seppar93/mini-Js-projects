const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat .seat:not(.occupid)')
const count = document.querySelector('#count')
const toatl = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')


let ticketPrice = +movieSelect.value; // the plus sign turns it into a number
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    toatl.innerText = selectedSeatsCount * ticketPrice;
}

// moive select event 
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    updateSelectedCount()
})


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        console.log(e.target);
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})


