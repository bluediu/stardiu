import { MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import CardItem from './CardItem';

let dataTest = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];

function CardGrid() {
  const [data, setData] = useState(dataTest);

  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-5 m-1">
      {data.map((d) => (
        <CardItem key={d.id} />
      ))}
    </MDBRow>
  );
}

export default CardGrid;
