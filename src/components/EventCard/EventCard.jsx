

export default function EventCard({event}) {
    const {id, name, image, price, description} = event;
    return (
        <div>
            <div className="card card-compact w-96 h-[400px] bg-base-100 shadow-xl text-black">
                <figure><img src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
                        {description}
                    </p>
                    <div className="card-actions justify-end ">
                        <button className="btn btn-accent">Buy Now {price}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
