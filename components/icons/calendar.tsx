import { SVGProps } from "react";

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 120 120"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <rect x="14" y="26" width="92" height="80" rx="10" />
        <line x1="30" y1="18" x2="30" y2="38" />
        <line x1="90" y1="18" x2="90" y2="38" />
        <line x1="14" y1="46" x2="106" y2="46" />
      </g>
      <g fill="currentColor">
        <circle cx="30" cy="62" r="4" />
        <circle cx="46" cy="62" r="4" />
        <circle cx="62" cy="62" r="4" />
        <circle cx="78" cy="62" r="4" />
        <circle cx="94" cy="62" r="4" />
        <circle cx="30" cy="78" r="4" />
        <circle cx="46" cy="78" r="4" />
        <circle cx="62" cy="78" r="4" />
        <circle cx="78" cy="78" r="4" />
        <circle cx="94" cy="78" r="4" />
      </g>
    </svg>
  );
}


