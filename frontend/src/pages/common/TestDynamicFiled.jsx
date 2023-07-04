import React, { useState } from "react";

function DynamicForm({ fields, addButtonLabel, submitButtonLabel, onFormSubmit }) {
  const [formFields, setFormFields] = useState(fields);

  const handleAddField = () => {
    const newFields = [...formFields, { type: "", name: "", value: "" }];
    setFormFields(newFields);
  };

  const handleRemoveField = (index) => {
    const newFields = [...formFields];
    newFields.splice(index, 1);
    setFormFields(newFields);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newFields = [...formFields];
    newFields[index][name] = value;
    setFormFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div key={index}>
          <select
            name="type"
            value={field.type}
            onChange={(event) => handleInputChange(event, index)}
          >
            <option value="">Select Type</option>
            <option value="text">Text</option>
            <option value="textarea">Textarea</option>
          </select>
          <input
            type="text"
            name="name"
            value={field.name}
            onChange={(event) => handleInputChange(event, index)}
          />
          <input
            type="text"
            name="value"
            value={field.value}
            onChange={(event) => handleInputChange(event, index)}
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        {addButtonLabel}
      </button>
      <button type="submit">{submitButtonLabel}</button>
    </form>
  );
}

export default DynamicForm;
