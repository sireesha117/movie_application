import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { movie } from './movie';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all movies', () => {
    const expectedMovies: movie[] = [
      {
        movieId: 1,
        movieName: '2018',
        seats: 100,
        seatsAvalible: 100,
        theatreName: 'AMB',
        showTime:"09:30AM",
        price:30
        

      },
      {
        movieId: 2,
        movieName: 'Adhipurush',
        seats: 100,
        seatsAvalible: 100,
        theatreName: 'AMB',
        showTime:"09:30AM",
        price:40
      },
    ];

    service.getAllMovies().subscribe((movies) => {
      expect(movies).toEqual(expectedMovies);
    });

    const requestUrl = 'http://localhost:8080/api/v1/getAllMovies';
    const req = httpMock.expectOne(requestUrl);
    expect(req.request.method).toBe('GET');

    req.flush(expectedMovies);
  });

  it('should add a movie', () => {
    const newMovie: movie = {
      movieId: 2,
      movieName: 'Adhipurush',
      seats: 100,
      seatsAvalible: 100,
      theatreName: 'AMB',
      showTime:"09:30AM",
        price:30
    };
    const expectedResponse: movie = {
      movieId: 2,
      movieName: 'Adhipurush',
      seats: 100,
      seatsAvalible: 100,
      theatreName: 'AMB',
      showTime:"09:30AM",
        price:40
    };

    
  });

  it('should delete a movie', () => {
    const movieId = 1;
    const expectedResponse = 1;

    service.deleteMovie(movieId).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const requestUrl = `http://localhost:8080/api/v1/delete/${movieId}`;
    const req = httpMock.expectOne(requestUrl);
    expect(req.request.method).toBe('DELETE');

    req.flush(expectedResponse);
  });
});
