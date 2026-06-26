import ronin from "@/assets/ronin-v2.png";
import scout from "@/assets/scout-v2.png";
import officer from "@/assets/officer-v2.png";
import ranger from "@/assets/ranger-v2.png";

export interface SmogChar {
  name: string;
  title: string;
  img: string;
  blurb: string;
  accent: string;
}

export const characters: SmogChar[] = [
  {
    name: "Dust Ronin",
    title: "Dust Ronin",
    img: ronin,
    blurb: "An undead wanderer of the dark web, lighting forgotten paths with a lantern that never dies.",
    accent: "#9aa68a",
  },
  {
    name: "Dust Scout",
    title: "Dust Scout",
    img: scout,
    blurb: "A seafaring explorer charting the abandoned seas of dead chains, spyglass always in hand.",
    accent: "#8fcdec",
  },
  {
    name: "Dust Officer",
    title: "Dust Officer",
    img: officer,
    blurb: "Keeper of order in the ruins, patrolling broken links and guarding lost treasure.",
    accent: "#b59bd6",
  },
  {
    name: "Dust Ranger",
    title: "Dust Ranger",
    img: ranger,
    blurb: "A rugged scavenger of failed projects, hoarding the brains and bones of forgotten code.",
    accent: "#9fc08a",
  },
];
