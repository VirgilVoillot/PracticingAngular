import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/Services/config.service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
    selector: 'meteo',
    templateUrl: 'meteo.html',
    styleUrls: ['./meteo.css']
})
export class MeteoComponent implements OnInit {

    private meteos: Meteo[];


    displayedColumns: string[] = ['date', 'summary', 'temperatureC', 'temperatureF'];
    dataSource:MatTableDataSource<Meteo>;

    constructor(private http: HttpService, private config:ConfigService) {
        this.meteos = [];
    }

    ngOnInit(): void {
        this.GetMeteo();
    }

    GetMeteo() {
        this.http.GET(this.config.GetURLforAPI("WeatherForecast")).then(t => {
            this.meteos = t as Meteo[];
            this.dataSource = new MatTableDataSource(this.meteos);
        }).catch(err => {
            console.error(err);
        });
    }

}

interface Meteo {
    date: Date;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];