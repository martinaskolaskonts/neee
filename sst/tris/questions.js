// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Kurā teikumā komati salikti pareizi?",
    answer: "Eži neēd ābolus, āboli vienkārši iekrīt to kažokos un tur paliek.",
    options: [
      "Eži neēd ābolus, āboli vienkārši iekrīt to kažokos, un tur paliek.",
      "Eži neēd ābolus āboli vienkārši iekrīt to kažokos, un tur paliek.",
      "Eži neēd ābolus, āboli vienkārši iekrīt to kažokos un tur paliek.",
      "Eži, neēd ābolus, āboli vienkārši iekrīt to kažokos, un tur paliek."
    ],
      desc: 'Teikumā ir divas neatkarīgas teikuma daļas, tāpēc ir komats pirms <i>āboli</i>. Saiklis <i>un</i> saista vienlīdzīgus teikuma locekļus, tāpēc komatu nevajag.'
  },
    {
    numb: 2,
    question: "Kurā teikumā komati salikti pareizi?",
    answer: "Līdz nākamajam brīvlaikam vairs nav palicis ilgs laiks, bet tagad skolā būs daudz kontroldarbu.",
    options: [
      "Līdz nākamajam brīvlaikam, vairs nav palicis ilgs laiks, bet tagad, skolā būs daudz kontroldarbu.",
      "Līdz nākamajam brīvlaikam vairs nav palicis ilgs laiks, bet tagad, skolā būs daudz kontroldarbu.",
      "Līdz nākamajam brīvlaikam vairs nav palicis ilgs laiks bet tagad, skolā būs daudz kontroldarbu.",
      "Līdz nākamajam brīvlaikam vairs nav palicis ilgs laiks, bet tagad skolā būs daudz kontroldarbu."
    ],
    desc: 'Saiklis <i>bet</i> saista divas neatkarīgas teikuma daļas.'
  },
  {
    numb: 3,
    question: "Kurā teikumā komati salikti pareizi?",
    answer: "Teorija par interpunkciju nav ļoti grūta, bet spēja to pielietot ir cita runa, taču grāmatu lasīšana latviešu valodā var palīdzēt.",
    options: [
      "Teorija par interpunkciju nav ļoti grūta, bet spēja to pielietot ir cita runa taču grāmatu lasīšana latviešu valodā var palīdzēt.",
      "Teorija par interpunkciju nav ļoti grūta, bet, spēja to pielietot, ir cita runa, taču grāmatu lasīšana latviešu valodā var palīdzēt.",
      "Teorija par interpunkciju nav ļoti grūta, bet spēja to pielietot ir cita runa, taču grāmatu lasīšana latviešu valodā var palīdzēt.",
      "Teorija par interpunkciju nav ļoti grūta bet spēja to pielietot ir cita runa, taču grāmatu lasīšana latviešu valodā var palīdzēt."
    ],
    desc: 'Saiklis <i>bet</i> iesāk jaunu neatkarīgu teikuma daļu, un <i>taču</i> iesāk trešo neatkarīgo teikuma daļu.'
  }
];