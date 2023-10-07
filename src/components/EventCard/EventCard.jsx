

export default function EventCard({event}) {
    const {id, name, image, price, description} = event;
    return (
        <div>
            <div className="card card-compact w-96 h-[400px] bg-base-100 shadow-xl rounded-3xl text-black">
                <figure><img src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className="text-slate-600 italic">
                        {description}
                    </p>
                    <div className="card-actions justify-end ">
                        <button className="btn btn-neutral rounded-2xl text-white hover:bg-white hover:text-black">Buy Now {price}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
