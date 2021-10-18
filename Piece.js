// The Piece Class

class Piece {
  constructor(name, points, unicodeChar, team, posX, posY) {
    this.name = name;
    // this.spaces = spaces; // number of spaces it can move
    // this.directions = directions; // array containing the possible available direction
    this.points = points; // point value 
    this.unicodeChar = unicodeChar;
    this.team = team;
    this.posX = posX;
    this.posY = posY;
  }
}

module.exports = Piece;