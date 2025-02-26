// constants/index.js

export const DEFAULT_AVATAR_URL =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

export const API_ENDPOINTS = {
  protectedData: "/api/protected",
};

export const VALIDATION_MESSAGES = {
  invalidEmail: "Please enter a valid email address.",
  shortPassword: "Password must be at least 6 characters.",
  passwordMismatch: "Passwords do not match.",
  invalidCredentionals: "Oops! The credentials provided don't match our records. Please verify your details and try again.",
  emptyName: "Please enter your name.",
  duplicateEmail: "A user with this email already exists. Please sign in or use a different email address.",
  invalidDomain: "Registration using emails from this domain is not allowed.",
  firebaseDuplicateEmail: "auth/email-already-in-use",
  expection: "Oops! Something went wrong. Please try again.",
};


export const DISALLOWED_DOMAINS = [
  // "mailinator.com",
  "yopmail.com",
  "mailintor.com",
  "10minutemail.com",
  "temp-mail.org",
  "guerrillamail.com",
  "trashmail.com",
  "getnada.com",
  "tempmail.com",
  "throwawaymail.com",
  "maildrop.cc",
  "fakeinbox.com"
];
