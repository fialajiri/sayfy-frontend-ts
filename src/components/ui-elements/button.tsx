import Link from "next/link";
import { ReactNode } from "react";

export interface ButtonProps {
  disabled?: boolean;
  link?: string;
  inverse?: boolean;
  danger?: boolean;
  dangerInverse?: boolean;
  size?: "small" | "big";
  className?: string;
  type?: "button" | "submit";
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const classes = `button button--${props.size || "default"}
   ${props.inverse && "button--inverse"}
   ${props.danger && "button--danger"}  
   ${props.dangerInverse && "button--danger--inverse"}      
   ${props.className}`;

  if (props.link) {
    return (
      <Link href={props.link} >
        <a className={classes}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button
        className={classes}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
