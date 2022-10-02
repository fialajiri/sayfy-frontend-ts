import Image from "next/image";
import React from "react";

export interface ILoadingSpinnerProps {
  asOverlay?: boolean;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__as-overlay"}`}>
      <div className="loading-spinner__logo">
        <Image src="/logos/sayfy-logo-png.webp" width={200} height={200} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
