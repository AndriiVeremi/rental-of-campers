import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { BookNowWrapper, BookNowInfo, BookTitle, BookSubTitle, BookNowForm, BookNowLable, BookNowInput, BookNowTextarea, BookNowBtn } from './BookNow.styled';

const BookNow = () => {
//   const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(formData)
    console.log(formData);
  };

  return (
    <BookNowWrapper>
      <BookNowInfo>
        <BookTitle>Book your campervan now</BookTitle>
        <BookSubTitle>Stay connected! We are always ready to help you.</BookSubTitle>
      </BookNowInfo>

      <BookNowForm onSubmit={handleSubmit}>
        <BookNowLable>
          <BookNowInput type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
        </BookNowLable>

        <BookNowLable>
          <BookNowInput type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        </BookNowLable>

        <BookNowLable>
          <BookNowInput type="date" id="date" name="date" placeholder="Booking date" value={formData.date} onChange={handleInputChange} required />
        </BookNowLable>

        <BookNowLable>
          <BookNowTextarea id="comment" name="comment" rows="5" placeholder="Comment" value={formData.comment} onChange={handleInputChange} required />
        </BookNowLable>

        <BookNowBtn type="submit">Submit</BookNowBtn>
      </BookNowForm>
    </BookNowWrapper>
  );
};

export default BookNow;
