class TicTacToe {
    constructor() {
      this.currentPlayer = 'x';
    
    this.gameFields = [
        [ null, null, null ],
        [ null, null, null ],
        [ null, null, null ],
      ];
    this.count = 0;
    this.winner = '';
  }
  
      getCurrentPlayerSymbol() {
        return this.currentPlayer;
      }
  
      nextTurn(rowIndex, columnIndex) {
        if (this.gameFields[rowIndex][columnIndex]) {
        return;
        }
        this.gameFields[rowIndex][columnIndex] = this.currentPlayer;
        this.previousPlayer = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
      }
  
      isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
      }
  
      getWinner() {
        let arr = this.gameFields;
          for(let i = 0; i < arr.length; i++) {
            if(arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2] && arr[i][0] !== null) {
              this.winner = arr[i][0]
              return this.winner
            }
            if(arr[0][i] === arr[1][i] && arr[0][i] === arr[2][i] && arr[0][i] !== null) {
              this.winner = arr[0][i]
              return this.winner
            }
          }
      if(arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2] && arr[0][0] !== null) {
              this.winner = arr[0][0]
              return this.winner
      }
      if(arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0] && arr[0][2] !== null) {
              this.winner = arr[0][2]
              return this.winner
      }
      return this.winner = null;
      }        
  
      noMoreTurns() {
        return this.gameFields.every(row => row.every(col => col));
      }
  
      isDraw() {
        return this.isFinished() && this.getWinner() === null;
      }
  
      getFieldValue(rowIndex, colIndex) {
        return this.gameFields[rowIndex][colIndex];
      }
  }
  
  module.exports = TicTacToe;
  