import { useEffect, useState } from "react";
import { auth } from "../firebase";
import "./AuthDetails.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="profile-main">
      <div className="profile-detail-container">
        <div className="left-profile">
          {authUser ? (
            <>
              <div className="cover-picture-detail"></div>
              <div className="main-picture">
                <img src={authUser.photoURL} className="profile-pic" alt="" />
              </div>

              {/* <p>
                <strong>Email:</strong> {authUser.email}
              </p> */}
              <h3>{authUser.displayName}</h3>
              <p>{authUser.email}</p>
              <button className="button-8" onClick={userSignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <p>Signed Out</p>
              <button className="button-8" onClick={() => navigate("/signup")}>
                Sign In
              </button>
            </>
          )}
        </div>
        <div className="right-profile">
          <div className="profile-detail">
            <h3>Profile detail</h3>
            <p>
              {/* <strong>A user since: </strong> {authUser.metadata.creationTime} */}
              <strong>User since: </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthDetails;
