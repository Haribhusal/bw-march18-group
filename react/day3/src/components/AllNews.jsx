import NewsComponent from "./News";

export default function AllNews() {
    return (
        <section>
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-7 grid-rows-5">

                <div className="first row-start-1 row-end-6 col-start-1 col-end-2">
                    <NewsComponent orientation="toptobottom" />
                    {/* Props */}
                </div>
                <div className="second ">
                    <NewsComponent />
                </div>
                <NewsComponent />
                <NewsComponent />
                <NewsComponent />
                <NewsComponent />
            </div>
        </section>
    )
}