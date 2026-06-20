import TeamCard from "./../components/teamcard.jsx";
import AnimatedText from "../components/font.jsx";

export default function hello(){
    return(<div className="bg-black/60 backdrop-blur-[2px] w-full min-h-screen py-20">
        <div className="h-[100px]"><AnimatedText text="Team"></AnimatedText></div>
        <div className="w-full flex justify-center">
        <div className="flex justify-center bg-blue-400 text-white w-fit p-4 items-center rounded-md h-[40px]">
                    Web Team
                </div>
        </div>
        <div className="flex justify-center">
            <TeamCard imageurl="/team/Kartik.png" name="Kartik Vaishnav" position="OC">
            </TeamCard>
        </div>


         <div className="w-full flex justify-center my-9">
        <div className="flex justify-center bg-blue-400 text-white w-fit p-4 items-center rounded-md h-[40px]">
                   ASMP CTMs
                </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 ">
            <TeamCard imageurl="/team/Kartik.png" name="Aadit Sule" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Aastha Maliwal" position="OC">
            </TeamCard>
        </div>

        <div className="w-full flex justify-center mb-6">
        <div className="flex justify-center bg-blue-400 text-white w-fit p-4 items-center rounded-md h-[40px]">
                  ASMP Coordies
                </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
            <TeamCard imageurl="/team/Kartik.png" name="Jasnoor Kaur" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Manas Gupta" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Ridham Saxena" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Srishti Poddar" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Vaibhav Kumar" position="OC">
            </TeamCard>
        </div>

        <div className="w-full flex justify-center my-9">
        <div className="flex justify-center bg-blue-400 text-white w-fit p-4 items-center rounded-md h-[40px]">
                 Web CTMs
                </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
            <TeamCard imageurl="/team/Kartik.png" name="Arush Srivastav" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Khushi Yadav" position="OC">
            </TeamCard>
        </div>

        <div className="w-full flex justify-center my-9">
        <div className="flex justify-center bg-blue-400 text-white w-fit p-4 items-center rounded-md h-[40px]">
                Web Coordies
                </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
            <TeamCard imageurl="/team/Kartik.png" name="Aditya Chaurasiya" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Kapil Chhipa" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Rutika Hake" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Tarun Kadam" position="OC">
            </TeamCard>
            <TeamCard imageurl="/team/Kartik.png" name="Vaibhav Kumar Singh" position="OC">
            </TeamCard>
             <TeamCard imageurl="/team/Kartik.png" name="Vanshika Nalamasa" position="OC">
            </TeamCard>
        </div>
    </div>);
}