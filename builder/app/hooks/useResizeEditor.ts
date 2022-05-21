import type { RefObject } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const useResizeEditor = (): RefObject<HTMLDivElement> => {
  const ref = useRef<any>(null);
  const [pos1, setPos1] = useState<number>(0);
  const [pos2, setPos2] = useState<number>(0);
  const [pos3, setPos3] = useState<number>(0);
  const [pos4, setPos4] = useState<number>(0);

  const handleDrag = useCallback(
    (e: MouseEvent) => {
      setPos1(pos3 - e.clientX);
      setPos2(pos4 - e.clientX);

      const rect = ref?.current?.getBoundingClientRect();

      // alert(rect.left);

      ref.current.style.left = `${rect.left - pos1}px`;
      console.log(rect.left);
      console.log(pos1);
    },
    [pos3, pos4]
  );

  useEffect(() => {
    if (ref.current) {
      // ref.current?.addEventListener("click", () => {
      //   alert("yo");
      // });

      // ref.current?.addEventListener("mousedown", (e: MouseEvent) => {
      //   e.preventDefault();
      //   setPos3(e.clientX);
      //   setPos4(e.clientY);
      // });

      ref.current?.addEventListener("dragstart", (e: MouseEvent) =>
        handleDragStart(e)
      );
    }
  }, [ref]);

  return ref;
};

export default useResizeEditor;
