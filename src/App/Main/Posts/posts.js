const posts = [
    {
        id:1,
        categoryId:1,
        urlLink:"BlogFootballEPL",
        name:"No Salah, Firmino or Mane in Liverpool and Manchester City combined XI",
        description:"Here we run through the best rated combined XI between Liverpool and Manchester City ahead of their highly anticipated match at Anfield on Sunday. Using Premier League ratings this season, only players with at least five appearances are considered, while injured and suspended players are ineligble.",
        category:"English Premier League",
        author:"by Gzhegozh",
        initRating:1,
        date:"08 November, 2019",
        image:"/images/EPL/LFC_MC_hm.png"
    },
    {
        id:2,
        categoryId:2,
        urlLink:"BlogFootballMSL",
        name:"Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto",
        description:"It all comes down to this. The 2019 MLS season comes to a head on Sunday night in a repeat of the 2016 MLS Cup final. Three years ago, Seattle Sounders emerged victorious on penalities after the pair had played out a 0-0 draw at BMO Field, with Toronto FC came away from the clash empty handed.",
        category:"Major Soccer League",
        author:"by Gzhegozh",
        initRating:1,
        date:"09 November, 2019",
        image:"/images/MSL/lodeiro_hm.png"
    },
    {
        id:3,
        categoryId:3,
        urlLink:"BlogFootballMSL",
        name:"What next for Bayern following Kovac sacking?",
        description:"Niko Kovac could have been sacked 12 months ago. In that sense, then, he has endured a year-long stay of execution. On Sunday evening, the former Croatia international was relieved of his duties at the Allianz Arena after Bayern fell to a 5-1 hammering at the hands of Kovac's former employers Eintracht Frankfurt.",
        category:"German Bundes Liga",
        author:"by Gzhegozh",
        initRating:1,
        date:"05 November, 2019",
        image:"/images/BL/Kovach_hm.png"
    },
    {
        id:4,
        categoryId:1,
        urlLink:"BlogFootballEPLKlopp",
        name:"Liverpool vs Manchester: The ultimate 50/1 'Request A Bet'",
        description:"In what is undeniably the biggest game of the 2019/20 Premier League campaign so far Liverpool are aiming to protect their unbeaten record this season against reigning champions Manchester City.",
        category:"English Premier League",
        author:"by Gzhegozh",
        initRating:1,
        date:"09 November, 2019",
        image:"/images/EPL/Salah_hm.png"
    },
]

export const getPostsMap = (array) => {
    return array.reduce((map,post)=>({
        ...map,
        [post.id]:post,
    }),{})
    
}

export default posts