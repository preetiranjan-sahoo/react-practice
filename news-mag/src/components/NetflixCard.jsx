import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./seriesCard";

export const NetflixCard = () => {
  return (
    <>
      <ul>
        {seriesData.map((item) => (
          <SeriesCard key={item.id} data={item} />
        ))}
      </ul>
    </>
  );
};
