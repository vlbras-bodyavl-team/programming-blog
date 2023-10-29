import React, { ButtonHTMLAttributes } from "react";
import { ReactSVG } from "react-svg";
import cancel from "../../../../assets/images/cancel.svg";
import cancelDark from "../../../../assets/images/cancel dark.svg";

import { useAppSelector } from "../../../../store/store";

interface CancelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CancelButton: React.FC<CancelButtonProps> = (props) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <button {...props} style={{ cursor: "pointer" }}>
      <ReactSVG src={isDark ? cancelDark : cancel} />
    </button>
  );
};

export default CancelButton;
