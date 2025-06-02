import { useEffect, useState } from "react";
import NewsComponent from "./News";
import NewsSkeleton from './NewSkeleton'

export default function AllNews() {
    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(false)
    const [showItems, setShowItems] = useState(5)
    console.log(loading)
    useEffect(() => {
        async function fetchNews() {
            try {
                setLoading(true)
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                // console.log(data)
                setNewsData(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchNews();
    }, [])

    if (loading) {
        return (
            <section className="px-3 md:px-0 ">
                <div className="max-w-7xl mx-auto grid grid-cols-2  gap-7">
                    <NewsSkeleton />
                    <NewsSkeleton />
                    <NewsSkeleton />
                    <NewsSkeleton />
                    <NewsSkeleton />
                    <NewsSkeleton />
                    <NewsSkeleton />
                    <NewsSkeleton />
                    <NewsSkeleton />
                </div>
            </section>
        )
    }
    return (
        <section className="px-3 md:px-0 ">
            <div className="max-w-7xl mx-auto grid grid-cols-2  gap-7">
                {newsData.slice(0, showItems).map((item, index) => (
                    <NewsComponent key={index} singleNews={item} />
                ))}

            </div>
            <div className="flex justify-center">

                <button onClick={() => setShowItems(showItems + 5)} className="mx-auto bg-red-500 cursor-pointer text-white px-5 py-3 my-5 rounded-md text-center">Load More</button>
            </div>
        </section>
    )
}