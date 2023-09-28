const ImageComponent = ({ image }) => {
    return (
        <div class="col-10 col-sm-8 col-lg-6 hero-img d-flex justify-content-center">
            <img
                src={image}
                className="d-block mx-lg-auto img-fluid  "
                alt=""
                width="600"
                height="400"
                loading="lazy"
            />
        </div>
    );
};

export default ImageComponent;
