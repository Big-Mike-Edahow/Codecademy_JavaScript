// team_stats.js
/* Team Stats
   We want to create, retrieve, and add
   information about your favorite sports
   team. Basketball, soccer, tennis, or
   water polo, you pick it. It’s your job
   to create data using the JavaScript
   data structures at your disposal:
   arrays and objects. */

const team = {
  _players: [
    { firstName: "Roger", lastName: "Bishop", age: 23 },
    { firstName: "Katrina", lastName: "Alvarez", age: 25 },
    { firstName: "Nia", lastName: "Holmes", age: 20 },
  ],
  _games: [
    { opponent: "Jets", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Giants", teamPoints: 45, opponentPoints: 12 },
    { opponent: "Eagles", teamPoints: 31, opponentPoints: 15 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
