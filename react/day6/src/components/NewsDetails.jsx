import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from './Loader';
import Comment from './../components/Comment'

const NewsDetails = () => {
    let params = useParams();
    let id = params.id;
    const [newsData, setNewsData] = useState({})
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    console.log(comments)
    useEffect(() => {
        async function fetchNewsDetails() {
            try {
                setLoading(true)
                console.log(loading)
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const data = await res.json();
                // console.log(data)
                setNewsData(data)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchNewsDetails();
    }, [id])

    useEffect(() => {
        async function fetchComments() {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
                const data = await res.json();
                setComments(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchComments();
    }, [id])

    if (loading) {
        return <Loader />
    }

    return (
        <section>
            <div className="container max-w-7xl mx-auto">
                <div className='flex gap-5'>
                    <div className="newsImage">
                        <img src={`https://picsum.photos/id/${newsData.id}/500/400`} alt="" />
                    </div>
                    <div className="newsdetails">
                        <h1 className='text-5xl font-bold capitalize'>
                            {newsData.title}
                        </h1>
                        <p className='text-slate-700 my-3 text-xl'>
                            {newsData.body}
                        </p>
                    </div>
                </div>
                <div className="comments mt-5 space-y-3 bg-gray-200 p-5">
                    <h3 className='text-2xl font-bold'>Comments</h3>
                    {comments.map((comment, index) => (
                        <Comment key={index} commentData={comment} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsDetails