export const NetflixSeries = () => {
  const series = "Stranger Things";
  const rating = "8.1";
  const summary = "hassh sdhfjsh shfgvsjh sdhvfjhds sdvfhjdsvf ";

  let age = 20;
  let canWatch = "not avialable";
  if (age >= 18) canWatch = "watch now";

  const genre = () => {
    const Genre = "Arman";
    return Genre;
  };

  // if (age < 18) {
  //   return (
  //     <div>
  //       <div>
  //         <img src="OIP.jpeg" alt="image" height="20%" width="20%" />
  //       </div>
  //       <h2>Name : {series}</h2>
  //       <h3>Rating : {rating}</h3>
  //       <p>Summary : {summary}</p>
  //       <p>Genre : {genre()}</p>
  //       <button>not available</button>
  //     </div>
  //   );
  // }

  return (
    <>
      <div>
        <img src="OIP.jpeg" alt="image" height="20%" width="20%" />
      </div>
      <h2>Name : {series}</h2>
      <h3>Rating : {rating}</h3>
      <p>Summary : {summary}</p>
      <p>Genre : {genre()}</p>
      {/* <button>{age >= 18 ? "watch now" : "not available"}</button> */}
      <button>{canWatch}</button>
    </>
  );
};
