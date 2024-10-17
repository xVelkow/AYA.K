export default function Paragraph({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="text-xl text-left">
        {children}
    </div>
}