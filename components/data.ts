import { Item } from "./types";

export const sampleItems: Item[] = [
  {
    id: "sample-1",
    title: "Black Backpack",
    type: "Lost",
    category: "Bags",
    description: "Black college backpack with a small blue keychain attached to the side pocket.",
    location: "BVRIT Library",
    date: "2026-10-02",
    image: "",
    status: "Active",
    ownerId: "demo",
    ownerName: "Aarav",
    ownerEmail: "aarav@example.com",
    createdAt: Date.now() - 3600000
  },
  {
    id: "sample-2",
    title: "Scientific Calculator",
    type: "Found",
    category: "Electronics",
    description: "Scientific calculator found near the first-floor classroom block.",
    location: "Block A",
    date: "2026-10-03",
    image: "",
    status: "Active",
    ownerId: "demo",
    ownerName: "Meera",
    ownerEmail: "meera@example.com",
    createdAt: Date.now() - 7200000
  },
  {
    id: "sample-3",
    title: "Blue Water Bottle",
    type: "Lost",
    category: "Accessories",
    description: "Blue insulated water bottle with a silver cap.",
    location: "Cafeteria",
    date: "2026-10-01",
    image: "",
    status: "Resolved",
    ownerId: "demo",
    ownerName: "Rahul",
    ownerEmail: "rahul@example.com",
    createdAt: Date.now() - 10000000
  }
];