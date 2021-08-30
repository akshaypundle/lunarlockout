// encodes and decodes a board as a phrase
class BoardPhraseEncoding {
  // prettier-ignore
  static adjectives = ["abandoned", "able", "absolute", "adorable", "adventurous",
    "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching",
    "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired",
    "adolescent", "adorable", "adored", "advanced", "afraid", "affectionate",
    "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing",
    "agreeable", "ajar", "alarmed", "alarming", "alert", "alienated", "alive",
    "all", "altruistic", "amazing", "ambitious", "ample", "amused", "amusing",
    "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annual",
    "another", "antique", "anxious", "any", "apprehensive", "appropriate", "apt",
    "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing",
    "athletic", "attached", "attentive", "attractive", "austere", "authentic",
    "authorized", "automatic", "avaricious", "average", "aware", "awesome",
    "awful", "awkward", "babyish", "bad", "back", "baggy", "bare", "barren",
    "basic", "beautiful", "belated", "beloved", "beneficial", "better", "best",
    "bewitched", "big", "biodegradable", "bitter", "black", "bland", "blank",
    "blaring", "bleak", "blind", "blissful", "blond", "blue", "blushing", "bogus",
    "boiling", "bold", "bony", "boring", "bossy", "both", "bouncy", "bountiful",
    "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk",
    "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant",
    "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating",
    "calm", "candid", "canine", "capital", "carefree", "careful", "careless",
    "caring", "cautious", "cavernous", "celebrated", "charming", "cheap",
    "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic",
    "clean", "clear", "clever", "close", "closed", "cloudy", "clueless", "clumsy",
    "cluttered", "coarse", "cold", "colorful", "colorless", "colossal",
    "comfortable", "common", "compassionate", "competent", "complete", "complex",
    "complicated", "composed", "concerned", "concrete", "confused", "conscious",
    "considerate", "constant", "content", "conventional", "cooked", "cool",
    "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous",
    "courteous", "crafty", "crazy", "creamy", "creative", "creepy", "criminal",
    "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly",
    "cultivated", "cultured", "cumbersome", "curly", "curvy", "cute",
    "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring", "darling",
    "dark", "dazzling", "dead", "deadly", "deafening", "dear", "dearest", "decent",
    "decimal", "decisive", "deep", "defenseless", "defensive", "defiant",
    "deficient", "definite", "definitive", "delayed", "delectable", "delicious",
    "delightful", "delirious", "demanding", "dense", "dental", "dependable",
    "dependent", "descriptive", "deserted", "detailed", "determined", "devoted",
    "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted",
    "direct", "disastrous", "discrete", "disfigured", "disgusting", "disloyal",
    "dismal", "distant", "downright", "dreary", "dirty", "disguised", "dishonest",
    "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting",
    "double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry",
    "dual", "dull", "dutiful", "each", "eager", "earnest", "early", "easy",
    "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly",
    "electric", "elegant", "elementary", "elliptical", "embarrassed",
    "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting",
    "energetic", "enlightened", "enormous", "enraged", "entire", "envious",
    "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even",
    "evergreen", "everlasting", "every", "evil", "exalted", "excellent",
    "exemplary", "exhausted", "excitable", "excited", "exciting", "exotic",
    "expensive", "experienced", "expert", "extraneous", "extroverted", "fabulous",
    "failing", "faint", "fair", "faithful", "fake", "false", "familiar", "famous",
    "fancy", "fantastic", "far", "faraway", "fast", "fat", "fatal", "fatherly",
    "favorable", "favorite", "fearful", "fearless", "feisty", "feline", "female",
    "feminine", "few", "fickle", "filthy", "fine", "finished", "firm", "first",
    "firsthand", "fitting", "fixed", "flaky", "flamboyant", "flashy", "flat",
    "flawed", "flawless", "flickering", "flimsy", "flippant", "flowery", "fluffy",
    "fluid", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful",
    "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant", "frail",
    "frank", "frayed", "free", "French", "fresh", "frequent", "friendly",
    "frightened", "frightening", "frigid", "frilly", "frizzy", "frivolous",
    "front", "frosty", "frozen", "frugal", "fruitful", "full", "fumbling",
    "functional", "funny", "fussy", "fuzzy", "gargantuan", "gaseous", "general",
    "generous", "gentle", "genuine", "giant", "giddy", "gigantic", "gifted",
    "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glistening",
    "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good",
    "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular",
    "grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim",
    "grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded",
    "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guilty",
    "gullible", "gummy", "hairy", "half", "handmade", "handsome", "handy", "happy",
    "hard", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful",
    "haunting", "healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty",
    "helpful", "helpless", "hidden", "hideous", "high", "hilarious", "hoarse",
    "hollow", "homely", "honest", "honorable", "honored", "hopeful", "horrible",
    "hospitable", "hot", "huge", "humble", "humiliating", "humming", "humongous",
    "hungry", "hurtful", "husky", "icky", "icy", "ideal", "idealistic",
    "identical", "idle", "idiotic", "idolized", "ignorant", "ill", "illegal",
    "illiterate", "illustrious", "imaginary", "imaginative", "immaculate",
    "immaterial", "immediate", "immense", "impassioned", "impeccable", "impartial",
    "imperfect", "imperturbable", "impish", "impolite", "important", "impossible",
    "impractical", "impressionable", "impressive", "improbable", "impure",
    "inborn", "incomparable", "incompatible", "incomplete", "inconsequential",
    "incredible", "indelible", "inexperienced", "indolent", "infamous",
    "infantile", "infatuated", "inferior", "infinite", "informal", "innocent",
    "insecure", "insidious", "insignificant", "insistent", "instructive",
    "insubstantial", "intelligent", "intent", "intentional", "interesting",
    "internal", "international", "intrepid", "ironclad", "irresponsible",
    "irritating", "itchy", "jaded", "jagged", "jaunty", "jealous", "jittery",
    "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious",
    "juicy", "jumbo", "junior", "jumpy", "juvenile", "kaleidoscopic", "keen",
    "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty",
    "knowledgeable", "knowing", "known", "kooky", "kosher", "lame", "lanky",
    "large", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading",
    "lean", "leafy", "left", "legal", "legitimate", "light", "lighthearted",
    "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid",
    "little", "live", "lively", "livid", "loathsome", "lone", "lonely", "long",
    "loose", "lopsided", "lost", "loud", "lovable", "lovely", "loving", "low",
    "loyal", "lucky", "lumbering", "luminous", "lumpy", "lustrous", "luxurious",
    "mad", "magnificent", "majestic", "major", "male", "mammoth", "married",
    "marvelous", "masculine", "massive", "mature", "meager", "mealy", "mean",
    "measly", "meaty", "medical", "mediocre", "medium", "meek", "mellow",
    "melodic", "memorable", "menacing", "merry", "messy", "metallic", "mild",
    "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly",
    "misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous",
    "monthly", "monumental", "moral", "mortified", "motherly", "motionless",
    "mountainous", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy",
    "musty", "muted", "mysterious", "naive", "narrow", "nasty", "natural",
    "naughty", "nautical", "near", "neat", "necessary", "needy", "negative",
    "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice",
    "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal",
    "notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious",
    "nutty", "obedient", "obese", "oblong", "oily", "oblong", "obvious",
    "occasional", "odd", "oddball", "offbeat", "offensive", "official", "old",
    "only", "open", "optimal", "optimistic", "opulent", "orange", "orderly",
    "organic", "ornate", "ornery", "ordinary", "original", "other", "our",
    "outlying", "outgoing", "outlandish", "outrageous", "outstanding", "oval",
    "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale",
    "paltry", "parallel", "parched", "partial", "passionate", "past", "pastel",
    "peaceful", "peppery", "perfect", "perfumed", "periodic", "perky", "personal",
    "pertinent", "pesky", "pessimistic", "petty", "phony", "physical", "piercing",
    "pink", "pitiful", "plain", "plaintive", "plastic", "playful", "pleasant",
    "pleased", "pleasing", "plump", "plush", "polished", "polite", "political",
    "pointed", "pointless", "poised", "poor", "popular", "portly", "posh",
    "positive", "possible", "potable", "powerful", "powerless", "practical",
    "precious", "present", "prestigious", "pretty", "precious", "previous",
    "pricey", "prickly", "primary", "prime", "pristine", "private", "prize",
    "probable", "productive", "profitable", "profuse", "proper", "proud",
    "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy", "putrid",
    "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly",
    "queasy", "querulous", "questionable", "quick", "quiet", "quintessential",
    "quirky", "quixotic", "quizzical", "radiant", "ragged", "rapid", "rare",
    "rash", "raw", "recent", "reckless", "rectangular", "ready", "real",
    "realistic", "reasonable", "red", "reflecting", "regal", "regular", "reliable",
    "relieved", "remarkable", "remorseful", "remote", "repentant", "required",
    "respectful", "responsible", "repulsive", "revolving", "rewarding", "rich",
    "rigid", "right", "ringed", "ripe", "roasted", "robust", "rosy", "rotating",
    "rotten", "rough", "round", "rowdy", "royal", "rubbery", "rundown", "ruddy",
    "rude", "runny", "rural", "rusty", "sad", "safe", "salty", "same", "sandy",
    "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared",
    "scary", "scented", "scholarly", "scientific", "scornful", "scratchy",
    "scrawny", "second", "secondary", "secret", "selfish", "sentimental",
    "separate", "serene", "serious", "serpentine", "several", "severe", "shabby",
    "shadowy", "shady", "shallow", "shameful", "shameless", "sharp", "shimmering",
    "shiny", "shocked", "shocking", "shoddy", "short", "showy", "shrill", "shy",
    "sick", "silent", "silky", "silly", "silver", "similar", "simple",
    "simplistic", "sinful", "single", "sizzling", "skeletal", "skinny", "sleepy",
    "slight", "slim", "slimy", "slippery", "slow", "slushy", "small", "smart",
    "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling",
    "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "spherical",
    "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "Spanish",
    "sparkling", "sparse", "specific", "spectacular", "speedy", "spicy", "spiffy",
    "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square",
    "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard",
    "starchy", "stark", "starry", "steep", "sticky", "stiff", "stimulating",
    "stingy", "stormy", "straight", "strange", "steel", "strict", "strident",
    "striking", "striped", "strong", "studious", "stunning", "stupendous",
    "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial",
    "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb",
    "superficial", "superior", "supportive", "surprised", "suspicious", "svelte",
    "sweaty", "sweet", "sweltering", "swift", "sympathetic", "tall", "talkative",
    "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious",
    "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific",
    "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty",
    "this", "thorough", "thorny", "those", "thoughtful", "threadbare", "thrifty",
    "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn",
    "total", "tough", "traumatic", "treasured", "tremendous", "tragic", "trained",
    "tremendous", "triangular", "tricky", "trifling", "trim", "trivial",
    "troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby",
    "turbulent", "twin", "ugly", "ultimate", "unacceptable", "unaware",
    "uncomfortable", "uncommon", "unconscious", "understated", "unequaled",
    "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy",
    "unhealthy", "uniform", "unimportant", "unique", "united", "unkempt",
    "unknown", "unlawful", "unlined", "unlucky", "unnatural", "unpleasant",
    "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady",
    "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual",
    "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat",
    "upright", "upset", "urban", "usable", "used", "useful", "useless", "utilized",
    "utter", "vacant", "vague", "vain", "valid", "valuable", "vapid", "variable",
    "vast", "velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious",
    "victorious", "vigilant", "vigorous", "villainous", "violet", "violent",
    "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voluminous",
    "wan", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful",
    "watchful", "waterlogged", "watery", "wavy", "wealthy", "weak", "weary",
    "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome", "wet",
    "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping",
    "wicked", "wide", "wiggly", "wild", "willing", "wilted", "winding", "windy",
    "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful", "wooden",
    "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst",
    "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing",
    "wrong", "wry", "yawning", "yearly", "yellow", "yellowish", "young",
    "youthful", "yummy", "zealous", "zesty", "zigzag"]

  // prettier-ignore
  static nouns = ["people", "history", "way", "art", "world", "information", "map",
    "two", "family", "government", "health", "system", "computer", "meat", "year",
    "thanks", "music", "person", "reading", "method", "data", "food",
    "understanding", "theory", "law", "bird", "literature", "problem", "software",
    "control", "knowledge", "power", "ability", "economics", "love", "internet",
    "television", "science", "library", "nature", "fact", "product", "idea",
    "temperature", "investment", "area", "society", "activity", "story",
    "industry", "media", "thing", "oven", "community", "definition", "safety",
    "quality", "development", "language", "management", "player", "variety",
    "video", "week", "security", "country", "exam", "movie", "organization",
    "equipment", "physics", "analysis", "policy", "series", "thought", "basis",
    "boyfriend", "direction", "strategy", "technology", "army", "camera",
    "freedom", "paper", "environment", "child", "instance", "month", "truth",
    "marketing", "university", "writing", "article", "department", "difference",
    "goal", "news", "audience", "fishing", "growth", "income", "marriage", "user",
    "combination", "failure", "meaning", "medicine", "philosophy", "teacher",
    "communication", "night", "chemistry", "disease", "disk", "energy", "nation",
    "road", "role", "soup", "advertising", "location", "success", "addition",
    "apartment", "education", "math", "moment", "painting", "politics",
    "attention", "decision", "event", "property", "shopping", "student", "wood",
    "competition", "distribution", "entertainment", "office", "population",
    "president", "unit", "category", "cigarette", "context", "introduction",
    "opportunity", "performance", "driver", "flight", "length", "magazine",
    "newspaper", "relationship", "teaching", "cell", "dealer", "finding", "lake",
    "member", "message", "phone", "scene", "appearance", "association", "concept",
    "customer", "death", "discussion", "housing", "inflation", "insurance", "mood",
    "woman", "advice", "blood", "effort", "expression", "importance", "opinion",
    "payment", "reality", "responsibility", "situation", "skill", "statement",
    "wealth", "application", "city", "county", "depth", "estate", "foundation",
    "grandmother", "heart", "perspective", "photo", "recipe", "studio", "topic",
    "collection", "depression", "imagination", "passion", "percentage", "resource",
    "setting", "ad", "agency", "college", "connection", "criticism", "debt",
    "description", "memory", "patience", "secretary", "solution", "administration",
    "aspect", "attitude", "director", "personality", "psychology",
    "recommendation", "response", "selection", "storage", "version", "alcohol",
    "argument", "complaint", "contract", "emphasis", "highway", "loss",
    "membership", "possession", "preparation", "steak", "union", "agreement",
    "cancer", "currency", "employment", "engineering", "entry", "interaction",
    "mixture", "preference", "region", "republic", "tradition", "virus", "actor",
    "classroom", "delivery", "device", "difficulty", "drama", "election", "engine",
    "football", "guidance", "hotel", "owner", "priority", "protection",
    "suggestion", "tension", "variation", "anxiety", "atmosphere", "awareness",
    "bath", "bread", "candidate", "climate", "comparison", "confusion",
    "construction", "elevator", "emotion", "employee", "employer", "guest",
    "height", "leadership", "mall", "manager", "operation", "recording", "sample",
    "transportation", "charity", "cousin", "disaster", "editor", "efficiency",
    "excitement", "extent", "feedback", "guitar", "homework", "leader", "mom",
    "outcome", "permission", "presentation", "promotion", "reflection",
    "refrigerator", "resolution", "revenue", "session", "singer", "tennis",
    "basket", "bonus", "cabinet", "childhood", "church", "clothes", "coffee",
    "dinner", "drawing", "hair", "hearing", "initiative", "judgment", "lab",
    "measurement", "mode", "mud", "orange", "poetry", "police", "possibility",
    "procedure", "queen", "ratio", "relation", "restaurant", "satisfaction",
    "sector", "signature", "significance", "song", "tooth", "town", "vehicle",
    "volume", "wife", "accident", "airport", "appointment", "arrival",
    "assumption", "baseball", "chapter", "committee", "conversation", "database",
    "enthusiasm", "error", "explanation", "farmer", "gate", "girl", "hall",
    "historian", "hospital", "injury", "instruction", "maintenance",
    "manufacturer", "meal", "perception", "pie", "poem", "presence", "proposal",
    "reception", "replacement", "revolution", "river", "son", "speech", "tea",
    "village", "warning", "winner", "worker", "writer", "assistance", "breath",
    "buyer", "chest", "chocolate", "conclusion", "contribution", "cookie",
    "courage", "dad", "desk", "drawer", "establishment", "examination", "garbage",
    "grocery", "honey", "impression", "improvement", "independence", "insect",
    "inspection", "inspector", "king", "ladder", "menu", "penalty", "piano",
    "potato", "profession", "professor", "quantity", "reaction", "requirement",
    "salad", "sister", "supermarket", "tongue", "weakness", "wedding", "affair",
    "ambition", "analyst", "apple", "assignment", "assistant", "bathroom",
    "bedroom", "beer", "birthday", "celebration", "championship", "cheek",
    "client", "consequence", "departure", "diamond", "dirt", "ear", "fortune",
    "friendship", "funeral", "gene", "girlfriend", "hat", "indication",
    "intention", "lady", "midnight", "negotiation", "obligation", "passenger",
    "pizza", "platform", "poet", "pollution", "recognition", "reputation", "shirt",
    "sir", "speaker", "stranger", "surgery", "sympathy", "tale", "throat",
    "trainer", "uncle", "youth", "time", "work", "film", "water", "money",
    "example", "while", "business", "study", "game", "life", "form", "air", "day",
    "place", "number", "part", "field", "fish", "back", "process", "heat", "hand",
    "experience", "job", "book", "end", "point", "type", "home", "economy",
    "value", "body", "market", "guide", "interest", "state", "radio", "course",
    "company", "price", "size", "card", "list", "mind", "trade", "line", "care",
    "group", "risk", "word", "fat", "force", "key", "light", "training", "name",
    "school", "top", "amount", "level", "order", "practice", "research", "sense",
    "service", "piece", "web", "boss", "sport", "fun", "house", "page", "term",
    "test", "answer", "sound", "focus", "matter", "kind", "soil", "board", "oil",
    "picture", "access", "garden", "range", "rate", "reason", "future", "site",
    "demand", "exercise", "image", "case", "cause", "coast", "action", "age",
    "bad", "boat", "record", "result", "section", "building", "mouse", "cash",
    "class", "nothing", "period", "plan", "store", "tax", "side", "subject",
    "space", "rule", "stock", "weather", "chance", "figure", "man", "model",
    "source", "beginning", "earth", "program", "chicken", "design", "feature",
    "head", "material", "purpose", "question", "rock", "salt", "act", "birth",
    "car", "dog", "object", "scale", "sun", "note", "profit", "rent", "speed",
    "style", "war", "bank", "craft", "half", "inside", "outside", "standard",
    "bus", "exchange", "eye", "fire", "position", "pressure", "stress",
    "advantage", "benefit", "box", "frame", "issue", "step", "cycle", "face",
    "item", "metal", "paint", "review", "room", "screen", "structure", "view",
    "account", "ball", "discipline", "medium", "share", "balance", "bit", "black",
    "bottom", "choice", "gift", "impact", "machine", "shape", "tool", "wind",
    "address", "average", "career", "culture", "morning", "pot", "sign", "table",
    "task", "condition", "contact", "credit", "egg", "hope", "ice", "network",
    "north", "square", "attempt", "date", "effect", "link", "post", "star",
    "voice", "capital", "challenge", "friend", "self", "shot", "brush", "couple",
    "debate", "exit", "front", "function", "lack", "living", "plant", "plastic",
    "spot", "summer", "taste", "theme", "track", "wing", "brain", "button",
    "click", "desire", "foot", "gas", "influence", "notice", "rain", "wall",
    "base", "damage", "distance", "feeling", "pair", "savings", "staff", "sugar",
    "target", "text", "animal", "author", "budget", "discount", "file", "ground",
    "lesson", "minute", "officer", "phase", "reference", "register", "sky",
    "stage", "stick", "title", "trouble", "bowl", "bridge", "campaign",
    "character", "club", "edge", "evidence", "fan", "letter", "lock", "maximum",
    "novel", "option", "pack", "park", "plenty", "quarter", "skin", "sort",
    "weight", "baby", "background", "carry", "dish", "factor", "fruit", "glass",
    "joint", "master", "muscle", "red", "strength", "traffic", "trip", "vegetable",
    "appeal", "chart", "gear", "ideal", "kitchen", "land", "log", "mother", "net",
    "party", "principle", "relative", "sale", "season", "signal", "spirit",
    "street", "tree", "wave", "belt", "bench", "commission", "copy", "drop",
    "minimum", "path", "progress", "project", "sea", "south", "status", "stuff",
    "ticket", "tour", "angle", "blue", "breakfast", "confidence", "daughter",
    "degree", "doctor", "dot", "dream", "duty", "essay", "father", "fee",
    "finance", "hour", "juice", "limit", "luck", "milk", "mouth", "peace", "pipe",
    "seat", "stable", "storm", "substance", "team", "trick", "afternoon", "bat",
    "beach", "blank", "catch", "chain", "consideration", "cream", "crew", "detail",
    "gold", "interview", "kid", "mark", "match", "mission", "pain", "pleasure",
    "score", "screw", "sex", "shop", "shower", "suit", "tone", "window", "agent",
    "band", "block", "bone", "calendar", "cap", "coat", "contest", "corner",
    "court", "cup", "district", "door", "east", "finger", "garage", "guarantee",
    "hole", "hook", "implement", "layer", "lecture", "lie", "manner", "meeting",
    "nose", "parking", "partner", "profile", "respect", "rice", "routine",
    "schedule", "swimming", "telephone", "tip", "winter", "airline", "bag",
    "battle", "bed", "bill", "bother", "cake", "code", "curve", "designer",
    "dimension", "dress", "ease", "emergency", "evening", "extension", "farm",
    "fight", "gap", "grade", "holiday", "horror", "horse", "host", "husband",
    "loan", "mistake", "mountain", "nail", "noise", "occasion", "package",
    "patient", "pause", "phrase", "proof", "race", "relief", "sand", "sentence",
    "shoulder", "smoke", "stomach", "string", "tourist", "towel", "vacation",
    "west", "wheel", "wine", "arm", "aside", "associate", "bet", "blow", "border",
    "branch", "breast", "brother", "buddy", "bunch", "chip", "coach", "cross",
    "document", "draft", "dust", "expert", "floor", "god", "golf", "habit", "iron",
    "judge", "knife", "landscape", "league", "mail", "mess", "native", "opening",
    "parent", "pattern", "pin", "pool", "pound", "request", "salary", "shame",
    "shelter", "shoe", "silver", "tackle", "tank", "trust", "assist", "bake",
    "bar", "bell", "bike", "blame", "boy", "brick", "chair", "closet", "clue",
    "collar", "comment", "conference", "devil", "diet", "fear", "fuel", "glove",
    "jacket", "lunch", "monitor", "mortgage", "nurse", "pace", "panic", "peak",
    "plane", "reward", "row", "sandwich", "shock", "spite", "spray", "surprise",
    "till", "transition", "weekend", "welcome", "yard", "alarm", "bend", "bicycle",
    "bite", "blind", "bottle", "cable", "candle", "clerk", "cloud", "concert",
    "counter", "flower", "grandfather", "harm", "knee", "lawyer", "leather",
    "load", "mirror", "neck", "pension", "plate", "purple", "ruin", "ship",
    "skirt", "slice", "snow", "specialist", "stroke", "switch", "trash", "tune",
    "zone", "anger", "award", "bid", "bitter", "boot", "bug", "camp", "candy",
    "carpet", "cat", "champion", "channel", "clock", "comfort", "cow", "crack",
    "engineer", "entrance", "fault", "grass", "guy", "hell", "highlight",
    "incident", "island", "joke", "jury", "leg", "lip", "mate", "motor", "nerve",
    "passage", "pen", "pride", "priest", "prize", "promise", "resident", "resort",
    "ring", "roof", "rope", "sail", "scheme", "script", "sock", "station", "toe",
    "tower", "truck", "witness", "a", "you", "it", "can", "will", "if", "one",
    "many", "most", "other", "use", "make", "good", "look", "help", "go", "great",
    "being", "few", "might", "still", "public", "read", "keep", "start", "give",
    "human", "local", "general", "she", "specific", "long", "play", "feel", "high",
    "tonight", "put", "common", "set", "change", "simple", "past", "big",
    "possible", "particular", "today", "major", "personal", "current", "national",
    "cut", "natural", "physical", "show", "try", "check", "second", "call", "move",
    "pay", "let", "increase", "single", "individual", "turn", "ask", "buy",
    "guard", "hold", "main", "offer", "potential", "professional", "international",
    "travel", "cook", "alternative", "following", "special", "working", "whole",
    "dance", "excuse", "cold", "commercial", "low", "purchase", "deal", "primary",
    "worth", "fall", "necessary", "positive", "produce", "search", "present",
    "spend", "talk", "creative", "tell", "cost", "drive", "green", "support",
    "glad", "remove", "return", "run", "complex", "due", "effective", "middle",
    "regular", "reserve", "independent", "leave", "original", "reach", "rest",
    "serve", "watch", "beautiful", "charge", "active", "break", "negative", "safe",
    "stay", "visit", "visual", "affect", "cover", "report", "rise", "walk",
    "white", "beyond", "junior", "pick", "unique", "anything", "classic", "final",
    "lift", "mix", "private", "stop", "teach", "western", "concern", "familiar",
    "fly", "official", "broad", "comfortable", "gain", "maybe", "rich", "save",
    "stand", "young", "fail", "heavy", "hello", "lead", "listen", "valuable",
    "worry", "handle"]

  // prettier-ignore
  static determiners = ["a ", "all", "an", "another", "any", "both", "each",
    "either", "enough", "every", "half", "her", "his", "its", "next", "many", "me",
    "most", "much", "my", "neither", "one", "other", "our", "quite", "rather",
    "some", "such", "ten", "that", "the", "their", "these", "thirty", "this",
    "those", "what", "your"]

  static encode(board) {
    let num = 0;
    for (let i = 0; i < board.length; i++) {
      num = num * 26;
      if (board[i] != null) {
        num = num + 1 + board[i][0] * 5 + board[i][1];
      }
    }

    const d = [0, 0, 0];
    d[2] = num % 1312;
    num = Math.floor(num / 1312);
    d[1] = num % 1312;
    num = Math.floor(num / 1312);
    d[0] = num % 1312;
    num = Math.floor(num / 1312);
    if (num > 0) return null;

    return (
      this.adjectives[d[0]] +
      " " +
      this.adjectives[d[1]] +
      " " +
      this.nouns[d[2]]
    );
  }

  static decode(phrase) {
    const words = phrase.split(" ");
    const d0 = this.adjectives.indexOf(words[0]);
    const d1 = this.adjectives.indexOf(words[1]);
    const d2 = this.nouns.indexOf(words[2]);

    let num = d2 + d1 * 1312 + d0 * 1312 * 1312;

    const board = [];

    while (num > 0) {
      const d = num % 26;
      num = Math.floor(num / 26);
      if (d == 0) {
        board.push(null);
      } else {
        board.push([Math.floor((d - 1) / 5), (d - 1) % 5]);
      }
    }

    return board.reverse();
  }
}

class LunarLockoutSolver {
  static randomBoards = []; // each elements is [board, solution]
  static colors = ["orange", "green", "yellow", "red", "purple", "blue"];
  static directions = {
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
  };

  static getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  static generateRandomBoardWithDifficulty(difficulty, steps) {
    for (let i = 0; i < this.randomBoards.length; i++) {
      const element = this.randomBoards[i];
      if (element[1].length >= difficulty * 0.66) {
        this.randomBoards.splice(i, 1);
        return element[0];
      }
    }

    if (difficulty < 1) difficulty = 1;
    if (difficulty > 10) difficulty = 10;
    while (true) {
      const board = this.generateRandomBoard();
      const solution = this.solveIterativeDescent(board, steps);
      if (solution != null && solution.length >= difficulty * 0.66) {
        return [board, solution];
      } else if (solution != null) {
        this.randomBoards.push([board, solution]);
      }
    }
  }

  static generateRandomBoard() {
    const vals = new Set();
    while (vals.size < this.colors.length) {
      vals.add(this.getRandomInt(25));
    }
    const ret = [];
    for (const val of vals.values()) {
      ret.push([Math.floor(val / 5), val % 5]);
    }
    return ret;
  }

  static solveIterativeDescent(board, steps) {
    let solution = null;
    for (const step of steps) {
      solution = this.solve(board, step);
      if (solution != null) {
        return solution;
      }
    }
    return null;
  }

  static solve(board, steps) {
    if (this.isSolved(board)) return [];
    if (steps > 0) {
      for (let color = 0; color < this.colors.length; color++) {
        if (board[color] == null) continue;
        for (const direction in this.directions) {
          if (this.canMove(board, color, direction)) {
            const boardCopy = JSON.parse(JSON.stringify(board));
            this.move(boardCopy, color, direction);
            if (this.isSolved(boardCopy)) {
              return [[this.colors[color], direction]];
            } else {
              const solution = this.solve(boardCopy, steps - 1);
              if (solution != null) {
                solution.unshift([this.colors[color], direction]);
                return solution;
              }
            }
          }
        }
      }
    }
    return null;
  }

  static move(board, color, direction) {
    const position = board[color];
    if (position == null) {
      console.log("position is null 0");
    }
    let found = null;
    switch (direction) {
      case this.directions.UP:
        for (let i = 0; i < this.colors.length; i++) {
          if (board[i] == null) continue;
          if (
            i != color &&
            board[i][1] == position[1] &&
            board[i][0] < position[0]
          ) {
            if (found == null || board[i][0] > found) {
              // find greatest row above our row
              found = board[i][0];
            }
          }
        }
        if (found != null && found < position[0] - 1) {
          board[color][0] = found + 1;
        } else if (found == null) {
          console.log("found nothing 0");
        }
        break;
      case this.directions.DOWN:
        for (let i = 0; i < this.colors.length; i++) {
          if (board[i] == null) continue;
          if (
            i != color &&
            board[i][1] == position[1] &&
            board[i][0] > position[0]
          ) {
            if (found == null || board[i][0] < found) {
              // find smallest row below our row
              found = board[i][0];
            }
          }
        }
        if (found != null && found > position[0] + 1) {
          board[color][0] = found - 1;
        } else if (found == null) {
          console.log("found nothing 1");
        }
        break;
      case this.directions.LEFT:
        for (let i = 0; i < this.colors.length; i++) {
          if (board[i] == null) continue;
          if (
            i != color &&
            board[i][0] == position[0] &&
            board[i][1] < position[1]
          ) {
            if (found == null || board[i][1] > found) {
              // find greatest col before ours
              found = board[i][1];
            }
          }
        }
        if (found != null && found < position[1] - 1) {
          board[color][1] = found + 1;
        } else if (found == null) {
          console.log("found nothing 2");
        }
        break;
      case this.directions.RIGHT:
        for (let i = 0; i < this.colors.length; i++) {
          if (board[i] == null) continue;
          if (
            i != color &&
            board[i][0] == position[0] &&
            board[i][1] > position[1]
          ) {
            if (found == null || board[i][1] < found) {
              // find smallest col after ours
              found = board[i][1];
            }
          }
        }
        if (found != null && found > position[1] + 1) {
          board[color][1] = found - 1;
        } else if (found == null) {
          console.log("found nothing 3");
        }
        break;
    }
  }

  static getMoves(board, color) {
    moves = [];
    position = board[color];
    if (position == null) {
      return [];
    }
    let addup = true;
    let addleft = true;
    let addright = true;
    let adddown = true;
    for (let i = 0; i < this.colors.length; i++) {
      if (board[i] == null) continue;
      if (
        addup &&
        i != color &&
        board[i][1] == position[1] &&
        board[i][0] < position[0] - 1
      ) {
        moves.push(this.directions.UP);
        addup = false;
      }
      if (
        adddown &&
        i != color &&
        board[i][1] == position[1] &&
        board[i][0] > position[0] + 1
      ) {
        moves.push(this.directions.DOWN);
        adddown = false;
      }
      if (
        addleft &&
        i != color &&
        board[i][0] == position[0] &&
        board[i][1] < position[1] - 1
      ) {
        moves.push(this.directions.LEFT);
        addleft = false;
      }
      if (
        addright &&
        i != color &&
        board[i][0] == position[0] &&
        board[i][1] > position[1] + 1
      ) {
        moves.push(this.directions.RIGHT);
        addright = false;
      }
    }

    return moves;
  }

  static canMove(board, color, direction) {
    const position = board[color];
    if (position == null) {
      console.log("position is null 0");
    }

    // some optimizations, we can immediately disregard these moves
    if (position[0] <= 1 && direction == this.directions.UP) return false;
    if (position[0] >= 3 && direction == this.directions.DOWN) return false;
    if (position[1] <= 1 && direction == this.directions.LEFT) return false;
    if (position[1] >= 3 && direction == this.directions.RIGHT) return false;
    for (let i = 0; i < this.colors.length; i++) {
      if (board[i] == null) continue;
      if (i != color && this.canBlockWithAMove(board, color, i, direction))
        return true;
    }
    return false;
  }

  // does the blocker block the mover in the direction?
  // note that this will also check if there is actually a move. if the
  // blocker is right next to the mover, and it blocks it, but there
  // is no move, then the return value will be false.
  static canBlockWithAMove(board, moverColor, blockerColor, direction) {
    const position = board[moverColor];

    switch (direction) {
      case this.directions.UP:
        if (
          board[blockerColor][1] == position[1] &&
          board[blockerColor][0] < position[0] - 1
        )
          return true;
        break;
      case this.directions.DOWN:
        if (
          board[blockerColor][1] == position[1] &&
          board[blockerColor][0] > position[0] + 1
        )
          return true;
        break;
      case this.directions.LEFT:
        if (
          board[blockerColor][0] == position[0] &&
          board[blockerColor][1] < position[1] - 1
        )
          return true;
        break;
      case this.directions.RIGHT:
        if (
          board[blockerColor][0] == position[0] &&
          board[blockerColor][1] > position[1] + 1
        )
          return true;
        break;
    }
    return false;
  }

  static isSolved(board) {
    return board[3][0] == 2 && board[3][1] == 2;
  }
}

(function () {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  let selected = [0, 0];
  let shouldMoveColor = false;
  let gameOver = false;
  let youDidIt = false;
  let level = 0;
  let random = false;
  let mystorage = null;

  const uiColors = [
    "white",
    "orange",
    "green",
    "yellow",
    "red",
    "purple",
    "blue"
  ];

  // boards gives the position of each of the above uiColors on the board.
  // the entries start with orange, while is in the uiColors array for convenience.
  // for example,
  //  [[0, 4], [1, 2], [3, 3], [4, 4], [2, 1]], means:
  //  	orange is in position [0, 4]
  //  	green is in position [1, 2]
  // and so on.
  //
  // prettier-ignore
  const boards = [
    [[0, 4], [1, 2], [3, 3], [4, 4], [2, 1]],
    [[0, 2], [1, 4], [3, 3], [4, 1], [2, 1]],
    [[0, 3], [1, 1], [4, 1], [4, 4], [3, 3]],
    [[0, 0], [0, 4], [3, 2], [4, 1], [1, 3]],
    [[0, 3], [1, 1], , [4, 1], [4, 3]],
    [[0, 0], [3, 4], , [0, 2], [4, 1]],
    [[0, 2], [1, 0], [4, 3], [4, 1], [2, 3]],
    [[0, 0], [0, 3], [4, 0], [3, 3], [1, 1]],
    [[0, 4], [2, 2], [4, 3], [0, 2], [3, 1]],
    [[1, 1], [2, 4], [4, 2], [4, 4], [4, 0]],
    [[0, 2], [1, 0], [2, 2], [1, 2], [1, 4], [3, 2]],
    [[0, 1], [1, 4], , [4, 4], [4, 1]],
    [[0, 1], [1, 3], [4, 2], [3, 3], [3, 0]],
    [[0, 2], [1, 4], [3, 3], [4, 1], [2, 0], [4, 0]],
    [[0, 4], [1, 1], [3, 2], [4, 4], [2, 4]],
    [[0, 0], [2, 1], [4, 1], [0, 2], [2, 4]],
    [[0, 2], [0, 4], [3, 3], [4, 1], [2, 1]],
    [[4, 0], [4, 2], , [0, 2], [4, 4]],
    [[0, 1], [1, 2], [3, 0], [4, 4], [2, 3], [4, 2]],
    [[0, 1], [1, 4], [4, 1], [3, 3], [2, 0]],
    [[1, 2], [2, 2], [3, 0], [0, 2], [2, 4], [4, 3]],
    [[1, 0], [1, 4], [4, 0], [4, 4], [3, 3]],
    [[0, 1], [1, 0], [3, 4], [4, 1], [1, 3]],
    [[1, 3], [2, 1], [4, 4], [4, 0], [4, 3]],
    [[1, 0], [1, 2], [4, 4], [4, 1], [1, 3]],
    [[0, 0], [1, 4], [3, 3], [0, 2], [2, 0]],
    [[0, 1], [0, 4], [2, 3], [4, 4], [2, 0], [4, 0]],
    [[0, 1], [0, 4], [3, 0], [4, 4], [2, 4]],
    [[0, 0], [0, 4], [4, 4], [0, 2], [4, 0]],
    [[1, 0], [1, 4], [4, 1], [0, 2], [2, 0], [4, 3]],
    [[0, 0], [0, 2], [2, 0], [3, 3], [1, 4], [4, 1]],
    [[0, 1], [1, 4], [4, 2], [4, 1], [4, 0]],
    [[0, 0], [0, 1], [3, 0], [4, 4], [1, 4], [4, 3]],
    [[0, 2], [0, 4], [3, 3], [4, 4], [2, 0], [4, 0]],
    [[0, 0], [0, 4], [4, 0], [0, 2], [1, 2], [4, 4]],
    [[1, 0], [1, 4], [3, 4], [0, 2], [3, 0], [4, 2]],
    [[0, 0], [0, 3], [3, 0], [3, 3], [0, 4]],
    [[0, 2], [0, 4], [2, 1], [4, 1], [2, 0], [4, 4]],
    [[0, 0], [0, 2], [2, 0], [4, 4], [0, 4], [4, 0]],
    [[0, 0], [0, 2], [3, 4], [4, 1], [0, 4]],
  ];
  let undoState = [];

  function initBoard() {
    const container = document.getElementById("container");
    container.innerHTML = "";
    selected = [0, 0];
    gameOver = false;
    youDidIt = false;
    shouldMoveColor = false;
    undoState = [];

    if (level >= boards.length) {
      container.innerText =
        "You have finished all the levels! Congratulations!";
    } else {
      for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
          board[i][j] = 0;
        }
      }

      if (random === "true") {
        [cur, s] = LunarLockoutSolver.generateRandomBoardWithDifficulty(
          7,
          [3, 4, 5, 6, 7]
        );
        console.log(s);
        document.getElementById("level").innerHTML =
          "Level: Random (solution is " +
          s.length +
          " steps). <a href=?random=" +
          escape(BoardPhraseEncoding.encode(cur)) +
          ">Link to board</a>";
      } else if (random === "false") {
        cur = boards[level];
        document.getElementById("level").innerText = "Level: " + (level + 1);
      } else {
        cur = BoardPhraseEncoding.decode(random);
        s = LunarLockoutSolver.solveIterativeDescent(cur, [4, 5, 6, 7, 8]);
        console.log(s);
        document.getElementById("level").innerHTML =
          "Level: Random (solution is " +
          s.length +
          " steps). <a href=?random=" +
          escape(BoardPhraseEncoding.encode(cur)) +
          ">Link to board</a>";
      }

      for (let i = 0; i < 6; i++) {
        if (cur[i] != null) {
          board[cur[i][0]][cur[i][1]] = i + 1;
        }
      }
      document.getElementById("you-did-it").style.display = "none";
      document.getElementById("game-over").style.display = "none";
      makeRows(5, 5);
      syncUndoVisibility();
    }
  }

  function createHammer(elem) {
    hammer = new Hammer(elem);
    hammer.get("pinch").set({ enable: false });
    hammer.get("rotate").set({ enable: false });
    hammer.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
    return hammer;
  }

  function moveSwipeEvent(ev) {
    if (shouldMoveColor) {
      if (ev.type === "swipeleft") {
        move([0, -1]);
      } else if (ev.type === "swiperight") {
        move([0, 1]);
      } else if (ev.type === "swipeup") {
        move([-1, 0]);
      } else if (ev.type === "swipedown") {
        move([1, 0]);
      }
    }
  }

  function makeRows(rows, cols) {
    const container = document.getElementById("container");
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const cell = document.createElement("div");
        cell.id = i + "-" + j;
        cell.style.background = uiColors[board[i][j]];
        if (i == 2 && j == 2) {
          centerDiv = document.createElement("div");
          centerDiv.id = "center-div";
          cell.style.setProperty("display", "inline-flex");
          cell.appendChild(centerDiv);
        }

        cell.onclick = function () {
          moveSelectedSquareTo(i, j);
          calcShouldMoveColor();
        };

        // listen to events...
        createHammer(cell).on(
          "swipeleft swiperight swipeup swipedown",
          function (ev) {
            moveSelectedSquareTo(i, j);
            calcShouldMoveColor();
            moveSwipeEvent(ev);
          }
        );

        container.appendChild(cell).className = "grid-item";
      }
    }
  }

  function move(dir) {
    if (!shouldMoveColor) {
      // just move the chosen square
      next = [selected[0] + dir[0], selected[1] + dir[1]];
      if (inBound(selected[0] + dir[0], selected[1] + dir[1])) {
        moveSelectedSquareTo(next[0], next[1]);
      }
    } else if (selected != null && board[selected[0]][selected[1]] != 0) {
      // move the selected color
      const color = board[selected[0]][selected[1]];
      next = [selected[0], selected[1]];
      while (
        inBound(next[0] + dir[0], next[1] + dir[1]) &&
        board[next[0] + dir[0]][next[1] + dir[1]] == 0
      ) {
        next = [next[0] + dir[0], next[1] + dir[1]];
      }
      if (!inBound(next[0] + dir[0], next[1] + dir[1])) {
        doGameOver();
        syncUndoVisibility();
      } else {
        undoState.push([color, selected]);
        board[selected[0]][selected[1]] = 0;
        document.getElementById(
          selected[0] + "-" + selected[1]
        ).style.background = uiColors[0];
        document
          .getElementById(selected[0] + "-" + selected[1])
          .classList.remove("selected-for-move");
        board[next[0]][next[1]] = color;
        document.getElementById(next[0] + "-" + next[1]).style.background =
          uiColors[color];
        moveSelectedSquareTo(next[0], next[1]);
        detectSuccess();
        syncUndoVisibility();
      }
    }
    shouldMoveColor = false;
  }

  function doUndo() {
    if (gameOver) {
      gameOver = false;
      document.getElementById("game-over").style.display = "none";
    } else if (undoState.length > 0) {
      const undoElem = undoState.pop();
      const color = undoElem[0];
      const lastPos = undoElem[1];
      for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
          if (board[i][j] == color) {
            board[i][j] = 0;
            board[lastPos[0]][lastPos[1]] = color;
            document.getElementById(i + "-" + j).style.background = uiColors[0];
            document.getElementById(
              lastPos[0] + "-" + lastPos[1]
            ).style.background = uiColors[color];
            break;
          }
        }
      }
    }
  }

  function detectSuccess() {
    if (board[2][2] == 4) {
      doYouDidIt();
    }
  }

  function doGameOver() {
    gameOver = true;
    youDidIt = false;
    document.getElementById("you-did-it").style.display = "none";
    document.getElementById("game-over").style.display = "block";
  }

  function doYouDidIt() {
    gameOver = false;
    youDidIt = true;
    document.getElementById("you-did-it").style.display = "block";
    document.getElementById("game-over").style.display = "none";
    mystorage.setItem("l" + level, "true");
  }

  function moveSelectedSquareTo(i, j) {
    if (selected != null) {
      document
        .getElementById(selected[0] + "-" + selected[1])
        .classList.remove("selected");
      document
        .getElementById(selected[0] + "-" + selected[1])
        .classList.remove("selected-for-move");
    }
    selected = [i, j];
    document
      .getElementById(selected[0] + "-" + selected[1])
      .classList.add("selected");
  }

  function calcShouldMoveColor() {
    shouldMoveColor = board[selected[0]][selected[1]] != 0;
    if (shouldMoveColor) {
      document
        .getElementById(selected[0] + "-" + selected[1])
        .classList.add("selected-for-move");
    } else {
      document
        .getElementById(selected[0] + "-" + selected[1])
        .classList.remove("selected-for-move");
    }
  }

  function inBound(x, y) {
    return x < 5 && y < 5 && x >= 0 && y >= 0;
  }

  function startGame() {
    initBoard();
  }

  function syncUndoVisibility() {
    if (undoState.length > 0 && !youDidIt) {
      document.getElementById("undo").style.display = "block";
    } else {
      document.getElementById("undo").style.display = "none";
    }
  }

  document.addEventListener("keyup", (e) => {
    if (!gameOver && !youDidIt) {
      if (e.code === "ArrowUp") {
        move([-1, 0]);
      } else if (e.code === "ArrowDown") {
        move([1, 0]);
      } else if (e.code === "ArrowLeft") {
        move([0, -1]);
      } else if (e.code === "ArrowRight") {
        move([0, 1]);
      } else if (e.code === "Enter") {
        calcShouldMoveColor();
      }
    }
  });

  function showHelp() {
    helpModal.show();
  }

  window.onload = function () {
    document.getElementById("next").addEventListener("click", function () {
      level = level + 1;
      if (urlParams.get("random")) {
        window.location.href = "?random=true";
      }
      startGame();
    });
    document.getElementById("restart").addEventListener("click", function () {
      startGame();
    });
    document.getElementById("undo").addEventListener("click", function () {
      doUndo();
    });
    document.getElementById("help").addEventListener("click", function () {
      showHelp();
    });

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    level = urlParams.get("level") || "0";
    random = urlParams.get("random") || "false";
    level = Math.min(Math.max(0, parseInt(level) - 1), boards.length - 1);
    mystorage = window.localStorage;
    if (random == "false") {
      for (let i = 0; i <= 40; i++) {
        if (mystorage.getItem("l" + i) != "true") {
          if (i > 0 && i != level) {
            picoModal({
              content:
                "Click <a href = ?level=" +
                (i + 1) +
                ">here</a> to go to the last uncompleted level (" +
                (i + 1) +
                ")",
              closeButton: false
            }).show();
          }
          break;
        }
      }
    }
    help =
      "<h1>How to play</h1>" +
      "<p>The objective of the game is to move the red square into the center. " +
      "You can move any colored square left, right, up or down by swiping or with arrow keys." +
      "<p>When moving in any direction, the square continues to move until it is stopped by another square." +
      "If there is no square to stop it, then it <b>slides off the end and the game is over</b>.";
    helpModal = picoModal({
      content: help,
      closeButton: false,
      overlayStyles: {
        backgroundColor: "#a7a7a7",
        opacity: 0.75
      },
      modalId: "help-modal",
      modalStyles: {
        left: "45%",
        position: "fixed",
        width: "80%",
        overflow: "auto",
        "background-color": "white",
        padding: "10px",
        "border-radius": "5px"
      }
    });

    startGame();
  };
})();
