import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import { Event } from "@/@types/api";
import { GetStaticPropsContext } from "next";
import Cover from "@/components/UI/cover";
import BackButton from "@/components/UI/back-button";
import EventContent from "@/components/event-detail/event-content";
import NotFound from "@/components/not-found";
import Head from "next/head";

type EventDetailPageProps = {
  selectedEvent: Event;
};
const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
  const event = props.selectedEvent;

  if (!event) {
    return <NotFound />;
  }

  return (
    <>
    <Head>
      <title>{event.title}</title>
      <meta name="description" content={event.description}></meta>
    </Head>
     <section id="result" className="bg-gray-50 dark:bg-darkBlue">
      <Cover header={event?.title} description="Event Details" />
      {event && (
        <EventContent
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
          description={event.description}
        />
      )}
      <BackButton />
    </section>
    </>
   
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const eventId = context.params?.eventId as string;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event || null,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
