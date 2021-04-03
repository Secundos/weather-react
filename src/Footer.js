import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <small className="footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/emilia-kuci%C4%99ba-a497761ba/"
        target="_blank"
        rel="noreferrer"
      >
        Emilia Kucięba
      </a>{" "}
      and is open-soursed{" "}
      <a
        href="https://github.com/Secundos/weather-app-project"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        on GitHub
      </a>{" "}
      and hosted{" "}
      <a
        href="https://silly-sinoussi-be476f.netlify.app/?#"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        on Netfly
      </a>
    </small>
  );
}