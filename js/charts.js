var categories = [
    {name: "#HabsDC", values: [529], category: "Sport"},
    {name: "#CMJ2015", values: [103], category: "Sport"},
    {name: "#Sotchi2014", values: [72], category: "Sport"},
    {name: "#polmtl", values: [53], category: "Politique"},
    {name: "#Yesssss", values: [48], category: "Humeur"},
    {name: "#Fierté", values: [27], category: "Cause"},
    {name: "#RIP", values: [26], category: "Sport"},
    {name: "#CarabinsDC", values: [21], category: "Sport"},
    {name: "#merci", values: [18], category: "Humeur"},
    {name: "#Bravo", values: [18], category: "Humeur"},
    {name: "#AlsDC", values: [17], category: "Sport"},
    {name: "#Montréal", values: [16], category: "Politique"},
    {name: "#respect", values: [13], category: "Humeur"},
    {name: "#NHL15Subban", values: [13], category: "Sport"},
    {name: "#JeSuisCharlie", values: [13], category: "Cause"},
    {name: "#IMFC", values: [13], category: "Sport"},
    {name: "#Oscar2014", values: [12], category: "Culture"},
    {name: "#CoupeDuMondeBresil", values: [12], category: "Sport"},
    {name: "#wow", values: [11], category: "Humeur"},
    {name: "#GoCanadaGo", values: [11], category: "Sport"},
    {name: "#BellCause", values: [11], category: "Cause"},
    {name: "#neigemtl", values: [10], category: "Politique"},
    {name: "#GoHabsGo", values: [10], category: "Sport"},
    {name: "#mtlcomiccon", values: [9], category: "Culture"},
    {name: "#lapresseplus", values: [9], category: "Politique"},
    {name: "#GPF1Mtl", values: [9], category: "Sport"},
    {name: "#FIFA2014U20", values: [9], category: "Sport"},
    {name: "#Coderre2013", values: [9], category: "Politique"},
    {name: "#CMM", values: [8], category: "Politique"},
    {name: "#Solidarité", values: [7], category: "Cause"},
    {name: "#rigueur", values: [7], category: "Politique"},
    {name: "#polqc", values: [7], category: "Politique"},
    {name: "#MTL", values: [6], category: "Politique"},
    {name: "#IceBucketChallenge", values: [6], category: "Cause"},
    {name: "#ExposDC", values: [6], category: "Sport"},
    {name: "#DevoirdeMemoire", values: [6], category: "Cause"},
    {name: "#ShowduRefuge", values: [5], category: "Culture"},
    {name: "#RevueEtCorrigee", values: [5], category: "Culture"},
    {name: "#mtl2013", values: [5], category: "Politique"},
    {name: "#GenieArmy", values: [5], category: "Sport"},
    {name: "#CoupeVanier", values: [5], category: "Sport"},
    {name: "#TourneeCMMHelico", values: [4], category: "Politique"},
    {name: "#TLMEP", values: [4], category: "Politique"},
    {name: "#TeamCanada", values: [4], category: "Sport"},
    {name: "#RIPGillesLatulippe", values: [4], category: "Culture"},
    {name: "#Outremont", values: [4], category: "Politique"},
    {name: "#ouffff", values: [4], category: "Humeur"},
    {name: "#onjasela", values: [4], category: "Humeur"},
    {name: "#MontrealIsBack", values: [4], category: "Sport"},
    {name: "#jevoismtl", values: [4], category: "Politique"},
    {name: "#Haiti", values: [4], category: "Politique"},
    {name: "#Habs", values: [4], category: "Sport"},
    {name: "#FocusMontreal", values: [4], category: "Sport"},
    {name: "#CityLab2014", values: [4], category: "Politique"},
    {name: "#CharlieHebdo", values: [4], category: "Cause"},
    {name: "#CaraBangBang", values: [4], category: "Sport"},
    {name: "#CANvsSWE", values: [4], category: "Sport"},
    {name: "#ButePascal", values: [4], category: "Sport"},
    {name: "#Budget2015", values: [4], category: "Politique"},
    {name: "#AllezLesBleus", values: [4], category: "Sport"},
    {name: "#wakeup", values: [3], category: "Sport"},
    {name: "#Tintoé", values: [3], category: "Humeur"},
    {name: "#Tesla", values: [3], category: "Politique"},
    {name: "#SNLQC", values: [3], category: "Culture"},
    {name: "#RIPNelsonMandela", values: [3], category: "Politique"},
    {name: "#PontChamplain", values: [3], category: "Politique"},
    {name: "#PCM2", values: [3], category: "Politique"},
    {name: "#NuitblancheMtl", values: [3], category: "Culture"},
    {name: "#NeverSurrender", values: [3], category: "Humeur"},
    {name: "#Jutra2014", values: [3], category: "Culture"},
    {name: "#JPR14", values: [3], category: "Culture"},
    {name: "#HaïtiMTL", values: [3], category: "Politique"},
    {name: "#GoCarabinsGo", values: [3], category: "Sport"},
    {name: "#EteIndien", values: [3], category: "Culture"},
    {name: "#emu", values: [3], category: "Humeur"},
    {name: "#zzzz", values: [2], category: "Humeur"},
    {name: "#yeah", values: [2], category: "Humeur"},
    {name: "#YankeeStadium", values: [2], category: "Sport"},
    {name: "#Wimbledon", values: [2], category: "Sport"},
    {name: "#VireTaChaiseDeBord", values: [2], category: "Culture"},
    {name: "#VigieHDV", values: [2], category: "Cause"},
    {name: "#UMQ", values: [2], category: "Politique"},
    {name: "#TunnelViger", values: [2], category: "Politique"},
    {name: "#TousEnChoeur", values: [2], category: "Culture"},
    {name: "#SOH2014", values: [2], category: "Politique"},
    {name: "#SoccerDad", values: [2], category: "Sport"},
    {name: "#SiliconValley", values: [2], category: "Politique"},
    {name: "#ShanaTova", values: [2], category: "Politique"},
    {name: "#SFGiants", values: [2], category: "Sport"},
    {name: "#Salvail", values: [2], category: "Culture"},
    {name: "#RIPRobinWilliams", values: [2], category: "Culture"},
    {name: "#RIPJoeCocker", values: [2], category: "Culture"},
    {name: "#Quebec", values: [2], category: "Politique"},
    {name: "#poudoumpishhhh", values: [2], category: "Humeur"},
    {name: "#poppyproud", values: [2], category: "Politique"},
    {name: "#picsdelahonte", values: [2], category: "Politique"},
    {name: "#PersévéranceScolaire", values: [2], category: "Politique"},
    {name: "#OSMParcs", values: [2], category: "Culture"},
    {name: "#Osheaga2014", values: [2], category: "Culture"},
    {name: "#OnSeCalme", values: [2], category: "Humeur"},
    {name: "#OhYeah", values: [2], category: "Humeur"},
    {name: "#oes27", values: [2], category: "Cause"},
    {name: "#NoPainNoGain", values: [2], category: "Sport"},
    {name: "#MontréalVilleDeHockey", values: [2], category: "Sport"},
    {name: "#Moncton", values: [2], category: "Politique"},
    {name: "#MissionNY", values: [2], category: "Politique"},
    {name: "#MGM", values: [2], category: "politique"},
    {name: "#LetsGoGiants", values: [2], category: "Sport"},
    {name: "#LeSansVisage", values: [2], category: "Culture"},
    {name: "#LaVénusAuVison", values: [2], category: "Culture"},
    {name: "#JQMM", values: [2], category: "Politique"},
    {name: "#JPS2015", values: [2], category: "Cause"},
    {name: "#JFL14", values: [2], category: "Culture"},
    {name: "#infoneigemtl", values: [2], category: "Politique"},
    {name: "#honoré", values: [2], category: "Humeur"},
    {name: "#histoire", values: [2], category: "Politique"},
    {name: "#guignoleedrjulien", values: [2], category: "Cause"},
    {name: "#GuignoleeDrJulien", values: [2], category: "Cause"},
    {name: "#GrandPrixCyclisteMtl", values: [2], category: "Sport"},
    {name: "#goodjob", values: [2], category: "Humeur"},
    {name: "#fm985", values: [2], category: "Politique"},
    {name: "#FIJM2014", values: [2], category: "Culture"},
    {name: "#ExposNation", values: [2], category: "Sport"},
    {name: "#DonRickles", values: [2], category: "Culture"},
    {name: "#DDay70", values: [2], category: "Cause"},
    {name: "#ConfMTL", values: [2], category: "Politique"},
    {name: "#Check", values: [2], category: "Humeur"},
    {name: "#Cannes2014", values: [2], category: "Culture"},
    {name: "#BonneAnnée", values: [2], category: "Humeur"},
    {name: "#bocuse2015", values: [2], category: "Culture"},
    {name: "#Bixi", values: [2], category: "Politique"},
    {name: "#Bienvenue", values: [2], category: "Humeur"},
    {name: "#azur", values: [2], category: "Politique"},
    {name: "#asuivre", values: [2], category: "Humeur"},
    {name: "#assnat", values: [2], category: "Politique"},
    {name: "#AmericanTop40", values: [2], category: "Culture"},
    {name: "#ZithoYeLada", values: [1], category: "Politique"},
    {name: "#YQuelleHeureHeure", values: [1], category: "Humeur"},
    {name: "#YMCA", values: [1], category: "Politique"},
    {name: "#yesssFlowerPower", values: [1], category: "Sport"},
    {name: "#WozCCCM", values: [1], category: "Sport"},
    {name: "#woohoo", values: [1], category: "Humeur"},
    {name: "#windBeneathMyWings", values: [1], category: "Culture"},
    {name: "#welcomeTweet", values: [1], category: "Humeur"},
    {name: "#WeAreWinter", values: [1], category: "Humeur"},
    {name: "#WCJ2015", values: [1], category: "Sport"},
    {name: "#vsmpe", values: [1], category: "Politique"},
    {name: "#Vintage", values: [1], category: "Culture"},
    {name: "#villes", values: [1], category: "Politique"},
    {name: "#velosouszero", values: [1], category: "Politique"},
    {name: "#velo", values: [1], category: "Politique"},
    {name: "#USAvsRUS", values: [1], category: "Sport"},
    {name: "#UNSG", values: [1], category: "Politique"},
    {name: "#UniformeIntégral", values: [1], category: "Politique"},
    {name: "#UneVraieBattante", values: [1], category: "Cause"},
    {name: "#unbelievable", values: [1], category: "Humeur"},
    {name: "#tweetprédiction", values: [1], category: "Sport"},
    {name: "#TweetJetSet", values: [1], category: "Humeur"},
    {name: "#tweetgerantdestrade", values: [1], category: "sport"},
    {name: "#TweetDansLesCoulisses", values: [1], category: "Politique"},
    {name: "#tweetcoach", values: [1], category: "Sport"},
    {name: "#tweetCirculation", values: [1], category: "Politique"},
    {name: "#tweetaide", values: [1], category: "Cause"},
    {name: "#TSN", values: [1], category: "Sport"},
    {name: "#troisrivieres", values: [1], category: "Politique"},
    {name: "#transactions2014", values: [1], category: "Sport"},
    {name: "#TournéeCMMHélico", values: [1], category: "Politique"},
    {name: "#TournoidesCoeursScotties", values: [1], category: "Sport"},
    {name: "#TjrSolidaire", values: [1], category: "Politique"},
    {name: "#TJ18h", values: [1], category: "Politique"},
    {name: "#TheEmmys", values: [1], category: "Culture"},
    {name: "#Tetris", values: [1], category: ""},
    {name: "#TeamSweden", values: [1], category: "Sport"},
    {name: "#TBT", values: [1], category: "Politique"},
    {name: "#taxi", values: [1], category: "Politique"},
    {name: "#TakeMeOutToTheBallGame", values: [1], category: "Sport"},
    {name: "#TableMtlQc", values: [1], category: "Politique"},
    {name: "#SériesLNH", values: [1], category: "Sport"},
    {name: "#Syria", values: [1], category: "Politique"},
    {name: "#SuperBowl2014", values: [1], category: "Sport"},
    {name: "#Summertime", values: [1], category: "Humeur"},
    {name: "#succès", values: [1], category: "Humeur"},
    {name: "#StLeonardChronicles", values: [1], category: "Culture"},
    {name: "#startupopenhouse", values: [1], category: "Politique"},
    {name: "#Startup", values: [1], category: "Politique"},
    {name: "#SoyezGénéreux", values: [1], category: "Cause"},
    {name: "#SouvenirMtlNord", values: [1], category: "Humeur"},
    {name: "#soutienRC", values: [1], category: "Cause"},
    {name: "#SoulMan", values: [1], category: "Culture"},
    {name: "#SommetBusineasEuropéen", values: [1], category: "Politique"},
    {name: "#solidsolid", values: [1], category: "Politique"},
    {name: "#solidarityToronto", values: [1], category: "Politique"},
    {name: "#SNLQuebec", values: [1], category: "Culture"},
    {name: "#Sharp", values: [1], category: "Sport"},
    {name: "#SFvsWAS", values: [1], category: "Sport"},
    {name: "#scusezlà", values: [1], category: "Humeur"},
    {name: "#SB49", values: [1], category: "Sport"},
    {name: "#SauvonsRadioCanada", values: [1], category: "Cause"},
    {name: "#SansCommentaire", values: [1], category: "Humeur"},
    {name: "#SalutSergeRIP", values: [1], category: "Politique"},
    {name: "#RégimeRetraite", values: [1], category: "Politique"},
    {name: "#rosepatrie", values: [1], category: "Politique"},
    {name: "#Rodgers", values: [1], category: "Sport"},
    {name: "#RIPYvan", values: [1], category: "Politique"},
    {name: "#RIPPaulWalker", values: [1], category: "Culture"},
    {name: "#RIPNancy", values: [1], category: "Politique"},
    {name: "#RIPMarkDunn", values: [1], category: "Culture"},
    {name: "#RIPMadDog", values: [1], category: "Sport"},
    {name: "#RIPJeanGaron", values: [1], category: "Politique"},
    {name: "#RIPJC", values: [1], category: "Culture"},
    {name: "#RIPJacquesProulx", values: [1], category: "Culture"},
    {name: "#retrouvailles", values: [1], category: "Politique"},
    {name: "#retraite", values: [1], category: "Politique"},
    {name: "#restonscalme", values: [1], category: "Humeur"},
    {name: "#RenMainMounKiRenMainW", values: [1], category: "Politique"},
    {name: "#Refuge", values: [1], category: "Cause"},
    {name: "#RealMenDontBuyGirls", values: [1], category: "Politique"},
    {name: "#RDSCH", values: [1], category: "Sport"},
    {name: "#RDS", values: [1], category: "Sport"},
    {name: "#Rays", values: [1], category: "Sport"},
    {name: "#RamenezNosAmours", values: [1], category: "Sport"},
    {name: "#QuébecCinéma", values: [1], category: "Culture"},
    {name: "#QuelSpectacle", values: [1], category: "Culture"},
    {name: "#QuelPanache", values: [1], category: "Sport"},
    {name: "#QuelleVoixWow", values: [1], category: "Culture"},
    {name: "#queljoueur", values: [1], category: "Sport"},
    {name: "#qc2014", values: [1], category: "Politique"},
    {name: "#qbpoli", values: [1], category: "Politique"},
    {name: "#prévention", values: [1], category: "Politique"},
    {name: "#proudhabs", values: [1], category: "Sport"},
    {name: "#PrixJackGraney2013", values: [1], category: "Politique"},
    {name: "#PrixDExcellenceTennisQuebec", values: [1], category: "Sport"},
    {name: "#priorité", values: [1], category: "Politique"},
    {name: "#PriceVsSWE", values: [1], category: "Sport"},
    {name: "#PourUnQuébecÉquitable", values: [1], category: "Politique"},
    {name: "#PourquoiLeDevoir", values: [1], category: "Cause"},
    {name: "#polmun", values: [1], category: "Politique"},
    {name: "#politique", values: [1], category: "Politique"},
    {name: "#pointu", values: [1], category: "Sport"},
    {name: "#PMAD", values: [1], category: "Politique"},
    {name: "#PlayBall", values: [1], category: "Sport"},
    {name: "#PL3", values: [1], category: "Politique"},
    {name: "#pipelinesMtl", values: [1], category: "Politique"},
    {name: "#PickUpLineAcadienne", values: [1], category: ""},
    {name: "#PatriotsNation", values: [1], category: "Sport"},
    {name: "#pasquestion", values: [1], category: "Humeur"},
    {name: "#pasgame", values: [1], category: "Humeur"},
    {name: "#pasdebonsens", values: [1], category: "Humeur"},
    {name: "#PascalBute", values: [1], category: "Sport"},
    {name: "#ParQuatreChemins", values: [1], category: "Culture"},
    {name: "#Paris", values: [1], category: "Politique"},
    {name: "#PaloAlto", values: [1], category: "Politique"},
    {name: "#out", values: [1], category: "Humeur"},
    {name: "#ouch", values: [1], category: "Humeur"},
    {name: "#Ottawa", values: [1], category: "Politique"},
    {name: "#Oscars2015", values: [1], category: "Culture"},
    {name: "#oscars", values: [1], category: "Culture"},
    {name: "#oooohyeah", values: [1], category: "Humeur"},
    {name: "#onrc", values: [1], category: "Sport"},
    {name: "#ONPC", values: [1], category: "Culture"},
    {name: "#Onjasepu", values: [1], category: "Humeur"},
    {name: "#OnEstDu", values: [1], category: "Humeur"},
    {name: "#OkOnFermeLesLivres", values: [1], category: "Sport"},
    {name: "#OhayoGozaimasu", values: [1], category: "Politique"},
    {name: "#Ogilvy", values: [1], category: "Politique"},
    {name: "#Offensivediabete", values: [1], category: "Cause"},
    {name: "#OctoberTogether", values: [1], category: "Sport"},
    {name: "#NYC", values: [1], category: "Politique"},
    {name: "#now", values: [1], category: "Humeur"},
    {name: "#not", values: [1], category: "Humeur"},
    {name: "#noooon", values: [1], category: "Humeur"},
    {name: "#NLDSonFS1", values: [1], category: "Sport"},
    {name: "#nice", values: [1], category: "Humeur"},
    {name: "#NHL", values: [1], category: "Sport"},
    {name: "#NewYorkHighLine", values: [1], category: "Politique"},
    {name: "#NBAsansFrontière", values: [1], category: "Sport"},
    {name: "#NBA", values: [1], category: "Sport"},
    {name: "#MédiasFranco", values: [1], category: "Politique"},
    {name: "#murale", values: [1], category: "Culture"},
    {name: "#mun2013", values: [1], category: "Politique"},
    {name: "#MtlMétropoleCulturelle", values: [1], category: "Politique"},
    {name: "#mtljeunes", values: [1], category: "Politique"},
    {name: "#mtlbeluga", values: [1], category: "Politique"},
    {name: "#MPJ", values: [1], category: "Politique"},
    {name: "#moveon", values: [1], category: "Politique"},
    {name: "#MontréalMétropoleInternationale", values: [1], category: "Politique"},
    {name: "#MontréalMétropoleCulturelle", values: [1], category: "Culture"},
    {name: "#MontréalMagnifique", values: [1], category: "Culture"},
    {name: "#MontréalDC", values: [1], category: "Politique"},
    {name: "#MonNomEstCoderreDenisCoderre", values: [1], category: "Humeur"},
    {name: "#MonFilsTresHeureux", values: [1], category: "Humeur"},
    {name: "#MonctonShooting", values: [1], category: "Politique"},
    {name: "#Mommy", values: [1], category: "Culture"},
    {name: "#moissonmtl", values: [1], category: "Cause"},
    {name: "#Moisson", values: [1], category: "Cause"},
    {name: "#MobilitéMtl", values: [1], category: "Politique"},
    {name: "#MLS", values: [1], category: "Sport"},
    {name: "#MLB2015", values: [1], category: "Sport"},
    {name: "#missionMtl", values: [1], category: "Politique"},
    {name: "#MissionLA", values: [1], category: "Politique"},
    {name: "#MissionAccomplie", values: [1], category: "politique"},
    {name: "#mieuxvauttardquejamais", values: [1], category: "Sport"},
    {name: "#MichelTherrien", values: [1], category: "Sport"},
    {name: "#MesSympathies", values: [1], category: "Humeur"},
    {name: "#MerryChristmas", values: [1], category: "Humeur"},
    {name: "#MerciTVA", values: [1], category: "Politique"},
    {name: "#MerciRégis", values: [1], category: "Politique"},
    {name: "#MerciLesGars", values: [1], category: "Sport"},
    {name: "#MerciDGCaillard", values: [1], category: "Culture"},
    {name: "#MAXpacioretty", values: [1], category: "Sport"},
    {name: "#Mauricie", values: [1], category: "Politique"},
    {name: "#mauditCancer", values: [1], category: "Cause"},
    {name: "#ManquezPasÇa", values: [1], category: "Humeur"},
    {name: "#MaisonSaintGabriel", values: [1], category: "Sport"},
    {name: "#MaisonRedpath", values: [1], category: "Politique"},
    {name: "#Maedo", values: [1], category: "Politique"},
    {name: "#MadBum", values: [1], category: "Sport"},
    {name: "#Lévis", values: [1], category: "Politique"},
    {name: "#Loi3", values: [1], category: "Politique"},
    {name: "#LikeGoodOldDays", values: [1], category: "Humeur"},
    {name: "#lesoleil", values: [1], category: "Politique"},
    {name: "#LeSerpent", values: [1], category: "Culture"},
    {name: "#ledroit", values: [1], category: "Politique"},
    {name: "#JustForLaughs", values: [1], category: "Culture"},
    {name: "#JoyeuxNoël", values: [1], category: "Humeur"},
    {name: "#JoyeusesFetes", values: [1], category: "Humeur"},
    {name: "#jeter", values: [1], category: "Sport"},
    {name: "#JeFaisMtl", values: [1], category: "Politique"},
    {name: "#jeanmarcvallee", values: [1], category: "Culture"},
    {name: "#JeanBéliveau", values: [1], category: "Sport"},
    {name: "#JDQ2016", values: [1], category: "Sport"},
    {name: "#JackAdams", values: [1], category: "Sport"},
    {name: "#itinérance", values: [1], category: "Politique"},
    {name: "#isleverte", values: [1], category: "Politique"},
    {name: "#Inspirante", values: [1], category: "Sport"},
    {name: "#inquiet", values: [1], category: "Humeur"},
    {name: "#infinitîove", values: [1], category: "Culture"},
    {name: "#Infiniti", values: [1], category: "Politique"},
    {name: "#Indissociable", values: [1], category: "Politique"},
    {name: "#impressionnant", values: [1], category: "Humeur"},
    {name: "#ImLeavingYou", values: [1], category: "Culture"},
    {name: "#IlNeManqueQue2Buts", values: [1], category: "Sport"},
    {name: "#ILike", values: [1], category: "Humeur"},
    {name: "#idole", values: [1], category: "Politique"},
    {name: "#IciATCV", values: [1], category: "Politique"},
    {name: "#IBM", values: [1], category: "Politique"},
    {name: "#héros", values: [1], category: "Politique"},
    {name: "#HyperCacher", values: [1], category: "Cause"},
    {name: "#HommeDexception", values: [1], category: "Culture"},
    {name: "#HommageFredericBack", values: [1], category: "Culture"},
    {name: "#HOMA", values: [1], category: "Politique"},
    {name: "#HappyCaptain", values: [1], category: "Culture"},
    {name: "#HappyBirthday", values: [1], category: "Humeur"},
    {name: "#hahaha", values: [1], category: "Humeur"},
    {name: "#gâteau", values: [1], category: "Humeur"},
    {name: "#GREMM", values: [1], category: "Cause"},
    {name: "#GreatMtlAmbassador", values: [1], category: "Politique"},
    {name: "#GRCNB", values: [1], category: "Politique"},
    {name: "#GrandSuccès", values: [1], category: "Humeur"},
    {name: "#GPCQM", values: [1], category: "Politique"},
    {name: "#GOveloMTL", values: [1], category: "Sport"},
    {name: "#GoodOne", values: [1], category: "Humeur"},
    {name: "#good", values: [1], category: "Humeur"},
    {name: "#GoMtlGo", values: [1], category: "Sport"},
    {name: "#GillesLatilippe", values: [1], category: "Culture"},
    {name: "#GHG", values: [1], category: "Sport"},
    {name: "#ggm2014", values: [1], category: "Sport"},
    {name: "#gdpl2014", values: [1], category: "Politique"},
    {name: "#Gatineau", values: [1], category: "Politique"},
    {name: "#gatineau", values: [1], category: "Politique"},
    {name: "#game6herewecome", values: [1], category: "Sport"},
    {name: "#galajpr14", values: [1], category: "Culture"},
    {name: "#FêteduTêtVietnamien", values: [1], category: "Culture"},
    {name: "#Fêtedesneiges", values: [1], category: "Culture"},
    {name: "#FélicitationsXavier", values: [1], category: "Culture"},
    {name: "#francstireurs", values: [1], category: "Politique"},
    {name: "#FQM", values: [1], category: "Politique"},
    {name: "#fouduhockey", values: [1], category: "Sport"},
    {name: "#ForumQc", values: [1], category: "Politique"},
    {name: "#FootballUniversitaire", values: [1], category: "Sport"},
    {name: "#FoodForThought", values: [1], category: "Culture"},
    {name: "#flattéquandmême", values: [1], category: "Humeur"},
    {name: "#FievreDesSeries", values: [1], category: "Sport"},
    {name: "#FeteNationaleGrece", values: [1], category: "Politique"},
    {name: "#FelipeAlou", values: [1], category: "Sport"},
    {name: "#FedCup", values: [1], category: "Sport"},
    {name: "#FDN2015", values: [1], category: "Culture"},
    {name: "#FCM", values: [1], category: "Politique"},
    {name: "#FantasiaFest", values: [1], category: "Culture"},
    {name: "#FanPicolo", values: [1], category: "Culture"},
    {name: "#FanOSM", values: [1], category: "Culture"},
    {name: "#FaitesDuBruiiiiiit", values: [1], category: "Humeur"},
    {name: "#Exquis", values: [1], category: "Humeur"},
    {name: "#Expos94", values: [1], category: "Sport"},
    {name: "#Expos", values: [1], category: "Sport"},
    {name: "#excusezLà", values: [1], category: "Humeur"},
    {name: "#equité", values: [1], category: "Politique"},
    {name: "#equipedeniscoderre", values: [1], category: "Politique"},
    {name: "#equipeCanada", values: [1], category: "Sport"},
    {name: "#Epharisto", values: [1], category: "Politique"},
    {name: "#EnModeSalvail", values: [1], category: "Culture"},
    {name: "#Enfiiiiiin", values: [1], category: "Humeur"},
    {name: "#Enbridge", values: [1], category: "Politique"},
    {name: "#dévouement", values: [1], category: "Humeur"},
    {name: "#DéfiSportif", values: [1], category: "Sport"},
    {name: "#DéfiSanté", values: [1], category: "Politique"},
    {name: "#DutyOfMemory", values: [1], category: "Politique"},
    {name: "#DomoArigato", values: [1], category: "Politique"},
    {name: "#DGQNY", values: [1], category: "Politique"},
    {name: "#DetouràJoliette", values: [1], category: "Politique"},
    {name: "#desolé", values: [1], category: "Humeur"},
    {name: "#designers", values: [1], category: "Culture"},
    {name: "#DerekJeter", values: [1], category: "Sport"},
    {name: "#Democracy", values: [1], category: "Politique"},
    {name: "#defisportif", values: [1], category: "Sport"},
    {name: "#defisante530", values: [1], category: "Politique"},
    {name: "#Defense", values: [1], category: "Sport"},
    {name: "#Deal", values: [1], category: "Humeur"},
    {name: "#DallasBuyersClub", values: [1], category: "Culture"},
    {name: "#curlingmasculin", values: [1], category: "Sport"},
    {name: "#CPTT", values: [1], category: "Politique"},
    {name: "#coursealavieCIBC", values: [1], category: "Cause"},
    {name: "#courage", values: [1], category: "Humeur"},
    {name: "#ConcertDignité", values: [1], category: "Culture"},
    {name: "#CNN10", values: [1], category: "Politique"},
    {name: "#citexplore", values: [1], category: "Politique"},
    {name: "#CISfball", values: [1], category: "Sport"},
    {name: "#chuuuuuut", values: [1], category: "Humeur"},
    {name: "#Chicago", values: [1], category: "Politique"},
    {name: "#Chapeau", values: [1], category: "Humeur"},
    {name: "#Champlain", values: [1], category: "Politique"},
    {name: "#CH", values: [1], category: "Sport"},
    {name: "#cdnpoli", values: [1], category: "Politique"},
    {name: "#CBCOlympics", values: [1], category: "Sport"},
    {name: "#cbcmtl", values: [1], category: "Politique"},
    {name: "#CaseyKasem", values: [1], category: "Culture"},
    {name: "#CaSentLaCoupe", values: [1], category: "Sport"},
    {name: "#Canadiens", values: [1], category: "Sport"},
    {name: "#canada", values: [1], category: "Politique"},
    {name: "#C2Mtl", values: [1], category: "Politique"},
    {name: "#byebye2013", values: [1], category: "Culture"},
    {name: "#Buissonneau", values: [1], category: "Culture"},
    {name: "#Bruxelles", values: [1], category: "Politique"},
    {name: "#BroadwayàMtl", values: [1], category: "Culture"},
    {name: "#BringBackOurGirls", values: [1], category: "Cause"},
    {name: "#Boston", values: [1], category: "Politique"},
    {name: "#BonneFête", values: [1], category: "Humeur"},
    {name: "#BonneFinDeSoirée", values: [1], category: "Humeur"},
    {name: "#BonneChance", values: [1], category: "Humeur"},
    {name: "#BellLetsTalk", values: [1], category: "Cause"},
    {name: "#Beliveau", values: [1], category: "Sport"},
    {name: "#BeauTravail", values: [1], category: "Humeur"},
    {name: "#BCvsMTL", values: [1], category: "Sport"},
    {name: "#baseball", values: [1], category: "Sport"},
    {name: "#AutorouteVilleMarie", values: [1], category: "Politique"},
    {name: "#Attenborough", values: [1], category: "Culture"},
    {name: "#ArethaFranklin", values: [1], category: "Culture"},
    {name: "#architectes", values: [1], category: "Politique"},
    {name: "#Antichambre", values: [1], category: "Sport"},
    {name: "#anniehamel", values: [1], category: "Cause"},
    {name: "#amitiés", values: [1], category: "Humeur"},
    {name: "#Amaluna", values: [1], category: "Culture"},
    {name: "#Alzheimer", values: [1], category: "Cause"},
    {name: "#ALSIceBucketChallenge", values: [1], category: "Cause"},
    {name: "#AllezVoter", values: [1], category: "Politique"},
    {name: "#adisq", values: [1], category: "Culture"},
    {name: "#AccordsBistro", values: [1], category: "Culture"},
    {name: "#académie", values: [1], category: "Politique"},
    {name: "#3sdl", values: [1], category: "Sport"},
    {name: "#22CâlinedeBlues", values: [1], category: "Culture"},
    {name: "#1goalie", values: [1], category: "Sport"},
    {name: "#185bravos", values: [1], category: "Culture"},
    {name: "#12YearsASlave", values: [1], category: "Culture"},
    {name: "#100eAnniversaire", values: [1], category: "Politique"},
    {name: "#1000km2014", values: [1], category: "Politique"}
];

var hashtags = moby.init({
    containerSelector: '#visu-bulle'
})
    .setConfig({
        type: 'bubble',
        colorByKey: 'category',
        sortByKey: 'category',
        labelRadiusThreshold: 15,
        labelFormatter: function(d) {
            return d.name;
        }
    })
    .render(categories);

/*TODO
 -enlever avant 4 nov
 */
var dataRetweets = [
    {name: "Allez les amis. Célébrons cette belle victoire de nos Glorieux en votant pour #NHL15Subban a vos posts #HabsDC. RT MASSIF SVP!!!", values: [1357], category: "Sport"},
    {name: "Ok les amis j'ai besoin de vous. Il faut voter pour #NHL15Subban RT MASSIF SVP! :)", values: [947], category: "Sport"},
    {name: "Message à tous les partisans du Canadien :))  Un geste pour supporter #NHL15Subban  #GoHabsGo #HabsDC RT MASSIF SVP!!!", values: [939], category: "Sport"},
    {name: "VICTOIRE!!!! le drapeau du CH va flotter à l'Hotel de Ville de Boston!!!! #HabsDC", values: [762], category: "Sport"},
    {name: "Un petit #retweet pour #BellCause ? Allez tous en chœur !! :) http://t.co/9WPYaCzTlI", values: [711], category: "Cause"},
    {name: "J'ai hâte de voir flotter le drapeau du Canadien à l'Hotel de Ville de Boston #Yesssss #HabsDC", values: [704], category: "Sport"},
    {name: "Bonsoir j'aimerais parler au maire de New York svp...? ;) #HabsDC", values: [575], category: "Sport"},
    {name: "J'invite les Montréalais à démontrer leur fierté et leur appui à nos Canadiens dans le respect suite à notre victoire sur TampaBay #HabsDC", values: [556], category: "Sport"},
    {name: "Yesssss! Bravo David :) #HabsDC", values: [500], category: "Sport"},
    {name: "En guise de solidarité au #CharlieHebdo, pour la liberté de la presse  #JeSuisCharlie http://t.co/W73tr4rf4T", values: [435], category: "Cause"}
];

var retweets = moby.init({
    containerSelector: '#visu-retweets'
})
    .setConfig({
        type: 'bar',
        colorByKey: 'category'
    })
    .render(dataRetweets);

var dataReponsesCoderre = [
    {name: ':))', values: [106]},
    {name: 'oui', values: [86]},
    {name: 'bonne', values: [80]},
    {name: 'journée', values: [30]},
    {name: 'focus', values: [27]},
    {name: '@panormandin', values: [26]},
    {name: 'mtl', values: [23]},
    {name: 'année', values: [22]},
    {name: '@fcormierrc', values: [22]},
    {name: 'plaisir', values: [21]},
    {name: '@fournier_claude', values: [17]},
    {name: 'désolé', values: [16]},
    {name: 'hahaha', values: [16]},
    {name: '@moicelestia', values: [16]},
    {name: 'soirée', values: [14]},
    {name: 'magnifique', values: [14]},
    {name: 'mieux', values: [12]},
    {name: 'naaan', values: [12]},
    {name: 'soir', values: [12]}
];

var reponses1 = moby.init({
    containerSelector: '#visu-reponses1'
})
    .setConfig({
        type: 'bubble',
        labelFormatter: function(d) {
            return d.name;
        }
    })
    .render(dataReponsesCoderre);

var dataReponses2 = [
    {name: 'merci', values: [27]},
    {name: '@villelongueuil', values: [13]},
    {name: 'oui', values: [11]},
    {name: 'faire', values: [9]},
    {name: '#longueuil', values: [13]},
    {name: 'bonne', values: [8]},
    {name: 'voir', values: [8]},
    {name: '@mclortie', values: [7]},
    {name: '@donatsty', values: [7]},
    {name: '@fcormierrc', values: [7]},
    {name: '@maka_kotto', values: [6]},
    {name: 'ville', values: [6]},
    {name: 'absolument', values: [5]},
    {name: '@thomasgerbet', values: [5]},
    {name: 'bonjour', values: [5]},
    {name: '@nathalie_b', values: [5]},
    {name: '@rocketgil', values: [5]},
    {name: '#jdq2014', values: [5]},
    {name: '@deniscoderre', values: [5]}
];

var reponses2 = moby.init({
    containerSelector: '#visu-reponses2'
})
    .setConfig({
        type: 'bubble',
        labelFormatter: function(d) {
            return d.name;
        }
    })
    .render(dataReponses2);

var dataTweetsHour = [
    {
        name: 'Tweets par heure du jour',
        values: [218, 87, 14, 13, 2, 11, 58, 108, 256, 293, 290, 290, 321, 280, 345, 381, 367, 354, 379, 318, 405, 570, 541, 374],
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }
];

var hours = moby.init({
    containerSelector: '#visu-horaire'
})
    .setConfig({
        type: 'bar2D',
        tooltipFormatter: function(d, i) {
            return d.values;
        },
        labelFormatter: function(d, i) {
            return '<span class="label-title"> ' + d.labels[i] + '</span>';
        }
    })
    .render(dataTweetsHour);

var dataTweetsMonth = [
    {
        name: 'Tweets par mois',
        values: [128, 181, 177, 362, 311, 297, 441, 336, 251, 200, 306, 343, 303, 268, 349, 231, ],
        labels: ["Nov-13", "Déc-13", "Jan-14", "Fév-14", "Mar-14", "Avr-14", "Mai-14", "Juin-14", "Juil-14", "Août-14", "Sept-14", "Oct-14", "Nov-14", "Déc-14", "Jan-15", "Fév-15"]
    }
];

var months = moby.init({
    containerSelector: '#visu-mensuel'
})
    .setConfig({
        type: 'bar2D',
        tooltipFormatter: function(d, i) {
            return d.values;
        },
        labelFormatter: function(d, i) {
            return '<span class="label-title"> ' + d.labels[i] + '</span>';
        }
    })
    .render(dataTweetsMonth);
