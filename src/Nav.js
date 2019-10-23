import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pageone">pageone</Link>
        </li>
        <li>
          <Link to="/pagetwo">pagetwo</Link>
        </li>
        <li>
          <Link to="/pagethree">pagethree</Link>
        </li>
      </ul>
    </nav>
  );
}
