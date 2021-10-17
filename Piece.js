// The Piece Class

class Piece {
  constructor(name, spaces, directions, points, unicodeChar, team) {
    this.name = name;
    this.spaces = spaces;
    this.directions = directions;
    this.points = points;
    this.unicodeChar = unicodeChar;
    this.team = team;
  }
}

module.exports = Piece;