const filmListEndpoint = 'http://localhost:3000/films';
const movieIndexToDisplay = 0;

// Make GET request to retrieve film list
fetch(filmListEndpoint)
  .then(response => response.json())
  .then(data => {
    // Get the first movie from the list
    const firstMovie = data[movieIndexToDisplay];

    // Get the movie details container element
    const movieDetailsContainer = document.getElementById('movie-details');

    // Create and append child elements to display movie details
    const posterElement = document.createElement('img');
    posterElement.src = firstMovie.poster;
    posterElement.alt = 'MOVIE POSTER';
    movieDetailsContainer.appendChild(posterElement);

    const titleElement = document.createElement('h2');
    titleElement.textContent = firstMovie.title;
    movieDetailsContainer.appendChild(titleElement);

    const runtimeElement = document.createElement('p');
    runtimeElement.textContent = (`${firstMovie.runtime} minutes`);
    movieDetailsContainer.appendChild(runtimeElement);

    const showtimeElement = document.createElement('p');
    showtimeElement.textContent = (`${firstMovie.showtime}`);
    movieDetailsContainer.appendChild(showtimeElement);

    const availableTicketsElement = document.createElement('p');
    const availableTickets = firstMovie.capacity - firstMovie.tickets_sold;
    availableTicketsElement.textContent = (`${availableTickets}`);
    movieDetailsContainer.appendChild(availableTicketsElement);
  })
  
  const filmsList = document.getElementById('films');
const placeholderLi = document.getElementById('placeholder');
if (placeholderLi) {
  filmsList.removeChild(placeholderLi);
}
  fetch('http://localhost:3000/films')
  .then (response => response.json())
  .then (data => {
    data.forEach(movie =>{
        const filmItem = document.createElement('li');
      filmItem.classList.add('film', 'item');
      filmItem.textContent = movie.title;
      // Add click event listener to show movie details when clicked
      filmItem.addEventListener('click', () => showMovieDetails(movie));
      
      // Append the film item to the films list
      filmsList.appendChild(filmItem);
      // Function to show movie details when a movie is clicked
function showMovieDetails(movie) {
    // Get and update the movie details container with the clicked movie's details
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML = '';
     // Create and append child elements to display the clicked movie's details
  const posterElement = document.createElement('img');
  posterElement.src = movie.poster;
  posterElement.alt = 'Movie Poster';
  movieDetailsContainer.appendChild(posterElement);

  const titleElement = document.createElement('h2');
  titleElement.textContent = movie.title;
  movieDetailsContainer.appendChild(titleElement);

  const runtimeElement = document.createElement('p');
  runtimeElement.textContent =(`${movie.runtime} minutes`);
  movieDetailsContainer.appendChild(runtimeElement);

  const showtimeElement = document.createElement('p');
  showtimeElement.textContent = (`${movie.showtime}`);
  movieDetailsContainer.appendChild(showtimeElement);

  const availableTicketsElement = document.createElement('p');
  const availableTickets = movie.capacity - movie.tickets_sold;
  availableTicketsElement.textContent =(`${availableTickets}`);
  movieDetailsContainer.appendChild(availableTicketsElement);


  const buyTicketButton = document.createElement('button');
  buyTicketButton.textContent = 'Buy Ticket';
  buyTicketButton.addEventListener('click', () => buyTicket(movie));
  movieDetailsContainer.appendChild(buyTicketButton);

  function buyTicket(movie) {
    // Check if there are available tickets
    if (movie.tickets_sold < movie.capacity) {
      // Update the number of available tickets
      movie.tickets_sold += 1;

      // Update the displayed available tickets on the frontend
      
      availableTicketsElement.textContent = movie.capacity - movie.tickets_sold;

      // Optionally, you can add a confirmation message or further actions here
      console.log('Ticket purchased successfully!');
    } else {
      // Handle case where there are no available tickets
      console.log('Sorry, this showing is sold out.');

       // Check if the movie is sold out and update accordingly
  if (availableTickets <= 0) {
    availableTicketsElement.textContent = 'Sold Out';
    movieDetailsContainer.classList.add('sold-out');
  } else {
    availableTicketsElement.textContent = `${availableTickets}`;
  }
  
  movieDetailsContainer.appendChild(availableTicketsElement);
    }
  }

}
    })
  })
  .catch(error => console.error('Error:', error));

