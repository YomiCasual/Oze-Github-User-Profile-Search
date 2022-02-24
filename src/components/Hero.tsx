const Hero = ({
  searchField,
  handleSearch,
  isLoading,
}: {
  handleSearch: (pageNumber?: number) => Promise<void>;
  searchField: {
    value: string;
    onChange: (event: any) => void;
  };
  isLoading: boolean;
}) => {
  return (
    <div className="hero">
      <h3 className="hero__title">Search User Github Profiles...</h3>
      <form
        className="hero__field"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          {...searchField}
          placeholder="Enter github username"
        />
        <button
          data-testid="search-button"
          disabled={isLoading}
          onClick={() => handleSearch()}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default Hero;
