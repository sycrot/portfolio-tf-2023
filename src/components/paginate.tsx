interface Props {
  postsPerPage: number
  totalPosts: number
  paginate: (number: number) => void
  previousPage: () => void
  nextPage: () => void
  currentPage: number
  maxPage: number
}

export default function Paginate(props: Props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <button className={`button-prev ${props.currentPage === 1 ? 'disabled' : ''}`} onClick={props.previousPage}></button>
      {pageNumbers.map(number => (
        <button key={number} onClick={() => props.paginate(number)} className={`${props.currentPage === number ? 'active' : ''}`}>{number}</button>
      ))}
      <button className={`button-next ${props.currentPage === props.maxPage ? 'disabled' : ''}`} onClick={props.nextPage}></button>
    </div>
  )
}