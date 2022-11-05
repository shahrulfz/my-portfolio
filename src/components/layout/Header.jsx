const Header = () => {
    return (
        <header>
            <div className="container sticky top-0 flex gap-x-10 mx-auto h-[80px] items-center leading-10">
                <div className="grow cursor-no-drop">Home</div>

                <div className="cursor-no-drop">
                    <a href="/" className="cursor-no-drop">About Me</a>
                </div>
                <div className="border-2 border-purple-500 rounded-full px-8">
                    <a href="/files/SHAHRUL-RESUME-2022.pdf" className="">Download Resume</a>
                </div>
            </div>
        </header >
    )
};

export default Header;