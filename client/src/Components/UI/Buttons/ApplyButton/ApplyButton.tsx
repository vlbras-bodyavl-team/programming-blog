import React, { ButtonHTMLAttributes } from "react";
import { ReactSVG } from "react-svg";
import done from "../../../../assets/images/done.svg";

interface ApplyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ApplyButton: React.FC<ApplyButtonProps> = (props) => {
  return (
    <button {...props} style={{ cursor: "pointer" }}>
      <ReactSVG src={done} />
    </button>
  );
};

export default ApplyButton;
