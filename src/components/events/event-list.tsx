import { Event } from "@/@types/api";
import EventItem from "./event-item";

interface EventListProps {
  items: Event[];
}
const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className="mt-8 flex max-h-screen w-full flex-col space-y-8">
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;