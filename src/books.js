const category = [
  'Action and Adventure',
  'Classics',
  'Comic Book or Graphic Novel',
  'Detective and Mystery',
  'Fantasy',
  'Historical Fiction',
  'Horror',
  'Literary Fiction',
  'Art & Photograph',
]

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const getRandomElement = (elements) => {
  return elements[generateRandomNumber(0, elements.length - 1)]
}

export default [
  {
    ISBN: 1,
    category: getRandomElement(category),
    pages: 30,
    name: 'Vrienden voor het leven',
    author: 'Maeve Binchy',
    summary:
      'Vrienden voor het leven is het verhaal van drie vriendinnen die op weg naar volwassenheid verwikkeld raken in een zonderlinge driehoeksverhouding. Benny en Eve, boezemvriendinnen uit het Ierse dorpje Knockglen, gaan in Dublin studeren en sluiten daar al snel vriendschap met de aantrekkelijke en ambitieuze Nan. Het opwindende studentenleven brengt hun echter niet alleen geluk maar ook verdriet. Met haar grote vermogen om menselijke gevoelens herkenbaar neer te zetten weet Maeve Binchy geluk en verdriet, warmte en humor samen te brengen in deze meeslepende roman. Vrienden voor het leven verscheen voor het eerst in 1991 en is het favoriete boek van vele Maeve Binchy-fans. Het boek is inmiddels toe aan de zeventiende druk. In 1995 werd het zeer succesvol verfilmd onder de titel Circle of Friends met Minnie Driver en Chris O’Donnell in de hoofdrollen.',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/5/3/6/6/1001004011806635.jpg',
    price: 60,
  },
  {
    ISBN: 2,
    category: getRandomElement(category),
    pages: 70,
    name: 'Deception point',
    author: 'Dan Brown',
    summary:
      'When a new NASA satellite detects evidence of an astonishingly rare object buried deep in the Arctic ice, the floundering space agency proclaims a much-needed victory.. a victory that has profound implications for U.S. space policy and the impending presidential election. With the Oval Office in the balance, the President dispatches White House Intelligence analyst Rachel Sexton to the Arctic to verify the authenticity of the find. Accompanied by a team of experts, including the charismatic academic Michael Tolland, Rachel uncovers the unthinkable - evidence of scientific trickery - a bold deception that threatens to plunge the world into controversy..',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg',
    price: 70,
  },
  {
    ISBN: 3,
    category: getRandomElement(category),
    pages: generateRandomNumber(30, 100),
    name: 'Deception point',
    author: 'Dan Brown',
    summary:
      'When a new NASA satellite detects evidence of an astonishingly rare object buried deep in the Arctic ice, the floundering space agency proclaims a much-needed victory.. a victory that has profound implications for U.S. space policy and the impending presidential election. With the Oval Office in the balance, the President dispatches White House Intelligence analyst Rachel Sexton to the Arctic to verify the authenticity of the find. Accompanied by a team of experts, including the charismatic academic Michael Tolland, Rachel uncovers the unthinkable - evidence of scientific trickery - a bold deception that threatens to plunge the world into controversy..',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg',
    price: 80,
  },
  {
    ISBN: 4,
    category: getRandomElement(category),
    pages: 80,
    name: 'Magic staff',
    author: 'Terry Brooks',
    summary:
      'Vijf eeuwen geleden werd de wereld door een noodlottige demonenoorlog in de as gelegd. De overlevenden hebben een toevluchtsoord gevonden in een door magie beschermde vallei, maar nu staat een genadeloos leger op het punt de vallei binnen te vallen. De enige hoop op redding voor de overlevenden was Sider Ament, maar hij leeft niet meer. Sider was de drager van de enig overgebleven zwarte staf, een machtige talisman die eeuwenlang door de Ridders van het Woord is doorgegeven en die van cruciaal belang is bij het in evenwicht houden van de magie op de wereld. Om de wereld van de ondergang te redden, moet de magie van de staf behouden blijven. Panterra Qu, een jonge Spoorzoeker aan wie de staf na Siders dood wordt doorgegeven, heeft grote moeite om de macht ervan naar zijn hand te zetten. Alles moet op alles worden gezet, want eenieder zal een hoge tol betalen als de oorlog tussen het Woord en de Leegte naar de duisternis dreigt af te glijden. ',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/2/2/5/2/9200000002212522.jpg',
    price: 30,
  },
  {
    ISBN: 5,
    category: getRandomElement(category),
    pages: 40,
    name: 'Bloodfire Quest',
    author: 'Terry Brooks',
    summary:
      'The adventure that started in Wards of Faerie takes a thrilling new turn, in the second novel of New York Times bestselling author Terry Brooks’s brand-new trilogy—The Dark Legacy of Shannara! The quest for the long-lost Elfstones has drawn the leader of the Druid order and her followers into the hellish dimension known as the Forbidding, where the most dangerous creatures banished from the Four Lands are imprisoned. Now the hunt for the powerful talismans that can save their world has become a series of great challenges: a desperate search for kidnapped comrades, a relentless battle against unspeakable predators, and a grim race to escape the Forbidding alive. But though freedom is closer than they know, it may come at a terrifying price. Back in the village of Arborlon, the mystical, sentient tree that maintains the barrier between the Four Lands and the Forbidding is dying. And with each passing day, as the breach between the two worlds grows larger, the threat of the evil eager to spill forth and wreak havoc grows more dire. The only hope lies with a young Druid, faced with a staggering choice: cling to the life she cherishes or combat an army of darkness by making the ultimate sacrifice.',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/7/0/0/7/9200000009027007.jpg',
    price: 40,
  },
  {
    ISBN: 6,
    category: getRandomElement(category),
    pages: 30,
    name: 'A Week in Winter',
    author: 'Maeve Binchy',
    summary:
      "Stoneybridge is full of holiday-makers in summer, its beaches are full of buckets and spades and sandcastles; but in winter it's cold and wild. Few choose to walk along the fine sands, the big round pebbles and the exposed rocky promontories that make up the wind-swept Atlantic coastline. Those who do can't help but see Stone House, the big house on the cliff; once falling into disrepair it is now a beautiful hotel specialising in winter holidays. Its big, warm kitchen, its open log-fires and its elegant bedrooms provide a welcome few can resist, whatever their reasons for coming. Henry and Nicola are burdened with a terrible secret, while cheerful nurse Winnie finds herself on the holiday from hell. John has arrived on an impulse after he missed a flight at Shannon; eccentric Freda claims to be a psychic - and a part-time hairdresser. Then there's Nora, a silent watchful older woman who seems ready to disapprove at any moment.. A Week in Winter is full of Maeve's trademark warmth, humour and characters you want to spend time with.",
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/6/2/8/0/9200000008070826.jpg',
    price: 50,
  },
  {
    ISBN: 7,
    category: getRandomElement(category),
    pages: 90,
    name: 'Blue Curacao',
    author: 'Linda van Rijn',
    summary:
      'Als haar kersverse echtgenoot tijdens de huwelijksreis spoorloos verdwijnt, staat Hannah voor een raadsel. Hoe goed kent ze eigenlijk de mensen die ze altijd... De romantische huwelijksreis van Hannah en Koen naar Curaçao wordt ruw verstoord als Koen tijdens het snorkelen spoorloos verdwijnt. Hannah wordt gek van angst. De plaatselijke politie loopt niet zo hard als Hannah zou willen en ten einde raad gaat ze zelf op onderzoek uit. Die zoektocht brengt onaangename waarheden aan het licht. Als Hannah zelfs voor haar eigen leven moet vrezen, wordt ze geconfronteerd met de vraag of ze Koen wel zo goed kent als ze denkt.',
    image:
      'http://s.s-bol.com/imgbase0/imagebase/large/FC/0/9/4/2/9200000010732490.jpg',
    price: 50,
  },
]
