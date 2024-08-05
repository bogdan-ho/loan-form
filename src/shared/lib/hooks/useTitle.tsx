import {MutableRefObject, useEffect, useRef} from "react";

const useTitle = (title: string): void => {
    const documentDefined: boolean = typeof document !== 'undefined';
    const originalTitle: MutableRefObject<string | null> = useRef<string | null>(documentDefined ? document.title : null);

    useEffect(() => {
        if (!documentDefined) return;

        if (document.title !== title) document.title = title;

        // Сохраняем текущее значение originalTitle.current в локальной переменной
        const prevTitle = originalTitle.current;

        return () => {
            if (typeof prevTitle === "string") {
                document.title = prevTitle;
            }
        };
    }, [documentDefined, title]);
}

export default useTitle