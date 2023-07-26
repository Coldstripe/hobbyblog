import Image from "next/image"
type Props = {
    src: string,
    alt: string,
    width: number,
    height: number,
    className?: string,
    priority?: boolean,
    hidden?: boolean
}

export default function MDXImage({ src, alt, width, height, className, priority, hidden }: Props) {

    const prty = priority ? true : false
    const hdn = hidden ? true : false
    const clssNme = className ? className : ''

    return (
        <div>
            <Image
                className={clssNme}
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={prty}
                hidden={hdn}
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
            />
        </div>
    )
}