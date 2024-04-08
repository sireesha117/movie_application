import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RegisterService } from './register.service';
import { Register } from './register';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterService],
    });
    service = TestBed.inject(RegisterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add a user', () => {
    const newRegister: Register = {
      username: 'yaswanth',
      password: 'yaswanth',
      email: 'yaswanth@gmail.com',
      petname: 'cow',
    };
    const expectedResponse: Register = {
      username: 'yaswanth',
      password: 'yaswanth',
      email: 'yaswanth@gmail.com',
      petname: 'cow',
    };
    service.addUser(newRegister).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const requestUrl = 'http://localhost:8080/auth/v1/addUser';
    const req = httpMock.expectOne(requestUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newRegister);

    req.flush(expectedResponse);
  });
});
