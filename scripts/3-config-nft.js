import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xEF991C2e7A442B44F2378064cf5aB21e003236f1",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Learn Key",
        description: "This NFT will give you access to LearnDAO!",
        image: readFileSync("scripts/assets/Key.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()