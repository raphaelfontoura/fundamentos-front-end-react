import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Image
                    className="dark:invert h-5 w-[100px]"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left p-2">
                    <ol>
                        <li className="p-2">
                            <Link className="underline" href="/nivel-0">
                                Nível 0
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="underline" href="/nivel-1">
                                Nível 1
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="underline" href="/nivel-2">
                                Nível 2
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="underline" href="/nivel-3/server-side">
                                Nível 3 - Server-side
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="underline" href="/nivel-3/client-side">
                                Nível 3 - Client-side
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="underline" href="/nivel-3/community-libraries">
                                Nível 3 - Community libraries
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="underline" href="/dashboard">
                                Aula 4 - Login / Dashboard
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="underline" href="/test-client">
                                Aula 4 - Teste client
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link className="underline" href="/test-server">
                                Aula 4 - Teste server
                            </Link>
                        </li>
                    </ol>
                </div>
                <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                    <a
                        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Documentation
                    </a>
                </div>
            </main>
        </div>
    );
}
