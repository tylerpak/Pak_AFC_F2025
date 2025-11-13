
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {type FormEvent, useState} from "react";
import {useAuth} from "@/context/AuthContext.tsx";

export default function SignUp() {
    const {signUp} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("function firing")
        console.log(username, password)
        signUp(username, password);
    }


    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-card p-6 rounded-lg">
                <h2 className="text-2xl text-card-foreground font-bold text-center mb-6">Sign Up for Employee Account</h2>
                <form onSubmit={(e) => { handleSignUp(e)}}>
                    <FieldSet className={""}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="username" className={"text-card-foreground"}>Username</FieldLabel>
                                <Input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="user123"
                                    className={"text-card-foreground"}/>
                                <FieldDescription>
                                    Enter your username for your account.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password" className={"text-card-foreground"}>Password</FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    className={"text-card-foreground"}/>
                                <FieldDescription>
                                    Enter your password.
                                </FieldDescription>
                            </Field>
                            <Field orientation="horizontal">
                                <Button type="submit" className={"bg-accent text-accent-foreground"}>Submit</Button>
                                <Button variant="outline" type="button"
                                        className={"bg-foreground text-background"}>Cancel</Button>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </div>
        </div>

    )
}