import React, { useState } from "react";

interface SwaggerInputProps {
  onPaste: (content: string) => void;
}

const SwaggerInput: React.FC<SwaggerInputProps> = ({ onPaste }) => {
  const [swaggerJson, setSwaggerJson] = useState("");

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setSwaggerJson(clipboardText);
      onPaste(clipboardText);
    } catch (error) {
      console.error("Failed to read clipboard content:", error);
    }
  };

  return (
    <div>
      <button onClick={handlePaste}>Get Swagger data from Clipboard</button>
    </div>
  );
};

export default SwaggerInput;
