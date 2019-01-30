import React from "react";
import "./Main.scss";

export default function index() {
  return (
    <div className="main">
      <article className="body__list">
        <div className="body__post">
          <h2 className="body__header">Post Number One</h2>
          <h3 className="body_list_subheader">Date: 2018-01-29</h3>
          <img
            className="body__image"
            src="https://source.unsplash.com/800x600"
            alt="Post image"
          />
          <p className="body__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam
            temporibus mollitia natus atque quaerat neque iusto, sint beatae
            voluptates ad nulla incidunt. Possimus veniam, distinctio, quod
            omnis explicabo commodi expedita nam ea iusto perspiciatis illo
            officia molestias eius facere iure, enim earum sunt id ipsum odio
            sed vero repellendus nulla. Quia a ratione officia cupiditate, velit
            dicta repudiandae aspernatur officiis voluptate odit ex natus
            molestiae quibusdam quae sint fugit placeat eius eum ab tenetur.
            Eaque cum maxime, vero suscipit recusandae nostrum, itaque nesciunt
            aperiam culpa iusto alias ullam fugit incidunt dolorum impedit
            voluptates perferendis ab? Enim dolorem, illum repellendus eligendi
            voluptas maxime id vitae asperiores inventore voluptatem fuga eaque,
            cupiditate amet autem consectetur placeat neque reprehenderit modi
            voluptate culpa facere sit corporis nulla. Reprehenderit provident,
            vel libero distinctio adipisci eligendi impedit possimus corrupti,
            praesentium cum aspernatur modi accusantium natus, unde fugit magni.
            Harum, natus perferendis! Alias ullam iure pariatur.
          </p>
          <a className="button button-green" href="">
            Read More
          </a>
        </div>
        <div className="body__post">
          <h2 className="body__header">Post Number Two</h2>
          <h3 className="body_list_subheader">Date: 2018-01-30</h3>
          <img
            className="body__image"
            src="https://source.unsplash.com/800x600"
            alt="Post image"
          />
          <p className="body__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            repudiandae sunt, aliquam repellendus vero alias beatae vel
            perspiciatis facere reiciendis dolores dolore repellat dolor error
            explicabo. Minus nesciunt maiores, reiciendis aspernatur quisquam
            itaque quas dicta omnis asperiores non saepe nemo cum delectus
            soluta tempora repudiandae distinctio! Dicta nostrum magni ullam
            quisquam reiciendis. Aliquam at eveniet velit amet, facilis
            praesentium ipsum, laboriosam reiciendis, labore cumque sed sunt
            esse est. Officia, asperiores suscipit! Quam omnis magnam culpa
            nulla qui neque esse ducimus odit maiores, quis sit corporis dolore
            suscipit dignissimos aut autem asperiores rem deserunt excepturi eos
            sapiente similique recusandae. Molestiae eaque earum, atque
            cupiditate non rem, veritatis dolorum animi deleniti fugit quis
            error libero sunt soluta accusantium. Optio a laudantium nostrum.
          </p>
          <a className="button button-green" href="">
            Read More
          </a>
        </div>
        <div className="body__post">
          <h2 className="body__header">Post Number Three</h2>
          <h3 className="body_list_subheader">Date: 2018-01-31</h3>
          <img
            className="body__image"
            src="https://source.unsplash.com/800x600"
            alt="Post image"
          />
          <p className="body__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptatibus amet veritatis est maiores, voluptatem
            recusandae suscipit numquam sed adipisci? Cumque, ducimus
            architecto? Odio, odit quos nesciunt architecto labore dolorum iusto
            velit, nam ab qui deleniti possimus minus tempore adipisci commodi
            tenetur repudiandae quia obcaecati. Amet quisquam maxime expedita
            quasi ab accusamus soluta! Ut inventore vel aperiam dolores officia.
            Saepe temporibus quos cumque reprehenderit illo amet vero veritatis
            reiciendis natus ab fugit delectus voluptate quam accusamus,
            corrupti dolore magni aliquid.
          </p>
          <a className="button button-green" href="">
            Read More
          </a>
        </div>
        <div className="body__post">
          <h2 className="body__header">Post Number Four</h2>
          <h3 className="body_list_subheader">Date: 2018-01-32</h3>
          <img
            className="body__image"
            src="https://source.unsplash.com/800x600"
            alt="Post image"
          />
          <p className="body__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            fugit, enim deleniti quas voluptas cum blanditiis quisquam minima
            earum reiciendis sint tenetur saepe voluptates ex perspiciatis
            nostrum ab illum rem labore dolore dicta laudantium fuga beatae
            eaque! Voluptatem voluptate odio magnam numquam nesciunt illum,
            ipsum iure, ipsa reprehenderit optio blanditiis obcaecati quas eum
            architecto corrupti non delectus. Labore, iusto. Voluptas!
          </p>
          <a className="button button-green" href="">
            Read More
          </a>
        </div>
      </article>
      <aside className="aside">
        <div className="aside__about">
          <img src="https://source.unsplash.com/200x200" alt="Profile photo" />
          <h3>Name here</h3>
        </div>
        <div className="aside__social">
          <i className="fab fa-twitter" /> <i className="fab fa-twitter" />
          <i className="fab fa-twitter" /> <i className="fab fa-twitter" />
          <i className="fab fa-twitter" />
        </div>
        <div className="aside__insta">
          <img
            src="https://source.unsplash.com/100x100"
            alt="instagram photos"
          />
          <img
            src="https://source.unsplash.com/100x100"
            alt="instagram photos"
          />
          <img
            src="https://source.unsplash.com/100x100"
            alt="instagram photos"
          />
          <img
            src="https://source.unsplash.com/100x100"
            alt="instagram photos"
          />
        </div>
        <div className="aside__youtube">
          <iframe
            src="https://www.youtube.com/embed/-QCHbHnUD1Y"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </aside>
    </div>
  );
}
