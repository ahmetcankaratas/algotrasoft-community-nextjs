import { Event } from "@/@types/api";
import Link from "next/link"
import Image from "next/image";
const EventItem: React.FC<Event> = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.split(", ");
  
  return (
    <li className="mx-auto w-10/12">
      <Link
        href={`/events/${id}`}
        className="pointer flex flex-row justify-between rounded-lg bg-gray-100 p-10 duration-200 hover:scale-105 dark:bg-darkBlue3"
      >
        <Image width={160} height={160} className="w-100 object-cover h-40 hidden xl:block " src={"/" + image} alt={title} />
        <div className="group flex flex-col space-y-3">
          <div
            className="text-lg font-bold md:text-2xl"
          >
            {title}
          </div>
          <h4 className="md:text-md text-sm">{humanReadableDate}</h4>
        </div>
        <div className="group flex flex-col space-y-3">
          <div className="md:text-md rounded-xl bg-gray-300 p-1 px-3 text-sm dark:bg-darkBlue1">
            {formattedAddress[0]}
          </div>
          <h4
            className="text-md md:text-l text-center font-bold">
            {formattedAddress[1]}
          </h4>
        </div>
      </Link>
    </li>
  );
};

export default EventItem;
