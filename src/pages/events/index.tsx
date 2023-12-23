import { Event } from "@/@types/api";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import Cover from "../../components/UI/cover";

type AllEventsPageProps = {
  events: Event[];
};

const AllEventsPage: React.FC<AllEventsPageProps> = (props) => {
  const { events } = props;

  return (
      <section id="events" className="bg-gray-50 dark:bg-darkBlue">
        <Cover
          header="Events"
          description="Unlock finance's future"
        />
        <div className="container mx-auto px-6 pt-12 pb-20 md:pb-24">
        <EventList items={events} />
        </div>
      </section>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;