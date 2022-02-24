import "./App.scss";
import "./pagination.scss";
import { useGithubSearch, useInput } from "./hooks";
import { Hero, Pagination, SearchResults } from "./components";

const App = () => {
  const searchField = useInput("");

  const {
    usersProfile,
    handleSearch,
    totalCount,
    isLoading,
    hasError,
    currentPage,
  } = useGithubSearch(searchField.value);

  return (
    <div className="App">
      <Hero
        searchField={searchField}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />
      <SearchResults
        usersProfile={usersProfile}
        isLoading={isLoading}
        hasError={hasError}
      />
      {!!usersProfile.length && !isLoading && (
        <Pagination
          handleSearch={handleSearch}
          totalCount={totalCount}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default App;
