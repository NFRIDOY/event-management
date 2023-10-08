import { useLoaderData } from "react-router-dom";
import Home from "../../pages/home/Home";
import EventCard from "../EventCard/EventCard";


export default function Events() {

  const eventData = useLoaderData();
  // console.log(eventData[0]?.image);
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-6xl font-bold" data-aos="fade-up">Our Avalable <span className="text-yellow-400">Events</span> </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-16">
          {
            eventData?.map(event => <EventCard key={event.id} event={event}></EventCard>)
          }

        </div>
      </div>
    </div>

  )
}
