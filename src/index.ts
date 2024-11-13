import { postFeedback } from "./feedback";
import { getThreads, putThread } from "./threads";
import { putUser } from "./users";

async function main() {
  await putUser();
  await getThreads();
  await putThread();
  await postFeedback();
}

main();
