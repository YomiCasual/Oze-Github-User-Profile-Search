import ReactPaginate from "react-paginate";

const Pagination = ({
  handleSearch,
  totalCount,
  currentPage,
}: {
  handleSearch: (pageNumber?: number) => Promise<void>;
  totalCount: number;
  currentPage: number;
}) => {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={({ selected }) => {
          const pageNumber = selected + 1;
          handleSearch(pageNumber);
        }}
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
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default Pagination;
