interface Props {
  fill: string;
  className?: string;
}

/** Curved SVG divider used between sections in grid (bento) mode only. */
export default function WaveDivider({ fill, className = '' }: Props) {
  return (
    <svg
      className={`absolute left-0 right-0 -bottom-px w-full h-[90px] pointer-events-none z-[2] ${className}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,45 L1440,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  );
}
