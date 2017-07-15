var nd = {
        name: "Tag-Nacht Zyklus",
        phases: [
            { duration:  25, bgcolor: "#1998B6", name: "Nacht" },
            { duration:  5, bgcolor: "linear-gradient( 90deg, #1998B6, #BFEFFF )", name: "Morgen" },
            { duration:  70, bgcolor: "#BFEFFF", name: "Tag" },
            { duration:  5, bgcolor: "linear-gradient( 90deg, #BFEFFF, #1998B6 )", name: "Abend" },
			{ duration:  15, bgcolor: "#1998B6", name: "Nacht" },
            { duration:  15, bgcolor: "rgba(25,152,182,0.3)", name: "Nacht", class: "Zukunft" }
        ]};
var dt = {
        name: "Trockenkuppe",
        phases: [
            { duration:  40, bgcolor: "#F8F2AD", name: "Absturzort" },
            { duration:  20, bgcolor: "#DED98A", name: "Sandsturm" },
            { duration:  40, bgcolor: "#F8F2AD", name: "Absturzort" },
            { duration:  20, bgcolor: "#DED98A", name: "Sandsturm" },
            { duration:  15, bgcolor: "rgba(248,242,173,0.3)", name: "Absturzort", class: "Zukunft" }
        ]};
var vb = {
        name: "Grasgrüne Schwelle",
        phases: [
            { duration:  10, bgcolor: "#84C147", name: "" },
            { duration:  20, bgcolor: "#6DAC2F", name: "Nacht Bosse" },
            { duration:  75, bgcolor: "#C4E2A5", name: "Tag" },
            { duration:  15, bgcolor: "#84C147", name: "Nacht" },
            { duration:  10, bgcolor: "rgba(132,193,71,0.3)", name: "Nacht", class: "Zukunft" },
            { duration:   5, bgcolor: "rgba(109,172,47,0.3)", name: "", class: "Zukunft" }
        ]};
var ab = {
        name: "Güldener Talkessel",
        phases: [
            { duration:  45, bgcolor: "#FFE37F", name: "" },
            { duration:  15, bgcolor: "#FFD53D", name: "Feuerprobe (Herausforderungen)" },
            { duration:  20, bgcolor: "#EAB700", name: "Angriff auf die Stadt" },
            { duration:  10, bgcolor: "#FFF1C1", name: "Pause" },
            { duration:  30, bgcolor: "#FFE37F", name: "Die Verteidigung von Tarir" },
            { duration:  15, bgcolor: "rgba(255,227,127,0.3)", name: "Die Verteidigung von Tarir", class: "Zukunft" }
        ]};
var td = {
        name: "Verschlungene Tiefen",
        phases: [
            { duration:  25, bgcolor: "#FFD7D7", name: "" },
            { duration:   5, bgcolor: "#FFBDBD", name: "Vorbereitungen" },
            { duration:  20, bgcolor: "#F99", name: "Chak Gigant" },
            { duration:  70, bgcolor: "#FFD7D7", name: "Helft den Aussenposten" },
            { duration:  15, bgcolor: "rgba( 255,215,215,0.3)", name: "Helft den Aussenposten", class: "Zukunft" }
        ]};
var ds = {
        name: "Widerstand des Drachen",
        phases: [
            { duration:  90, bgcolor: "linear-gradient( 90deg, #c8c5e5, #DFDDF7 )", name: "" },
            { duration:  30, bgcolor: "linear-gradient( 90deg, #9f99cc, #c8c5e5 )", name: "Start" },
            { duration:  15, bgcolor: "linear-gradient(90deg, rgba(200,197,229,0.3), rgba(203,201,232,0.3))", name: "", class: "Zukunft" }
        ]};
/*
*Ist nur wichtig während der Helloween Events
var mk = {
        name: "Lions Arch &nbsp; [ only during Halloween Events ]",
        phases: [
            { duration:  120, bgcolor: "linear-gradient( 90deg, #B98291, #F5F5F5 )", name: "Mad King" },
            { duration:  15, bgcolor: "linear-gradient(90deg, rgba( 185,130,145,0.3), rgba(192,143,157,0.3))", name: "Mad King", class: "Zukunft" }
        ]};
*/
var startHour = new Date();
startHour = Math.floor(startHour.getUTCHours()/2)*2;

switch (startHour) {
  case 0:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Taidha Covington", chatlink: "[&BKgBAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Megazerstörer", chatlink: "[&BM0CAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Modniir Ulgoth", chatlink: "[&BLAAAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Golem Mark II", chatlink: "[&BNQCAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  15, bgcolor: "#EA788F", name: "Tequatl der Sonnenlose", chatlink: "[&BNABAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(234,120,143,0.3)", name: "Karka Königin", chatlink: "[&BNUGAAA=]", class: "Zukunft" }
       ]};
    break;
    
  case 2:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Golem Mark II", chatlink: "[&BNQCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Klaue von Jormag", chatlink: "[&BHoCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Taidha Covington", chatlink: "[&BKgBAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Megazerstörer", chatlink: "[&BM0CAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "The Zerschmetterer", chatlink: "[&BE4DAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  15, bgcolor: "#EA788F", name: "Karka Königin", chatlink: "[&BNUGAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Tequatl der Sonnenlose", chatlink: "[&BNABAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(234,120,143,0.3)", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]", class: "Zukunft" }
       ]};
    break;
    
  case 4:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "The Zerschmetterer", chatlink: "[&BE4DAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Modniir Ulgoth", chatlink: "[&BLAAAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Golem Mark II", chatlink: "[&BNQCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Klaue von Jormag", chatlink: "[&BHoCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Taidha Covington", chatlink: "[&BKgBAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  15, bgcolor: "#EA788F", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]" },
         { duration: 105, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(234,120,143,0.3)", name: "Karka Königin", chatlink: "[&BNUGAAA=]", class: "Zukunft" }
       ]};
    break;
    
  case 6:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Taidha Covington", chatlink: "[&BKgBAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Megazerstörer", chatlink: "[&BM0CAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "The Zerschmetterer", chatlink: "[&BE4DAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Modniir Ulgoth", chatlink: "[&BLAAAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Golem Mark II", chatlink: "[&BNQCAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  15, bgcolor: "#EA788F", name: "Karka Königin", chatlink: "[&BNUGAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Tequatl der Sonnenlose", chatlink: "[&BNABAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(234,120,143,0.3)", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]", class: "Zukunft" }
       ]};
    break;
    
  case 8:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Golem Mark II", chatlink: "[&BNQCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Klaue von Jormag", chatlink: "[&BHoCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Taidha Covington", chatlink: "[&BKgBAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Megazerstörer", chatlink: "[&BM0CAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  15, bgcolor: "#EA788F", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]" },
         { duration: 105, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(233,169,184,0.3)", name: "", class: "Zukunft" }
       ]};
    break;
    
  case 10:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Modniir Ulgoth", chatlink: "[&BLAAAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Golem Mark II", chatlink: "[&BNQCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Klaue von Jormag", chatlink: "[&BHoCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Taidha Covington", chatlink: "[&BKgBAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  30, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Karka Königin", chatlink: "[&BNUGAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Tequatl der Sonnenlose", chatlink: "[&BNABAAA=]" },
         { duration:  15, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(233,169,184,0.3)", name: "", class: "Zukunft" }
       ]};
    break;
    
  case 12:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Taidha Covington", chatlink: "[&BKgBAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Megazerstörer", chatlink: "[&BM0CAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Modniir Ulgoth", chatlink: "[&BLAAAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Golem Mark II", chatlink: "[&BNQCAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  30, bgcolor: "#E9A9B8",  name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]" },
         { duration:  75, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(233,169,184,0.3)", name: "", class: "Zukunft" }
       ]};
    break;
    
  case 14:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Golem Mark II", chatlink: "[&BNQCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Klaue von Jormag", chatlink: "[&BHoCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Taidha Covington", chatlink: "[&BKgBAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Megazerstörer", chatlink: "[&BM0CAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  60, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Karka Königin", chatlink: "[&BNUGAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(233,169,184,0.3)", name: "", class: "Zukunft" }
       ]};
    break;
    
  case 16:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Modniir Ulgoth", chatlink: "[&BLAAAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Golem Mark II", chatlink: "[&BNQCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Klaue von Jormag", chatlink: "[&BHoCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Taidha Covington", chatlink: "[&BKgBAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  15, bgcolor: "#EA788F", name: "Tequatl der Sonnenlose", chatlink: "[&BNABAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(234,120,143,0.3)", name: "Karka Königin", chatlink: "[&BNUGAAA=]", class: "Zukunft" }
       ]};
    break;
    
  case 18:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Taidha Covington", chatlink: "[&BKgBAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Megazerstörer", chatlink: "[&BM0CAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Modniir Ulgoth", chatlink: "[&BLAAAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Golem Mark II", chatlink: "[&BNQCAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  15, bgcolor: "#EA788F", name: "Karka Königin", chatlink: "[&BNUGAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Tequatl der Sonnenlose", chatlink: "[&BNABAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(234,120,143,0.3)", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]", class: "Zukunft" }
       ]};
    break;
    
  case 20:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Golem Mark II", chatlink: "[&BNQCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Klaue von Jormag", chatlink: "[&BHoCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Taidha Covington", chatlink: "[&BKgBAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Megazerstörer", chatlink: "[&BM0CAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  15, bgcolor: "#EA788F", name: "Dreifacher Ärger", chatlink: "[&BKoBAAA=]" },
         { duration: 105, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(233,169,184,0.3)", name: "", class: "Zukunft" }
       ]};
    break;
    
  case 22:
    var wb = {
       name: "Welt bosse",
       phases: [
         { duration:  15, bgcolor: "#FF8550", name: "Der Zerschmetterer", chatlink: "[&BE4DAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Svanir Shaman", chatlink: "[&BMIDAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Modniir Ulgoth", chatlink: "[&BLAAAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Feuer Elementar", chatlink: "[&BEcAAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Golem Mark II", chatlink: "[&BNQCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Großer Dschungelwurm", chatlink: "[&BEEFAAA=]" },
         { duration:  15, bgcolor: "#FF8550", name: "Klaue von Jormag", chatlink: "[&BHoCAAA=]" },
         { duration:  15, bgcolor: "#FFA850", name: "Schatten Behemoth", chatlink: "[&BPcAAAA=]" },
         { duration:  15, bgcolor: "rgba(255,133,80,0.3)", name: "Taidha Covington", chatlink: "[&BKgBAAA=]", class: "Zukunft" }
       ]};
    var hwb = {
       phases: [
         { duration:  60, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "#EA788F", name: "Karka Königin", chatlink: "[&BNUGAAA=]" },
         { duration:  45, bgcolor: "#E9A9B8", name: "" },
         { duration:  15, bgcolor: "rgba(234,120,143,0.3)", name: "Tequatl der Sonnenlose", chatlink: "[&BNABAAA=]", class: "Zukunft" }
       ]};
    break;
}
var metas = [ nd, wb, hwb, vb, ab, td, ds, dt/*, mk*/]

function chatLinkSelect (chatLinkCode) {
    var span = document.createElement('span');
    span.innerHTML = chatLinkCode;
    var input = document.createElement('input');
    input.className = 'chatlink';
    input.type = 'text';
    input.value = chatLinkCode;
    input.readOnly = true;
    input.spellcheck = false;
	
$(span).click(function (e) {
        var pageX = e.pageX;
        var pageY = e.pageY;
        if (pageX === undefined) {
            pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        this.style.visibility = 'hidden';
        input.style.display = 'inline-block';
        input.focus();
        input.select();
        document.execCommand('copy');

        setTimeout(function(){
            input.blur();
        },200);

        $("body").append("<div id='littleMsgBox' style='position:fixed; top:"+pageY+"px; left:"+pageX+"px;'>Copied \"" + chatLinkCode + "\" to clipboard</div>");
                
        setTimeout(function(){
         $("#littleMsgBox").fadeOut(100,function(){
            $(this).remove();
         });
        },1500)

    });	
	
    $(input).blur(function () {
        this.style.display = null;
        span.style.visibility = null;
    });
    
    var output = document.createElement('span');
    output.className = 'event-name event-chatlink';
    output.appendChild(input);
    output.appendChild(span);
    return output;
}


function autoConvertUTC2 (document) {
  function pad (s) {
    return (s < 10 ? '0' : '') + s;
  }
  [].forEach.call(document.querySelectorAll('.utc-auto-convert2'), function(v, i) {
    var time = v.innerHTML.match(/(\d?\d):(\d\d)/);
    if (!time) {
      return;
    }

    var date = new Date();
    date.setUTCHours(time[1], time[2], 0, 0);

    if (date.getTimezoneOffset() != 0) {
      var offset = (-1 * date.getTimezoneOffset() / 60);
      v.innerHTML = ' <span style="cursor:help; border-bottom:1px dotted #6E6E6E;" title="Your timezone (UTC' + (offset < 0 ? offset : '+' + offset) + ')">' + pad(date.getHours()) + ':' + pad(date.getMinutes()) + '</span>';
    }
  });
}


function updateTimes() {
    $('.event-bar-segment').each(function () {
        var offset = $(this).data('offset');
        var now2 = new Date();
        var startHour = Math.floor(now2.getUTCHours()/2)*2;
        var offsetHours = 0;
        if (offset > 119){
            offsetHours = 2;
        } else if (offset > 59){
            offsetHours = 1;
        }

        if ( (startHour + offsetHours) >= 24){
            offsetHours = offsetHours - 24;
        }
        var correctedTime = ""+(startHour + offsetHours);
        var hour = ("00" + correctedTime).slice(-2);
        var minute = ("00" + (offset%60)).slice(-2);

        $(this).find('.event-time').text(hour + ":" + minute);
    });
}


function movePointer(document,showLocalTime) {
    var now = new Date();
    var testh = ("00" + now.getHours()).slice(-2);
    var testm = ("00" + now.getMinutes()).slice(-2);
    var hour = ("00" + now.getUTCHours()).slice(-2);
    var minute = ("00" + now.getUTCMinutes()).slice(-2);
    var percentOfTwoHours = (((hour % 2) + (minute / 60)) * 50 ) * (120/135);

    $('.event-pointer span').text(testh + ":" + testm + " Uhr");
    $('.event-pointer').css('left', percentOfTwoHours + "%");

    if (percentOfTwoHours > 69){
        $('.event-pointer-time').css('right', '0px');
    }

    var currentStartHour = Math.floor(now.getUTCHours()/2)*2;
    if (currentStartHour != startHour){
        window.location.reload(true);
    }

    if (showLocalTime == 1){
        autoConvertUTC();
    }
    var currentTime = moment.utc();
    var localTime = moment();
    
    var hour = ("00" + currentTime.hour()).slice(-2);
    var minute = ("00" + currentTime.minute()).slice(-2);
    
    var localHour = ("00" + localTime.hour()).slice(-2);
    var localMinute = ("00" + localTime.minute()).slice(-2);
    
    var percentOfTwoHours = ((hour % 2) + (minute / 60)) * 50;
    
    $('.pointer .server span').text(hour + ":" + minute);
    $('.pointer .local span').text(localHour + ":" + localMinute);
    $('.pointer').css('left', percentOfTwoHours + "%");
		 
}


function setupBars() {
   $.each( metas, function( key, metaEvent ) {
      if(!metaEvent.phases) return;

       var bar = $('<div class="event-bar"></div>');
       var offset = 0;
       
       $.each( metaEvent.phases, function( i, metaPhase ) {
           
           var segmentLabel = metaPhase.name;
          if (typeof metaPhase.link !== 'undefined') {
               segmentLabel = metaPhase.name;
           }  
           var segmentClass = "";
           if (typeof metaPhase.class !== 'undefined') {
               segmentClass = metaPhase.class;
           }
           var block = $('<div class="event-bar-segment ' + segmentClass + '" style="background:' + metaPhase.bgcolor + '; width:'+ (100*metaPhase.duration /135) + '%;" title="' + metaPhase.name + '"> <span class="event-time utc-auto-convert2"></span></div>');
           var segmentLink = "";
           if (typeof metaPhase.chatlink !== 'undefined') {
               segmentLink = chatLinkSelect(metaPhase.chatlink);
               block.append(segmentLink);
           }
           block.append('<span class="event-name">' + segmentLabel + '</span>');		   
           block.data('offset',offset);
           offset += metaPhase.duration;
           bar.append(block);
       });
       	   $('.event-wrapper').append($('<br></br>'));

       if (typeof metaEvent.name !== 'undefined') {
           $('.event-wrapper').append($('<h2><span class="mw-headline" id="' + metaEvent.name + '">' + metaEvent.name + '</span></h2>'));
       } else {
           $('.event-wrapper').append($('<div style="height:10px"></div>'));
       }
       $('.event-wrapper').append(bar);
   });
}
$(document).ready(function() {
setupBars();
movePointer(document,0);
updateTimes();
autoConvertUTC2(document);
});
setInterval(movePointer,1000,document,1);
