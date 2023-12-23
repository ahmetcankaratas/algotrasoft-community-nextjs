import EventLogistics from "./event-logistics";
import Image from "next/image"

type EventContentProps = {
    date: string;
    address: string;
    image: string;
    imageAlt: string;
    description: string;
  };

const EventContent: React.FC<EventContentProps> = (props) => {
    const { date, address, image, imageAlt, description } =  props;

  return (
    <div className="container mx-auto mt-[-5rem] w-full px-6 md:max-w-2xl">
      <div className="flex flex-col justify-between space-y-4 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3">
        <div className="w-100">
        <Image width={544} height={320} className="w-100 object-cover h-80" src={"/" + image} alt={imageAlt} />
        </div>
        <hr />
        <EventLogistics title="Date" description={date} />
        <EventLogistics title="Location" description={address} />
        <EventLogistics title="Detail" description={description} />
      </div>
    </div>
  );
};

export default EventContent;