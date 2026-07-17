"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

export default function GuestRoute({ children }) {
    const router = useRouter();

    const { currentUser } = useAppSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (currentUser) {
            router.replace("/home");
        }
    }, [currentUser, router]);

    if (currentUser) {
        return null;
    }

    return children;
}