export default function Team({ position, name, imageurl,instagram,linkedin }) {
    return (
       <div className="bg-black/60 backdrop-blur-base text-white my-2 mb-10">
            <div>
            <div className="flex justify-center"><img src={imageurl} className="w-40 h-40 rounded-full object-cover"></img></div>
            <div className="flex justify-center font-bold">{name}</div>
            <div className="flex justify-center">{position}</div>
            <div className="flex justify-center gap-6 bg-transparent">
                <a href={linkedin}><img src="/linkedin.png" className="size-7 flex "></img></a>
                <a href={instagram}><img src="/instagram.png" className="size-7 flex "></img></a>
            </div>
            </div>
       </div>
    );
}