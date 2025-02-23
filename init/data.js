const sampledata = [
  {
    title: "Hanumant Dham",
    about: "It is a temple of Hanuman.",
    description:
      "Hanumant Dham is a revered Hindu temple dedicated to Lord Hanuman, located near KD Singh Stadium, Lucknow, Uttar Pradesh, India. The temple is known for its magnificent architecture and spiritual significance. Devotees visit the temple to seek blessings from Lord Hanuman, who is worshipped as a symbol of strength, devotion, and protection The temple premises offer a serene and peaceful environment for meditation and prayer. On Tuesdays and Saturdays, the temple witnesses a large gathering of devotees, as these days are considered especially auspicious for Hanuman worship. Religious festivals like Hanuman Jayanti are celebrated here with grandeur, attracting pilgrims from across the region.Apart from its religious importance, Hanumant Dham is also a place of historical and cultural significance, making it a must-visit destination for devotees and tourists alike",
    image: {
      filename: "Hanumant Dham",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39qATgf4FPB_a15kBy8VROMPS0TEFi3Eyqg&s",
    },
    price: 0,
    location: "KD Singh Stadium, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Bara Imambara",
    about: "A historical Imambara in Lucknow.",
    description:
      "Bara Imambara, built by Nawab Asaf-ud-Daula in 1784, is a grand historical monument known for its unique labyrinth called Bhool Bhulaiya. It is one of Lucknow’s most famous attractions and a masterpiece of Mughal architecture. The central hall is one of the largest arched constructions in the world without support beams. Devotees and tourists visit to explore its historical and architectural beauty.",
    image: {
      filename: "Bara Imambara",

      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0As1Gs7FW0f7GJfVyKCicCdMhDf5slq2SKQ&s",
    },
    price: 50,
    location: "Bara Imambara, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Rumi Darwaza",
    about: "A grand gateway in Lucknow.",
    description:
      "The Rumi Darwaza, also known as the Turkish Gate, is an iconic architectural marvel of Lucknow. Built in 1784 by Nawab Asaf-ud-Daula, it stands as a symbol of Lucknow's rich heritage. The structure is 60 feet tall and exhibits intricate Awadhi architecture. It is one of the most photographed landmarks in Lucknow.",
    image: {
      filename: "Rumi Darwaza",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsTObjGKDU2WsvIhGMhrQS0Z-hA2xsLrw2Q&s",
    },
    price: 0,
    location: "Rumi Darwaza, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Chota Imambara",
    about: "A historic religious monument.",
    description:
      "Chota Imambara, also known as Hussainabad Imambara, was built in 1838 by Nawab Muhammad Ali Shah. It serves as a mausoleum for the Nawab and his mother. The structure is adorned with chandeliers, calligraphy, and intricate decorations, making it one of the most beautiful monuments in Lucknow.",
    image: {
      filename: "Chota Imambara",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZldOTmfnGCgTgmlt_8lcbTMWL4zDx70q-A&s",
    },
    price: 25,
    location: "Chota Imambara, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Ambedkar Memorial Park",
    about: "A grand park dedicated to Dr. B.R. Ambedkar.",
    description:
      "Ambedkar Memorial Park is a sprawling monument and park built in honor of Dr. B.R. Ambedkar and other social reformers. Located in Gomti Nagar, Lucknow, it features grand sandstone structures, statues, and a museum. The park is a major attraction for visitors and historians.",
    image: {
      filename: "Ambedkar Memorial Park",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tb4nWNf2WBD2RpW9atL6mz6MhxXEnuGj2g&s",
    },
    price: 20,
    location: "Gomti Nagar, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Dilkusha Kothi",
    about: "A historical palace in Lucknow.",
    description:
      "Dilkusha Kothi is a historic palace built in the 18th century by the British resident Major Gore Ouseley. The structure, influenced by English baroque architecture, played a role in the 1857 revolt. Today, the ruins of Dilkusha Kothi stand as a symbol of Lucknow’s colonial past.",
    image: {
      filename: "Dilkusha Kothi",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqucvBx_efaLhOhhUeJLPktf8ndBWjFcUeqA&s",
    },
    price: 10,
    location: "Dilkusha, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Janeshwar Mishra Park",
    about: "A large eco-friendly park in Lucknow.",
    description:
      "Janeshwar Mishra Park is one of Asia’s largest eco-friendly parks, built in honor of the politician Janeshwar Mishra. Spread over 376 acres, the park has jogging tracks, cycling paths, and artificial lakes, making it a perfect spot for relaxation and recreation.",
    image: {
      filename: "Janeshwar Mishra Park",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEar9SL3qXtKX_U3djr585aWED0KU22hoTRg&s",
    },
    price: 10,
    location: "Gomti Nagar, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Kukrail Forest Reserve",
    about: "A wildlife sanctuary in Lucknow.",
    description:
      "Kukrail Forest Reserve is a lush green area in Lucknow, famous for its crocodile breeding center. It serves as a recreational space for nature lovers, with walking trails, picnic spots, and a mini-zoo. The sanctuary is a great place for wildlife enthusiasts and families.",
    image: {
      filename: "Kukrail Forest Reserve",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzruoYjJ61HDH_Z6oHExSx-Tplj-fFR4tgRQ&s",
    },
    price: 10,
    location: "Kukrail, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Lucknow Zoo",
    about: "A famous zoological park in Lucknow.",
    description:
      "Lucknow Zoo, officially known as Nawab Wajid Ali Shah Prani Udyan, is home to a variety of animals, including tigers, lions, elephants, and rare species of birds. It also has a toy train and a museum displaying artifacts from the 1857 revolt.",
    image: {
      filename: "Lucknow Zoo",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFWAbVJL4aOAj_XcpDRZ0NiN6m8DYl68dtg&s",
    },
    price: 60,
    location: "Hazratganj, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Chandrika Devi Temple",
    about: "A revered temple dedicated to Goddess Chandrika Devi.",
    description:
      "Chandrika Devi Temple is an ancient Hindu temple dedicated to Goddess Chandrika Devi, located on the outskirts of Lucknow. It is a popular pilgrimage site, especially during Navratri. The temple is believed to be over 300 years old and is known for its spiritual ambiance.",
    image: {
      filename: "Chandrika Devi Temple",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYznl9AeU0cXFzO7heKFXqL6OnyTglrajBg&s",
    },
    price: 0,
    location: "Sitapur Road, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Dewa Sharif",
    about: "A famous Sufi shrine near Lucknow.",
    description:
      "Dewa Sharif is a revered Sufi shrine dedicated to Haji Waris Ali Shah, located in the town of Dewa, near Lucknow. It is a center of spirituality and attracts devotees from all religions. The annual Urs festival is celebrated with great enthusiasm, featuring qawwali performances and fairs.",
    image: {
      filename: "Dewa Sharif",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RjYoTvYRuJ3g0776q54b9eTK5msdLozVIw&s",
    },
    price: 0,
    location: "Dewa, Barabanki",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Kashi Vishwanath Temple",
    about: "One of the most sacred temples in Varanasi.",
    description:
      "Kashi Vishwanath Temple, dedicated to Lord Shiva, is one of the twelve Jyotirlingas and holds immense spiritual significance. Located in Varanasi, it attracts millions of devotees seeking blessings.",
    image: {
      filename: "Kashi Vishwanath Temple",
      url: "https://www.fabhotels.com/blog/wp-content/uploads/2024/01/2c92b8ce-kashi-min.jpg",
    },
    price: 0,
    location: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Sarnath",
    about: "A major Buddhist pilgrimage site.",
    description:
      "Sarnath, near Varanasi, is where Lord Buddha gave his first sermon. The site features Dhamek Stupa, Ashoka Pillar, and various monasteries, making it a significant religious and historical destination.",
    image: {
      filename: "Sarnath",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74MXd1gkC33m8nanfrzwXv1LtVkkatak2XA&s",
    },
    price: 10,
    location: "Sarnath, Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Taj Mahal",
    about: "One of the Seven Wonders of the World.",
    description:
      "The Taj Mahal in Agra, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, is a UNESCO World Heritage Site and an architectural marvel of white marble.",
    image: {
      filename: "Taj Mahal",

      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/640px-Taj_Mahal_%28Edited%29.jpeg",
    },
    price: 50,
    location: "Agra",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Fatehpur Sikri",
    about: "A historical city built by Akbar.",
    description:
      "Fatehpur Sikri, the former capital of the Mughal Empire, is known for its stunning red sandstone architecture. Major attractions include Buland Darwaza, Jama Masjid, and Panch Mahal.",
    image: {
      filename: "Fatehpur Sikri",

      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS4mmLW9RjnyRn0lAeK31X5OT6xYxpYtIKQ&s",
    },
    price: 40,
    location: "Fatehpur Sikri, Agra",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Allahabad Sangam",
    about: "A sacred confluence of three rivers.",
    description:
      "Triveni Sangam in Prayagraj is the holy confluence of the Ganga, Yamuna, and the mythical Saraswati rivers. It is the site of the Kumbh Mela, one of the largest religious gatherings in the world.",
    image: {
      filename: "Allahabad Sangam",

      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaDgf620KmC3FCEkGDkrdnf0Gx6SJ9u457A&s",
    },
    price: 0,
    location: "Prayagraj",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Ayodhya Ram Janmabhoomi",
    about: "The birthplace of Lord Rama.",
    description:
      "Ayodhya is an important pilgrimage site for Hindus as the birthplace of Lord Rama. The city is home to Ram Janmabhoomi, Hanuman Garhi, and several other historic temples.",
    image: {
      filename: "Ayodhya Ram Janmabhoomi",
      url: "https://shrirammandirayodhya.com/wp-content/uploads/2021/11/rammandir_0.jpg",
    },
    price: 0,
    location: "Ayodhya",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Jhansi Fort",
    about: "A historic fort known for Rani Lakshmibai.",
    description:
      "Jhansi Fort is a historic site associated with Rani Lakshmibai, a hero of the Indian Rebellion of 1857. The fort offers panoramic views and insights into India's colonial resistance.",
    image: {
      filename: "Jhansi Fort",

      url: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1702046081_jhansi_jahangir_mahal_jpg.jpg.webp",
    },
    price: 25,
    location: "Jhansi",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Banke Bihari Temple",
    about: "A famous temple dedicated to Lord Krishna.",
    description:
      "Banke Bihari Temple in Vrindavan is one of the most revered Krishna temples in India. The temple is famous for its lively atmosphere and devotional singing.",
    image: {
      filename: "Banke Bihari Temple",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ApXE2LqeQdEjkEWT_hKa1IzPgWZYpmO8UQ&s",
    },
    price: 0,
    location: "Vrindavan",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "ISKCON Temple",
    about: "A spiritual center for Krishna devotees.",
    description:
      "The ISKCON Temple in Vrindavan is a beautiful temple dedicated to Lord Krishna. It is a hub for devotional activities, including kirtans, prayers, and festivals.",
    image: {
      filename: "ISKCON Temple",

      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKsKhFVyAkQ1K3_p6zg4GNkembnnv-noSOQ&s",
    },
    price: 0,
    location: "Vrindavan",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Agra Fort",
    about: "A UNESCO World Heritage Site.",
    description:
      "Agra Fort is a massive Mughal fortress built by Emperor Akbar. The fort's architecture is a blend of Islamic and Hindu styles, and it offers stunning views of the Taj Mahal.",
    image: {
      filename: "Agra Fort",

      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiXS1-5k60WSDpn94FgaaODZ0T3j8aK7pEg&s",
    },
    price: 40,
    location: "Agra",
    state: "Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
];

module.exports = { data: sampledata };
