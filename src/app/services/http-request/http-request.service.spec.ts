import { TestBed } from '@angular/core/testing';

import { HttpRequestService } from './http-request.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('HttpRequestService', () => {
  let service: HttpRequestService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(HttpRequestService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use the get method to to search the api', () => {
    spyOn(httpClient, 'get');

    service.searchITunes('/artist=123');

    expect(httpClient.get).toHaveBeenCalled();
  })
});
