"use client";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Switch, Label, Field } from "@headlessui/react";
import {
  CodeBracketIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

interface ControlsProps {
  showCode: boolean;
  setShowCode: (value: boolean) => void;
  copied: boolean;
  handleCopy: () => void;
  handleReset: () => void;
  rotateIcon: boolean;
  code: string;
}

export default function Controls({
  showCode,
  setShowCode,
  copied,
  handleCopy,
  handleReset,
  rotateIcon,
  code,
}: ControlsProps) {
  return (
    <div className="flex justify-end items-center mb-4">
      <button onClick={handleReset} className="flex items-center mr-4 text-xs">
        <ArrowPathIcon
          className={`h-5 w-5 mr-2 transition-transform ${
            rotateIcon ? "rotate-180" : ""
          }`}
        />
        Refresh
      </button>
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
  );
}
