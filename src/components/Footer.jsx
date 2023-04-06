import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Created By shweta ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
