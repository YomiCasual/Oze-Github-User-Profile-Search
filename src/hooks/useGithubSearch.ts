import { useState } from "react";
import { useApiRequest, useToggle } from ".";

const useGithubSearch = (searchValue: string) => {
  const [isLoading, toggleLoader] = useToggle();

  //User Profiles
  const [usersProfile, setUsersProfile] = useState<Record<string, any>[]>([]);

  // Old search value
  const [hasError, setHasError] = useState(false);
  // Old search value
  const [oldSearchValue, setOldSearchValue] = useState("");

  // Total Result count
  const [totalCount, setTotalCount] = useState(0);

  // Page
  const [page, setPage] = useState(1);

  const makeRequest = useApiRequest();

  const handleSearch = async () => {
    if (!searchValue) {
      // If there is no search value, don't search
      return;
    }

    //Toggle Loader on
    toggleLoader();

    // Check if it is still same search
    const sameSearch = oldSearchValue === searchValue;

    // Query params
    const query = `/users?q=${searchValue}&page=${sameSearch ? page : 1}`;

    try {
      //  Get results
      const result = await makeRequest.get(query);

      //Destructure Props
      const { items = [], total_count = 0 } = result.data;

      // Set the result
      setUsersProfile(items);

      // If it is same search result
      if (!sameSearch) {
        setPage(2);
        setTotalCount(total_count);
        setOldSearchValue(searchValue);
      } else {
        //Else increment the page count
        setPage(page + 1);
      }
      setHasError(false);
    } catch (e: any) {
      setHasError(true);
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
  };
};

export default useGithubSearch;
