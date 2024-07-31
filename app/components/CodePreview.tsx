"use client";

import { useState, ComponentType } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import Controls from "./Controls"; // Import the Controls component

interface CodePreviewProps {
  animationComponent: ComponentType<any>;
  code: string;
  animationProps?: { [key: string]: any };
  text?: string;
}

export default function CodePreview({
  animationComponent: AnimationComponent,
  code,
  animationProps = {},
  text,
}: CodePreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [rotateIcon, setRotateIcon] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    setRotateIcon((prev) => !prev);
  };

  return (
    <div className="border rounded-2xl p-4 lg:pl-24 lg:py-4 lg:pr-4 my-4 w-full min-h-[240px]">
      <Controls
        showCode={showCode}
        setShowCode={setShowCode}
        copied={copied}
        handleCopy={handleCopy}
        handleReset={handleReset}
        rotateIcon={rotateIcon}
        code={code}
      />
      <AnimationComponent
        key={resetKey}
        {...animationProps}
        className="text-xl sm:text-2xl lg:text-3xl flex flex-col h-full">
        {text}
      </AnimationComponent>
      {showCode && (
        <div className="mt-4">
          <SyntaxHighlighter
            language="jsx"
            style={style}
            className="rounded-2xl"
            customStyle={{ fontSize: "1rem" }}>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
