import { json, Form, Navigate, useActionData } from "react-router-dom";
import { login } from "../api/login";
import useLogin from "../hooks/useLogin";

export async function action({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const message = await login(data);

    return json({ message: message });
  } catch (error) {
    console.log(error);
  }
}

export default function Login() {
  const { loggedIn, setLoggedIn } = useLogin();

  if (!loggedIn) {
    return <Navigate to="/profile" replace />;
  }

  setLoggedIn(true);
  return (
    <div>
      <Form method="post" action="/login">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" autoComplete="true" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="true"
        />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
