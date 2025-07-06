const CurvedSeparator = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        className="w-full h-32 animate-wave"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
            <stop offset="33%" stopColor="hsl(280, 100%, 50%)" />
            <stop offset="66%" stopColor="hsl(300, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(180, 100%, 50%)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(300, 100%, 50%)" />
            <stop offset="50%" stopColor="hsl(180, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(280, 100%, 50%)" />
          </linearGradient>
        </defs>

        {/* First wave layer */}
        <path
          d="M0,60 Q300,10 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient1)"
          opacity="0.4"
          className="animate-wave"
        />

        {/* Second wave layer */}
        <path
          d="M0,80 Q400,30 800,80 T1200,80 L1200,120 L0,120 Z"
          fill="url(#waveGradient2)"
          opacity="0.3"
          className="animate-wave"
          style={{ animationDelay: "1s", animationDuration: "8s" }}
        />

        {/* Third wave layer */}
        <path
          d="M0,90 Q600,50 1200,90 L1200,120 L0,120 Z"
          fill="url(#waveGradient1)"
          opacity="0.2"
          className="animate-wave"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        />
      </svg>
    </div>
  );
};

export default CurvedSeparator;
