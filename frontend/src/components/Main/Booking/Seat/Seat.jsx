import React, { useEffect, useContext } from 'react'
import clsx from "clsx"
import { MainContext } from './../../../../context/ContextProvider';

//general scss
import "./Seat.scss"

function Seat() {
  const { seats, setSeats, selectedSeats, purchasedSeats, setSelectedSeats } = useContext(MainContext)
  useEffect(() => {
    fetch("http://localhost:8080/halls")
      .then(response => response.json())
      .then(data => {
        const maxRow = Math.max(...data.map(seat => seat.row));
        const maxColumn = Math.max(...data.map(seat => seat.column));
        const seats = Array.from({ length: maxRow }, (_, i) => {
          return Array.from({ length: maxColumn }, (_, j) => {
            const seat = data.find(s => s?.row === i && s?.column === j);
            return {
              row: i,
              column: j,
              name: seat?.name,
              selected: false,
            };
          });
        });
        setSeats(seats);
      })
      .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(row, column) {
    const updatedSeats = [...seats];
    updatedSeats[row][column].selected = !updatedSeats[row][column].selected;
    setSeats(updatedSeats);
  }
  function handleSelectedState(seat) {
    const seatIndex = selectedSeats.findIndex(s => s?.row === seat?.row && s?.column === seat?.column);
    if (seat?.selected) {
      if (seatIndex === -1) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    } else {
      if (seatIndex !== -1) {
        const updatedSelectedSeats = [...selectedSeats];
        updatedSelectedSeats.splice(seatIndex, 1);
        setSelectedSeats(updatedSelectedSeats);
      }
    }
  }

  return (
    <>
      {seats.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="row">
          {row.map((seat, columnIndex) => (
            <span
              key={`${seat.row}-${seat.column}`}
              className={clsx(
                'seat',
                seat?.selected && 'selected',
                purchasedSeats.some((purchasedSeat) => purchasedSeat.row === seat.row && purchasedSeat.column === seat.column) && 'purchased'
              )}
              onClick={(e) => {
                if (!seat?.selected) {
                  handleClick(rowIndex, columnIndex);
                  handleSelectedState(seat);
                }
              }}
              onKeyPress={
                (e) => {
                  if (e.key === 'Enter') {
                    if (!seat?.selected) {
                      handleClick(rowIndex, columnIndex);
                      handleSelectedState(seat);
                    }
                  }
                }
              }
              tabIndex={seat?.selected ? -1 : 0}
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default Seat