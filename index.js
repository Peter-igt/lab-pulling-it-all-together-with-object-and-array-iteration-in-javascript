function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson":   { number: 0,  shoe: 16, points: 22, rebounds: 12 },
                "Reggie Evans":    { number: 30, shoe: 14, points: 12, rebounds: 12 },
                "Brook Lopez":     { number: 11, shoe: 17, points: 17, rebounds: 19 },
                "Mason Plumlee":   { number: 1,  shoe: 19, points: 26, rebounds: 12 },
                "Jason Terry":     { number: 31, shoe: 15, points: 19, rebounds: 2 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrian":     { number: 4,  shoe: 18, points: 10, rebounds: 1 },
                "Bismack Biyombo": { number: 0,  shoe: 16, points: 12, rebounds: 4 },
                "DeSagna Diop":    { number: 2,  shoe: 14, points: 24, rebounds: 12 },
                "Ben Gordon":      { number: 8,  shoe: 15, points: 33, rebounds: 3 },
                "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12 }
            }
        }
    };
}

function numPointsScored(name) {
    const g = gameObject();
    for (let t in g) {
        if (g[t].players[name]) return g[t].players[name].points;
    }
}

function shoeSize(name) {
    const g = gameObject();
    for (let t in g) {
        if (g[t].players[name]) return g[t].players[name].shoe;
    }
}

function teamColors(team) {
    const g = gameObject();
    for (let t in g) {
        if (g[t].teamName === team) return g[t].colors;
    }
}

function teamNames() {
    const g = gameObject();
    return [g.home.teamName, g.away.teamName];
}

function playerNumbers(team) {
    const g = gameObject();
    for (let t in g) {
        if (g[t].teamName === team) {
            let nums = [];
            for (let p in g[t].players) {
                nums.push(g[t].players[p].number);
            }
            return nums;
        }
    }
}

function bigShoeRebounds() {
    const g = gameObject();
    let maxShoe = 0;
    let rebounds = 0;
    for (let t in g) {
        for (let p in g[t].players) {
            let player = g[t].players[p];
            if (player.shoe > maxShoe) {
                maxShoe = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }
    return rebounds;
}

function out(result) {
    document.getElementById("output").textContent = JSON.stringify(result);
}