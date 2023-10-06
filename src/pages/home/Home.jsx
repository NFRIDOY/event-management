import { useLoaderData } from "react-router-dom"
import EventCard from "../../components/EventCard/EventCard";


export default function Home() {

  const eventData = useLoaderData();
  console.log(eventData[0]?.image);

  return (
    <div className="max-w-7xl mx-auto py-9">
      <h1 className="text-center text-6xl font-bold">Our Avalable Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-16">
        {
          eventData?.map(event => <EventCard key={event.id} event={event}></EventCard>)
        }
      </div>
    </div>
  )
}
