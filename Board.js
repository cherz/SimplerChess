// The ChessBoard CLass

/*
 8x8 or an array w/ 64 slots
*/

const Piece = require('./Piece'); //  constructor(name, points, unicodeChar, team, posX, posY)

// defines the starting position on init
const defineBoard = function(board, boardMap) {

  // TODO: use iteration to define board vs. full hardcode

  // Black Pawns
  boardMap.set("bp0", new Piece("Pawn", 1, "\u265F", "Black", 6,0, true));
  boardMap.set("bp1", new Piece("Pawn", 1, "\u265F", "Black", 6,1, true));
  boardMap.set("bp2", new Piece("Pawn", 1, "\u265F", "Black", 6,2, true));
  boardMap.set("bp3", new Piece("Pawn", 1, "\u265F", "Black", 6,3, true));
  boardMap.set("bp4", new Piece("Pawn", 1, "\u265F", "Black", 6,4, true));
  boardMap.set("bp5", new Piece("Pawn", 1, "\u265F", "Black", 6,5, true));
  boardMap.set("bp6", new Piece("Pawn", 1, "\u265F", "Black", 6,6, true));
  boardMap.set("bp7", new Piece("Pawn", 1, "\u265F", "Black", 6,7, true));

  // White Pawns
  boardMap.set("wp0", new Piece("Pawn", 1, "\u2659", "White", 1,0, true));
  boardMap.set("wp1", new Piece("Pawn", 1, "\u2659", "White", 1,1, true));
  boardMap.set("wp2", new Piece("Pawn", 1, "\u2659", "White", 1,2, true));
  boardMap.set("wp3", new Piece("Pawn", 1, "\u2659", "White", 1,3, true));
  boardMap.set("wp4", new Piece("Pawn", 1, "\u2659", "White", 1,4, true));
  boardMap.set("wp5", new Piece("Pawn", 1, "\u2659", "White", 1,5, true));
  boardMap.set("wp6", new Piece("Pawn", 1, "\u2659", "White", 1,6, true));
  boardMap.set("wp7", new Piece("Pawn", 1, "\u2659", "White", 1,7, true));

  // Black Pieces
  boardMap.set("br0", new Piece("Rook", 5, "\u265C", "Black", 7,0, true));
  boardMap.set("bn0", new Piece("Knight", 3, "\u265E", "Black", 7,1, true));
  boardMap.set("bb0", new Piece("Bishop", 3, "\u265D", "Black", 7,2, true));
  boardMap.set("bq", new Piece("Queen", 9, "\u265F", "Black", 7,3, true));
  boardMap.set("bk", new Piece("King", 999, "\u265F", "Black", 7,4, true));
  boardMap.set("bb1", new Piece("Bishop", 3, "\u265D", "Black", 7,5, true));
  boardMap.set("bn1", new Piece("Knight", 3, "\u265E", "Black", 7,6, true));
  boardMap.set("br1", new Piece("Rook", 5, "\u265C", "Black", 7,7, true));

  // White Pieces
  boardMap.set("wr0", new Piece("Rook", 5, "\u2656", "White", 0,0, true));
  boardMap.set("wn0", new Piece("Knight", 3, "\u2658", "White", 0,1, true));
  boardMap.set("wb0", new Piece("Bishop", 3, "\u2657", "White", 0,2, true));
  boardMap.set("wq", new Piece("Queen", 9, "\u2655", "White", 0,3, true));
  boardMap.set("wk", new Piece("King", 999, "\u2654", "White", 0,4, true));
  boardMap.set("wb1", new Piece("Bishop", 3, "\u2657", "White", 0,5, true));
  boardMap.set("wn1", new Piece("Knight", 3, "\u2658", "White", 0,6, true));
  boardMap.set("wr1", new Piece("Rook", 5, "\u2656", "White", 0,7, true));

  // blank space
  boardMap.set("blank", "\u2800");
}

// set the board initially 
// TODO - refactor to less lines.... maybe
var initBoard = function(size, boardArr, boardMap) {
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {

      if ((i === 1) || (i === 6)) { // set pawns
        // set black pawns
        if (i === 1) {
          boardArr[i][j] = boardMap.get("bp" + j);
        }
        // set white pawns
        else if (i === 6) {
          boardArr[i][j] = boardMap.get("wp" + j);
        }
      }

      // set black pieces
      if (i === 0) {

        switch(j) {
          
          // set rooks
          case 0:
            boardArr[i][j] = boardMap.get("br0");
            break;
          case 7:
            boardArr[i][j] = boardMap.get("br1");
            break;
          
            // set knights
          case 1:
            boardArr[i][j] = boardMap.get("bn0");
            break;

          case 6:
            boardArr[i][j] = boardMap.get("bn1");
            break;

          // set bishops
          case 2:
            boardArr[i][j] = boardMap.get("bb0");
            break;

          case 5:
            boardArr[i][j] = boardMap.get("bb1");
            break;

          // set king & queen
          case 3:
            boardArr[i][j] = boardMap.get("bq");
            break;

          case 4:
            boardArr[i][j] = boardMap.get("bk");
            break;

        }
      }

      // set white pieces
      if (i === 7) {

        switch(j) {
          
          // set rooks
          case 0:
            boardArr[i][j] = boardMap.get("wr0");
            break;

          case 7:
            boardArr[i][j] = boardMap.get("wr1");
            break;

          // set knights
          case 1:
            boardArr[i][j] = boardMap.get("wn0");
            break;

          case 6:
            boardArr[i][j] = boardMap.get("wn1");
            break;

          // set bishops
          case 2:
            boardArr[i][j] = boardMap.get("wb0");
            break;

          case 5:
            boardArr[i][j] = boardMap.get("wb1");
            break;

          // set king & queen
          case 3:
            boardArr[i][j] = boardMap.get("wq");
            break;

          case 4:
            boardArr[i][j] = boardMap.get("wk");
            break;
        }
      }
  
      // set blanks 
      if((i != 0 && i != 1)  && (i != 6 && i != 7)) {
        boardArr[i][j] = boardMap.get("blank");
      }
    }
  }

  return boardArr;
}

// draw chess board & pieces
const drawBoard = function(board, boardMap){

  for (i = 0; i < board.size; i++) {
    
    i%8 != 0 ? writeln('\n') : writeln(''); // ternary

    for (j = 0; j < board.size; j++) {
      var foo = board.boardArr[i][j];
      if (foo.unicodeChar) {
        writeln(foo.unicodeChar + "  ");
      }
      else {
        writeln(foo + "  ");
      }
    }
  }
  writeln("\n");
}

class Board {
  constructor(size, boardArr, boardMap) {
    this.size = size;
    this.boardArr = boardArr;
    this.boardMap = boardMap;
    defineBoard(this,boardMap);
    this.boardArr = initBoard(size,boardArr,boardMap);
    drawBoard(this, boardMap);
  }
}

function writeln(str) {
  return process.stdout.write(str);
}

module.exports.drawBoard = drawBoard;
module.exports = Board;
