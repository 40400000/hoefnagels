import { SVGProps } from "react";

export function GaugeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 120 120"
      {...props}
    >
      <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="6" />

      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" transform="translate(60 60)">
        <line x1="0" y1="-40" x2="0" y2="-50" />
        <g transform="rotate(30)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(60)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(90)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(120)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(150)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(180)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(210)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(240)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(270)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(300)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
        <g transform="rotate(330)"><line x1="0" y1="-40" x2="0" y2="-50" /></g>
      </g>

      <g transform="translate(60 60)" stroke="currentColor" strokeLinecap="round">
        <line x1="0" y1="0" x2="28" y2="-28" strokeWidth="6" />
        <circle cx="0" cy="0" r="4" fill="currentColor" />
      </g>

      <text x="60" y="78" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">KM</text>
    </svg>
  );
}


