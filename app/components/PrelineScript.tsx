"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

export default function PrelineScript() {
    const path = usePathname();

    useEffect(() => {
        import("preline/preline");
    }, []);

    useEffect(() => {
        setTimeout(() => {
            // Check if HSStaticMethods is defined before calling autoInit
            if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
                window.HSStaticMethods.autoInit();
            } else {
                console.error('HSStaticMethods or autoInit method is undefined');
            }
        }, 100);
    }, [path]);


    return null;
}