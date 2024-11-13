import "dotenv/config";
import { client } from "./client";

export async function getThreads() {
  const {
    data, // only present if 2XX response
    error, // only present if 4XX or 5XX response
  } = await client.GET("/threads", {
    headers: {
      "api-key": process.env.MELODI_API_KEY,
    },
    params: {
      query: {
        projectId: 12074,
      },
    },
  });

  if (error) {
    console.log(error);
    return;
  }

  if (data) {
    console.log(data.rows.length);
    const firstThread = data.rows[0];

    if (firstThread) {
      console.log(firstThread.messages.length);

      if (firstThread.messages[0]) {
        console.log(firstThread.messages[0].type);
        if (firstThread.messages[0].type === "json") {
          console.log(firstThread.messages[0].jsonContent);
        } else if (firstThread.messages[0].type === "markdown") {
          console.log(firstThread.messages[0].content);
        }
      }
    }
  }
}

export async function putThread() {
  const { data, error } = await client.PUT("/threads", {
    headers: {
      "api-key": process.env.MELODI_API_KEY,
    },
    body: {
      externalId: "from-generated-client-2",
      projectId: 12074,
      messages: [
        {
          externalId: "1",
          type: "markdown",
          role: "user",
          content: "What is 2 + 2?",
          metadata: {
            testKey: "testValue",
          },
        },
        {
          externalId: "2",
          type: "json",
          role: "calculator",
          jsonContent: {
            operation: "add",
            operands: [2, 2],
            answer: 4,
          },
        },
        {
          externalId: "3",
          type: "markdown",
          role: "assistant",
          content: "2 + 2 = 4",
        },
      ],
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
