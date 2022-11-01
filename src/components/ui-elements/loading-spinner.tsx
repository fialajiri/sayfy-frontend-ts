import Image from "next/image";
import React from "react";

export interface ILoadingSpinnerProps {
  asOverlay?: boolean;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__as-overlay"}`}>
      <Image
        className="loading-spinner__logo"
        src="/logos/sayfy-logo-png.webp"
        alt="sayfy-logo"
        width={180}
        height={180}
      />
    </div>
  );
};

export default LoadingSpinner;
