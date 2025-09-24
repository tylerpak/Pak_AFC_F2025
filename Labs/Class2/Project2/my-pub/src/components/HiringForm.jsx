import { useState } from "react";
import bartender from "../assets/images/bartender.png";

export default function HiringForm() {
    const [dobError, setDobError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [moreInfoError, setMoreInfoError] = useState("");
    const [charCount, setCharCount] = useState(30);

    const handleDobChange = (e) => {
        const today = new Date();
        const min = new Date(today).setFullYear(today.getFullYear() - 21);
        const max = new Date(today).setFullYear(today.getFullYear() - 99);
        const entered = new Date(e.target.value);

        if (entered < max || entered > min) {
            setDobError("You are outside of the age requirements. Sorry!");
        } else {
            setDobError("");
        }
    };

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
        <div className="container my-2">
            <div className="row align-items-center">
                <div className="col-md-6 text-center mb-3 mb-md-0">
                    <img src={bartender} alt="bartender" className="img-fluid hiring-img" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        {/* Example input */}
                        <div className="mb-3">
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" name="birthDate" onChange={handleDobChange} required />
                            <span className="input-helper">You must be 21–99 years of age</span>
                            <span className="error">{dobError}</span>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="text" className="form-control" name="phone" onInput={handlePhoneChange} required />
                            <span className="error">{phoneError}</span>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">More Info</label>
                            <textarea name="moreInfo" className="form-control" rows="4" onInput={handleMoreInfoChange}></textarea>
                            <span className="input-helper">You have {charCount} characters remaining</span>
                            <span className="error">{moreInfoError}</span>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}