import { useLoaderData } from "react-router-dom"
import EventCard from "../../components/EventCard/EventCard";
import Banner from "../../components/Banner/Banner";

export default function Home() {

  const eventData = useLoaderData();
  // console.log(eventData[0]?.image);

  return (

    <div className="py-9">
      <Banner></Banner>
      <div className="lg:max-w-7xl mx-auto ">
        <h1 className="text-center text-6xl font-bold" data-aos="fade-up">Our Avalable <span className="text-yellow-400">Events</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 my-16 px-3">
          {
            eventData?.map(event => <EventCard key={event.id} event={event}></EventCard>)
          }
        </div>
      </div>
      <div className="lg:max-w-7xl mx-auto shadow-2xl p-10">
        <h1 className="text-7xl font-bold w-fit mx-auto" >Why We Are <span className="text-yellow-400">Best</span>?</h1>
        <ul className="lg:max-w-7xl mx-auto shadow-sm fole grid grid-cols-3 gap-6 mt-10">
          <li>
            <span className="text-bold text-3xl ">Ease of Registration</span>
            <p>
              Our user-friendly platform has been designed with your convenience in mind. You will find it effortless to navigate through the registration process.
            </p>
          </li>
          <li>
            <span className="text-bold text-3xl ">Customization</span>
            <p>
              We understand that each corporate event is unique. That's why we offer a wide range of customization options to tailor our services to your specific needs.
            </p>
          </li>
          <li>
            <span className="text-bold text-3xl ">Expertise</span>
            <p>
              Our team of experienced event planners and managers is dedicated to ensuring the success of your event. We have a proven track record of delivering outstanding results.

            </p>
          </li>
          <li>
            <span className="text-bold text-3xl ">Collaboration</span>
            <p>
              We believe in working closely with our clients, forming a strong partnership to bring your vision to life. Your success is our success, and we are committed to helping you achieve your goals.
            </p>
          </li>
          <li>
            <span className="text-bold text-3xl ">Technology</span>
            <p>
              Our state-of-the-art technology will provide you with real-time updates, seamless communication, and valuable insights to keep you informed every step of the way.

            </p>
          </li>
          <li>
            <span className="text-bold text-3xl ">Networking</span>
            <p>
              By joining our platform, you will have access to a vast network of professionals and industry experts. This will open doors to new opportunities and partnerships that can take your corporate events to the next level.
            </p>
          </li>
          <li>
            <span className="text-bold text-3xl ">Support</span>
            <p>
              Our dedicated support team is available to assist you 24/7. Your questions and concerns will always receive prompt attention.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
