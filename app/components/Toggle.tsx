"use client";

import { useState, ComponentType, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Switch, Label, Field } from "@headlessui/react";
import {
  CodeBracketIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

interface ToggleProps {
  animationComponent: ComponentType<{
    children: ReactNode;
    [key: string]: any;
  }>;
  code: string;
  animationProps?: { [key: string]: any };
  text: string;
}

export default function Toggle({
  animationComponent: AnimationComponent,
  code,
  animationProps = {},
  text,
}: ToggleProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the icon after 2 seconds
  };

  return (
    <div className="border p-4 my-4 w-full min-h-[300px]">
      <div className="flex justify-end items-center mb-4">
        <Field className="flex items-center">
          <Switch
            checked={showCode}
            onChange={setShowCode}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 data-[checked]:bg-blue-600 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50">
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Label
            className={`${
              showCode ? "text-blue-600" : ""
            } text-xs cursor-pointer flex items-center`}>
            <CodeBracketIcon className="w-5 h-5 ml-2 mr-1" />
            Show Code
          </Label>
        </Field>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className=" px-3 py-1 rounded flex items-center ml-4 text-xs">
            {copied ? (
              <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2" />
            ) : (
              <ClipboardDocumentIcon className="h-5 w-5 mr-2" />
            )}
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </CopyToClipboard>
      </div>
      <AnimationComponent {...animationProps}>
        <div className="text-3xl sm:text-4xl lg:text-5xl">{text}</div>
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
