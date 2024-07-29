"use client";

import { useState, ComponentType, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Switch } from "@headlessui/react";
import {
  EyeIcon,
  CodeBracketIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

interface ToggleProps {
  animationComponent: ComponentType<{ children: ReactNode }>;
  code: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({
  animationComponent: AnimationComponent,
  code,
}: ToggleProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the icon after 2 seconds
  };

  return (
    <div className="border p-4 my-4 w-full min-h-[300px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Switch
            checked={showCode}
            onChange={setShowCode}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 data-[checked]:bg-blue-600 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50">
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        </div>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className=" text-black/80 px-3 py-1 rounded flex items-center ml-4 text-xs">
            {copied ? (
              <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2" />
            ) : (
              <ClipboardDocumentIcon className="h-5 w-5 mr-2" />
            )}
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </CopyToClipboard>
      </div>
      <AnimationComponent>
        <div className="text-3xl sm:text-4xl lg:text-5xl">Hello World</div>
      </AnimationComponent>
      {showCode && (
        <div className="mt-4">
          <SyntaxHighlighter language="jsx" style={style} className="rounded">
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
