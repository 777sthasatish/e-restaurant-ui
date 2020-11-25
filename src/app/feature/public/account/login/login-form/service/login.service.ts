import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClientService } from 'src/app/core/service/http-client/http-client.service';

import { Authenticator } from '../model/authenticator';
import { OAuth2AccessToken } from '../../../../../../shared/model/oauth2-access-token';
import { APIUrl } from '../../../../../../shared/constant/api-url-constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClientService) { }

  login(authenticator: Authenticator): Observable<OAuth2AccessToken> {
    return this.httpClient.post(APIUrl.loginURL, authenticator);
  }
}
