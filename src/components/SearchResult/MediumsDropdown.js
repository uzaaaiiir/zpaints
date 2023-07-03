import { DropdownButton, ButtonGroup, Form } from "react-bootstrap";

const MediumsDropdown = ({ title, items }) => {
    return (
        <DropdownButton
            id="dropdown-basic-button"
            className="list-group bg-dark-outline my-dropdown mb-4"
            style={{ fontFamily: "Raleway,sans-serif" }}
            title={title}
            as={ButtonGroup}
            variant="dark"
            autoClose="outside"
        >
            <Form variant="flush" style={{ zIndex: "9999" }}>
                {items.map((item, i) => (
                    <div>
                        <Form.Check
                            type="radio"
                            id={`default-radio-${i + 1}`}
                            name={title}
                            label={item}
                            className="d-flex gap-3 mb-2"
                        />
                    </div>
                ))}
            </Form>
        </DropdownButton>
    );
};

export default MediumsDropdown;
