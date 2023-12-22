import { Event } from "../@types/api";
export async function getAllEvents() {
  const reponse = await fetch(
    "https://algotrasoft-community-nextjs-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await reponse.json();

  const events: Event[] = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event: Event) => event.isFeatured);
}