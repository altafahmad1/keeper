import React from "react";

function Footer(){
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <p>Altaf Ahmad Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;
