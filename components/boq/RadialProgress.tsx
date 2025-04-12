interface RadialProgressProps {
    sum: number;
    spent: number;
    size?: number;
    strokeWidth?: number;
  }
  
  export default function RadialProgress({
    sum,
    spent,
    size = 80,
    strokeWidth = 6,
  }: RadialProgressProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.min(100, Math.round((spent / sum) * 100));
    const offset = circumference - (progress / 100) * circumference;
  
    return (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1e3a8a" // bg-blue-900
            fill="#1e3a8a"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#3b82f6" // blue-400
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <span
          className="absolute text-sm font-semibold"
          style={{ color: "#3b82f6" }}
        >
          {progress}%
        </span>
      </div>
    );
  }
  
  
  
// **Usage  
{/* <RadialProgress sum={1000} spent={700} /> */}
