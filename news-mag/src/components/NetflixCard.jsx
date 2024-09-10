import seriesData from "../api/seriesData.json";

export const NetflixCard = () => {
  return (
    <>
      <ul>
        {seriesData.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <img src={item.img_url} alt="image" height="20%" width="20%" />
              </div>
              <h2>Name : {item.name}</h2>
              <h3>Rating : {item.rating}</h3>
              <p>Summary : {item.description}</p>
              <p>Genre : {item.genre}</p>
              <p>Cast : {item.cast}</p>
              <a href={item.watch_url} target="_blank">
                <button>Watch Now</button>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
