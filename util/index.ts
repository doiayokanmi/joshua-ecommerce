import { createClient } from "next-sanity";

export const links = [
  {
    title: "About US",
    linkTo: "/",
  },
  {
    title: "Contact Us",
    linkTo: "/",
  },
];

export const client = createClient({
  projectId: "knks7h61",
  dataset: "production",
  apiVersion: "2023-12-24",
  token: 'skVAIbvQhhD48EBhFLix1aBLg4dfm88RPlJTYKOn4pUsLDvyDLvcNM55qn0VfbuD7fRCtqj4nf3YO417roSmdi1q3dbq4wjajPvMs7XI7Ts2kK3b7LDYtKMLATF0rtQ2zfwccTkN1Uy7A1Rpy3I4JqtVCzSXYq55Jg47siYw6FjJh3fujATX'
});

export const images = ["/image/1.jpg", "/image/2.jpg", "/image/3.jpg"];
