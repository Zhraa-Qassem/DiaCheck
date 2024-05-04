function Socials({ image, text, url }) {
    return (
        <div>
            <a href={url} target="_blank" rel="noreferrer" className="group hover:scale-110 transition duration-300">
                <img src={image} alt={text} className="w-12 h-12 rounded-full mx-auto" />
                <p className="text-center text-primary mt-2">{text}</p>
            </a>
        </div>
    )
}

export default Socials
