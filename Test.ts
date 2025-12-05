// test-file.ts
(async () => {
  const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTJhYmU0MDQ2YTJjZTJlNDBlZTJhZDJmNzlmNzZlYiIsIm5iZiI6MTY5MTU4ODYzMC45NzIsInN1YiI6IjY0ZDM5ODE2ZDEwMGI2MDBlMjY3OGQ4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7KqE6phDiXvo1Dp9-3lvWi1Ym8kzKES9yOwUq-3h6w";

  const defaultOptions = {
    next: {
      revalidate: 3600,
      tags: ["tmdb"],
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  console.log("Default options:", defaultOptions);

})();

