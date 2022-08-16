const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupid)')
const count = document.querySelector('#count')
const toatl = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')


// save selcted moive index and price 

function setMoiveData(moiveIndex, moviePrice){
    localStorage.setItem('selectedMoiveIndex', moiveIndex)
    localStorage.setItem('selectedMoivePrice', moviePrice)
}

populateUI()
let ticketPrice = +movieSelect.value; // the plus sign turns it into a number
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    toatl.innerText = selectedSeatsCount * ticketPrice;

    // copy selected seats into array 
    // mape through array 
    // return a new array of indexes

    const seatsIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat)
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

}

// moive select event 
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setMoiveData(e.target.selectedIndex, e.target.value)
    updateSelectedCount()
})

// get data from localstorage and populate UI 
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')


            }
        })
    }
    const selectedMoiveIndex = localStorage.getItem('selectedMoiveIndex')
    if(selectedMoiveIndex !== null) {
        movieSelect.selectedIndex = selectedMoiveIndex;
    }

}

container.addEventListener('click', (e) => {

    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        console.log(e.target);
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})

// inital count and total set 
updateSelectedCount()
