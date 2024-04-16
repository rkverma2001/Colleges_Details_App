import React from "react";
import CollegeRow from "./College";

function Table({ colleges, sortColleges, visibleRows, loadMoreRows }) {
  return (
    <table>
      <thead>
        <tr>
          <th>CD Rank</th>
          <th>Name</th>
          <th onClick={() => sortColleges("courseFees")}>Course Fees</th>
          <th onClick={() => sortColleges("placement")}>Placement</th>
          <th onClick={() => sortColleges("userRating")}>User Reviews</th>
          <th onClick={() => sortColleges("ranking")}>Ranking</th>
        </tr>
      </thead>
      <tbody>
        {colleges.slice(0, visibleRows).map((college) => (
          <CollegeRow key={college.id} college={college} />
        ))}
      </tbody>
      {colleges.length > visibleRows && (
        <tfoot>
          <tr>
            <td colSpan="5">
              <button onClick={loadMoreRows}>Load More</button>
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}

export default Table;
