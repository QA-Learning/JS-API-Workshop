import { expect } from 'chai'; // ES6
import fetch from 'node-fetch';

describe('Movie Details', () => {
  it('Should be able to get movie results', async () => {
    const series = await fetch(
      'http://www.omdbapi.com/?s=Game&apikey=c9079b0f&type=series'
    );
    const movie = await fetch(
      'http://www.omdbapi.com/?s=Game&apikey=c9079b0f&type=movie'
    );
    const finalSeries = await series.json();
    const finalMovies = await movie.json();
    expect(series.ok).to.be.true;
    expect(movie.ok).to.be.true;

    //expect(finalSeries.Search.Title).to.be.equal('Game of Thrones');

    // TODO Find movies release after 2012

    const foundMovie = finalMovies.Search.filter(
      (movie) => parseInt(movie.Year) > 2012
    );
    const foundSeries = finalSeries.Search.filter(
      (movie) => parseInt(movie.Year) > 2012
    );

    let moviesMap = new Map();
    moviesMap.set('series', foundSeries).set('movies', foundMovie);

    // http://www.omdbapi.com/?i=tt0098763&apikey=c9079b0f

    let seriesList = moviesMap.get('series');
    await asyncForEach(seriesList, async (element) => {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${element.imdbID}&apikey=c9079b0f`
      );
      console.log(await response.json());
    });

    // TODO
    await Promise.all()


    // // TODO Assign default values to Ratings when its empty and Assert the default values are added to the Ratings 
    

  });
});

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
