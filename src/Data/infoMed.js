const medsData = [
    {
      title: "Covid-19 resources - Bangalore",
      link: "https://oxygenblr.in/",
      img: "/assets/images/oxygen.png",
      tags: ["karnataka", "karnatak", "bangalore", "bengaluru"]
    },
    {
      title: "Hemkunt foundation - Oxygen cylinders",
      link: "https://hemkuntfoundation.com/oxygen-cylinder/",
      img: "/assets/images/oxygen.png",
      tags: ["mumbai", "maharashtra", "gurgaon", "delhi", "delhincr"]
    },
    {
      title: "Oxygen cylinders - Lucknow",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/25?id=DASHBOARD_601b9e214c7a6b689d76f493&widgetId=608520f9039ec95a0fda7f08",
      img: "/assets/images/oxygen.png",
      tags: ["lucknow", "uttar pradesh", "uttarpradesh", "up", "uttar-pradesh"]
    },
    {
      title: "Remdesivir & Tocilizumab - Lucknow",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/12?id=DASHBOARD_601b9e214c7a6b689d76f493&widgetId=6085200c039ec95a0fda5477",
      img: "/assets/images/meds.png",
    tags: ["lucknow", "uttarpradesh", "uttar-pradesh", "uttar pradesh", "up"]
    },
    {
      title: "Remdesivir & Tocilizumab - Mumbai",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/3?id=DASHBOARD_601b9e214c7a6b689d76f493&widgetId=60851aa4147ccb4db695e1b3",
      img: "/assets/images/meds.png",
    tags: ["mumbai", "maharashtra"]
    },
    {
      title: "Fabiflu & Favipiravir - Mumbai",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/3?id=DASHBOARD_601b9e214c7a6b689d76f493&widgetId=60851aa4147ccb4db695e1b9",
      img: "/assets/images/meds.png",
    tags: ["mumbai", "maharashtra"]
    },
    {
      title: "Remdesivir & Tocilizumab - Gurgaon",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/5?id=DASHBOARD_601b9e214c7a6b689d76f493&widgetId=60851f2f039ec95a0fda314c",
      img: "/assets/images/meds.png",
    tags: ["gurgaon", "delhi"]
    },
    {
      title: "Dedicated Covid-19 hospitals - Maharashtra",
      link: "https://echs.gov.in/img/COVID-19/HOSPITAL%20LABS/HOS%20PUNE.pdf",
      img: "/assets/images/meds.png",
    tags: ["maharashtra", "pune", "beed", "ahmednagar", "aurangabad", "solapur", "satara", "nanded", "nashik", "nasik"]
    },
    {
      title: "Covid Pune - Remdesivir ",
      link: "https://covidpune.com/remdesivir",
      img: "/assets/images/meds.png",
    tags: ["pune", "maharashtra"]
    },
    {
      title: "Fabiflu - Patna",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/48?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=48%2448_Medicines&widgetId=608c49c7011fb174c4e8cca9",
      img: "/assets/images/meds.png",
      tags: ["patna", "bihar"]
    },
    {
      title: "Fabiflu - Delhi",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/1?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=1%241_Medicines&widgetId=608c0ed0b7cd1c7c449c90dd",
      img: "/assets/images/meds.png",
      tags: ["delhi", "ncr", "delhincr", "delhi-ncr"]
    },
    {
      title: "Favipiravir - Delhi",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/1?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=1%241_Medicines&widgetId=608c0effb7cd1c7c449ca2d5",
      img: "/assets/images/meds.png",
      tags: ["delhi", "ncr", "delhincr", "delhi-ncr"]
    },
    {
      title: "Fabiflu - Lucknow",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/12?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=12%2412_Medicines&widgetId=608c46dd011fb174c4e7e2d2",
      img: "/assets/images/meds.png",
      tags: ["delhi", "ncr", "delhincr", "delhi-ncr"]
    },
    {
      title: "Oxygen cylinders - Punjab",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/39?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=39%2439_Oxygen%20Supplies&widgetId=608c48fa011fb174c4e89397",
      img: "/assets/images/oxygen.png",
      tags: ["punjab"]
    },
    {
      title: "Oxygen cylinders - Bihar",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/19?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=19%2419_Oxygen%20Supplies&widgetId=608c475f011fb174c4e80954",
      img: "/assets/images/oxygen.png",
      tags: ["bihar"]
    },
    {
      title: "Fabiflu - Indore",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/14?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=14%2414_Medicines&widgetId=608c470c011fb174c4e7f1ed",
      img: "/assets/images/meds.png",
      tags: ["indore", "madhya pradesh", "madhyapradesh", "madhya-pradesh", "mp"]
    },
    {
      title: "Oxygen cylinders - Indore",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/14?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=14%2414_Oxygen%20Supplies&widgetId=608c470c011fb174c4e7f1f1",
      img: "/assets/images/oxygen.png",
      tags: ["indore", "madhya pradesh", "madhyapradesh", "madhya-pradesh", "mp"]
    },
    {
      title: "Oxygen cylinders - Madhya Pradesh",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/23?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=23%2423_Oxygen%20Supplies&widgetId=608c47b2011fb174c4e82564",
      img: "/assets/images/oxygen.png",
      tags: ["madhya pradesh", "madhyapradesh", "madhya-pradesh", "mp"]
    },
    {
      title: "Oxygen cylinders - Faridabad",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/46?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=46%2446_Oxygen%20Supplies&widgetId=608c4991011fb174c4e8c049",
      img: "/assets/images/oxygen.png",
      tags: ["faridabad", "up", "uttar pradesh", "uttarpradesh", "up", "uttar-pradesh"]
    },
    {
      title: "Fabiflu - Faridabad",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/46?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=46%2446_Medicines&widgetId=608c4991011fb174c4e8c045",
      img: "/assets/images/meds.png",
      tags: ["faridabad", "up", "uttar pradesh", "uttarpradesh", "up", "uttar-pradesh"]
    },
    {
      title: "Fabiflu - Rajasthan",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/36?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=36%2436_Medicines&widgetId=608c48c4011fb174c4e88300",
      img: "/assets/images/meds.png",
      tags: ["rajasthan"]
    },
    {
      title: "Oxygen cylinders - Rajasthan",
      link: "https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/36?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=36%2436_Oxygen%20Supplies&widgetId=608c48c4011fb174c4e88304",
      img: "/assets/images/oxygen.png",
      tags: ["rajasthan"]
    },
    {
      title: "Remdesivir Distributors (pdf) - major states",
      link: "https://drive.google.com/file/d/1GG4GLuXzz_H9Q-gnEPkGEPeWQDdvrEDY/view",
      img: "/assets/images/meds.png",
    tags: []
    },
    {
      title: "Ready to fight - Covid",
      link: "https://readytofightcovid.in/",
      img: "/assets/images/meds.png",
    tags: []
    },
    {
      title: "Remdesivir distributors - cipla",
      link: "https://www.cipla.com/sites/default/files/Remdesivir-Distributor-List.pdf",
      img: "/assets/images/meds.png",
    tags: []
    },
    {
      title: "Tocilizumab distributors - cipla",
      link: "https://www.cipla.com/sites/default/files/Tocilizumab-Distributor-List.pdf",
      img: "/assets/images/meds.png",
    tags: []
    },
    {
      title: "Ambulance service - Get help now",
      link: "https://www.gethelpnow.in/#/",
      img: "/assets/images/ambulance.png",
    tags: ["mumbai", "bomabay", "delhi", "maharashtra", "bangalore", "bengaluru", "karnataka", "karnatak", "pune"]
    },
    {
      title: "Oxygen - Chandigarh LinkedIn post",
      link: "https://www.linkedin.com/posts/simarpreethsingh_oxygen-community-peoplefirst-activity-6792322902432731136-aAkY",
      img: "/assets/images/oxygen.png",
    tags: ["chandigarh", "punjab", "haryana"]
    },
  ];
    
    export default medsData
