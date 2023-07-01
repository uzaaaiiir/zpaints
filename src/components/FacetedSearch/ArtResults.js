const ArtResults = ({ dataToPresent, filterResults }) => {
    return (
        <div class="album py-5">
            <div class="container">
                <div
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 "
                    style={{ fontFamily: "Raleway, sans-serif" }}
                >
                    {dataToPresent.map((data) => (
                        <ArtItemCard data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ArtItemCard = ({ data }) => {
    return (
        <div class="col">
            <div class="card border-0 rounded-0 shadow-sm">
                <img src={data.img} alt="" className="rounded-0" role="img" />
                <div class="card-body">
                    <p class="card-text fs-5 fw-bold">{data.title}</p>
                    <div class="d-flex justify-content-center align-items-center">
                        <p>from ${data.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtResults;
