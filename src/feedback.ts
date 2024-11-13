import { client } from "./client";

export async function postFeedback() {
  const { data, error } = await client.POST("/feedback", {
    headers: {
      "api-key": process.env.MELODI_API_KEY,
    },
    body: {
      externalThreadId: "from-generated-client-3",
      externalMessageId: "3",
      feedbackType: "POSITIVE",
      feedbackText: "this is test feedback",
      externalUser: {
        externalId: "from-generated-client",
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
