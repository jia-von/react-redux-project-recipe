import React from "react";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";
import food1 from "../../images/food1.jpg";
import food5 from "../../images/food5.jpg";
import food6 from "../../images/food6.jpg";
import food7 from "../../images/food7.jpg";
import food8 from "../../images/food8.jpg";
import MainHeader from "../logic/MainHeader";
import "../../style/GirlRec.css";
import Footer from "../logic/Footer";
import social from "../../images/001-github-sign.png";


class GirlRec extends React.Component {
  state = {
    foodDetails: [],
  };

  constructor() {
    super();
    this.state = {
      authors: [
        {
          id: 1,
          title: "Bibu",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae aliquam vero at, saepe non nesciunt eos corporis expedita veritatis consequatur quam error ducimus suscipit? Quo nam laborum harum voluptates!",
          socialLink: "http://google.com",
        },
        {
          id: 2,
          title: "Corinna",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptates officia quod dicta ea sapiente itaque! Quia, nisi. Corrupti, error itaque excepturi obcaecati animi unde. Nulla a rem nemo suscipit?",
          socialLink: "http://google.com",
        },
        {
          id: 3,
          title: "Jia",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus esse perspiciatis, tempore autem deserunt, delectus placeat eum est quam sit eaque cumque molestias harum maiores in numquam amet consequuntur.",
          socialLink: "http://google.com",
        },
        {
          id: 4,
          title: "Osasenaga",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse veritatis quisquam, laborum error quod laboriosam. Quaerat voluptatem perferendis libero non natus culpa asperiores similique facere. Rem excepturi ipsa suscipit.",
          socialLink: "http://google.com",
        },
      ],
    };
  }

  render() {
    const { authors } = this.state;
    return (
      <div>
      
        <MainHeader titleHeader="GOOD GIRL'S FAVES & ABOUT US" />
        <div className="GirlRecContainer">
          <main>

          {authors.map((author) => (
            <section>
            <div className="bindAuthAndTitle">
              <h2>{author.title}</h2>
              <p>{author.description}</p>
            </div>
            <a href={author.socialLink}>
              <img src={social} id="githubLogo" alt="GitHub Logo" />
            </a>
          </section>
          ))};
          
          <h2>Bibu's Pick</h2>
            <div className="imgBinder">
              <img src={food1} alt="Bibu's pick"></img>
              <img src={food2} alt="Bibu's pick"></img>
            </div>
            <p>
              lorum This Project will use the "" API to populate recipes.
              Features: - Featured Recipe and gallery on main page - Search
              recipes - using recipe names or tags (eg. keto) - User sign in to
              see favorited recipes - This Project will use the "" API to
              populate recipes. Features: - Featured Recipe and gallery on main
              page - Search recipes -{" "}
            </p>

            <h2>Jia's Pick</h2>
            <div className="imgBinder">
              <img src={food3} alt="Jia's pick"></img>
              <img src={food4} alt="Jia's pick"></img>
            </div>
            <p>
              lorum This Project will use the "" API to populate recipes.
              Features: - Featured Recipe and gallery on main page - Search
              recipes - using recipe names or tags (eg. keto) - User sign in to
              see favorited recipes - This Project will use the "" API to
              populate recipes. Features: - Featured Recipe and gallery on main
              page - Search recipes -{" "}
            </p>

            <h2>Osase's's Pick</h2>
            <div className="imgBinder">
              <img src={food5} alt="Osase's pick"></img>
              <img src={food6} alt="Osase's pick"></img>
            </div>
            <p>
              lorum This Project will use the "" API to populate recipes.
              Features: - Featured Recipe and gallery on main page - Search
              recipes - using recipe names or tags (eg. keto) - User sign in to
              see favorited recipes - This Project will use the "" API to
              populate recipes. Features: - Featured Recipe and gallery on main
              page - Search recipes -{" "}
            </p>

            <h2>Corinna's Pick</h2>
            <div className="imgBinder">
              <img src={food7} alt="Corinna's pick"></img>
              <img src={food8} alt="Corinna's pick"></img>
            </div>
            <p>
              lorum This Project will use the "" API to populate recipes.
              Features: - Featured Recipe and gallery on main page - Search
              recipes - using recipe names or tags (eg. keto) - User sign in to
              see favorited recipes - This Project will use the "" API to
              populate recipes. Features: - Featured Recipe and gallery on main
              page - Search recipes -{" "}
            </p>
          
          </main>
          
          <Footer />
         </div>
         </div>
      );
  }
}
  export default GirlRec;
