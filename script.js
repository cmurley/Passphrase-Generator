/*
* Password Generator - Inspired by apasswordgenerator.website
*/

// I only want to generate PassPhrases - So I am only going to load some dictionary words
var words = ["has", "get", "see", "need", "know", "would", "find", "take", "want", "does", "learn", "become", "come", "include", "thank", "provide", "create", "add", "choose", "develop", "grow", "allow", "supply", "bring", "improve", "begin", "exist", "tend", "enjoy", "perform", "decide", "protect", "require", "occur", "write", "avoid", "prepare", "build", "achieve", "believe", "receive", "seem", "discuss", "realize", "contain", "follow", "refer", "solve", "prefer", "prevent", "ensure", "expect", "invest", "reduce", "speak", "appear", "explain", "explore", "involve", "lose", "afford", "agree", "hear", "remain", "apply", "forget", "rely", "vary", "obtain", "accept", "depend", "enter", "happen", "suggest", "survive", "compare", "imagine", "manage", "differ", "expand", "prove", "react", "relax", "replace", "borrow", "earn", "enable", "operate", "reflect", "send", "assume", "engage", "enhance", "examine", "install", "intend", "relate", "settle", "assure", "attract", "owe", "succeed", "suffer", "throw", "acquire", "adapt", "adjust", "argue", "arise", "confirm", "justify", "ought", "possess", "relieve", "retain", "shut", "compete", "consult", "deliver", "extend", "qualify", "retire", "rid", "weigh", "arrive", "attach", "behave", "ignore", "imply", "insist", "pursue", "specify", "warn", "accuse", "admire", "admit", "adopt", "ance", "approve", "attend", "belong", "commit", "deserve", "destroy", "inform", "pour", "propose", "remind", "shall", "submit", "suppose", "be", "have", "use", "make", "look", "help", "go", "being", "think", "read", "keep", "start", "give", "play", "feel", "put", "set", "change", "say", "cut", "show", "try", "check", "call", "move", "pay", "let", "turn", "ask", "buy", "guard", "hold", "offer", "travel", "cook", "dance", "excuse", "live", "deal", "mean", "fall", "produce", "search", "spend", "talk", "upset", "tell", "cost", "drive", "support", "remove", "return", "run", "reserve", "leave", "reach", "rest", "serve", "watch", "charge", "break", "stay", "visit", "affect", "cover", "report", "rise", "walk", "pick", "lift", "mix", "stop", "teach", "concern", "fly", "born", "gain", "save", "stand", "fail", "lead", "listen", "worry", "express", "handle", "meet", "release", "sell", "finish", "press", "ride", "spread", "spring", "wait", "display", "flow", "hit", "shoot", "touch", "cancel", "cry", "dump", "push", "select", "die", "eat", "fill", "jump", "kick", "pass", "pitch", "treat",
"used", "every", "large", "popular", "able", "basic", "known", "various", "several", "united", "hot", "useful", "mental", "scared", "old", "similar", "healthy", "medical", "federal", "entire", "strong", "actual", "poor", "happy", "cute", "helpful", "recent", "willing", "nice", "serious", "huge", "rare", "typical", "aware", "global", "legal", "capable", "foreign", "hungry", "severe", "unusual", "famous", "pure", "afraid", "obvious", "careful", "latter", "unhappy", "boring", "eastern", "logical", "strict", "civil", "former", "massive", "unfair", "visible", "alive", "angry", "lucky", "sorry", "ugly", "anxious", "curious", "inner", "sexual", "sudden", "unable", "weak", "wooden", "asleep", "decent", "guilty", "lonely", "mad", "nervous", "odd", "tall", "tiny", "more", "some", "one", "all", "many", "most", "other", "such", "even", "new", "just", "good", "any", "each", "much", "own", "great", "another", "same", "few", "free", "right", "still", "best", "public", "human", "both", "local", "sure", "better", "general", "enough", "long", "small", "less", "high", "certain", "little", "common", "next", "simple", "hard", "past", "big", "real", "major", "current", "left", "least", "natural", "short", "last", "single", "main", "lower", "open", "special", "working", "true", "whole", "clear", "dry", "easy", "cold", "full", "low", "primary", "worth", "present", "close", "green", "late", "fit", "glad", "proper", "complex", "content", "due", "middle", "regular", "fast", "wide", "active", "safe", "visual", "wrong", "ago", "quick", "ready", "white", "direct", "extra", "junior", "pretty", "unique", "classic", "final", "overall", "private", "western", "alone", "perfect", "bright", "broad", "flat", "rich", "warm", "young", "heavy", "correct", "leading", "slow", "clean", "fresh", "normal", "secret", "tough", "brown", "cheap", "deep", "secure", "thin", "cool", "extreme", "exact", "fair", "fine", "formal", "remote", "total", "vast", "lost", "smooth", "dark", "double", "equal", "firm", "minor", "raw", "soft", "solid", "weird", "amazing", "annual", "busy", "dead", "false", "round", "sharp", "thick", "wise", "initial", "narrow", "nearby", "proud", "wild", "adult", "apart", "brief", "crazy", "prior", "rough", "sad", "sick", "strange", "illegal", "loud", "mobile", "nasty", "royal", "senior", "super", "tight", "upper", "yellow", "funny", "gross", "ill", "spare", "sweet", "usual", "brave", "calm", "dirty",
"people", "history", "way", "art", "world", "map", "two", "family", "health", "system", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "theory", "law", "bird", "problem", "control", "power", "ability", "love", "science", "library", "nature", "fact", "product", "idea", "area", "society", "story", "media", "thing", "oven", "safety", "quality", "player", "variety", "video", "week", "country", "exam", "movie", "physics", "policy", "series", "thought", "basis", "army", "camera", "freedom", "paper", "child", "month", "truth", "writing", "article", "goal", "news", "fishing", "growth", "income", "user", "failure", "meaning", "teacher", "night", "disease", "disk", "energy", "nation", "road", "role", "soup", "success", "math", "moment", "event", "student", "wood", "office", "unit", "context", "driver", "flight", "length", "cell", "dealer", "finding", "lake", "member", "message", "phone", "scene", "concept", "death", "housing", "mood", "woman", "advice", "blood", "effort", "opinion", "payment", "reality", "skill", "wealth", "city", "county", "depth", "estate", "heart", "photo", "recipe", "studio", "topic", "passion", "setting", "ad", "agency", "college", "debt", "memory", "aspect", "storage", "version", "alcohol", "highway", "loss", "steak", "union", "cancer", "entry", "mixture", "region", "virus", "actor", "device", "drama", "engine", "hotel", "owner", "tension", "anxiety", "bath", "bread", "climate", "emotion", "guest", "height", "mall", "manager", "sample", "charity", "cousin", "editor", "extent", "guitar", "leader", "mom", "outcome", "revenue", "session", "singer", "tennis", "basket", "bonus", "cabinet", "church", "clothes", "coffee", "dinner", "drawing", "hair", "hearing", "lab", "mode", "mud", "orange", "poetry", "police", "queen", "ratio", "sector", "song", "tooth", "town", "vehicle", "volume", "wife", "airport", "arrival", "chapter", "error", "farmer", "gate", "girl", "hall", "injury", "meal", "pie", "poem", "river", "son", "speech", "tea", "village", "warning", "winner", "worker", "writer", "breath", "buyer", "chest", "cookie", "courage", "dad", "desk", "drawer", "garbage", "grocery", "honey", "insect", "king", "ladder", "menu", "penalty", "piano", "potato", "salad", "sister", "tongue", "wedding", "affair", "analyst", "apple", "bedroom", "beer", "cheek", "client", "diamond", "dirt", "ear", "fortune", "funeral", "gene", "hat", "lady"]

// Option to Add Numbers and Symbols
var numbers = "1234567890";
var symbols = "!@#$%^&*()+=-";

function genpassphrase(n) 
    {
        var result = "";
        for (var i = 0, w = words.length; i < n; i++) 
            {result += words[Math.floor(Math.random() * w)] + " ";}
        //var result = words[Math.floor(Math.random() * words.length)] + " " + words[Math.floor(Math.random() * words.length)] + " " + words[Math.floor(Math.random() * words.length)];
        //var result = verbs[Math.floor(Math.random() * verbs.length)] + "-" + adjectives[Math.floor(Math.random() * adjectives.length)] + "-" + nouns[Math.floor(Math.random() * nouns.length)];
        result = result.toUpperCase();
        return result;
    }

function randnum()
    {
        result = numbers[Math.floor(Math.random() * numbers.length)]
        return result;
    }

function randsym()
    {
        result = symbols[Math.floor(Math.random() * symbols.length)]
        return result;
    }

function showpass()
    {
        var n = 2;
        var options = ""
        var customSettings = [];
        customSettings[0] = document.getElementById('3wrd').checked;
        customSettings[1] = document.getElementById('numbers').checked;
        customSettings[2] = document.getElementById('symbols').checked;
        if (customSettings[0])
            {n = 3;}
        if (customSettings[1])
            {options += randnum();}
        if (customSettings[2])
            {options += randsym();}
        var div = document.getElementById('password');
        div.innerHTML = div.innerHTML + '<p class="password">' + genpassphrase(n) + '' + options + '</p><br>';
    }

function refresh()
    {
      document.getElementById('password').innerHTML="";
      showpass(); 
    }

window.onload = function()
    {
        showpass();
    }