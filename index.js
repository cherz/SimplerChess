const Piece = require('./Piece');
const Board = require('./Board');

const BoardSize = 8;
// KING
const WKing = new Piece("King",1,[1,1,1,1,1],999,'\u2655',"White");
const BKing = new Piece("King",1,[1,1,1,1,1],999,'\u265A',"Black");

// QUEEN
const WQueen = new Piece("Queen",5,[1,1,1,1,1],9,'\u2655',"White");
const BQueen = new Piece("Queen",5,[1,1,1,1,1],9,'\u265B',"Black");

// ROOK
const WRook = new Piece("Rook",5,[1,1,1,1,0],5,'\u2656',"White");
const BRook = new Piece("Rook",5,[1,1,1,1,0],5,'\u265C',"Black");

// BISHOP
const WBishop = new Piece("Bishop",5,[0,0,0,0,1],3,'\u2657',"White");
const BBishop = new Piece("Bishop",5,[0,0,0,0,1],3,'\u265D',"Black");

// KNIGHT
const WKnight = new Piece("Knight",5,[0,0,0,0,1],3,'\u2658',"White");
const BKnight = new Piece("Knight",5,[0,0,0,0,1],3,'\u265E',"Black");

// PAWN
const WPawn = new Piece("Pawn",1,[1,0,0,0,0],1,'\u2659',"White");
const BPawn = new Piece("Pawn",1,[1,0,0,0,0],1,'\u265F',"Black");

// CHESS BOARD
var boardarr = [];
var ChessBoard = new Board(BoardSize, boardarr);
