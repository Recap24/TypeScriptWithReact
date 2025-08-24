import { useRef, useState } from "react";

type FromData = {
    name: string;
    email: string;
    password: any;
};
const From = () => {
    const [submitted, setSubmitted] = useState<FromData>({
        name: "",
        email: "",
        password: ""
    });
const nameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);

    return (
      <div>
        <h1>From</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (nameRef.current && emailRef.current && passwordRef.current) {
              setSubmitted({
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
              });
            }
          }}
        >
          <div>
            <label>Name:</label>
            <input type="text" ref={nameRef} />
          </div>
          <br />
          <br />
          <div>
            <label>Email:</label>
            <input type="email" ref={emailRef} />
          </div>
          <br />
          <br />

          <div>
            <label>Password:</label>
            <input type="password" ref={passwordRef} />
          </div>
          <br />
          <br />
          <button type="submit">Submit</button>
          <section>
            <h2>Submitted Data</h2>
            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
            <p>Password: {submitted.password}</p>
          </section>
        </form>
      </div>
    );
};

export default From;