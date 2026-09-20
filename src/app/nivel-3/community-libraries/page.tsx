"use client"

import useSWR from 'swr';
import { fetcher } from './fetchData';
import { PostType } from '@/app/types';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BlogPage() {
    const { data, error, isLoading } = useSWR(
        "https://api.vercel.app/blog",
        fetcher,
        {
            // errorRetryInterval: 5000,
            // refreshInterval: 1000
        }
    )

    if (isLoading) return <div>Loading ...</div>

    if (error) return <div>Error: { error.message }</div>

    return (
        <ul>
            { data.map((post: PostType) => (
                <li key={ post.id }>
                    { post.title }
                </li>
            ))}
        </ul>
    )
}
