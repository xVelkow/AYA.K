import Image from 'next/image';

export default function BlogImage({
    src, alt
}: Readonly<{
    src: string;
    alt: string;
}>) {
    return <Image src={src} alt={alt} width={800} height={800} className="w-full md:w-4/5 xl:w-3/5 object-cover"/>
}