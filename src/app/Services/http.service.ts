import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpService {


    constructor(private http:HttpClient){

    }


    GET(url:string):Promise<any>{
        return this.http.get(url).toPromise();
    }

}