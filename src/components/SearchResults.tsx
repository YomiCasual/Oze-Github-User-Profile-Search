import FlipCard from "./FlipCard";
import { ReactComponent as Loader } from "./../assets/svgs/loader.svg";

const SearchResults = ({
  usersProfile,
  isLoading,
  hasError,
}: {
  usersProfile: Record<string, any>[];
  isLoading: boolean;
  hasError: boolean;
}) => {
  // If Error
  if (hasError) {
    return (
      <div className="loader error">
        <h3>Error Occurred, Please search again</h3>
      </div>
    );
  }

  //  Loading state
  if (isLoading) {
    return (
      <div className="loader">
        <Loader style={{ width: 500, height: 500 }} />;
      </div>
    );
  }

  //   For no Results
  if (usersProfile.length === 0) {
    return (
      <div className="loader default">
        <h3>Please enter a search value. No results currently</h3>
      </div>
    );
  }

  return (
    <div className="search">
      <div className="search__result">
        {usersProfile.map((user) => (
          <FlipCard key={user?.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
