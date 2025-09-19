
import React, { useEffect, useState } from "react";

const TypingIndicator: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  // Array para animar cada ponto
  const dots = [0, 1, 2].map((i) => (
    <span
      key={i}
      style={{
        display: "inline-block",
        fontSize: "2.0rem",
        color: "#888",
        fontWeight: 900,
        transform: step === i ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 1s linear",
        marginRight: i < 2 ? 2 : 0,
      }}
    >
      .
    </span>
  ));

  return (
    <span className="inline-flex items-center bg-gray-200 rounded-2xl h-10 px-4 pb-2 shadow">
      {dots}
    </span>
  );
};

export default TypingIndicator;
