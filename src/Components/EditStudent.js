import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editData } from '../Features/Slice';

const EditStudent = () => {
  const bigData = useSelector((state) => state.dataKey);
  const dispatch = useDispatch();

  const index = useLocation().state.data;
  const nav = useNavigate();

  const [EditData, setEditData] = useState({
    name: bigData[index].name,
    age: bigData[index].age,
    course: bigData[index].course,
    batch: bigData[index].batch,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...EditData, [name]: value };
    setEditData(updatedData);
  };

  const handleSubmit = () => {
    dispatch(editData({ EditData, index }));
    nav('/student');
    console.log(EditData);
  };

  const handleCancel = () => {
    nav('/student');
  };

  return (
    <>
      <div className="flex1">
        <fieldset>
          <legend>Name</legend>
          <input
            placeholder={bigData[index].name}
            name="name"
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Age</legend>
          <input
            placeholder={bigData[index].age}
            name="age"
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Course</legend>
          <input
            placeholder={bigData[index].course}
            name="course"
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Batch</legend>
          <input
            placeholder={bigData[index].batch}
            name="batch"
            onChange={handleChange}
          />
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
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EditStudent;
