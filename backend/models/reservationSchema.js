import mongoose from "mongoose";
import validator from "validator";


const reservationSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength:[1, "First Name should have at least 3 letters"],
        maxLength:[30,"First Name must have at most 30 letters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [1, "Last name must be of at least 3 Characters."],
        maxLength: [30, "Last name cannot exceed 30 Characters."]
      },
      date: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"]
      },
      phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 Digits."],
        maxLength: [10, "Phone number must contain 10 Digits."]
      }
    });

export const Reservation = mongoose.model("Reservation",reservationSchema);
