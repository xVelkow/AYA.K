import Link from "next/link";

export default function Button({
    children, href
}: Readonly<{
    children: React.ReactNode;
    href: string;
}>) {
    return <div className="w-full flex justify-center items-center">
        <Link href={href} className="bg-primary-600 text-white w-fit text-center text-xl py-3 px-9 rounded-md uppercase">
            {children}
        </Link>
    </div>
}