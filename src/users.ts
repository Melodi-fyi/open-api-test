import { client } from "./client";

export async function putUser() {
  const { data, error } = await client.PUT("/users", {
    headers: {
      "api-key": process.env.MELODI_API_KEY,
    },
    body: {
      externalId: "from-generated-client",
      name: "GeneratedClient User",
      email: "fake@fake.com",
      username: "fakeusername",
      segments: {
        team: "engineering",
      },
    },
  });

  if (error) {
    console.log(error);
    return;
  }

  if (data) {
    console.log(data.id);
  }
}
