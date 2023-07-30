import { forwardRef } from "react";

export const Logo = forwardRef(
  (props: { className: string; width?: number; height?: number }, ref) => (
    <svg
      className={props.className}
      width={props.width || 120}
      height={props.height || 120}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 426.48 403.33"
    >
      <title>vortex-logo</title>
      <polygon
        points="354.73 201.5 213.81 403 71.89 201.5 213.81 0 354.73 201.5"
        style={{ fill: "#007377", opacity: 0.6 }}
      />
      <polygon
        points="256.62 161.03 213.49 403.11 0 279.96 44.04 37.47 256.62 161.03"
        style={{ fill: "#007377", opacity: 0.6 }}
      />
      <polygon
        points="426.48 280.27 213.61 403.33 170.14 160.73 383.92 38.09 426.48 280.27"
        style={{ fill: "#007377", opacity: 0.6 }}
      />
    </svg>
  ),
);
