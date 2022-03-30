import React from "react";

function Home() {
  const pictures = [
    "./images/ronaldo1.jpg",
    "./images/CurvedKick1.jpg",
    "./images/mesut1.jpg",
  ];

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [index, pictures]);

  return (
    <div className="Home">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FAHAD'S SOCCER SHOES SHOP</title>
        <link rel="stylesheet" href="index.css" />
      </head>

      <body>
        <main class="layout-main">
          <div class="hero__wrapper">
            <div class="hero__img-container">
              <img className="homeImage" alt="" src={pictures[index]}></img>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default Home;
