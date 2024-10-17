export default function Headline({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="text-center text-5xl md:text-6xl xl:text-7xl font-bold">
        {children}
    </div>
}