import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

//yup schema for validation
const schema = yup.object({
    firstName: yup.string().min(1).max(20).required("First name is required"),
    lastName: yup.string().min(1).max(20).required("Last name is required"),
    address1: yup.string().max(50).required("Address is required"),
    city: yup.string().max(29).required("City is required"),
    state: yup.string().required("State is required"),
    age: yup
        .number()
        .typeError("Age must be a number")
        .min(21, "You must be at least 21")
        .max(99, "Age must be less than 100")
        .required("Age is required"),
    phone: yup
        .string()
        .matches(/^\d{3}-\d{3}-\d{4}$/, "Phone must be in format 123-456-7890")
        .required("Phone number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,12}$/,
            "Password must include uppercase, lowercase, number, and special character"
        )
        .required("Password is required"),
    married: yup.string().required("Please select an option"),
    moreInfo: yup.string().max(30, "You have passed the character limit!"),
});

//hiring form function using default values and set to pass to yup on change
export default function HiringForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { age: 21, married: "no", phone: "" },
        mode: "onChange",
    });

    //function passes input ref into innerRef for ReactStrap
    const r = (name) => {
        const registration = register(name);
        const { ref, ...rest } = registration;
        return { innerRef: ref, ...rest };
    };

    //print form data to console, alert user
    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        alert("Form submitted successfully! (check console)");
    };

    //more info character count
    const moreInfoValue = watch("moreInfo", "");
    const charCount = 30 - (moreInfoValue?.length || 0);


    const marriedReg = register("married");
    const { ref: marriedRef, ...marriedRest } = marriedReg;

    return (
        <div className="container my-4">
            <Form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                type="text"
                                maxLength={20}
                                name="firstName"
                                {...r("firstName")}
                                invalid={!!errors.firstName}
                            />
                            <FormFeedback>{errors.firstName?.message}</FormFeedback>
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                type="text"
                                maxLength={20}
                                name="lastName"
                                {...r("lastName")}
                                invalid={!!errors.lastName}
                            />
                            <FormFeedback>{errors.lastName?.message}</FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <Label for="address1">Address 1</Label>
                    <Input
                        id="address1"
                        type="text"
                        maxLength={50}
                        name="address1"
                        {...r("address1")}
                        invalid={!!errors.address1}
                    />
                    <FormFeedback>{errors.address1?.message}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                        id="city"
                        type="text"
                        maxLength={29}
                        name="city"
                        {...r("city")}
                        invalid={!!errors.city}
                    />
                    <FormFeedback>{errors.city?.message}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="state">State</Label>
                    <Input
                        id="state"
                        type="select"
                        name="state"
                        {...r("state")}
                        invalid={!!errors.state}
                    >
                        <option value="">-- Select --</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="TX">TX</option>
                    </Input>
                    <FormFeedback>{errors.state?.message}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                        id="age"
                        type="number"
                        name="age"
                        defaultValue={21}
                        {...r("age")}
                        invalid={!!errors.age}
                    />
                    <FormFeedback>{errors.age?.message}</FormFeedback>
                </FormGroup>

                {/* Phone with auto-formatting, controlled via Controller */}
                <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <Input
                                id="phone"
                                type="text"
                                name={field.name}
                                innerRef={field.ref}
                                placeholder="123-456-7890"
                                value={field.value || ""}
                                maxLength={12} // "123-456-7890" length
                                onBlur={field.onBlur}
                                onChange={(e) => {
                                    const digits = e.target.value.replace(/\D/g, "");
                                    let formatted = "";
                                    if (digits.length > 0) formatted = digits.substring(0, 3);
                                    if (digits.length >= 4) formatted += "-" + digits.substring(3, 6);
                                    if (digits.length >= 7) formatted += "-" + digits.substring(6, 10);
                                    field.onChange(formatted); // feed formatted value to RHF
                                }}
                                invalid={!!errors.phone}
                            />
                        )}
                    />
                    <FormFeedback>{errors.phone?.message}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        {...r("email")}
                        invalid={!!errors.email}
                    />
                    <FormFeedback>{errors.email?.message}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        maxLength={12}
                        {...r("password")}
                        invalid={!!errors.password}
                    />
                    <FormFeedback>{errors.password?.message}</FormFeedback>
                    <span>
            8–12 characters; must include uppercase, lowercase, number, and one special symbol
          </span>
                </FormGroup>

                <FormGroup tag="fieldset">
                    <legend>Married</legend>
                    <FormGroup check>
                        <Input
                            type="radio"
                            value="yes"
                            name="married"
                            innerRef={marriedRef}
                            {...marriedRest}
                        />
                        <Label check>Married</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            type="radio"
                            value="no"
                            name="married"
                            innerRef={marriedRef}
                            {...marriedRest}
                        />
                        <Label check>Single</Label>
                    </FormGroup>
                    {errors.married && <div className="text-danger">{errors.married.message}</div>}
                </FormGroup>

                <FormGroup>
                    <Label for="moreInfo">More Info</Label>
                    <Input
                        id="moreInfo"
                        type="textarea"
                        rows="4"
                        name="moreInfo"
                        maxLength={30}
                        {...r("moreInfo")}
                        invalid={!!errors.moreInfo}
                    />
                    <FormFeedback>{errors.moreInfo?.message}</FormFeedback>
                    <small className="text-muted">You have {charCount} characters remaining</small>
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
