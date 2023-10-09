import { useLoaderData } from "react-router-dom"
import EventCard from "../../components/EventCard/EventCard";
import Banner from "../../components/Banner/Banner";
import WeAreBest from "../../components/WeAreBest/WeAreBest";
import Location from "../../components/Location/Location";

export default function Home() {

  const eventData = useLoaderData();
  // console.log(eventData[0]?.image);

  // const randomStart = Math.random() * 3;
  // const randomStop = (Math.random() * 6) ? ((Math.random() * 6) < 3) : (Math.random() * 6)
  const randomStart = 2
  const randomStop = 5

  return (

    <div className="py-9">
      <Banner></Banner>
      <div className="lg:max-w-7xl mx-auto my-20 ">
        <h1 className="text-center text-6xl font-bold " data-aos="fade-up">Our Avalable <span className="text-yellow-400">Events</span></h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 my-16 mx-auto  p-8" data-aos="fade-up">
            {
              eventData?.map(event => <EventCard key={event.id} event={event}></EventCard>)
            }
          </div>
        </div>
      </div>
      <WeAreBest></WeAreBest>
      {/* <Location></Location> */}
      {
        randomStop > randomStart && <div className="bg-gray-800 p-8 my-12 rounded-md">
          <div className="lg:max-w-7xl mx-auto ">
            <h1 className="text-center text-6xl font-bold text-white" data-aos="fade-up">Recent <span className="text-yellow-400">Events</span></h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 my-16 px-3" data-aos="fade-up">
              {
                eventData.slice(randomStart, randomStop)?.map(event => <EventCard key={event.id} event={event}></EventCard>)
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}
