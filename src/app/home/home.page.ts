import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SqlapirestService } from '../sqlapirest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios = [];
  http = inject( HttpClient )

  constructor(
    private db: SqlapirestService
  ) {

    console.log('PLETY constructor');

    this.http.get('https://ai.pastelerialety.com:205/api/evo-user')
      .subscribe( resp => {
        console.log('PLETY get');
      });

    // this.db.getUsuarios().subscribe( (resp:any) => {
    //   console.log('PLETY getUsuarios', resp);
    //   // this.usuarios = resp;
    // });

    this.getUser().subscribe( (resp:any) => {
      console.log('PLETY getUser', resp);
      this.usuarios = resp;
    });

  }

  getUser() {
    return this.http.get<any>('https://ai.pastelerialety.com:205/api/evo-user');
  }  



}
