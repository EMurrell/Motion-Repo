"use client";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Switch, Label, Field } from "@headlessui/react";
import {
  CodeBracketIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  EyeIcon,
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
    <div className="flex justify-end items-center mb-4 text-[11px]">
      <Field className="flex items-center">
        <div className="relative">
          <Switch
            checked={showCode}
            onChange={setShowCode}
            className="group inline-flex h-8 w-44 items-center rounded-lg bg-gray-200 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 relative z-10"
            aria-label="Toggle code view">
            <Label className="absolute left-3 text-black z-20 flex font-medium">
              <EyeIcon className="w-4 h-4 mr-1" />
              Preview
            </Label>
            <Label className="absolute right-5 text-black z-20 flex font-medium">
              <CodeBracketIcon className="w-4 h-4 mr-1" />
              Code
            </Label>
            <span className="h-[26px] w-20 translate-x-1 rounded-[7px] bg-white transition group-data-[checked]:translate-x-[92px] z-10" />
          </Switch>
        </div>
      </Field>
      <button
        onClick={handleReset}
        className="flex items-center mx-4"
        aria-label="Reset animation">
        <ArrowPathIcon
          className={`h-5 w-5 transition-transform ${
            rotateIcon ? "rotate-180" : ""
          }`}
        />
      </button>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button
          className="flex items-center"
          aria-label={copied ? "Code copied" : "Copy code"}
          aria-live="polite">
          {copied ? (
            <>
              <ClipboardDocumentCheckIcon className="h-5 w-5" />
            </>
          ) : (
            <>
              <ClipboardDocumentIcon className="h-5 w-5" />
            </>
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
}
