import React, { useState } from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";
const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <dev className="nav-links">
      {sublinks.map((sublink) => {
        const { pageId, page } = sublink;
        return (
          <button
            className="nav-link"
            key={pageId}
            onMouseEnter={() => {
              setPageId(pageId);
            }}
          >
            {page}
          </button>
        );
      })}
    </dev>
  );
};

export default Navlinks;
