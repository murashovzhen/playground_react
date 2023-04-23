import React from "react";
import { useState } from "react";

interface Props {}

interface IState {
  today: Date;
  year: string;
  month: string;
  day: string;
}

const CardDate = (props: Props) => {
  const [state, setState] = useState<IState>({
    today: new Date(),
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  setInterval(() => {
    setState({
      today: new Date(),
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, 0);

  //const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <h3>
      {state.today.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </h3>
  );
};

export default CardDate;

// var today = new Date();

// var options = { year: "numeric", month: "long", day: "numeric" };
// var now = today.toLocaleString("en-US", options);
// console.log(now);
