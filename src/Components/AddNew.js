import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addData } from '../Features/Slice';

function AddNew() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const newStudent = {
    name: '',
    age: '',
    course: '',
    batch: '',
  };

  const handleChange = (e) => {
    newStudent[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
    dispatch(addData(newStudent));
    navigate('/student');
  };

  const handleCancel = () => {
    navigate('/student');
  };

  return (
    <>
      <div className="flex1">
        <fieldset>
          <legend>Name</legend>
          <input placeholder="Enter Name" name="name" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Age</legend>
          <input placeholder="Enter Age" name="age" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Course</legend>
          <input placeholder="Enter Course" name="course" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Batch</legend>
          <input placeholder="Enter Batch" name="batch" onChange={handleChange} />
        </fieldset>
      </div>

      <div className="flex2">
        <div>
          <button className="btn1" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        <div>
          <button className="btn1" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNew;
