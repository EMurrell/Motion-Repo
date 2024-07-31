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
  label?: string;
}

export default function CodePreview({
  animationComponent: AnimationComponent,
  code,
  animationProps = {},
  text,
  label,
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
    <div className="border rounded-2xl p-4 lg:pl-24 lg:pr-8 my-4 w-full min-h-[190px] lg:min-h-[240px]">
      <Controls
        showCode={showCode}
        setShowCode={setShowCode}
        copied={copied}
        handleCopy={handleCopy}
        handleReset={handleReset}
        rotateIcon={rotateIcon}
        code={code}
      />
      <div className="flex text-2xl sm:text-3xl lg:text-4xl mt-8 sm:mt-6 lg:mt-12">
        <span>{label} &nbsp;</span>
        <AnimationComponent key={resetKey} {...animationProps} className="">
          {text}
        </AnimationComponent>
      </div>
      {showCode && (
        <div className="mt-16">
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
