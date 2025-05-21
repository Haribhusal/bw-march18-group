
export default function NewsComponent({ orientation }) {
    console.log(orientation)
    return (
        <article className={`flex gap-3 group  ${orientation === "toptobottom" ? 'flex-col' : 'flex-row'}`}>
            <figure>
                <img className="w-full" src="https://picsum.photos/id/12/400/300" alt="" />
            </figure>
            <div>
                <h2 className="text-2xl font-bold group-hover:text-red-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a reiciendis voluptates?
                </h2>
                <p className="text-slate-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eius nostrum explicabo illo vero ipsam minima! Ullam id atque itaque rerum, nobis nisi dolorem in neque, quasi unde et perspiciatis?
                </p>
            </div>

        </article>
    )
}