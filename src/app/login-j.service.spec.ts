import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoginJService } from './login-j.service';

describe('LoginJService', () => {
  let service: LoginJService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginJService],
    });
    service = TestBed.inject(LoginJService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send a POST request to the API endpoint with the provided request', () => {
    const request = { username: 'test', password: 'password' };
    const expectedResponse = { token: 'abc123' };

    service.generateToken(request).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const requestUrl = 'http://localhost:8084/auth/v1/login';
    const req = httpMock.expectOne(requestUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(request);

    req.flush(expectedResponse);
  });
});
