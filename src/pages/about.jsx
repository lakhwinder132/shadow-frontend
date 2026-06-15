import AnimationFont from "./../components/font.jsx";

export default function About(){
    return(<div  className="bg-black/60 backdrop-blur-base rounded-xl p-6 min-h-screen">
        <div className="flex justify-center h-[100px] bg-transparent items-center">
            <AnimationFont text="ABOUT" ></AnimationFont>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className=" text-white order-2 md:order-1 max-w-md text-center">
            The "Shadow Program" at Alumination offers a unique experience for II
            T Bombay students. It's a captivating journey that whisks aspiring engineer
            s from classrooms to the heart of a prominent company. Here, they witness cutting
            -edge technology and innovative processes in action, shadowing seasoned professionals. This program bridges the gap between theory and practice, providing ins
            piration and a glimpse into their future careers. It's also an opportunity to connect with accomplished IIT Bombay alumni in the corporate world. The Shadow Program fosters growth, curiosity, and ambition among the next generation of engineers. Join us on October 20t
            h for this exceptional adventure.
        </div>
        <div className="order-1 md:order-2 md:w-1/2 flex justify-center">
            <img src="/image.png" className=" w-md rounded-md"></img>
        </div>
        </div>
        
    </div>);
}
