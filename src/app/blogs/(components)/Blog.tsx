export default function Blog({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="flex flex-col justify-center items-center gap-6 py-16 px-8">
        {children}
    </main>
}