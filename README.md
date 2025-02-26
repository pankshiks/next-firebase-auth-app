# **Next.js Authentication System**  

## **Overview**  
This project is a **Next.js-based authentication system** that includes **email/password registration, Google authentication, and Firebase integration**. It features a modern UI with **Tailwind CSS**, user input validation, error handling, and API protection using Firebase Authentication.  

## **Features**  
✔️ User Registration (Email/Password)  
✔️ Google Authentication (OAuth)  
✔️ Firebase Authentication Integration  
✔️ Secure Token-Based API Access  
✔️ Input Validation & Error Handling  
✔️ Full-Page & Button Loaders  
✔️ Next.js Client Components  
✔️ Disallowed Email Domains Protection  

## **Tech Stack**  
- **Framework**: [Next.js](https://nextjs.org/)  
- **Authentication**: [Firebase Authentication](https://firebase.google.com/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **Routing**: Next.js App Router  
- **Database (Optional)**: Firebase Firestore  

## **Installation**  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/pankshiks/next-firebase-auth-app
   cd next-firebase-auth-app
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Firebase**  
   - Create a **Firebase project** on [Firebase Console](https://console.firebase.google.com/).  
   - Enable **Email/Password Authentication** and **Google Authentication**.  
   - Get your Firebase config and add it to `.env.local`:  

     ```plaintext
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     ```

4. **Run the Development Server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## **Usage**  

### **Register a New User**  
- Users can **sign up** using **email/password**.  
- The system prevents signups with **temporary email domains** like `mailinator.com`, `yopmail.com`, etc.  
- Password validation ensures strong credentials.  

### **Login & Authentication**  
- Users can log in via **email/password** or **Google OAuth**.  
- The authentication state is managed using **Firebase Authentication**.  
- Upon login, users are redirected to the **Dashboard**.  

### **API Authentication**  
- Firebase tokens are attached to API requests to authenticate users.  
- Invalid or expired tokens return an authentication error.  

### **Protected Routes**  
- Pages like **Dashboard** are **only accessible to authenticated users**.  
- Unauthenticated users are redirected to the **Login page**.  
