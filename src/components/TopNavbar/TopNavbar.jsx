import Marquee from "react-fast-marquee";

export default function TopNavbar() {
    return (
        <div className="mt-0 max-w-7xl mx-auto">
            <div className="flex justify-between">
                <div className="flex justify-between">
                    <div className="text-red-600 w-96">
                        Latest Events:
                    </div>
                    <Marquee className="inline" speed="100">
                        New Events100
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
