let page = {
  clay: {
    image: `<img
              src="src/images/pexels-monstera-5302903.jpg"
              class="top-image"
              alt="block of clay"
            />`,
    heading: `<h1>Clay</h1>`,
    content: ` <p>
    There are different types of clay that can be used to make pottery. When people think of pottery they may recollect redish-orange colored pots, which are made from earthenware clay. There are other types of clay such as stoneware and porcelain. Each clay type has different properties and are fired in different temperatures based on the clay type. Additionally, some clays have grog, which is a gritty sand texture that helps reduce the shrinkage of the item when fired in the kiln.
    </p>`,
  },
  wedge: {
    image: `<img
              src="src/images/pexels-quang-nguyen-vinh-2162943.jpg"
              class="top-image"
              alt="wedging clay"
            />`,
    heading: `<h1>Wedge</h1>`,
    content: ` <p>
    Wedging is a practice in pottery to reclaim clay that has already been thrown on the wheel. The purpose of wedging is to remove any air bubbles in the clay that may lead to cracking if not removed properly. Though wedging looks like kneading dough the motion is slightly different as the intention of wedging clay is remove air, not trap air like with kneading. 
    </p>`,
  },
  throw: {
    image: `<img
              src="src/images/pexels-anastasia-lashkevich-14676586.jpg"
              class="top-image"
              alt="throwing clay"
            />`,
    heading: `<h1>Throw</h1>`,
    content: ` <p>
    Throwing clay is a challenge for most beginners on the wheel. The main goal in throwing clay is to ensure that the clay is centered on the wheel. A potter can feel when clay is centered on the wheel when they are able to feel the clay move steadily through their hands without any wobble or when the clay is not moving their hands when placed lightly around the clay. Once the clay is centered, the potter can start creating their product. 
    </p>`,
  },
  bisque: {
    image: `<img
              src="src/images/pexels-kampus-production-6023601.jpg"
              class="top-image"
              alt="fire in kiln"
            />`,
    heading: `<h1>Bisque Fire</h1>`,
    content: ` <p>
    Bisque firing is the process of turning clay into a ceramic. Prior to bisque firing, the Potter will dry their clay until it is leather hard, which means it feels hard to the touch, but is still malleable. Once the clay is leather hard, the Potter can trim the product to the shape they desire. After trimming the clay is dryed until it is bone hard before it is placed in a kiln for firing. 
    </p>`,
  },
  glaze: {
    image: `<img
              src="src/images/pexels-pavel-danilyuk-7674568.jpg"
              class="top-image"
              alt="glazed ceramics"
            />`,
    heading: `<h1>Glaze</h1>`,
    content: ` <p>
    Glazing the ceramic is final step toward a complete product. There are many glaze colors that can be used to decorate the ceramic. Glazing the ceramic is the process of making the ceramic piece waterproof and food safe.  
    </p>`,
  },
};

function updateContent(event) {
  let contentId = event.target.id;
  let image = document.querySelector("#image");
  let heading = document.querySelector("#heading");
  let contentHTML = document.querySelector("#content");

  image.innerHTML = page[contentId].image;
  heading.innerHTML = page[contentId].heading;
  contentHTML.innerHTML = page[contentId].content;
}

let clayLink = document.querySelector("#clay");
clayLink.addEventListener("click", updateContent);

let wedgeLink = document.querySelector("#wedge");
wedgeLink.addEventListener("click", updateContent);

let throwLink = document.querySelector("#throw");
throwLink.addEventListener("click", updateContent);

let bisqueLink = document.querySelector("#bisque");
bisqueLink.addEventListener("click", updateContent);

let glazeLink = document.querySelector("#glaze");
glazeLink.addEventListener("click", updateContent);
