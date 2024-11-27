import { test } from "vitest";
import GogoAnime from "../../src/module";
import runner from "@mochiapp/runner/dist/src";

const source = runner(GogoAnime);

test("provides correct search info", async () => {
  console.log(await source.search({ query: "Test", page: 1, filters: [] }));
});

test("provides discover listings", async () => {
  console.log(
    await source.discoverListings({
      listingId: "top-airing",
      page: "https://anitaku.bz/popular.html?page=1",
    }),
  );
});

test("provides playlist details", async () => {
  console.log(
    await source.playlistDetails("mushoku-tensei-ii-isekai-ittara-honki-dasu"),
  );
});
