import {Component} from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
    selector:'home',
    templateUrl:'home.html'
})
export class HomeComponent{


    constructor(private http:HttpService){

    }

    GetHello(){
        this.http.GET("Lala");
    }

}