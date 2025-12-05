import { TmdbClient } from "./tmdb-client";

// test-file.ts
(async () => {
  const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTJhYmU0MDQ2YTJjZTJlNDBlZTJhZDJmNzlmNzZlYiIsIm5iZiI6MTY5MTU4ODYzMC45NzIsInN1YiI6IjY0ZDM5ODE2ZDEwMGI2MDBlMjY3OGQ4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7KqE6phDiXvo1Dp9-3lvWi1Ym8kzKES9yOwUq-3h6w";

  const defaultOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const tmdb = new TmdbClient(defaultOptions);
  console.log(await tmdb.search.getMovie({query: "xmas"}))

})();

