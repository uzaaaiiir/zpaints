import Pagination from "react-bootstrap/Pagination";

const ArtPagination = ({ pages, currentPage, setCurrentPage }) => {
    let items = [];

    for (let i = 1; i <= pages; i++) {
        items.push(
            <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => setCurrentPage(i)}
                linkClassName="btn btn-outline-dark"
                linkStyle={{ fontFamily: "Raleway,sans-serif" }}
            >
                {i}
            </Pagination.Item>
        );
    }
    return <Pagination className="justify-content-center">{items}</Pagination>;
};

export default ArtPagination;
