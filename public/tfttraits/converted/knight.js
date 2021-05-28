import * as React from "react";

function SvgKnight(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 36 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.55 16.21C31.52 10.33 27.1 5.62 21.37 4.17V0h-7.43v4.17A15.117 15.117 0 002.76 16.21l14.89-5.72 14.9 5.72zM2.53 38.92v3.86l15.12 8.74 15.13-8.74v-3.86l-15.13 5.81-15.12-5.81z"
        fill={props && props.fill}
      />
      <path
        d="M17.66 14.19L0 20.97v13.57l17.66 6.78 17.65-6.78V20.97l-17.65-6.78zM6.77 31.23c0 .35-.11.68-.29.95l-3.08-.57c-.03-.12-.04-.25-.04-.38v-6.96c0-.16.02-.32.07-.47l3-.56c.22.29.35.64.35 1.03v6.96h-.01zm8.39 1.99c0 .19-.03.38-.09.55l-3.32-.62V22.28v-.03l3.29-.61c.08.2.12.41.12.64v10.94zm8.4-.06l-3.32.62a1.67 1.67 0 01-.09-.55V22.28c0-.22.04-.44.12-.64l3.29.61v10.91zm8.39-1.93c0 .13-.02.26-.04.38l-3.08.57c-.18-.27-.29-.6-.29-.95v-6.96c0-.39.13-.74.35-1.03l3 .56c.04.15.07.31.07.47v6.96h-.01z"
        fill={props && props.fill}
      />
    </svg>
  );
}

export default SvgKnight;
