const express = require("express");
const application = express();
application.get("/", (req, res) => {
  res.send("Welcome to our Home page");
});
application.get("/users", (req, res) => {
  res.json([
    {
      first_name: "Lacy",
      last_name: "Haggleton",
      email: "lhaggleton0@wisc.edu",
    },
    {
      first_name: "Shurwood",
      last_name: "Maffioletti",
      email: "smaffioletti1@intel.com",
    },
    {
      first_name: "Hyman",
      last_name: "Hulstrom",
      email: "hhulstrom2@pagesperso-orange.fr",
    },
    {
      first_name: "Marcelo",
      last_name: "Lenoir",
      email: "mlenoir3@berkeley.edu",
    },
    {
      first_name: "Brice",
      last_name: "Vasyutichev",
      email: "bvasyutichev4@jimdo.com",
    },
    {
      first_name: "Killie",
      last_name: "Deverick",
      email: "kdeverick5@boston.com",
    },
    {
      first_name: "Newton",
      last_name: "Vines",
      email: "nvines6@ucoz.com",
    },
    {
      first_name: "Adair",
      last_name: "Kirtland",
      email: "akirtland7@smh.com.au",
    },
    {
      first_name: "Amie",
      last_name: "Cockitt",
      email: "acockitt8@blogger.com",
    },
    {
      first_name: "Belicia",
      last_name: "Juara",
      email: "bjuara9@forbes.com",
    },
    {
      first_name: "Rodolfo",
      last_name: "Teck",
      email: "rtecka@virginia.edu",
    },
    {
      first_name: "Emmalynne",
      last_name: "Kettlewell",
      email: "ekettlewellb@cloudflare.com",
    },
    {
      first_name: "Connie",
      last_name: "Inchcomb",
      email: "cinchcombc@ihg.com",
    },
    {
      first_name: "Fan",
      last_name: "De Beauchamp",
      email: "fdebeauchampd@1688.com",
    },
    {
      first_name: "Daveen",
      last_name: "Yerrington",
      email: "dyerringtone@cafepress.com",
    },
    {
      first_name: "Ted",
      last_name: "Dabrowski",
      email: "tdabrowskif@blogger.com",
    },
    {
      first_name: "Florry",
      last_name: "Glenny",
      email: "fglennyg@ftc.gov",
    },
    {
      first_name: "Nara",
      last_name: "Celloni",
      email: "ncellonih@networkadvertising.org",
    },
    {
      first_name: "Naoma",
      last_name: "Plessing",
      email: "nplessingi@irs.gov",
    },
    {
      first_name: "Ivan",
      last_name: "Kimmel",
      email: "ikimmelj@nifty.com",
    },
    {
      first_name: "Georgie",
      last_name: "Corke",
      email: "gcorkek@vistaprint.com",
    },
    {
      first_name: "Marcello",
      last_name: "Ellicombe",
      email: "mellicombel@economist.com",
    },
    {
      first_name: "Jermaine",
      last_name: "Hairesnape",
      email: "jhairesnapem@wikimedia.org",
    },
    {
      first_name: "Ailbert",
      last_name: "Amys",
      email: "aamysn@unc.edu",
    },
    {
      first_name: "Aleen",
      last_name: "Bryers",
      email: "abryerso@mozilla.com",
    },
    {
      first_name: "Byrann",
      last_name: "Romeril",
      email: "bromerilp@scientificamerican.com",
    },
    {
      first_name: "Emma",
      last_name: "Bushel",
      email: "ebushelq@desdev.cn",
    },
    {
      first_name: "Licha",
      last_name: "Duncan",
      email: "lduncanr@usda.gov",
    },
    {
      first_name: "Garfield",
      last_name: "Etridge",
      email: "getridges@digg.com",
    },
    {
      first_name: "Carol-jean",
      last_name: "McHarry",
      email: "cmcharryt@ca.gov",
    },
    {
      first_name: "Harry",
      last_name: "Hlavecek",
      email: "hhlaveceku@columbia.edu",
    },
    {
      first_name: "Lexy",
      last_name: "Klimochkin",
      email: "lklimochkinv@moonfruit.com",
    },
    {
      first_name: "Rob",
      last_name: "Bedminster",
      email: "rbedminsterw@merriam-webster.com",
    },
    {
      first_name: "Margeaux",
      last_name: "Bertram",
      email: "mbertramx@artisteer.com",
    },
    {
      first_name: "Ebonee",
      last_name: "Swin",
      email: "eswiny@shareasale.com",
    },
    {
      first_name: "Eliot",
      last_name: "Kerford",
      email: "ekerfordz@nature.com",
    },
    {
      first_name: "Rafaello",
      last_name: "Iglesia",
      email: "riglesia10@nytimes.com",
    },
    {
      first_name: "Trent",
      last_name: "Saile",
      email: "tsaile11@msu.edu",
    },
    {
      first_name: "Hetti",
      last_name: "Greiswood",
      email: "hgreiswood12@disqus.com",
    },
    {
      first_name: "Merrie",
      last_name: "Mieville",
      email: "mmieville13@purevolume.com",
    },
    {
      first_name: "Cliff",
      last_name: "Abeau",
      email: "cabeau14@canalblog.com",
    },
    {
      first_name: "Seka",
      last_name: "Schulken",
      email: "sschulken15@army.mil",
    },
    {
      first_name: "Juliana",
      last_name: "Weathey",
      email: "jweathey16@deviantart.com",
    },
    {
      first_name: "Dorri",
      last_name: "Comini",
      email: "dcomini17@domainmarket.com",
    },
    {
      first_name: "Rheta",
      last_name: "Titcom",
      email: "rtitcom18@symantec.com",
    },
    {
      first_name: "Katuscha",
      last_name: "Peete",
      email: "kpeete19@squarespace.com",
    },
    {
      first_name: "Corilla",
      last_name: "Maitland",
      email: "cmaitland1a@apple.com",
    },
    {
      first_name: "Falito",
      last_name: "Hestrop",
      email: "fhestrop1b@shop-pro.jp",
    },
    {
      first_name: "Ara",
      last_name: "Joiner",
      email: "ajoiner1c@google.com.au",
    },
    {
      first_name: "Kip",
      last_name: "Buggs",
      email: "kbuggs1d@icq.com",
    },
    {
      first_name: "Lewes",
      last_name: "Mackstead",
      email: "lmackstead1e@mashable.com",
    },
    {
      first_name: "Spence",
      last_name: "Toft",
      email: "stoft1f@dailymail.co.uk",
    },
    {
      first_name: "Neel",
      last_name: "Lavigne",
      email: "nlavigne1g@dropbox.com",
    },
    {
      first_name: "Lorne",
      last_name: "Payne",
      email: "lpayne1h@toplist.cz",
    },
    {
      first_name: "Parry",
      last_name: "Le Friec",
      email: "plefriec1i@prweb.com",
    },
    {
      first_name: "Laney",
      last_name: "Fausset",
      email: "lfausset1j@cbslocal.com",
    },
    {
      first_name: "Aloysia",
      last_name: "Tranter",
      email: "atranter1k@japanpost.jp",
    },
    {
      first_name: "Malvin",
      last_name: "Sabin",
      email: "msabin1l@salon.com",
    },
    {
      first_name: "Juliet",
      last_name: "Clemencon",
      email: "jclemencon1m@businessinsider.com",
    },
    {
      first_name: "Iormina",
      last_name: "Cuesta",
      email: "icuesta1n@ucoz.ru",
    },
    {
      first_name: "Gates",
      last_name: "Twaite",
      email: "gtwaite1o@hao123.com",
    },
    {
      first_name: "Marylinda",
      last_name: "Tourot",
      email: "mtourot1p@comcast.net",
    },
    {
      first_name: "Irvin",
      last_name: "Hirth",
      email: "ihirth1q@ted.com",
    },
    {
      first_name: "Boothe",
      last_name: "Carden",
      email: "bcarden1r@webeden.co.uk",
    },
    {
      first_name: "Huberto",
      last_name: "Hethron",
      email: "hhethron1s@sciencedaily.com",
    },
    {
      first_name: "Meris",
      last_name: "Giacopetti",
      email: "mgiacopetti1t@businessinsider.com",
    },
    {
      first_name: "Renato",
      last_name: "Halden",
      email: "rhalden1u@parallels.com",
    },
    {
      first_name: "Felipe",
      last_name: "Moreno",
      email: "fmoreno1v@ted.com",
    },
    {
      first_name: "Nance",
      last_name: "Bernardinelli",
      email: "nbernardinelli1w@army.mil",
    },
    {
      first_name: "Rudd",
      last_name: "Paxforde",
      email: "rpaxforde1x@mac.com",
    },
    {
      first_name: "Barnabe",
      last_name: "Dougal",
      email: "bdougal1y@com.com",
    },
    {
      first_name: "Hyatt",
      last_name: "Dutt",
      email: "hdutt1z@nba.com",
    },
    {
      first_name: "Bealle",
      last_name: "Cadden",
      email: "bcadden20@sbwire.com",
    },
    {
      first_name: "Pernell",
      last_name: "Ridsdell",
      email: "pridsdell21@addtoany.com",
    },
    {
      first_name: "Tony",
      last_name: "McVee",
      email: "tmcvee22@foxnews.com",
    },
    {
      first_name: "Cordie",
      last_name: "Grigoroni",
      email: "cgrigoroni23@mozilla.com",
    },
    {
      first_name: "Rudolph",
      last_name: "Jeafferson",
      email: "rjeafferson24@bloglovin.com",
    },
    {
      first_name: "Barney",
      last_name: "Taplin",
      email: "btaplin25@stanford.edu",
    },
    {
      first_name: "Kylynn",
      last_name: "Matteacci",
      email: "kmatteacci26@ow.ly",
    },
    {
      first_name: "Letta",
      last_name: "Redferne",
      email: "lredferne27@i2i.jp",
    },
    {
      first_name: "Delmar",
      last_name: "Moulsdale",
      email: "dmoulsdale28@bandcamp.com",
    },
    {
      first_name: "Rabbi",
      last_name: "Dillet",
      email: "rdillet29@so-net.ne.jp",
    },
    {
      first_name: "Vally",
      last_name: "Halm",
      email: "vhalm2a@umn.edu",
    },
    {
      first_name: "Cinnamon",
      last_name: "Bagwell",
      email: "cbagwell2b@businessinsider.com",
    },
    {
      first_name: "Alick",
      last_name: "Fiddian",
      email: "afiddian2c@joomla.org",
    },
    {
      first_name: "Justus",
      last_name: "O' Dornan",
      email: "jodornan2d@symantec.com",
    },
    {
      first_name: "Susanna",
      last_name: "Bowman",
      email: "sbowman2e@reverbnation.com",
    },
    {
      first_name: "Sterne",
      last_name: "Bamb",
      email: "sbamb2f@feedburner.com",
    },
    {
      first_name: "Timmi",
      last_name: "McTrustrie",
      email: "tmctrustrie2g@virginia.edu",
    },
    {
      first_name: "Ruben",
      last_name: "Lapping",
      email: "rlapping2h@chronoengine.com",
    },
    {
      first_name: "Brana",
      last_name: "Aronowitz",
      email: "baronowitz2i@sfgate.com",
    },
    {
      first_name: "Emlynn",
      last_name: "Caselli",
      email: "ecaselli2j@yahoo.com",
    },
    {
      first_name: "Elfrida",
      last_name: "Comoletti",
      email: "ecomoletti2k@livejournal.com",
    },
    {
      first_name: "Alvinia",
      last_name: "McGuinley",
      email: "amcguinley2l@netvibes.com",
    },
    {
      first_name: "Tera",
      last_name: "Lanfer",
      email: "tlanfer2m@booking.com",
    },
    {
      first_name: "Reiko",
      last_name: "Chorlton",
      email: "rchorlton2n@discovery.com",
    },
    {
      first_name: "Dimitri",
      last_name: "Hitcham",
      email: "dhitcham2o@g.co",
    },
    {
      first_name: "Sephira",
      last_name: "Wartonby",
      email: "swartonby2p@princeton.edu",
    },
    {
      first_name: "Liliane",
      last_name: "Driver",
      email: "ldriver2q@yahoo.com",
    },
    {
      first_name: "Marlowe",
      last_name: "Kinghorn",
      email: "mkinghorn2r@dailymotion.com",
    },
  ]);
});
application.listen(1600, () => {
  console.log("Welcome to port 6000");
});
