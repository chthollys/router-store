import { Form } from "react-router";

import Input from "../UI/Input";

import classes from "./EventForm.module.css";

function EventForm({ action, defaultEvent = {} }) {
  const { title, date, image, description } = defaultEvent;

  return (
    <>
      <Form
        action={action || ""}
        method="post"
        className={classes["event-form"]}
      >
        <Input
          id="title"
          name="title"
          label="Title"
          type="text"
          defaultValue={title || ""}
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
        />
        <Input
          id="description"
          name="description"
          label="Description"
          textarea
          defaultValue={description || ""}
        />

        <button>Submit</button>
      </Form>
    </>
  );
}

export default EventForm;
