import { Form, redirect } from "react-router-dom";
import { logout } from "../api/logout";

// Redirect to /login after logout doesnt work
export const action = async () => {
  try {
    const response = await logout();
    return redirect("/login");
  } catch (error) {
    console.error(error);
  }
};

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Form method="post" action="/profile">
        <button type="submit">Logout</button>
      </Form>
    </div>
  );
}
