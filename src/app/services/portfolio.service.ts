import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private apiUrl = environment.pexelApiUrl;
    private apiKey = environment.pexelApiKey;
    constructor(private httpClient: HttpClient) { }
    
    /**
     * fonction permettant de récupérer les photos relatifs à un mot clé
     * @param {string} query 
     */
    public searchPhotos(query: string): Observable<any> {
        const url = `${this.apiUrl}/search?query=${query}`;

        const headers = new HttpHeaders().set('Authorization', this.apiKey);

        return this.httpClient.get(url, { headers }).pipe(
            catchError(error => {
                throw new Error(`Error fetching Pexels API: ${error}`);
            })
        );
    }
}