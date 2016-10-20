import { Injectable } from '@angular/core';
import { Leaderboard } from '../shared/Leaderboard';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LeaderboardService {
    private url: string;
    constructor(private http: Http) {
        // TODO: Think of a better way of constructing this URL. 
        this.url = 'https://apis.trainheroic.com/public/leaderboard/468425';
    }

    getLeaderboard() {
        return this.http.get(this.url)
            .map((response: Response) => response.json());
    }
}