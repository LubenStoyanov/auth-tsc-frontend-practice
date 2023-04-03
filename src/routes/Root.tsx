import { Form, redirect } from "react-router-dom";
import { register } from "../api/register";

import "../App.css";

export async function action({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(typeof data);

    const user = await register(data);
    return redirect("/login");
  } catch (error) {
    console.log(error);
  }
}

export default function Root() {
  return (
    <div>
      <h1> Greetings Traveler </h1>
      <Form method="post">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" autoComplete="true" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="true" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="true"
        />
        <button type="submit">Register</button>
      </Form>
    </div>
  );
}
