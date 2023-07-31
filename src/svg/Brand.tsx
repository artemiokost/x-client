import { forwardRef } from 'react'

export const Brand = forwardRef((props: { width?: number; height?: number }, ref) => (
  <svg
    width={props.width}
    height={props.height}
    id="Brand"
    style={{ fill: 'inherit' }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 426.48 403.33"
    xmlSpace="preserve"
  >
    <title>Logo</title>
    <polygon
      points="354.73 201.5 213.81 403 71.89 201.5 213.81 0 354.73 201.5"
      style={{ fill: 'currentColor', opacity: 0.6 }}
    />
    <polygon
      points="256.62 161.03 213.49 403.11 0 279.96 44.04 37.47 256.62 161.03"
      style={{ fill: 'currentColor', opacity: 0.6 }}
    />
    <polygon
      points="426.48 280.27 213.61 403.33 170.14 160.73 383.92 38.09 426.48 280.27"
      style={{ fill: 'currentColor', opacity: 0.6 }}
    />
  </svg>
))
