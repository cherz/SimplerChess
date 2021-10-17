// The ChessBoard CLass

/*
 8x8 or an array w/ 64 slots
*/

var setBoard = function(size,board) {
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {

    }
  }
}

// draw chess board & pieces
const drawBoard = function(){
  console.log("FART")
  for (i = 0; i < this.size; i++) {
    for (j = 0; j < this.size; j++) {
      console.log("IJ: " + i + j);
    }
  }
}

class Board {
  constructor(size, boardArr) {
    this.size = size;
    this.boardArr = boardArr;
    setBoard(size,boardArr);
  }
}

module.exports = {
  drawBoard: drawBoard
}
module.exports = Board;