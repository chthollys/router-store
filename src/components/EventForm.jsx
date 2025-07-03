import { Form, useNavigate, useNavigation, useActionData } from "react-router";

import Input from "../UI/Input";

import classes from "./EventForm.module.css";

function EventForm({ action, defaultEvent = {} }) {
  const data = useActionData();
  const { title, date, image, description } = defaultEvent;
  const navigate = useNavigate();
  const navigation = useNavigation();

  const cancelHandler = () => {
    navigate("..");
  };

  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form
        action={action || ""}
        method="post"
        className={classes["event-form"]}
      >
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Input
          id="title"
          name="title"
          label="Title"
          type="text"
          defaultValue={title || ""}
          // required
        />
        <Input
          id="date"
          name="date"
          label="Date"
          type="date"
          defaultValue={date || ""}
        />
        <Input
          id="image"
          name="image"
          label="Image URL"
          type="text"
          defaultValue={image || ""}
          // required
        />
        <Input
          id="description"
          name="description"
          label="Description"
          textarea
          defaultValue={description || ""}
          // required
        />
        <div className={classes["actions-container"]}>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default EventForm;
