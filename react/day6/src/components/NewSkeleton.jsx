export default function NewsSkeleton() {
    return (
        <article className={`flex gap-3 animate-pulse`}>
            <figure>
                <div className="w-72 h-48 bg-slate-300 rounded-md" />
            </figure>
            <div className="w-full space-y-2">
                <div className="h-6 bg-slate-300 rounded w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-5/6" />
                <div className="h-4 bg-slate-200 rounded w-2/3" />
            </div>
        </article>
    );
}
