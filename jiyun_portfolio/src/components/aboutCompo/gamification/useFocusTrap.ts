import { useEffect, RefObject } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return;

    function handleTab(e: KeyboardEvent) {
      if (e.key !== 'Tab' || !ref.current) return;
      const focusables = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    ref.current.addEventListener('keydown', handleTab);
    return () => ref.current?.removeEventListener('keydown', handleTab);
  }, [ref, active]);
}
