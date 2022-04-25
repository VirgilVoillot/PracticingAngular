import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {


    GetURLforAPI(controller:string):string { return "https://localhost:7057/"+controller};

}