import React from "react";

export default function Footer() {
  let footerStyle = {
    width: "100%",
    backgroundColor: "red",
  };
  return (
    <div className="text-light text-center py-2 my-3" style={footerStyle}>
      Copyright &copy; 2021
    </div>
  );
}
