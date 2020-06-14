import { Injectable } from '@angular/core';
import {AccountService} from '../auth/account-service.service';
import {AuthServerProvider} from '../auth/auth-jwt.service';
import {Login} from '../../model/login.model';
import {Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';
import {Account} from '../../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider) {}

  login(credentials: Login): Observable<Account | null> {
    return this.authServerProvider.login(credentials).pipe(flatMap(() => this.accountService.identity(true)));
  }

  logout(): void {
    this.authServerProvider.logout().subscribe(null, null, () => this.accountService.authenticate(null));
  }
}
