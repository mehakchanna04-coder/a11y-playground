"use client";
import { useEffect, useRef, useState } from "react";

export function Modal() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      // TODO 1: move focus to the first focusable element inside dialogRef
    } else {
      // TODO 2: return focus to triggerRef
    }
  }, [open]);

  function onKeyDown(e: React.KeyboardEvent) {
    // TODO 3: if Escape -> setOpen(false)
    // TODO 4 (focus trap): if Tab, get all focusable elements inside the
    // dialog (dialogRef.current.querySelectorAll<HTMLElement>(
    //   'button, [href], input, select, textarea')),
    // and if focus is on the last one and Tab pressed -> preventDefault,
    // focus the first; if on the first and Shift+Tab -> preventDefault,
    // focus the last.
  }

  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold">Modal</h2>
      <button ref={triggerRef} onClick={() => setOpen(true)} className="rounded bg-[#1C2A44] px-4 py-2 text-white">
        Open modal
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onKeyDown={onKeyDown}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-32 max-w-sm rounded bg-white p-6"
          >
            <h3 id="modal-title" className="text-lg font-semibold">Confirm action</h3>
            <p className="mt-2 text-sm text-gray-600">This is a hand-built modal.</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => setOpen(false)} className="rounded border px-3 py-1.5">Cancel</button>
              <button onClick={() => setOpen(false)} className="rounded bg-[#A3263B] px-3 py-1.5 text-white">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}