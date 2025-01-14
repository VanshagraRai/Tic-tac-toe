import { useState } from "react";



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


function Square({value, onSquareClick}) {
  
  return <button className="square" onClick={onSquareClick}>
    {value}
    </button>;

}




export default function Board(){
  const [xIsNext , SetXIsNext] = useState(true);
  const [squares , setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);
  let status;
  
  if(winner){
    status = "winner:" + winner;
  }
  else{
    status = "Next player is " + (xIsNext ? "X":"O");
  }

  

  function handleClick(pos) {
    if(squares[pos] || calculateWinner(squares)){
      return ;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[pos] = "X";
    }
    else{
      nextSquares[pos] = "O";
      
    }
    setSquares(nextSquares);
    SetXIsNext(!xIsNext);
    
  }
  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>

    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
  
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/> 
    </div>
    
    </>
    );
}