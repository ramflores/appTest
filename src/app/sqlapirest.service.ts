import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SqlapirestService {

  http = inject( HttpClient )

  constructor() { }

  getUsuarios() {
    return this.http.get('https://ai.pastelerialety.com:205/api/evo-user');
  }  
}
