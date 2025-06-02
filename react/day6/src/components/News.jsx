import { NavLink } from "react-router";

export default function NewsComponent({ orientation, titleSize, showDetails, singleNews }) {
    let showTitle = true;
    return (
        <NavLink to={`news-details/${singleNews.id}`}>
            <article className={`flex gap-3 group  flex-col ${orientation === "toptobottom" ? 'md:flex-col' : 'md:flex-row'} `}>
                <figure>
                    <img className="w-72" src={`https://picsum.photos/id/${singleNews.id}/400/300`} alt="" />
                </figure>
                <div className="w-full">
                    <h2 className={`font-bold group-hover:text-red-600 ${titleSize}`}>
                        {singleNews.title}
                    </h2>
                    <p className="text-slate-500">
                        {singleNews.body}
                    </p>
                </div>
            </article>
        </NavLink>

    )
}