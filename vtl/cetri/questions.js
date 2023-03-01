// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Marija spēlē videospēles, klausās mūziku.",
    options: [
      "Marija spēlē, videospēles klausās mūziku.",
      "Marija spēlē, videospēles, klausās mūziku.",
      "Marija, spēlē videospēles, klausās mūziku.",
      "Marija spēlē videospēles, klausās mūziku.",
    ],
      desc: '<i>spēlē videospēles</i> un <i>klausās mūziku</i> ir vienlīdzīgi teikuma locekļi.'
  },
    {
    numb: 2,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Kaķis nevis skrien un medī, bet guļ un sapņo.",
    options: [
      "Kaķis nevis skrien, un medī, bet guļ, un sapņo.",
      "Kaķis nevis skrien un medī, bet guļ un sapņo.",
      "Kaķis nevis skrien, un medī bet guļ, un sapņo.",
      "Kaķis, nevis skrien un medī, bet guļ un sapņo."
    ],
    desc: '<i>nevis...bet</i> ir pāra saiklis, kas nozīmē, ka komatu liek pirms otrās daļas, kas šajā gadījumā ir <i>bet</i>.'
  },
  {
    numb: 3,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Latvijā parkos un mežos aug ozoli un liepas.",
    options: [
      "Latvijā parkos un mežos aug ozoli un liepas.",
      "Latvijā, parkos un mežos, aug ozoli un liepas.",
      "Latvijā parkos un mežos, aug ozoli un liepas.",
      "Latvijā parkos, un mežos aug ozoli, un liepas."
    ],
    desc: 'Abi saikļi <i>un</i> saista citus vienlīdzīgus teikuma locekļus, tāpēc pirms otrā <i>un</i> nav jāliek komats.'
  }
];