import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

    constructor(
        private http: Http
    ) { }

    getChartConfigurationFile(filename: string): Observable<any> {
        const url = `/src/app/chart-configuration/${filename}.json`;
        return this.http.get(url).map( (res) => {
            console.log('get chart configuration file ==> ', filename, res);
            return res.json();
        });
    }

    getChartConfiguration(type: string): Observable<any> {
        return this.http.get(`/api/chart/${type}`)
            .map((res: Response) => {
                console.log('get chart configuration ==> ', type, res);
                return res.json();
            });
    }

}
