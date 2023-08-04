import { Formik, Form } from "formik";
import axios from 'axios'


const MovieReview = () => {
  const initialValues = {
    title: "",
    date: "",
    rating: "",
    review: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    axios.post('http://localhost:5050/review', values)
  };

  return (
    <>
      <h1>Review a Movie</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Form>
              <input
                type="text"
                name="title"
                placeholder="title"
                value={values.title}
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
              ></input>
              <div className="movie-rating">
                <label htmlFor="one">
                  1
                  <input
                    type="radio"
                    name="rating"
                    id="one"
                    value="1"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="two">
                  2
                  <input
                    type="radio"
                    name="rating"
                    id="two"
                    value="2"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="three">
                  3
                  <input
                    type="radio"
                    name="rating"
                    id="three"
                    value="3"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="four">
                  4
                  <input
                    type="radio"
                    name="rating"
                    id="four"
                    value="4"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="five">
                  5
                  <input
                    type="radio"
                    name="rating"
                    id="five"
                    value="5"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <textarea
                name="review"
                rows={4}
                cols={50}
                value={values.review}
                onChange={handleChange}
              />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default MovieReview;
