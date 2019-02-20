{"filter":false,"title":"campground.js","tooltip":"/YelpCamp/models/campground.js","undoManager":{"mark":77,"position":77,"stack":[[{"start":{"row":0,"column":0},"end":{"row":7,"column":64},"action":"insert","lines":["// SCHEMA SETUP","var campgroundSchema = new mongoose.Schema({","    name: String,","    image: String,","    description: String","});","","var Campground = mongoose.model(\"Campground\", campgroundSchema);"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["v"],"id":3},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["a"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":[" "],"id":4}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":42},"action":"insert","lines":["    mongoose    = require(\"mongoose\");"],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":6}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":8},"action":"remove","lines":["    "],"id":7},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":[" "]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":8}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":16},"action":"remove","lines":["    "],"id":9},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"remove","lines":["e"]}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":[" "],"id":10}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["e"],"id":11}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":14},"action":"remove","lines":["var Campground"],"id":12},{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"insert","lines":["m"]},{"start":{"row":11,"column":1},"end":{"row":11,"column":2},"action":"insert","lines":["o"]},{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"insert","lines":["d"]}],[{"start":{"row":11,"column":3},"end":{"row":11,"column":4},"action":"insert","lines":["u"],"id":13},{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["l"]},{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":["e"]},{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["."]},{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["e"]},{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["x"]},{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["p"]},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["o"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["r"]}],[{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["t"],"id":14},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":15},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":[","],"id":16}],[{"start":{"row":6,"column":24},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["c"]},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["o"]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["m"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["m"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["e"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["n"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["t"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["s"]}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":[":"],"id":18}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":[" "],"id":19}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":16},"action":"insert","lines":["[]"],"id":20}],[{"start":{"row":7,"column":15},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":8,"column":0},"end":{"row":8,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":8},"action":"remove","lines":["    "],"id":22}],[{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":8},"action":"insert","lines":["    "],"id":24}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["{"],"id":25}],[{"start":{"row":8,"column":9},"end":{"row":10,"column":9},"action":"insert","lines":["","            ","        }"],"id":26}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["t"],"id":27},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["y"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["p"]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["e"]},{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":[":"]}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":[" "],"id":28}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["m"],"id":29},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["o"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["n"]},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["g"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["o"]},{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":["o"]}],[{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["s"],"id":30},{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["e"]},{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["."]}],[{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["S"],"id":31},{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":["c"]},{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":["h"]},{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["e"]},{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["m"]},{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"insert","lines":[","]},{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"insert","lines":["a"]}],[{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"remove","lines":["a"],"id":32},{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"remove","lines":[","]}],[{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"insert","lines":["a"],"id":33},{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"insert","lines":["."]},{"start":{"row":9,"column":34},"end":{"row":9,"column":35},"action":"insert","lines":["T"]}],[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["y"],"id":34},{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"insert","lines":["p"]},{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["e"]},{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["."]}],[{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":["O"],"id":35},{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":["b"]},{"start":{"row":9,"column":41},"end":{"row":9,"column":42},"action":"insert","lines":["j"]},{"start":{"row":9,"column":42},"end":{"row":9,"column":43},"action":"insert","lines":["e"]},{"start":{"row":9,"column":43},"end":{"row":9,"column":44},"action":"insert","lines":["c"]}],[{"start":{"row":9,"column":44},"end":{"row":9,"column":45},"action":"insert","lines":["t"],"id":36},{"start":{"row":9,"column":45},"end":{"row":9,"column":46},"action":"insert","lines":["I"]},{"start":{"row":9,"column":46},"end":{"row":9,"column":47},"action":"insert","lines":["d"]}],[{"start":{"row":9,"column":47},"end":{"row":9,"column":48},"action":"insert","lines":[","],"id":37}],[{"start":{"row":9,"column":48},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":38},{"start":{"row":10,"column":0},"end":{"row":10,"column":12},"action":"insert","lines":["            "]},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["r"]},{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["e"]},{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":["f"]},{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":[":"]}],[{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":[" "],"id":39},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["c"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["o"]}],[{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"remove","lines":["o"],"id":40},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"remove","lines":["c"]}],[{"start":{"row":10,"column":17},"end":{"row":10,"column":19},"action":"insert","lines":["\"\""],"id":41}],[{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["c"],"id":42},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["o"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["m"]},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["m"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["e"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["n"]},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":["t"]},{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":["s"]}],[{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"remove","lines":["s"],"id":43},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"remove","lines":["t"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"remove","lines":["n"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"remove","lines":["e"]},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"remove","lines":["m"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"remove","lines":["m"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"remove","lines":["o"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"remove","lines":["c"]}],[{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["C"],"id":44},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["o"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["m"]},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["m"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["e"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["n"]},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["s"],"id":45}],[{"start":{"row":6,"column":24},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":46},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":4},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":10,"column":4},"end":{"row":11,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["a"],"id":47},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["u"]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["t"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["h"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["o"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["r"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":[":"]}],[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":[" "],"id":48}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["{"],"id":49}],[{"start":{"row":7,"column":13},"end":{"row":9,"column":5},"action":"insert","lines":["","        ","    }"],"id":50}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["i"],"id":51},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["d"]},{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":[":"]}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":[" "],"id":52},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["{"]}],[{"start":{"row":8,"column":13},"end":{"row":10,"column":9},"action":"insert","lines":["","            ","        }"],"id":53}],[{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":[","],"id":54}],[{"start":{"row":10,"column":10},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":55},{"start":{"row":11,"column":0},"end":{"row":11,"column":8},"action":"insert","lines":["        "]},{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["u"]}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["s"],"id":56},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["e"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["r"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["n"]},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["a"]},{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["m"]},{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["e"]},{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":[":"]}],[{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":[" "],"id":57},{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["S"]},{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["t"]},{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["r"]},{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["i"]},{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["n"]},{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["g"]}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["t"],"id":58},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["y"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["p"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["e"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":[":"]}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":[" "],"id":59},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["m"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["o"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["n"]}],[{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["g"],"id":60},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["o"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["o"]},{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":["s"]},{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["."],"id":61},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["S"]},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["c"]},{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":["h"]},{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"insert","lines":["e"]},{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"insert","lines":["m"]},{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["a"]},{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"insert","lines":["."]}],[{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"insert","lines":["T"],"id":62},{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"insert","lines":["y"]},{"start":{"row":8,"column":37},"end":{"row":8,"column":38},"action":"insert","lines":["p"]},{"start":{"row":8,"column":38},"end":{"row":8,"column":39},"action":"insert","lines":["e"]},{"start":{"row":8,"column":39},"end":{"row":8,"column":40},"action":"insert","lines":["s"]}],[{"start":{"row":8,"column":40},"end":{"row":8,"column":41},"action":"insert","lines":["."],"id":63},{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"insert","lines":["O"]},{"start":{"row":8,"column":42},"end":{"row":8,"column":43},"action":"insert","lines":["b"]},{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"insert","lines":["j"]},{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"insert","lines":["e"]},{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["c"]},{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["t"]}],[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["I"],"id":64},{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"insert","lines":["d"]},{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":[";"]}],[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"remove","lines":[";"],"id":65}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["r"],"id":66},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["e"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["f"]}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":[":"],"id":67}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":[" "],"id":68}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":19},"action":"insert","lines":["\"\""],"id":69}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["U"],"id":70},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["S"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["e"]},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["r"]}],[{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"remove","lines":["r"],"id":71},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"remove","lines":["e"]},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"remove","lines":["S"]}],[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["s"],"id":72},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["e"]},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["r"]}],[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":[";"],"id":73}],[{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":[","],"id":74}],[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"remove","lines":[";"],"id":75}],[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":[","],"id":76}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["    "],"id":77},{"start":{"row":15,"column":4},"end":{"row":16,"column":0},"action":"remove","lines":["",""]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":4},"end":{"row":15,"column":0},"action":"remove","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"remove","lines":["    "]},{"start":{"row":13,"column":4},"end":{"row":14,"column":0},"action":"remove","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":12,"column":6},"end":{"row":13,"column":0},"action":"remove","lines":["",""],"id":78}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":64},"end":{"row":21,"column":64},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1549026313368,"hash":"12d78508eaecfc4138b91b6fd9a134c4634783b3"}