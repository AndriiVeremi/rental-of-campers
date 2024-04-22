import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import MainButton from 'components/MainButton/MainButton';

import {
  BookNowWrapper,
  BookNowInfo,
  BookTitle,
  BookSubTitle,
  BookNowForm,
  BookNowLable,
  BookNowInput,
  BookNowTextarea,
} from './BookNow.styled';

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
          <BookNowInput
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </BookNowLable>

        <BookNowLable>
          <BookNowInput
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </BookNowLable>

        <BookNowLable>
          <BookNowInput
            min="2024-01-01"
            max="2099-04-20"
            type="date"
            id="date"
            name="date"
            placeholder="Booking date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </BookNowLable>

        <BookNowLable>
          <BookNowTextarea
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id="comment"
            name="comment"
            rows="5"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
          />
        </BookNowLable>

        <MainButton type="submit" size="small" >Submit</MainButton>
      </BookNowForm>
    </BookNowWrapper>
  );
};

export default BookNow;
