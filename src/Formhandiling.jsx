import React, { useState } from 'react';

function Formhandiling() {
  const [formData, setFormData] = useState({
    username: "",
    age: "",

    joiningDate: "",
    endingDate: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    age: "",
    joiningDate: "",
    endingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully");
    }
  }

  function validateForm() {
    let formErrors = {
      username: "",
      age: "",

      joiningDate: "",
      endingDate: "",
    };
    let isValid = true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const joining = formData.joiningDate ? new Date(formData.joiningDate) : null;
    const ending = formData.endingDate ? new Date(formData.endingDate) : null;

    if (!formData.username) {
      formErrors.username = "Username is required";
      isValid = false;
    }
    if (!formData.age) {
      formErrors.age = "Age is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.age)) {
      formErrors.age = "Age must be a valid number";
      isValid = false;
    } else if (parseInt(formData.age) <= 0) {
      formErrors.age = "Age must be a positive number";
      isValid = false;
    }



    if (!formData.joiningDate) {
      formErrors.joiningDate = "Joining date is required";
      isValid = false;
    } else if (joining < today) {
      formErrors.joiningDate = "Joining date cannot be in the past";
      isValid = false;
    } else if (ending && joining >= ending) {
      formErrors.joiningDate = "Joining date cannot be after ending date";
      isValid = false;
    }

    if (!formData.endingDate) {
      formErrors.endingDate = "Ending date is required";
      isValid = false;
    } else if (joining && ending <= joining) {
      formErrors.endingDate = "Ending date cannot be before joining date";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <div style={{ color: 'red' }}>{errors.username}</div>
        <br /><br />

        <input
  type="text"
  name="age"
  placeholder="Age"
  value={formData.age}
  inputMode="numeric"
  pattern="[0-9]*"
  onChange={(e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      handleChange(e);
    }
  }}
/>


        <div style={{ color: 'red' }}>{errors.username}</div>
        <br /><br />
        
       
        <label>Joining Date:</label><br />
        <input
          type="date"
          name="joiningDate"
          min={new Date().toISOString().split("T")[0]}
          value={formData.joiningDate}
          onChange={handleChange}
        />
        <div style={{ color: 'red' }}>{errors.joiningDate}</div>
        <br /><br />

        <label>Ending Date:</label><br />
        <input
          type="date"
          name="endingDate"
           min={formData.joiningDate || new Date().toISOString().split("T")[0]}
          value={formData.endingDate}
          onChange={handleChange}
        />
        <div style={{ color: 'red' }}>{errors.endingDate}</div>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formhandiling;
