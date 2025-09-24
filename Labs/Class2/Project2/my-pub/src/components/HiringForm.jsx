import { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col,
    FormFeedback,
} from "reactstrap";

export default function HiringForm() {
    const [dobError, setDobError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [moreInfoError, setMoreInfoError] = useState("");
    const [charCount, setCharCount] = useState(30);

    // ✅ Validate age from numeric input
    const handleAgeChange = (e) => {
        const age = Number(e.target.value);
        if (age < 21 || age > 99) {
            setDobError("You must be between 21 and 99 years old.");
        } else {
            setDobError("");
        }
    };

    // ✅ Validate + format phone number
    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        let formatted = "";
        if (value.length > 0) formatted = value.substring(0, 3);
        if (value.length >= 4) formatted += "-" + value.substring(3, 6);
        if (value.length >= 7) formatted += "-" + value.substring(6, 10);
        e.target.value = formatted;

        if (/[a-zA-Z]/.test(e.target.value)) {
            setPhoneError("Only numbers are allowed.");
        } else if (value.length < 10) {
            setPhoneError("Phone number must be 10 digits.");
        } else {
            setPhoneError("");
        }
    };

    // ✅ Validate more info char count
    const handleMoreInfoChange = (e) => {
        const max = 30;
        const length = e.target.value.length;
        setCharCount(max - length);

        if (length > max) {
            setMoreInfoError("You have passed the character limit!");
        } else {
            setMoreInfoError("");
        }
    };

    // ✅ Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (dobError || phoneError || moreInfoError) {
            alert("Please fix the errors before submitting.");
            return;
        }
        const data = new FormData(e.target);
        for (let [key, val] of data.entries()) {
            console.log(`${key}: ${val}`);
        }
        alert("Form submitted successfully! (check console)");
    };

    return (
        <div className="container my-4">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                minLength="1"
                                maxLength="20"
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                minLength="1"
                                maxLength="20"
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <Label for="address1">Address 1</Label>
                    <Input type="text" name="address1" id="address1" maxLength="50" required />
                </FormGroup>

                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" id="city" maxLength="29" required />
                </FormGroup>

                <FormGroup>
                    <Label for="state">State</Label>
                    <Input type="select" name="state" id="state" required>
                        <option value="">-- Select --</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="TX">TX</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                        type="number"
                        name="age"
                        id="age"
                        min="21"
                        max="99"
                        defaultValue="21"
                        onChange={handleAgeChange}
                        required
                        invalid={!!dobError}
                    />
                    <FormFeedback>{dobError}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="123-456-7890"
                        onInput={handlePhoneChange}
                        required
                        invalid={!!phoneError}
                    />
                    <FormFeedback>{phoneError}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" required />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        minLength="8"
                        maxLength="12"
                        required
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,12}$"
                    />
                </FormGroup>

                <FormGroup tag="fieldset">
                    <legend>Married</legend>
                    <FormGroup check>
                        <Input type="radio" name="married" id="marriedYes" value="yes" />
                        <Label check for="marriedYes">
                            Married
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            type="radio"
                            name="married"
                            id="marriedNo"
                            value="no"
                            defaultChecked
                        />
                        <Label check for="marriedNo">
                            Single
                        </Label>
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <Label for="moreInfo">More Info</Label>
                    <Input
                        type="textarea"
                        name="moreInfo"
                        id="moreInfo"
                        rows="4"
                        onInput={handleMoreInfoChange}
                        invalid={!!moreInfoError}
                    />
                    <FormFeedback>{moreInfoError}</FormFeedback>
                    <small className="text-muted">
                        You have {charCount} characters remaining
                    </small>
                </FormGroup>

                <Row>
                    <Col md={6}>
                        <Button type="reset" color="secondary" className="w-100">
                            Reset
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Button type="submit" color="primary" className="w-100">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}