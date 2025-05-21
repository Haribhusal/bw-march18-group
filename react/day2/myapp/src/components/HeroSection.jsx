export default function HeroSectionComponent() {
    return (
        <section className="flex justify-between items-center px-4 mt-1  bg-green-200">
            <div className="text">
                <h1 className="text-5xl font-bold">Hello, I am Hari Bhusal</h1>
                <h3 className="text-xl text-green-500">I am a frontend developer</h3>
                <button className="bg-green-500 px-3">Download my Resume</button>

                <div className="social">
                    <a href="#">
                        Facebook
                    </a>
                    <a href="#">
                        Twitter
                    </a>
                    <a href="#">
                        Linkedin
                    </a>
                </div>
            </div>
            <div className="image">
                <img src="https://picsum.photos/id/2/400/400" alt="" />
            </div>
        </section>
    )
}
