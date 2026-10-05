export type User = {
  id: string;
  name: string;
  email: string;
  college: string;
};

export type Item = {
  id: string;
  title: string;
  type: "Lost" | "Found";
  category: string;
  description: string;
  location: string;
  date: string;
  image: string;
  status: "Active" | "Resolved";
  ownerId: string;
  ownerName: string;
  ownerEmail: string;
  createdAt: number;
};