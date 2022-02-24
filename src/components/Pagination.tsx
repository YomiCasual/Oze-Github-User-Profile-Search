import ReactPaginate from "react-paginate";

const Pagination = ({
  handleSearch,
  totalCount,
}: {
  handleSearch: () => Promise<void>;
  totalCount: number;
}) => {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleSearch}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(totalCount / 30)}
        previousLabel="< previous"
        renderOnZeroPageCount={() => null}
        pageLinkClassName="pagination__page--link"
        previousLinkClassName="pagination__previous--link"
        nextLinkClassName="pagination__next--link"
        containerClassName="pagination__container"
        breakLinkClassName="pagination__page--link"
        activeClassName="pagination__active--class"
      />
    </div>
  );
};

export default Pagination;
