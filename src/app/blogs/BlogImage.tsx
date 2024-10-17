import Image from 'next/image';

export default function BlogImage({
    src, alt, width, height
}: Readonly<{
    src: string;
    alt: string;
    width: number;
    height: number;
}>) {
    return <Image src={src} alt={alt} width={width} height={height} className="w-full md:w-4/5 xl:w-3/5 object-cover"/>
}