// gta6-meme-x-01 entry: prints the X post this repository backs.
const ENTRY = {
  competition: "gta6-meme-x-01",
  platform: "X",
  bounty: "https://make.fun/bounty/gta6-meme-x-01",
  playCode: "makefun-geyser-wharf-platypus",
  postUrl: "https://x.com/ravijheartless/status/2123843991074648256",
} as const;

function main(): void {
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify(ENTRY, null, 2));
    return;
  }
  console.log("gta6-meme-x-01 - GTA 6 meme posted on X");
  console.log(`Bounty: ${ENTRY.bounty}`);
  console.log(`Play code: ${ENTRY.playCode}`);
  console.log(`Post: ${ENTRY.postUrl}`);
}

main();
