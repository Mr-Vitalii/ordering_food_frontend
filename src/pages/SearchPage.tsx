import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  return (
    <div>
      {city}
      <ul>
        {results?.data.map((restaurant) => (
          <li key={uuidv4()}>
            {restaurant.restaurantName}, {restaurant.city}
            {/* <SearchResultCard restaurant={restaurant} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
