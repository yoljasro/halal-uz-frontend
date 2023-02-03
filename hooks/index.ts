import useResizeObserver from "@react-hook/resize-observer";
import { RefObject, useLayoutEffect, useState } from "react";

export const useSize = (target: RefObject<HTMLElement>) => {
    const [size, setSize] = useState<DOMRectReadOnly>();

    useLayoutEffect(() => {
        if (target.current) setSize(target.current.getBoundingClientRect())
    }, [target])

    useResizeObserver(target, (entry) => setSize(entry.contentRect))

    return size
};