import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!ref.current) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (ref.current.contains(target)) return;
      callback(event);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (!ref.current) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (ref.current.contains(target)) return;
      callback(event);
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("touchstart", onTouchStart);
    };
  }, [ref, callback]);
};
