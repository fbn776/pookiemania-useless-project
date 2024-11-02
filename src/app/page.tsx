export default function Page() {
    return <div className="w-full h-[100dvh] bg-main flex flex-col items-center justify-center gap-10">
        <div className="flex gap-2 items-center">
            <input type="text" className="px-6 py-4 rounded-full" placeholder="Write yurrr mooooddddd"/>
            <button className="size-[50px] bg-white flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"/>
                    <path d="M6.5 12h14.5"/>
                </svg>
            </button>
        </div>

        <div className="size-[500px] bg-white rounded-full">

        </div>
    </div>
}
