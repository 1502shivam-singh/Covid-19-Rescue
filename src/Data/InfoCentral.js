const centralData = [
  {
    title: "Covid-19 - Delhi",
    link: "https://coviddelhi.com/",
    img: "/assets/images/hospital.png",
    tags: ["delhi", "ncr", "delhincr", "delhi-ncr"]
  },
  {
    title: "Covid-19 help - Lucknow",
    link: "https://covidhelplucknow.wordpress.com/",
    img: "/assets/images/hospital.png",
    tags: ["lucknow", "uttar pradesh", "uttar-pradesh", "uttarpradesh"]
  },
  {
    title: "Covid-19 help - Nagpur",
    link: "http://covidhelpnagpur.in/",
    img: "/assets/images/hospital.png",
    tags: ["nagpur", "maharashtra"]
  },
  {
    title: "Ahmedabad Covid-19 info",
    link: "https://covidamd.com/",
    img: "/assets/images/hospital.png",
    tags: ["ahmedabad", "ahmeda", "gujarat", "guj"]
  },
  {
    title: "Covid-19 Resources - Agra",
    link: "https://docs.google.com/spreadsheets/d/1i96xLEbkH72Z3HobmMOdNiSYBIHYBgZlPcBs0xEaOSo/edit#gid=0",
    img: "/assets/images/hospital.png",
    tags: ["agra", "uttar pradesh", "uttarpradesh", "uttar-pradesh"]
  },
  {
    title: "Corona safe",
    link: "https://bit.ly/3v80QOe",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid-19 Resources - Sprinklr",
    link: "https://bit.ly/3vfYI6Z",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid-19 - Pune",
    link: "https://covidpune.com/",
    img: "/assets/images/hospital.png",
    tags: ["pune", "maharashtra"]
  },
  {
    title: "Covid-19 Resources (region-based)",
    link: "https://bit.ly/3dK9DjA",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid-19 India collated verified data",
    link: "https://bit.ly/3sO2kvB",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid-19 - Beed",
    link: "https://covidbeed.com/",
    img: "/assets/images/hospital.png",
    tags: ["beed", "maharashtra"]
  },
  {
    title: "Covid-19 Resources - Hyderabad",
    link: "https://hydcovidresources.com/",
    img: "/assets/images/hospital.png",
    tags: ["hyd","hyderabad", "telangana"]
  },
  {
    title: "Verified resources database - Covid fighters",
    link: "https://bit.ly/3gC9T5N",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid-19 Help Database",
    link: "https://drive.google.com/drive/folders/1y8fjrbdGEGmcStkNE_Jf5sNRaDCY4zRA",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid-19 Help - Glideapp",
    link: "https://covidhelp.glideapp.io/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Ummed.live",
    link: "http://www.umeed.live/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid win",
    link: "https://covidwin.in/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid19-twitter-search",
    link: "https://covid19-twitter.in/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid19 help (Twitter search + reddit threads)",
    link: "https://help-covid19.netlify.app/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Corona volunteers",
    link: "https://corona-volunteers.org/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid-19 resources",
    link: "https://covidresources.in/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covinex - Testing requirements and tracking system",
    link: "https://covinex.netlify.app/home",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Instagram guide & covid resources (Uncut team)",
    link: "https://www.instagram.com/theuncutteam/guide/covid-19-resources-guide/18156211624182096/?igshid=5q7cik10mdsy",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid aid resources - Instagram page",
    link: "https://www.instagram.com/covidaidresources/?igshid=1mehlndvdjby0",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid-19 - Gandhinagar",
    link: "https://covidgandhinagar.com/",
    img: "/assets/images/hospital.png",
    tags: ["gandhinagar", "gandhi nagar", "gandhi-nagar", "gujarat", "guj"]
  },
  {
    title: "Covid-19 - Jamshedpur",
    link: "https://jamshedpurguru.in/coveasy/",
    img: "/assets/images/hospital.png",
    tags: ["jamshedpur", "jamshed pur", "jamshed-pur", "jamshed", "jharkhand"]
  },
  {
    title: "Covid-19 - Nashik",
    link: "https://covidnashik.com/",
    img: "/assets/images/hospital.png",
    tags: ["nashik", "nasik", "maharashtra"]
  },
  {
    title: "Covid-19 - TamilNadu",
    link: "https://covidtnadu.com/",
    img: "/assets/images/hospital.png",
    tags: ["tamilnadu", "tamil nadu", "tamil-nadu", "tamil", "tn"]
  },
  {
    title: "Covid tools",
    link: "https://covidtools.in/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid fight club",
    link: "https://www.covidfightclub.org/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "All india Covid-19 helpline",
    link: "https://docs.google.com/document/u/1/d/16WeMKah7RXoB1gnqa9YXVTuWM4TR6hY9Qys48Pf8mCc/mobilebasic",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Stop corona - TamilNadu",
    link: "https://stopcorona.tn.gov.in/",
    img: "/assets/images/hospital.png",
    tags: ["tamilnadu", "tamil nadu", "tamil-nadu", "tn", "tamil"]
  },
  {
    title: "Covidbangalore.support (Instagram)",
    link: "https://www.instagram.com/covidbangalore.support/",
    img: "/assets/images/hospital.png",
    tags: ["karnataka", "karnatak", "bangalore", "bengaluru"]
  },
  {
    title: "Covid-19 resources - Bangalore",
    link: "https://oxygenblr.in/",
    img: "/assets/images/hospital.png",
    tags: ["karnataka", "karnatak", "bangalore", "bengaluru"]
  },
  {
    title: "Covid-19 resources - Kolkata",
    link: "https://docs.google.com/spreadsheets/u/0/d/1dy1DYjGb15bijab4vVAUyrdtw14va32NgWJqlo_2rcU/htmlview",
    img: "/assets/images/hospital.png",
    tags: ["west bengal", "west-bengal", "westbengal", "bengal", "kolkata", "calcutta"]
  },
  {
    title: "Covid-19 - RTBot",
    link: "https://twitter.com/covidrtbot",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Covid India Twitter Resources",
    link: "https://covidresources.vercel.app/",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  },
  {
    title: "Pune Covid - links",
    link: "https://linktr.ee/punecovid",
    img: "/assets/images/hospital.png",
    tags: ["pune", "maharashtra"]
  },
  {
    title: "ICLU - India compiled list",
    link: "https://linktr.ee/shivansh2611",
    img: "/assets/images/hospital.png",
    tags: ["panindia", "pan india", "pan-india", "india", ""]
  }
];
  
  export default centralData