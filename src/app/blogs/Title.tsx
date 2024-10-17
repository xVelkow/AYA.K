export default function Title({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="text-3xl font-bold text-left">
        {children}
    </div>
}