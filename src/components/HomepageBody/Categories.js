import Container from "react-bootstrap/Container";
import CategoryCard from "./CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
// i18n
import { useTranslation } from "react-i18next";

const Categories = () => {
    const { t } = useTranslation();

    return (
        <Container className="mb-5">
            <p
                className="mb-0 heading-tertiary text-start"
                style={{ textTransform: "uppercase" }}
            >
                {t("Homepage.Categories.ShopNow")}
            </p>
            <h2
                className="pb-2 heading-secondary text-start"
                style={{ textTransform: "uppercase" }}
            >
                {t("Homepage.Categories.CategoriesTitle")}
            </h2>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <Link
                    to="/search"
                    style={{ textDecoration: "none" }}
                    className="d-block"
                >
                    <CategoryCard
                        title={t("Homepage.Categories.ShopCategory")}
                        imgCategory="all"
                    />
                </Link>
                <Link
                    to="/custom"
                    style={{ textDecoration: "none" }}
                    className="d-block"
                >
                    <CategoryCard
                        title={t("Homepage.Categories.CustomDesignCategory")}
                        imgCategory="custom"
                    />
                </Link>
                <Link
                    to="/workshops"
                    style={{ textDecoration: "none" }}
                    className="d-block"
                >
                    <CategoryCard
                        title={t("Homepage.Categories.WorkshopCategory")}
                        imgCategory="workshops"
                    />
                </Link>
            </div>
        </Container>
    );
};

export default Categories;
