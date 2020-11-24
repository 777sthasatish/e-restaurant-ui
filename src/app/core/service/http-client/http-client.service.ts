import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

export interface HTTPOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

type Params = HttpParams | {
  [param: string]: string | string[];
};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private _baseURL = environment.baseURL;

  private _options: HTTPOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private _retryCount = 2;

  constructor(private httpClient: HttpClient) {
  }

  set baseURL(url: string) {
    this._baseURL = url;
  }

  set options(options: HTTPOptions) {
    this._options = options;
  }

  set retryCount(count: number) {
    this._retryCount = count;
  }

  get<T>(url: string, httpParams?: Params): Observable<T> {

    return this.httpClient
      .get<T>(`${this._baseURL}/${url}`, { ...this._options, params: httpParams })
      .pipe(
        retry(this._retryCount)
      );
  }

  post<T, R>(url: string, body: T | null, httpParams?: Params): Observable<R> {
    return this.httpClient
      .post<R>(`${this._baseURL}/${url}`, body, { ...this._options, params: httpParams })
      .pipe(retry(this._retryCount));
  }

  put<T, R>(url: string, body: T | null, httpParams?: Params): Observable<R> {
    return this.httpClient
      .put<R>(`${this._baseURL}/${url}`, body, { ...this._options, params: httpParams })
      .pipe(retry(this._retryCount));
  }

  patch<T, R>(url: string, body: T | null, httpParams?: Params): Observable<R> {
    return this.httpClient
      .patch<R>(`${this._baseURL}/${url}`, body, { ...this._options, params: httpParams })
      .pipe(retry(this._retryCount));;
  }

  delete<T, R>(url: string, httpParams?: Params): Observable<R> {
    return this.httpClient
      .delete<R>(`${this._baseURL}/${url}`, { ...this._options, params: httpParams })
      .pipe(retry(this._retryCount));
  }
}
