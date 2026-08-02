"use client";
import { useEffect, useRef, useState } from "react";

export function Modal() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
    }

    if (e.key === "Tab") {
      const els = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea'
      );
      if (!els || els.length === 0) return;

      const first = els[0];
      const last = els[els.length - 1];

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    }
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