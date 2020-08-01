import React, { Component } from "react";
import social from "../images/001-github-sign.png";

export default class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      authors: [
        {
          id: 0,
          title: "OUR STORY",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor quibusdam veniam quam ratione dolorem optio labore sit eius voluptatum delectus sed molestias deleniti id, suscipit nemo laboriosam repellendus voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id laborum eligendi minus voluptates explicabo saepe ex. Pariatur hic nisi dolores quasi dolorum quaerat eos, alias quibusdam qui, rerum quia!",
        },
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
        {authors.map((author) => (
          <section>
            <h2>{author.title}</h2>
            <p>{author.description}</p>
            <a href={author.socialLink}>
              <img src={social} id="githubLogo" alt="GitHub Logo" />
            </a>
          </section>
        ))}
      </>
    );
  }
}
