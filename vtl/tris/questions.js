// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Āboli var būt gan sarkani, gan zaļi, gan dzelteni.",
    options: [
      "Āboli var būt gan sarkani, gan zaļi, gan dzelteni.",
      "Āboli var būt, gan sarkani, gan zaļi, gan dzelteni.",
      "Āboli var būt gan sarkani gan zaļi gan dzelteni.",
      "Āboli var būt, gan sarkani gan zaļi gan dzelteni.",
    ],
    desc: 'Nepareizi. Izņemot pirmo, komats jāliek pirms katra <i>gan</i>, kas saista vienlīdzīgus teikuma locekļus.'
  },
    {
    numb: 2,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Strausi neprot ne lidot, ne peldēt.",
    options: [
      "Strausi neprot ne lidot ne peldēt.",
      "Strausi neprot ne lidot, ne peldēt.",
      "Strausi neprot, ne lidot ne peldēt.",
      "Strausi neprot, ne lidot, ne peldēt."
    ],
    desc: 'Nepareizi. Izņemot pirmo, komats jāliek pirms katra <i>ne</i>, kas saista vienlīdzīgus teikuma locekļus.'
  },
  {
    numb: 3,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Pamatkrāsas ir sarkans, zils un dzeltens.",
    options: [
      "Pamatkrāsas ir sarkans, zils, un dzeltens.",
      "Pamatkrāsas ir sarkans zils un dzeltens.",
      "Pamatkrāsas ir sarkans, zils un dzeltens.",
      "Pamatkrāsas ir, sarkans zils, un dzeltens."
    ],
    desc: 'Nepareizi. Komats jāliek starp <i>sarkans</i> un <i>zils</i>, jo tur ir bezsaikļa saistījums starp vienlīdzīgiem teikuma locekļiem.'
  }
];