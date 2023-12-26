import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: "knks7h61",
    dataset: "production",
    apiVersion: "2023-12-24",
  });

export async function getCategory() { 
  return client.fetch(
    groq`*[_type=='category'] {
        _id,
        name,
        description,
        "image": image.asset->url,
    }`
  );
}

export async function getActualCategory(currentid: string) {
  return client.fetch(
    groq`*[_type=='category' && _id == $currentid] {
        _id,
        name,
        description,
        "image": image.asset->url,
    }`,
    { currentid }
  );
}

export async function getAllUsers() {
  return client.fetch(
    groq`*[_type=='users'] {
        _id,
        _createdAt,
        firstName,
        otherName,
        address,
        username,
        email,
        password,
    }`
  );
}
