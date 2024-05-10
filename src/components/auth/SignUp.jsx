import "./SignUp.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
// import useFetchUserProgress from "../../hooks/useFetchUserProgress";

const SignUp = () => {
  //sign in
  // const { currentUser } = auth();
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const navigate = useNavigate();
  // const progress = useFetchUserProgress(currentUser?.uid);

  //sing up
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/instruction");
      })
      .catch((error) => {
        console.log(error);
        alert("You already have an account. Please sign in instead ");
      });
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      if (user) {
        navigate("/unit/basic-phrase-1");
        // const lastProgress = progress.sort(
        //   (a, b) => b.lessonId - a.lessonId
        // )[0];
        // if (lastProgress && lastProgress.completed) {
        //   navigate(`/unit/${lastProgress.lessonId + 1}`);
        // } else if (lastProgress) {
        //   navigate(`/unit/${lastProgress.lessonId}`);
        // } else {
        //   navigate("instruction");
        // }
      } else {
        alert("Invalid credential");
      }
    } catch (error) {
      console.error("Incorrect Email or Password", error);
      alert("Incorrect Email or Password. Please try again. ");
    }
  };

  const getUserData = async (userId) => {
    const userRef = doc(db, "users", userId);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info should be accessed directly from the result
      const user = result.user;

      await createUserProfileDocument(user); // Store or update the user profile document
      const userData = await getUserData(user.uid); // Fetch user-specific data

      console.log(userData);
      navigate("/instruction");
    } catch (error) {
      console.error("Error with Google Sign In", error);
      alert("Failed to sign in with Google. Please try again.");
    }
  };

  //Retreive Email and Created day
  const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      const { email, photoURL } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userRef, {
          email,
          createdAt,
          profilePicture: photoURL,
          ...additionalData,
        });
      } catch (error) {
        console.log("Error creating user", error.message);
      }
    }

    return userRef;
  };

  //Retrieve the profile doc

  return (
    <div className="auth-container">
      <div className="sign-in-container">
        <form onSubmit={signUp}>
          <div className="title">Create an account</div>
          <div className="input-box underline">
            <input
              type="email"
              placeholder="Enter your email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            ></input>
            {/* <div className="underline"></div> */}
          </div>
          <div className="input-box underline">
            <input
              type="password"
              placeholder="Enter your password"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            ></input>
            {/* <div className="underline"></div> */}
          </div>
          <div className="sign-button-container">
            <button className="button-8" type="submit">
              Sign Up
            </button>
            <GoogleButton onClick={signInWithGoogle} />
          </div>
        </form>
      </div>
      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <div className="title">Already have an account?</div>
          <div className="input-box underline">
            <input
              type="email"
              placeholder="Enter your email"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
            ></input>
            {/* <div className="underline"></div> */}
          </div>
          <div className="input-box underline">
            <input
              type="password"
              placeholder="Enter your password"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
            ></input>
            {/* <div className="underline"></div> */}
          </div>
          <div className="sign-button-container">
            <button className="button-8" type="submit">
              Log In
            </button>
            <GoogleButton onClick={signInWithGoogle} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
