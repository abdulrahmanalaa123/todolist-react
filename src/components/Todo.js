import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Todo() {
  return (
    <div className="bg-[#8758ff] flex justify-between p-4 rounded-md text-white">
      <p>Go Shopping</p>
      <div className="text-white">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onclick={() => {}}
          className="cursor-pointer"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTrash}
          onclick={() => {}}
          className="ml-3 cursor-pointer"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
