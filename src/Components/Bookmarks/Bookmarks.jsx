import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 border bg-slate-300">
      <div className="bg-white p-3 m-3 rounded-lg">
        <h3 className="text-3xl font-bold">
          Total Reading Tim : {readingTime}
        </h3>
      </div>
      <h3 className="text-3xl font-bold ">Bookmark : {bookmarks.length}</h3>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.func,
  readingTime: PropTypes.func
};

export default Bookmarks;
