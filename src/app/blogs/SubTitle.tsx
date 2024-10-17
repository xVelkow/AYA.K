export default function SubTitle({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="text-2xl font-semibold text-left">
        {children}
    </div>
}