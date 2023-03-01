// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Emīlija, pētot un apspriežot laboratorijas darba pētījumus ar klasesbiedriem, aizmirsa tos pierakstīt, nožēlojot to mācību stundas beigās.",
    options: [
      "Emīlija, pētot un apspriežot laboratorijas darba pētījumus ar klasesbiedriem, aizmirsa tos pierakstīt nožēlojot to mācību stundas beigās.",
      "Emīlija pētot un apspriežot laboratorijas darba pētījumus, ar klasesbiedriem, aizmirsa tos pierakstīt, nožēlojot to mācību stundas beigās.",
      "Emīlija, pētot un apspriežot laboratorijas darba pētījumus ar klasesbiedriem, aizmirsa tos pierakstīt, nožēlojot to mācību stundas beigās.",
      "Emīlija, pētot un apspriežot, laboratorijas darba pētījumus ar klasesbiedriem aizmirsa tos pierakstīt, nožēlojot to mācību stundas beigās.",
    ],
      desc: 'Pirms un pēc pirmā divdabja teiciena <i>pētot un apspriežot laboratorijas darba pētijumus ar klasesbiedriem</i> vajag komatus. Komatu vajag arī pirms otrā divdabja teiciena <i>nožēlojot to mācību stundas beigās</i>.',
      autors: ' '
  },
    {
    numb: 2,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Tā iedams, viņš pa cepurītes saplaisājušo nagu ar pirkstgaliem bungoja kādu maršu, kam vajadzēja izpaust viņa lielos nodomus un vēl lielāku apņēmību.",
    options: [
      "Tā iedams viņš pa cepurītes saplaisājušo nagu, ar pirkstgaliem bungoja kādu maršu, kam vajadzēja izpaust viņa lielos nodomus un vēl lielāku apņēmību.",
      "Tā iedams, viņš pa cepurītes saplaisājušo nagu ar pirkstgaliem bungoja kādu maršu kam vajadzēja izpaust viņa lielos nodomus, un vēl lielāku apņēmību.",
      "Tā iedams, viņš pa cepurītes saplaisājušo nagu ar pirkstgaliem bungoja kādu maršu, kam vajadzēja izpaust viņa lielos nodomus un vēl lielāku apņēmību.",
      "Tā iedams, viņš pa cepurītes saplaisājušo nagu ar pirkstgaliem bungoja kādu maršu, kam vajadzēja izpaust viņa lielos nodomus, un vēl lielāku apņēmību."
    ],
    desc: 'Pēc <i>tā iedams</i> nepieciešams komats, jo beidzas divdabja teiciens un sākas virsteikums. Saiklis <i>kam</i> iesāk palīgteikumu. Tā kā saiklis <i>un</i> saista vienlīdzīgus teikuma locekļus <i>nodomus</i> un <i>apņēmību</i>, pirms <i>un</i> nevajag komatu.',
      autors: 'Eriks Ādamsons “Sava ceļa gājējs” 15. lpp.'
  },
  {
    numb: 3,
    question: "Kurā teikumā komati ir salikti pareizi?",
    answer: "Viņš paskatījās, aci piemiegdams, slimā ķēniņā, nogūlās uz ķepiņām un sāka stāstīt, kā viņam bijušas dzirnavas, kā melnais runcis tās atņēmis, kā meitas aizraidījušas viņu un kā puikas mocījuši.",
    options: [
      "Viņš paskatījās aci piemiegdams, slimā ķēniņā, nogūlās uz ķepiņām un sāka stāstīt, kā viņam bijušas dzirnavas kā melnais runcis tās atņēmis, kā meitas aizraidījušas viņu un kā puikas mocījuši.",
      "Viņš paskatījās, aci piemiegdams, slimā ķēniņā, nogūlās uz ķepiņām un sāka stāstīt, kā viņam bijušas dzirnavas, kā melnais runcis tās atņēmis, kā meitas aizraidījušas viņu un kā puikas mocījuši.",
      "Viņš paskatījās, aci piemiegdams, slimā ķēniņā, nogūlās uz ķepiņām un sāka stāstīt, kā viņam bijušas dzirnavas, kā melnais runcis tās atņēmis, kā meitas aizraidījušas viņu un, kā puikas mocījuši.",
      "Viņš paskatījās, aci piemiegdams, slimā ķēniņā, nogūlās uz ķepiņām un sāka stāstīt kā viņam bijušas dzirnavas kā melnais runcis tās atņēmis kā meitas aizraidījušas viņu un kā puikas mocījuši."
    ],
    desc: 'Pirms un pēc divdabja teiciena <i>aci piemiegdams</i> jābūt komatiem. Komats pirms pirms <i>nogūlās</i> atdala vienlīdzīgus teikuma locekļus <i>paskatījās</i> un <i>nogūlās</i>. Saikļi <i>kā</i> šajā teikumā iesāk vienlīdzīgus palīgteikumus, tāpēc pirms katra jāliek komats, izņemot pēdējo, jo pēdējos divus palīgteikumus saista saiklis <i>un</i>.',
    autors: 'Kārlis Skalbe “Ziemas pasakas” 5.lpp.'
  }
];