import { useState } from "react";
import { useApiRequest, useToggle } from ".";

const useGithubSearch = (searchValue: string) => {
  const [isLoading, toggleLoader] = useToggle();

  //User Profiles
  const [usersProfile, setUsersProfile] = useState<Record<string, any>[]>([]);

  // Old search value
  const [hasError, setHasError] = useState("");
  // Old search value
  const [oldSearchValue, setOldSearchValue] = useState("");

  // Total Result count
  const [totalCount, setTotalCount] = useState(0);

  // Page
  const [page, setPage] = useState(1);

  const makeRequest = useApiRequest();

  const handleSearch = async (pageNumber?: number) => {
    if (!searchValue) {
      // If there is no search value, don't search
      return;
    }

    //Toggle Loader on
    toggleLoader();

    // Check if it is still same search
    const sameSearch = oldSearchValue === searchValue;

    const newPageNumber = pageNumber ? pageNumber : 1;

    // Query params
    const query = `/users?q=${searchValue}&page=${newPageNumber}`;

    try {
      //  Get results
      const result = await makeRequest.get(query);

      //Destructure Props
      const { items = [], total_count = 0 } = result.data;

      // Set the result
      setUsersProfile(items);

      // If it is same search result
      if (!sameSearch) {
        setTotalCount(total_count);
        setOldSearchValue(searchValue);
      }

      setPage(newPageNumber);
      setHasError("");
    } catch (e: any) {
      if (e.response.data.message.includes("API rate limit")) {
        setHasError(
          "API Limit Exceeded. Please wait for 1-2 minutes and try again."
        );
      } else {
        setHasError(e.response.data.message);
      }
      // Set the result
      setUsersProfile([]);
    } finally {
      //  Toggle Loader off
      toggleLoader();
    }
  };

  return {
    handleSearch,
    isLoading,
    usersProfile,
    totalCount,
    hasError,
    currentPage: page,
  };
};

export default useGithubSearch;
