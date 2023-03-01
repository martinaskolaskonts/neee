// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Pļavā var redzēt ziedus un bites, un taureņus.",
    options: [
      "Pļavā var redzēt ziedus un bites, un taureņus.",
      "Pļavā var redzēt ziedus, un bites, un taureņus.",
      "Pļavā, var redzēt ziedus un bites, un taureņus.",
      "Pļavā var redzēt ziedus un bites un taureņus.",
    ],
    desc: 'Izņemot pirmo, pirms katra <i>un</i>, kas saista vienlīdzīgus teikuma locekļus, ir jāliek komats.'
  },
    {
    numb: 2,
    question: 'Teikumā <i>Programmēšana ir grūta, bet interesanta.</i> kāda ir saikļa <i>bet</i> funkcija?',
    answer: "Tas saista vienlīdzīgus teikuma locekļus.",
    options: [
      "Tasiesāk jaunu, neatkarīgu teikuma daļu.",
      "Tas iesāk palīgteikumu.",
      "Tas saista vienlīdzīgus teikuma locekļus."
    ],
    desc: 'Saiklis "bet" var saistīt divas neatkarīgas teikuma daļas vai vienlīdzīgus teikuma locekļus. Tā kā pēc "bet" nav vēl viens gramatiskais centrs, tad "bet" saista vienlīdzīgus teikuma locekļus.'
  },
  {
    numb: 3,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Latvija ir viena no Baltijas valstīm kopā ar Lietuvu un Igauniju.",
    options: [
      "Latvija ir viena no Baltijas valstīm, kopā ar Lietuvu un Igauniju.",
      "Latvija ir viena no Baltijas valstīm, kopā ar Lietuvu, un Igauniju.",
      "Latvija ir viena no Baltijas valstīm kopā ar Lietuvu un Igauniju.",
      "Latvija ir viena no Baltijas valstīm kopā ar Lietuvu, un Igauniju."
    ],
    desc: 'Šajā teikumā komatus nevajag likt, jo pirms vārda <i>kopā</i> komatu liek tikai tad, kad tas iesāk palīgteikumu, bet pirms vārda <i>un</i> komatu liek tikai tad, ja tas atkārtoti saista vienlīdzīgus teikuma locekļus.'
  }
];