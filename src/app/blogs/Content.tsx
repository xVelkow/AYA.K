export default function Content({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="flex flex-col gap-6 md:w-4/5 xl:w-3/5">
        {children}
    </main>
}