import { expect } from 'chai'; // ES6
import fetch from 'node-fetch';

describe('Movie Details', () => {
  it('Should be able to get movie results', async () => {
    const series = await fetch(
      'http://www.omdbapi.com/?t=Game&Episode=1&apikey=c9079b0f&type=series'
    );
    const movie = await fetch(
      'http://www.omdbapi.com/?t=Game&Episode=1&apikey=c9079b0f&type=movie'
    );
    const finalSeries = await series.json();
    expect(series.ok).to.be.true;
    expect(movie.ok).to.be.true;
    expect(finalSeries.Title).to.be.equal('Game of Thrones');
  });
});
