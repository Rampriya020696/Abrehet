import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import queryString from "query-string";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51KZzWbAhBlpHU9kBF7mHsYqqk6Ma8MGqjS9PB2pfwRcSW9npj1fv3YCqsFOESqTYvzoGIdBuZ9y3qKpTkhwpc9TO00kMQrezA4");

// Showing null, because we will show the result in the app and not on the web
function Success() {
  return null;
}

// Showing null, because we will show the result in the app and not on the web
function Failure() {
  return null;
}

// Showing null, because we will show the result in the app and not on the web
function PaymentInit() {
  return null;
}

function Init() {
  return (
    <div className="App">
      <p>Payment Site</p>
    </div>
  );
}

async function initStripe() {
  const parsed = queryString.parse(window.location.search);
  const sessionId = parsed.session;

  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    sessionId
  });
}

function Payment() {
  initStripe();
  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Init/>}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/payment-init" element={<PaymentInit />}/>
        <Route path="/payment-failure" element={<Failure />}/>
        <Route path="/payment-success" element={<Success />}/>
      </Routes>
    </Router>
  );
}

export default App;