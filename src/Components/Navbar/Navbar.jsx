const Navbar = () => {
    return (
        <div className="text-center gap-4 flex flex-col md:flex-row justify-between items-center py-5">
            <div className=" flex font-black text-2xl w-full justify-between items-center whitespace-nowrap text-center lg:text-left lg:w-[30%] ">
                <h1 className="text-3xl">Chef&apos;s Table</h1>
                
        {/* checkbox */}
        <label className="visible lg:hidden btn btn-circle swap swap-rotate">
                        <input type="checkbox" />
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        {/* <!-- close icon --> */}
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                        </label>
            </div>

            <div className="flex items-center lg:w-full justify-center lg:justify-between">
                    <div className="hidden lg:flex justify-center items-center gap-7 text-base font-medium w-[100%] lg:mr-14">
                        <a href="">Home</a>
                        <a href="">Recipes</a>
                        <a href="">About</a>
                        <a href="">Search</a>
                    </div>

                    <div className="flex items-center gap-2 justify-center">
                        <div className="relative">
                        <i className="absolute left-3 top-1/2 transform -translate-y-1/2 fa-solid fa-magnifying-glass"></i>
                        <input className="pl-8 input w-auto" type="text" placeholder="Search"/>
                        </div>

                            <div className="avatar">
                                <div className="w-[50px] rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>

                    </div>
            </div>
            
        </div>
    );
};

export default Navbar;