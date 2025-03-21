import ReactPaginate from 'react-paginate';

interface IProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (selected: { selected: number }) => void;
}

export const Pagination = (props: IProps) => {
  const { totalPages, currentPage, onPageChange } = props;

  return (
    <section className="d-flex justify-content-center align-items-center w-100">
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        forcePage={currentPage - 1}
        containerClassName={
          'pagination pagination-circle justify-content-center'
        }
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </section>
  );
};
