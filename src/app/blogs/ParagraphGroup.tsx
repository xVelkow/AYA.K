export default function ParagraphGroup({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="">
        {children}
    </div>
}