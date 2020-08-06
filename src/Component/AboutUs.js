import React, { Component } from "react";
import social from "../images/001-github-sign.png";
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import "../style/AboutUs.css";

export default class AboutUs extends Component {
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
      <>
        <MainHeader titleHeader="About Us" />
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
        ))}
        <Footer />
      </>
    );
  }
}
