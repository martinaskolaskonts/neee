// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Kurā teikumā komati salikti pareizi?",
    answer: "Jānis dara mājasdarbus, bet Anna, klausoties mūziku, glezno kluso dabu.",
    options: [
      "Jānis dara mājasdarbus, bet Anna, klausoties mūziku glezno kluso dabu.",
      "Jānis dara mājasdarbus, bet Anna, klausoties mūziku, glezno kluso dabu.",
      "Jānis dara mājasdarbus, bet, Anna klausoties mūziku, glezno kluso dabu.",
    ],
    desc: "Gramatiskais centrs (šeit: <i>Jānis dara</i> un <i>Anna glezno</i>) nevar atrasties divdabja teicienā, tāpec pirmais un trešais atbilžu variants ir nepareizs.",
  },
  {
    numb: 2,
    question: "Kurā teikumā komati salikti pareizi?",
    answer:
      "Cerot uz labāko, Mārtiņš rakstīja pārbaudes darbu.",
    options: [
      "Cerot uz labāko, Mārtiņš rakstīja pārbaudes darbu.",
      "Cerot uz labāko Mārtiņš, rakstīja pārbaudes darbu.",
      "Cerot uz labāko Mārtiņš rakstīja pārbaudes darbu.",
    ],
    desc: "Gramatiskais centrs (šeit: <i>Mārtiņš rakstīja</i>) nevar atrasties divdabja teicienā, tāpec otris un trešais atbilžu variants ir nepareizs.",
  },
  {
    numb: 3,
    question: "Kurā teikumā komati salikti pareizi?",
    answer: "Viņa gulēja, segās sapinusies.",
    options: [
      "Viņa gulēja, segās sapinusies.",
      "Viņa, gulēja segās, sapinusies.",
      "Viņa gulēja, segās, sapinusies.",
    ],
    desc: "Ja divdabja teiciens (šeit: <i>segās sapinusies</i>) atrodas teikuma beigās, pirms tā jāliek komats.",
  },
];
