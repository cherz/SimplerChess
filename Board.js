// The ChessBoard CLass

/*
 8x8 or an array w/ 64 slots
*/

const Piece = require('./Piece');

var setBoard = function(size,board) {
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {

    }
  }
}

// draw chess board & pieces
const drawBoard = function(board, boardArr){

  for (i = 0; i < board.size; i++) {
    
    i%8 != 0 ? writeln('\n') : writeln('');
    
    for (j = 0; j < board.size; j++) {
        writeln("i" + i + "j" + j + " -- ");
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
