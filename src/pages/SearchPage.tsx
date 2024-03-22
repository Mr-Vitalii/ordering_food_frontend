import { useSearchRestaurants } from "@/api/RestaurantApi";
import { SearchResultCard } from "@/components/SearchResultCard";
import { SearchResultInfo } from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  if (isLoading) {
    <span>Loading ...</span>;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">insert cuisines here</div>
      <div id="main-content" className="flex flex-col gap-5">
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SearchResultInfo total={results.pagination.total} city={city} />
        </div>
        <ul className="flex flex-col gap-5">
          {results.data.map((restaurant) => (
            <li key={uuidv4()}>
              <SearchResultCard restaurant={restaurant} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
