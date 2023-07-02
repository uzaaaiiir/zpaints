import Pagination from "react-bootstrap/Pagination";

const ArtPagination = ({ pages, currentPage, setCurrentPage }) => {
    let items = [];

    for (let i = 1; i <= pages; i++) {
        items.push(
            <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => setCurrentPage(i)}
                linkClassName="bg-light text-dark"
                linkStyle={{
                    fontFamily: "Raleway,sans-serif",
                }}
            >
                {i}
            </Pagination.Item>
        );
    }
    return (
        <Pagination className="justify-content-center mt-5">{items}</Pagination>
    );
};

export default ArtPagination;
