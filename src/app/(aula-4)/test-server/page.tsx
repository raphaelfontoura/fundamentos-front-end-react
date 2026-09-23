import { fetchWithToken } from "@/lib/aula-4/fetchWithToken";
import { cookies } from "next/headers";

export const Page = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const response = await fetchWithToken("http://localhost:3000/api/protected", token);

    const data = await response.json();

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

export default Page;