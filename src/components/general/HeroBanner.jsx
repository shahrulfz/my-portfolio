const HeroBanner = () => {
    return (
        <div className="flex justify-around py-12">
            <div className="">
                <img className="h-[18rem]" src="/images/shahrul-home-dp.png" alt="image"/>
            </div>
            <div className="space-y-2 content-center grid">
                <p className="text-purple-500 font-bold text-xl">Hello, I am</p>
                <p className="font-bold text-4xl">Shahrul Faridzal</p>
                <p className="">A <span className="text-amber-600">Full Stack Developer</span> From <span className="text-red-600">Malaysia</span></p>
            </div>
        </div>
    )
};

export default HeroBanner;