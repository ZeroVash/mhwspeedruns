var RATHALOS = "rathalos"

var BOW = "bow"
var DUAL_BLADES = "db"
var CHARGE_BLADE = "cb"
var GREAT_SWORD = "gs"
var GUN_LANCE = "gl"
var HAMMER = "hammer"
var HUNTING_HORN = "hh"
var HEAVY_BOWGUN = "hbg"
var INSECT_GLAIVE = "ig"
var LANCE = "lance"
var LONG_SWORD = "ls"
var LIGHT_BOWGUN = "lbg"
var SWITCH_AXE = "swaxe"
var SWORD_AND_SHIELD = "sns"

function update_src_vid() {
  var e = document.getElementById("monster");
  monster_name = e.options[e.selectedIndex].value;
  
  e = document.getElementById("weapon");
  var weapon_name = e.options[e.selectedIndex].value;
  var weapon_text = e.options[e.selectedIndex].text;
  var vid_src = "";

  if (monster_name == "none" || weapon_name === "none") {
    header = "";
    url = "";
  }
  else {
    src_video = get_src_video(weapon_name);
    header = weapon_text + src_video.header;
    url = src_video.url;
  }
  
  console.log(header, url);
  vid_header = document.getElementById('vid_header');
  vid_header.innerHTML = (header);
  vid = document.getElementById('vid');
  vid.src = url;
}

function get_src_video(weapon_name) {
  header = "";
  url = "";
  
  for (var i = 0; i < beta_data.monsters.length; i++) {
    if (beta_data.monsters[i].name == monster_name) {
      for (var j = 0; j < beta_data.monsters[i].run.length; j++) {
        run = beta_data.monsters[i].run[j];
        if (run.weapon_name == weapon_name) {
          header = " - " + run.hunter_name;
          header += ": " + run.time;
          url = run.vid_url;
        }
      }
    }
  }
  
  return {header, url};
}
