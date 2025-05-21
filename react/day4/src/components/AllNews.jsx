import NewsComponent from "./News";

export default function AllNews() {

    let showNewsDetails = true;

    return (
        <section className="px-3 md:px-0 ">
            <div className="max-w-7xl mx-auto grid  md:grid-cols-2  gap-7">

                <div className="first row-start-1 row-end-6 col-start-1 col-end-2">
                    <NewsComponent orientation="toptobottom" titleSize='text-2xl' showDetails={showNewsDetails} />
                    {/* Props */}
                </div>
                <div className="second ">
                    <NewsComponent titleSize='text-xl' showDetails={showNewsDetails} />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <NewsComponent />
                    <NewsComponent titleSize='text-base' />
                    <NewsComponent titleSize='text-base' />
                    <NewsComponent titleSize='text-base' />
                    <NewsComponent titleSize='text-base' />
                    <NewsComponent titleSize='text-base' />
                    <NewsComponent titleSize='text-base' />
                    <NewsComponent titleSize='text-base' />
                    <NewsComponent titleSize='text-base' />
                </div>

            </div>
        </section>
    )
}