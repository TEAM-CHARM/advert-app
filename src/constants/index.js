import eventImg1 from "../assets/images/ev1.jpg";
import eventImg2 from "../assets/images/ev2.jpg";
import { FaMusic } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

// ------Vendor User--------
export const USER2 = {
  _id: "64a1f4e5f2d3a2b9c8e4d123",
  name: "Albert Nartey",
  email: "alice.vendor@example.com",
  password: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Q4fO1F5k7kV/9vHV4Sx0e", // Hashed password: "password123"
  role: "vendor",
    bio: "Passionate event organizer specializing in music and cultural events.",
    profilePic: "https://example.com/avatars/alice.jpg",
  businessName: "CHARM Inc",
  businessEmail: "support@charm.com",
  businessPhone: "+233244885739",
};

//   -------Regular User-----
export const USER = {
  _id: "64a1f4e5f2d3a2b9c8e4d1245d",
  name: "Alice Johnson",
  email: "alice.vendor@example.com",
  password: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Q4fO1F5k7kV/9vHV4Sx0e", // Hashed password: "password123"
  role: "user",

    bio: "Passionate event organizer specializing in music and cultural events.",
    profilePic: "https://example.com/avatars/alice.jpg",

  businessName: "CHARM Inc",
  businessEmail: "support@charm.com",
  businessPhone: "+233244885739",
};

// --------Categories--------------
export const CATEGORIES = [
  {
    _id: "64a1f4e5f2d3a2b9c8e4d125sdf",
    name: "Music",
    icon: FaMusic,
    description:
      "Events related to music performances, concerts, and festivals.",
    createdAt: "2024-10-03T09:15:00Z",
    updatedAt: "2024-10-03T09:15:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8esdf4d125",
    name: "Sports",
    icon: MdOutlineSportsBasketball,
    description:
      "Events related to music performances, concerts, and festivals.",
    createdAt: "2024-10-03T09:15:00Z",
    updatedAt: "2024-10-03T09:15:00Z",
  },
  {
    _id: "64a1f4e5f2dx3a2bsdf9c8e4d125",
    name: "Conferences",
    icon: FaPeopleGroup,
    description:
      "Events related to music performances, concerts, and festivals.",
    createdAt: "2024-10-03T09:15:00Z",
    updatedAt: "2024-10-03T09:15:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2bnf9c8e4d125",
    name: "Music",
    icon: FaMusic,
    description:
      "Events related to music performances, concerts, and festivals.",
    createdAt: "2024-10-03T09:15:00Z",
    updatedAt: "2024-10-03T09:15:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8qwe4d126",
    name: "Technology",
    icon: GrTechnology,
    description: "Tech conferences, workshops, and hackathons.",
    createdAt: "2024-10-03T09:20:00Z",
    updatedAt: "2024-10-03T09:20:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8ute4d126",
    name: "Technology",
    icon: GrTechnology,

    description: "Tech conferences, workshops, and hackathons.",
    createdAt: "2024-10-03T09:20:00Z",
    updatedAt: "2024-10-03T09:20:00Z",
  },
];

// -------Events--------
export const EVENTS = [
  {
    _id: "64a1f4e5f2d3a2bvs9c8e4d128",
    title: "Summer Music Fest",
    description:
      "Join us for a day of live performances by top artists and bands. Enjoy a variety of music genres, food trucks, and interactive booths.",
    imageURL: eventImg1,
    price: 50.0,
    category: { _id: "64a1f4e5f2d3a2b9c8e4d126", name: "technology" },
    
    organizer: {
      _id: "64a1f4e5f2d3a2b9c8e4d123",
      name: "Albert Nartey",
    },
    location: "Downtown Park, Cityville",
    date: "2024-12-15T18:00:00Z",
    attendees: [
      "64a1f4e5f2d3a2b9c8e4d124",
      "64a1f4e5f2d3a2b9c8e4d124",
      "64a1f4e5f2d3a2b9c8e4d124",
    ],
    createdAt: "2024-10-04T14:00:00Z",
    updatedAt: "2024-10-04T14:00:00Z",
  },
  {
    _id: "64a1f4eva5f2d3a2b9c8e4d129",
    title: "Tech Innovators Conference",
    description:
      "A gathering of the brightest minds in technology. Participate in workshops, keynotes, and networking sessions to stay ahead in the tech industry.",
    imageURL: eventImg2,
    price: 150.0,
    category: { _id: "64a1f4e5f2d3a2b9c8e4d126", name: "technology" },
    organizer: {
      _id: "64a1f4e5f2d3a2b9c8e4d123",
      name: "Albert Nartey",
    }, // Alice Johnson
    location: "Grand Convention Center, TechCity",
    date: "2024-11-20T09:00:00Z",
    attendees: [
      "64a1f4e5f2d3a2b9c8e4d124", // Bob Smith
    ],
    createdAt: "2024-10-05T10:30:00Z",
    updatedAt: "2024-10-05T10:30:00Z",
  },
  {
    _id: "64a1f4ena5f2d3a2b9c8e4d12A",
    title: "Cityville Marathon",
    description:
      "Run through the heart of Cityville in our annual marathon event. Suitable for all levels with categories for professionals and amateurs.",
    imageURL: eventImg1,
    price: 30.0,
    category: { _id: "64a1f4e5f2d3a2b9c8e4d126", name: "technology" },
    organizer: {
      _id: "64a1f4e5f2d3a2b9c8e4d123",
      name: "Albert Nartey",
    }, // Alice Johnson
    location: "Cityville Central Park",
    date: "2025-01-10T07:00:00Z",
    attendees: [],
    createdAt: "2024-10-06T08:45:00Z",
    updatedAt: "2024-10-06T08:45:00Z",
  },
  {
    _id: "64a1f4e523f2d3a2b9c8e4d12B",
    title: "Winter Coding Bootcamp",
    description:
      "Intensive coding bootcamp for aspiring developers. Learn full-stack development, participate in hands-on projects, and network with industry professionals.",
    imageURL: eventImg1,
    price: 500.0,
    category: { _id: "64a1f4e5f2d3a2b9c8e4d126", name: "technology" },
    organizer: {
      _id: "64a1f4e5f2d3a2b9c8e4d123",
      name: "Albert Nartey",
    }, // Alice Johnson
    location: "TechHub Workspace, Innovation Blvd",
    date: "2025-02-15T09:00:00Z",
    attendees: ["64a1f4e5f2d3a2b9c8e4d124"],
    createdAt: "2024-10-07T16:20:00Z",
    updatedAt: "2024-10-07T16:20:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9sdac8e4d12B",
    title: "Winter Coding Bootcamp",
    description:
      "Intensive coding bootcamp for aspiring developers. Learn full-stack development, participate in hands-on projects, and network with industry professionals.",
    imageURL: eventImg1,
    price: 500.0,
    category: { _id: "64a1f4e5f2d3a2b9c8e4d126", name: "technology" },
    organizer: {
      _id: "64a1f4e5f2d3a2b9c8e4d123",
      name: "Albert Nartey",
    }, // Alice Johnson
    location: "TechHub Workspace, Innovation Blvd",
    date: "2025-02-15T09:00:00Z",
    attendees: [
      "64a1f4e5f2d3a2b9c8e4d124", // Bob Smith
    ],
    createdAt: "2024-10-07T16:20:00Z",
    updatedAt: "2024-10-07T16:20:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c87k8e4d12B",
    title: "Winter Coding Bootcamp",
    description:
      "Intensive coding bootcamp for aspiring developers. Learn full-stack development, participate in hands-on projects, and network with industry professionals.",
    imageURL: eventImg1,
    price: 500.0,
    category: { _id: "64a1f4e5f2d3a2b9c8e4d126", name: "technology" },
    organizer: {
      _id: "64a1f4e5f2d3a2b9c8e4d123",
      name: "Albert Nartey",
    }, // Alice Johnson
    location: "TechHub Workspace, Innovation Blvd",
    date: "2025-02-15T09:00:00Z",
    attendees: [
      "64a1f4e5f2d3a2b9c8e4d124", // Bob Smith
    ],
    createdAt: "2024-10-07T16:20:00Z",
    updatedAt: "2024-10-07T16:20:00Z",
  },
  {
    _id: "64a1f4e5f2d3a2b9c8aae4d12B",
    title: "Winter Coding Bootcamp",
    description:
      "Intensive coding bootcamp for aspiring developers. Learn full-stack development, participate in hands-on projects, and network with industry professionals.",
    imageURL: eventImg1,
    price: 500.0,
    category: { _id: "64a1f4e5f2d3a2b9c8e4d126", name: "technology" },
    organizer: {
      _id: "64a1f4e5f2d3a2b9c8e4d123",
      name: "Albert Nartey",
    }, // Alice Johnson
    location: "TechHub Workspace, Innovation Blvd",
    date: "2025-02-15T09:00:00Z",
    attendees: [
      "64a1f4e5f2d3a2b9c8e4d124", // Bob Smith
    ],
    createdAt: "2024-10-07T16:20:00Z",
    updatedAt: "2024-10-07T16:20:00Z",
  },
];
