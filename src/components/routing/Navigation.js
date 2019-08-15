import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";

export default function({ links = [] }) {
  return (
    <nav>
      <ul>
        {links.map(({ title, link }) => (
          <li key={title}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
