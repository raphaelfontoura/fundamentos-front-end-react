import { Suspense } from "react";

import Posts from "@/components/nivel-3/Posts";

const getPosts = async () => {
    const response = await fetch("https://api.vercel.app/blog");
    return response.json();
};

export default function Page() {
    const posts = getPosts();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Posts posts={posts} />
        </Suspense>
    );
}
