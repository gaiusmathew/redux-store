import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IConfig } from '../models/config.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = `${environment.apiUrl}config.json`;

  constructor(private http: HttpClient) { }

  getConfig(): Observable<IConfig> {
    return this.http.get<IConfig>(this.configUrl);
  }
}
