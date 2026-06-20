import AnimatedText from "../components/font.jsx"

export default function hello(){
    return(<div>
        <div className="h-[100px] bg-black/60 backdrop-blur-[2px]"><AnimatedText text="Contacts"></AnimatedText></div>
        <div className="flex h-[150px] w-full justify-center items-center gap-6 bg-black/60 backdrop-blur-base">
        <a href="https://google.com/">
        <img src="https://freepnglogo.com/images/all_img/1715965947instagram-logo-png%20(1).png" className="size-10"></img>
        </a>

        <a href="">
        <img src="/youtube.png" className="size-13"></img>
        </a>

        <a href="">
        <img src="/facebook.png" className="size-13"></img>
        </a>

        <a href="">
        <img src="/linkedin.png" className="size-10"></img>
        </a>
        </div>
    </div>)
}