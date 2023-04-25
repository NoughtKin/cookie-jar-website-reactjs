import { useState } from "react";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div>
      <Head />
      <Body />
    </div>
  );
}

function Head() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Cookie Jar</title>
    </Helmet>
  );
}

function Body() {
  return (
    <div className="container">
      <h1>Cookie Jar</h1>
      <p>
        Write down your experiences that you've achieved or overcome as
        "cookies".
      </p>
    </div>
  );
}
