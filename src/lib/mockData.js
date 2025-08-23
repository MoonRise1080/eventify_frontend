export const categories = ["All", "Technology", "Sports", "Music", "Arts", "Business"];

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=60`;

export const mockEvents = [
  {
    id: 1,
    featured: true,
    category: "Technology",
    club: "Computer Science Club",
    title: "Annual Tech Summit 2024",
    description:
      "Join us for an inspiring day of technology talks, networking, and innovation. Featuring industry leaders and cutting-edge tech demos.",
    date: "March 15, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Engineering Auditorium",
    attendees: 120,
    maxAttendees: 200,
    image: img("1522120699-002c4bb3512c"), // stage
  },
  {
    id: 2,
    featured: true,
    category: "Sports",
    club: "Athletics Club",
    title: "Spring Basketball Tournament",
    description:
      "Compete in our annual inter-university basketball championship. Teams from across the region will battle for the golden trophy.",
    date: "March 22, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Sports Complex",
    attendees: 64,
    maxAttendees: 80,
    image: img("1517649763962-0c623066013b"), // basketball
  },
  {
    id: 3,
    featured: true,
    category: "Music",
    club: "Music Society",
    title: "Spring Concert Series",
    description:
      "Enjoy an evening of live music featuring student bands and special guest performers. Food trucks and merchandise available.",
    date: "April 10, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "Campus Green",
    attendees: 300,
    maxAttendees: 500,
    image: img("1492684223066-81342ee5ff30"), // concert
  },
  // add more if you like...
];
