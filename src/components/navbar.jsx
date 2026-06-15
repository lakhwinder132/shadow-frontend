export default function hello(){
    return(<div className="flex bg-blue-200 h-[60px] items-center">
        <img src="/shadow.png" className="rounded-lg size-10 mx-2"></img>
        <div className=" w-[600px] justify-start px-1 font-bold">Shadow Program</div>
        <div className="flex flex-wrap justify-evenly w-[500px] gap-2.5 align-center font-medium">

            <a href="#shelly" className="hidden md:block">About</a>

            <a href="#shelly" className="hidden md:block">Testimonials</a>

            <a href="#shelly" className="hidden md:block">Gallery</a>

            <a href="#shelly" className="hidden md:block">Faq</a>

        </div>

        <div className="font-bold bg-blue-100 text-base border-1 rounded-md px-1"><button>Register</button></div>
    </div>);
}