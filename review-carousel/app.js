// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
      id: 5,
      name: "sara jones",
      job: "ux designer",
      img:
        "./person-1.jpeg",
      text:
        "Velit veniam ullamco commodo veniam occaecat in aute veniam sint aliquip amet do proident. Sunt sint aliquip Lorem nulla excepteur est aliquip minim excepteur laborum est.",
    },
];

const author = document.getElementById('author');
const job = document.getElementById('job');
const img = document.getElementById('person-img');
const info = document.getElementById('info');

let i = 0;

function setReview() {
  let review = reviews[i];
  author.textContent = review.name;
  job.textContent = review.job;
  img.src = review.img;
  info.textContent = review.text;
}
setReview();

const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const random = document.querySelector('.random-btn');

prev.addEventListener('click', () => {
    if (--i < 0) { i = reviews.length - 1; }
    setReview();
});

next.addEventListener('click', () => {
    i = ++i % reviews.length;
    setReview();
});

random.addEventListener('click', () => {
    i = Math.floor(Math.random() * reviews.length);
    setReview();
});