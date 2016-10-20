import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { Leaderboard, LeaderboardResult } from '../shared/Leaderboard';
const objectAssign = require('object-assign');

@Component({
    selector: 'leaderboard',
    providers: [LeaderboardService],
    templateUrl: 'leaderboard/leaderboard.component.html',
})
export class LeaderboardComponent implements OnInit {
    private results: LeaderboardResult[]
    constructor(private leaderboardService: LeaderboardService) { }

    private applyResize(url) {
        // NOTE: Pattern taken from http://stackoverflow.com/a/6168286
        const pattern = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        const matches = url.match(pattern);
        const urlParts = {
            scheme: matches[2],
            authority: matches[4],
            path: matches[5],
            query: matches[7],
            fragment: matches[9]
        };
        return `http://${urlParts.authority}.rsz.io${urlParts.path}?width=40`;
    }

    ngOnInit() {
        this.leaderboardService.getLeaderboard()
            .subscribe(loadedLeaderboard => {
                this.results = loadedLeaderboard.results
                    .map(result => new LeaderboardResult(result))
                    .map(result => {
                        const profileImg = this.applyResize(result.profileImg);
                        objectAssign(result, {profileImg});
                        return result;
                    })
                    .slice(0, 15);
            });
    }
}
