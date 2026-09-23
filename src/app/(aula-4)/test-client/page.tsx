"use client";

import { useAuth } from "@/context/aula-4/AuthContext";
import { fetchWithToken } from "@/lib/aula-4/fetchWithToken";
import { useEffect, useState } from "react";

export const Page = () => {
    const { token } = useAuth();
    const [response, setResponse] = useState();

    useEffect(() => {
        if (token) {
            (async () => {
                const response = await fetchWithToken("http://localhost:3000/api/protected", token);
                const data = await response.json();

                setResponse(data);
            })();
        }

    }, [token]);

    if (!token) return null;

    return (
        <div>
            {JSON.stringify(response)}
        </div>
    );
}

export default Page;