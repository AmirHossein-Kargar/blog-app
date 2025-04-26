import Image from "next/image"

export default function Avatar({src, width=24, alt}) {
  return (
   <Image
               src={src}
               width={width}
               height={width}
               alt={alt}
               className="rounded-full ring-1 ring-slate-300"
             />
  )
}

// author.avatarUrl || "/profile.png"