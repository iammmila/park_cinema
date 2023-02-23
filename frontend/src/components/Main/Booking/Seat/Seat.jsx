import React, { useState } from 'react'
import clsx from 'clsx';

//general scss
import "./Seat.scss"

function Seat() {
  // const movies = [
  //   {
  //     name: 'Avenger',
  //     price: 10,
  //     occupied: [20, 21, 30, 1, 2, 8],
  //   },
  //   {
  //     name: 'Joker',
  //     price: 12,
  //     occupied: [9, 41, 35, 11, 65, 26],
  //   },
  //   {
  //     name: 'Toy story',
  //     price: 8,
  //     occupied: [37, 25, 44, 13, 2, 3],
  //   },
  //   {
  //     name: 'the lion king',
  //     price: 9,
  //     occupied: [10, 12, 50, 33, 28, 47],
  //   },
  // ]

  // const [selectedSeats, setSelectedSeats] = useState([])
  const [activeSeat, setActiveSeat] = useState(false);

  const handleClick = () => {
    setActiveSeat(!activeSeat);
  };
  const seats = Array.from({ length: 10 * 10 }, (_, i) => i)
  // function handleSelectedState(seat) {
  //   // const isSelected = selectedSeats.includes(seat)
  //   if (isSelected) {
  //     // onSelectedSeatsChange(
  //     selectedSeats.filter(selectedSeat => selectedSeat !== seat)
  //     // )
  //   } else {
  //     // onSelectedSeatsChange([...selectedSeats, seat])
  //   }
  // }
  return (
    <>
      {/* <select
        id="movie"
        value={movie.name}
        onChange={e => {
          onChange(movies.find(movie => movie.name === e.target.value))
        }}
      >
        {movies.map(movie => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select> */}
      {seats.map(seat => {
        // const isSelected = selectedSeats.includes(seat)
        // const isOccupied = movie.occupied.includes(seat)
        return (
          <span
            // tabIndex="0"
            key={seat}
            style={{ backgroundColor: activeSeat ? "#c1eac5" : "#626262" }}
            className={clsx(
              'seat',
              activeSeat && 'selected'
              // isSelected && 'selected',
              // isOccupied && 'occupied',
            )}
            onClick={(e) => { handleClick(e) }}
            onKeyPress={
              (e) => {
                if (e.key === 'Enter') {
                  // handleSelectedState(seat)
                }
              }
            }
          />
        )
      })}
    </>
  )
}

export default Seat