"use client";
import { useState } from "react";

export function Disclosure() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold">Disclosure</h2>
      <button
        aria-expanded={open}
        aria-controls="disclosure-content"
        onClick={() => setOpen(!open)}
        className="text-sm font-medium underline"
      >
        {open ? "Hide details" : "Show details"}
      </button>

      {open && (
        <div id="disclosure-content" className="mt-2 text-sm text-gray-700">
          <p>This is the content that gets revealed when the disclosure is open.</p>
        </div>
      )}
    </section>
  );
}