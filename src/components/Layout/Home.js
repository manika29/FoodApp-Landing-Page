import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Home.module.css";
import { useHistory } from "react-router-dom";
import loginImage from "../../assets/login.png";
import shopImage from "../../assets/shop.png";
import paymentImage from "../../assets/payment.png";

const Home = () => {
  let history = useHistory();
  return (
    <Fragment>
      <div className={classes.main}>
        <header className={classes.header}>
          <h1>ReactMeals</h1>
        </header>

        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="A table full of delicious food" />
        </div>

        <div>
          <button
            className={classes.button}
            onClick={() => {
              history.push("/meals");
            }}
          >
            Get Started
          </button>
        </div>

        <div className={classes.heading}>
          <h1>How the website works</h1>
        </div>

        <div className={classes.detail}>
          <div className={classes.imageclass}>
            <img src={loginImage} />
          </div>
          <div className={classes.textclass}>
            <p className={classes.p1}>Create an account</p>
            <p className={classes.p2}>
              Create/Login to an existing account to get started
            </p>
            <p className={classes.p3}>
              An account is created with your desired email and a password
            </p>
          </div>
        </div>

        <div className={classes.detail}>
          <div className={classes.textclass2}>
            <p className={classes.p4}>Explore while shopping</p>
            <p className={classes.p5}>
              Shop for your favourite meal at a reasonable price
            </p>
            <p className={classes.p6}>
              Filter your food and drinks according to your taste
            </p>
          </div>
          <div className={classes.imageclass2}>
            <img src={shopImage} />
          </div>
        </div>

        <div className={classes.detail}>
          <div className={classes.imageclass3}>
            <img src={paymentImage} />
          </div>
          <div className={classes.textclass3}>
            <p className={classes.p7}>Checkout</p>
            <p className={classes.p8}>
              When you're done,check out and get it delivered.
            </p>
            <p className={classes.p9}>
              When done,check out and get it delivered through different payment
              methods with ease.
            </p>
          </div>
        </div>

        <footer className={classes.footer}>
          <h3 className={classes.contact}>
            Contact Us : manika.sharma1964@gmail.com
          </h3>
        </footer>
      </div>
    </Fragment>
  );
};

export default Home;
