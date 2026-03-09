const SimpleForm = () => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e)
    console.log('form submittes');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;