// The ChessBoard CLass

/*
 8x8 or an array w/ 64 slots
*/

const Piece = require('./Piece'); //  constructor(name, points, unicodeChar, team, posX, posY)

var boardMap = new Map(); // keeps track of piece placement

// defines the starting position on init
const defineBoard = function(board, boardMap) {

  // Black Pawns
  boardMap.set("bp0", new Piece("Pawn", 1, "\u265F", "Black", 6,0));
  boardMap.set("bp1", new Piece("Pawn", 1, "\u265F", "Black", 6,1));
  boardMap.set("bp2", new Piece("Pawn", 1, "\u265F", "Black", 6,2));
  boardMap.set("bp3", new Piece("Pawn", 1, "\u265F", "Black", 6,3));
  boardMap.set("bp4", new Piece("Pawn", 1, "\u265F", "Black", 6,4));
  boardMap.set("bp5", new Piece("Pawn", 1, "\u265F", "Black", 6,5));
  boardMap.set("bp6", new Piece("Pawn", 1, "\u265F", "Black", 6,6));
  boardMap.set("bp7", new Piece("Pawn", 1, "\u265F", "Black", 6,7));

  // White Pawns
  boardMap.set("wp0", new Piece("Pawn", 1, "\u2659", "White", 1,0));
  boardMap.set("wp1", new Piece("Pawn", 1, "\u2659", "White", 1,1));
  boardMap.set("wp2", new Piece("Pawn", 1, "\u2659", "White", 1,2));
  boardMap.set("wp3", new Piece("Pawn", 1, "\u2659", "White", 1,3));
  boardMap.set("wp4", new Piece("Pawn", 1, "\u2659", "White", 1,4));
  boardMap.set("wp5", new Piece("Pawn", 1, "\u2659", "White", 1,5));
  boardMap.set("wp6", new Piece("Pawn", 1, "\u2659", "White", 1,6));
  boardMap.set("wp7", new Piece("Pawn", 1, "\u2659", "White", 1,7));

  // Black Pieces
  boardMap.set("br1", new Piece("Rook", 5, "\u265C", "Black", 7,0));
  boardMap.set("bn1", new Piece("Knight", 3, "\u265E", "Black", 7,1));
  boardMap.set("bb1", new Piece("Bishop", 3, "\u265D", "Black", 7,2));
  boardMap.set("bq1", new Piece("Queen", 9, "\u265F", "Black", 7,3));
  boardMap.set("bk1", new Piece("King", 999, "\u265F", "Black", 7,4));
  boardMap.set("bb1", new Piece("Bishop", 3, "\u265D", "Black", 7,5));
  boardMap.set("bn1", new Piece("Knight", 3, "\u265E", "Black", 7,6));
  boardMap.set("br1", new Piece("Rook", 5, "\u265C", "Black", 7,7));

  // White Pieces
  boardMap.set("br1", new Piece("Rook", 5, "\u2656", "White", 7,0));
  boardMap.set("bn1", new Piece("Knight", 3, "\u2658", "White", 7,1));
  boardMap.set("bb1", new Piece("Bishop", 3, "\u2657", "White", 7,2));
  boardMap.set("bq1", new Piece("Queen", 9, "\u2655", "White", 7,3));
  boardMap.set("bk1", new Piece("King", 999, "\u2654", "White", 7,4));
  boardMap.set("bb1", new Piece("Bishop", 3, "\u2657", "White", 7,5));
  boardMap.set("bn1", new Piece("Knight", 3, "\u2658", "White", 7,6));
  boardMap.set("br1", new Piece("Rook", 5, "\u2656", "White", 7,7));

}

//
var setBoard = function(size,board, boardMap) {
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {

    }
  }
}

const setPawns = function(boardArr, boardMap) {

}

// draw chess board & pieces
const drawBoard = function(board, boardArr, boardMap){

  for (i = 0; i < board.size; i++) {
    
    i%8 != 0 ? writeln('\n') : writeln(''); // ternary

    for (j = 0; j < board.size; j++) {
        writeln("i" + i + "j" + j + " -- "); // the square is drawn
    }
  }
  writeln("\n");
}

class Board {
  constructor(size, boardArr) {
    this.size = size;
    this.boardArr = boardArr;
    setBoard(size,boardArr);
    drawBoard(this, boardArr);
  }
}

function writeln(str) {
  return process.stdout.write(str);
}

module.exports.drawBoard = drawBoard;
module.exports = Board;
