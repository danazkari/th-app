const objectAssign = require('object-assign');

export class LeaderboardResult {
    public userFirstName: string
    public userLastName: string
    public username: string
    public profileImg: string
    public profileUrl: string
    public userId: number
    public rank: number
    public tests: Array<string>
    public userTests: Array<any>

    constructor(values: Object = {}) {
        objectAssign(this, values);
    }
}

export class Leaderboard {
    workoutId: string
    workoutTitle: string
    date: Date
    timestamp: number
    tests: Array<any>
    results: Array<any>

    constructor(values: Object = {}) {
        objectAssign(this, values);
    }
}
