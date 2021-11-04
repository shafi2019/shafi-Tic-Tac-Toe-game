import React from "react";
import Board from "./board";
import './App.css';


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
  render() {
    const history =  this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    return (
      <>
      <h1>Shafi Tic Tac Toe Game</h1>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">

        </div>

      </div>
      </>
    )
  }
}
export default App;
