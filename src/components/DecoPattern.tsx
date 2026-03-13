export default function DecoPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="deco-fan"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            {/* Art Deco fan/sunburst pattern */}
            <path
              d="M10 20 Q10 10, 0 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-gold"
            />
            <path
              d="M10 20 Q10 10, 20 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-gold"
            />
            <path
              d="M10 20 Q10 10, 5 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gold"
            />
            <path
              d="M10 20 Q10 10, 15 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gold"
            />
            <path
              d="M10 20 Q10 10, 10 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-gold"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#deco-fan)" />
      </svg>
    </div>
  );
}
