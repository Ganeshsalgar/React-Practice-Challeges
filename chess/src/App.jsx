import { useState } from "react";

function App({ board = 8 }) {
  const [selected, setSelected] = useState(null);

  const initialBoard = Array(board)
    .fill(null)
    .map(() => Array(board).fill(""));

  const handleClickCell = (row, col) => {
    setSelected({ row, col });
  };

  const isDiagonal = (row, col) => {
    if (!selected) return false;

    return (
      Math.abs(row - selected.row) === Math.abs(col - selected.col)
    );
  };

  return (
    <div>
      <h1>Chess Board</h1>

      <div className="border border-black">
        {initialBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => {
              const isSelected =
                selected?.row === rowIndex &&
                selected?.col === colIndex;

              const diagonal = isDiagonal(rowIndex, colIndex);

              return (
                <div
                  key={colIndex}
                  onClick={() => handleClickCell(rowIndex, colIndex)}
                  className={`w-16 h-16 flex items-center justify-center cursor-pointer ${
                    isSelected
                      ? "bg-red-800"
                      : diagonal
                        ? "bg-red-500"
                        : (rowIndex + colIndex) % 2 === 0
                          ? "bg-white"
                          : "bg-black"
                  }`}
                >
                  {/* {cell} */}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;