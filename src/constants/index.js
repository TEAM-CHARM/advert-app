// ------Vendor User--------
export const USER = {
  _id: "64a1f4e5f2d3a2b9c8e4d123",
  name: "Albert Nartey",
  email: "alice.vendor@example.com",
  password: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Q4fO1F5k7kV/9vHV4Sx0e", // Hashed password: "password123"
  roles: ["vendor", "user"],
  profile: {
    bio: "Passionate event organizer specializing in music and cultural events.",
    avatar: "https://example.com/avatars/alice.jpg",
  },
};

//   -------Regular User-----
export const USER2 = {
  _id: "64a1f4e5f2d3a2b9c8e4d123",
  name: "Alice Johnson",
  email: "alice.vendor@example.com",
  password: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Q4fO1F5k7kV/9vHV4Sx0e", // Hashed password: "password123"
  roles: ["user"],
  profile: {
    bio: "Passionate event organizer specializing in music and cultural events.",
    avatar: "https://example.com/avatars/alice.jpg",
  },
};

// --------Categories--------------
export const CATEGORIES = [
  {
    _id: "64a1f4e5f2d3a2b9c8e4d125",
    name: "Music",
    description:
      "Events related to music performances, concerts, and festivals.",
    createdAt: "2024-10-03T09:15:00Z",
    updatedAt: "2024-10-03T09:15:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8e4d126",
    name: "Technology",
    description: "Tech conferences, workshops, and hackathons.",
    createdAt: "2024-10-03T09:20:00Z",
    updatedAt: "2024-10-03T09:20:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8e4d126",
    name: "Technology",
    description: "Tech conferences, workshops, and hackathons.",
    createdAt: "2024-10-03T09:20:00Z",
    updatedAt: "2024-10-03T09:20:00Z",
  },
];

// -------Events--------
export const EVENTS = [
  {
    _id: "64a1f4e5f2d3a2b9c8e4d128",
    title: "Summer Music Fest",
    description:
      "Join us for a day of live performances by top artists and bands. Enjoy a variety of music genres, food trucks, and interactive booths.",
    imageURL: "https://example.com/events/summer-music-fest.jpg",
    price: 50.0,
    category: "64a1f4e5f2d3a2b9c8e4d125", // Music
    organizer: "64a1f4e5f2d3a2b9c8e4d123", // Alice Johnson
    location: "Downtown Park, Cityville",
    date: "2024-12-15T18:00:00Z",
    attendees: [
      "64a1f4e5f2d3a2b9c8e4d124", // Bob Smith
    ],
    createdAt: "2024-10-04T14:00:00Z",
    updatedAt: "2024-10-04T14:00:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8e4d129",
    title: "Tech Innovators Conference",
    description:
      "A gathering of the brightest minds in technology. Participate in workshops, keynotes, and networking sessions to stay ahead in the tech industry.",
    imageURL: "https://example.com/events/tech-innovators-conference.jpg",
    price: 150.0,
    category: "64a1f4e5f2d3a2b9c8e4d126", // Technology
    organizer: "64a1f4e5f2d3a2b9c8e4d123", // Alice Johnson
    location: "Grand Convention Center, TechCity",
    date: "2024-11-20T09:00:00Z",
    attendees: [
      "64a1f4e5f2d3a2b9c8e4d124", // Bob Smith
    ],
    createdAt: "2024-10-05T10:30:00Z",
    updatedAt: "2024-10-05T10:30:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8e4d12A",
    title: "Cityville Marathon",
    description:
      "Run through the heart of Cityville in our annual marathon event. Suitable for all levels with categories for professionals and amateurs.",
    imageURL: "https://example.com/events/cityville-marathon.jpg",
    price: 30.0,
    category: "64a1f4e5f2d3a2b9c8e4d127", // Sports
    organizer: "64a1f4e5f2d3a2b9c8e4d123", // Alice Johnson
    location: "Cityville Central Park",
    date: "2025-01-10T07:00:00Z",
    attendees: [],
    createdAt: "2024-10-06T08:45:00Z",
    updatedAt: "2024-10-06T08:45:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8e4d12B",
    title: "Winter Coding Bootcamp",
    description:
      "Intensive coding bootcamp for aspiring developers. Learn full-stack development, participate in hands-on projects, and network with industry professionals.",
    imageURL: "https://example.com/events/winter-coding-bootcamp.jpg",
    price: 500.0,
    category: "64a1f4e5f2d3a2b9c8e4d126", // Technology
    organizer: "64a1f4e5f2d3a2b9c8e4d123", // Alice Johnson
    location: "TechHub Workspace, Innovation Blvd",
    date: "2025-02-15T09:00:00Z",
    attendees: [
      "64a1f4e5f2d3a2b9c8e4d124", // Bob Smith
    ],
    createdAt: "2024-10-07T16:20:00Z",
    updatedAt: "2024-10-07T16:20:00Z",
  },
];
