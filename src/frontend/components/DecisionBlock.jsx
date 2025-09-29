import React from "react";

const decisions = ["rock", "paper", "scissors"];

const DecisionBlock = () => {
  return (
    <div className="flex flex-row gap-5 ">
      {decisions.map((item, index) => {
        return (
          <div
            key={index}
            className="min-w-sm rounded overflow-hidden shadow-lg text-center"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default DecisionBlock;
