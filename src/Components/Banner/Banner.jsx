import bannerImage from "../../assets/banner.png"
const Banner = () => {
    return (

        <div style={{backgroundImage: `linear-gradient(to top,rgba(21, 11, 43, .8), rgba(21, 11, 43, .2)),url(${bannerImage})`, backgroundPosition:"center center", backgroundRepeat:"no-repeat", borderRadius:"20px", backgroundSize:"cover", }} className="w-[95%] h-[500px] lg:h-[700px]  mx-auto text-center gap-8 flex flex-col justify-center items-center py-5">

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-black w-[90%] lg:w-[80%]">Discover an exceptional cooking class tailored for you!</h1>
            <p className=" text-gray-200 font-medium w-[80%]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
            <button className="btn btn-ghost rounded-full bg-btnBG text-btnText hover:bg-btnText hover:text-white px-6 py-2 text-lg">Explore More</button>
            <button className="btn btn-ghost rounded-full text-white font-bold text-lg border-white hover:bg-btnText hover:text-btnBG hover:border-dashed px-6 py-2">Our Feedback</button>
            </div>
            
        </div>
        
    );
};

export default Banner;