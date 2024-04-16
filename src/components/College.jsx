import React from "react";

function College({ college }) {
  return (
    <tr>
      <td>#{college.id}</td>
      <td>{college.name}</td>
      <td>₹{college.courseFees}</td>
      <td>₹{college.placement}</td>
      <td>{college.userRating} / 10</td>
      <td>{college.ranking} / 100</td>
    </tr>
  );
}

export default College;
