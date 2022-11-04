import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="container sticky top-0 flex gap-x-10 mx-auto h-[80px] items-center leading-10">
                <div className="grow">Home</div>

                <div className="">
                    <Link href="/">About Me</Link>
                </div>
                <div className="border-2 border-purple-500 rounded-full px-8">
                    <Link href="/" className="">Download Resume</Link>

                </div>

            </div>
        </header >
    )
};

export default Header;