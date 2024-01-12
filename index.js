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
  .catch(error => console.error('Error:', error));
  fetch('http://localhost:3000/films')
  .then (response => response.json())
  .then (data => {
    data.forEach(movie => {
        const filmItem = document.createElement('li');
      filmItem.classList.add('film', 'item');
      filmItem.textContent = movie.title;
      // Add click event listener to show movie details when clicked
      filmItem.addEventListener('click', () => showMovieDetails(movie));
      
    })
  })

