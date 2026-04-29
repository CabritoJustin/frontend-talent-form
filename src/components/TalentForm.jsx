import "./TalentForm.css";

function TalentForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      age: e.target.age.value,
      email: e.target.email.value,
      talent: e.target.talent.value,
    };

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="page">
      <img src="/pup-logo.png" alt="PUP Logo" className="pup-logo" />

      <div className="form-card">
        <h1>Talent Form for PUPBC</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="enter your full name" />

          <label>Age</label>
          <input type="number" name="age" placeholder="enter your age" />

          <label>Email</label>
          <input type="email" name="email" placeholder="enter your email" />

          <label>Talent</label>
          <select name="talent">
            <option>Singing</option>
            <option>Dancing</option>
            <option>Drawing</option>
            <option>Acting</option>
            <option>Playing Instrument</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TalentForm;