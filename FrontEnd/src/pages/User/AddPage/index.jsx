import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'; 

function AddPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    country: Yup.string()
      .required('Country is required')
      .min(2, 'Country name must be at least 2 characters'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters'),
    percent: Yup.number()
      .required('Percent is required')
      .min(0, 'Percent must be at least 0')
      .max(100, 'Percent cannot exceed 100'),
    image: Yup.string()
      .url('Must be a valid URL')
      .required('Image URL is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post('http://localhost:3001/immigrations', values)
      .then(() => {
       
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Immigrant added successfully!',
        });
        resetForm();
        navigate('/'); 
      })
      .catch((err) => {
        
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Error adding immigrant: ' + err.message,
        });
      });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Add Immigrant</h2>
      <Formik
        initialValues={{
          country: '',
          description: '',
          percent: '',
          image: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <label htmlFor="country">Country</label>
              <Field id="country" name="country" className="form-control" />
              <ErrorMessage name="country" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <Field id="description" name="description" as="textarea" className="form-control" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="percent">Percent</label>
              <Field id="percent" name="percent" type="number" className="form-control" />
              <ErrorMessage name="percent" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="image">Image URL</label>
              <Field id="image" name="image" className="form-control" />
              <ErrorMessage name="image" component="div" className="text-danger" />
            </div>

            <Button type="submit" variant="success" className="me-3">
              Submit
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate('/')}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddPage;
