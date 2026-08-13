// Photorealistic studio photography mapper for Gfrag® product catalog
import realVial from "../assets/images/gfrag_real_vial_1786615907203.jpg";
import realBottle from "../assets/images/gfrag_real_bottle_1786615918834.jpg";
import realTub from "../assets/images/gfrag_real_tub_1786615934137.jpg";
import realDropper from "../assets/images/gfrag_real_dropper_1786615943879.jpg";
import realMist from "../assets/images/gfrag_real_mist_1786615958779.jpg";
import realTea from "../assets/images/gfrag_real_tea_1786615968304.jpg";
import realCocoa from "../assets/images/gfrag_real_cocoa_1786615978262.jpg";
import realCombo from "../assets/images/gfrag_real_combo_1786615989530.jpg";
import injectionVial from "../assets/images/gfrag_injection_vial_1786614628682.jpg";
import capsuleBottle from "../assets/images/gfrag_capsule_bottle_1786614644557.jpg";
import powderTub from "../assets/images/gfrag_powder_tub_1786614654791.jpg";
import syrupBottle from "../assets/images/gfrag_syrup_bottle_1786614665200.jpg";
import teaTin from "../assets/images/gfrag_tea_tin_1786614674881.jpg";

export function generateProductImageSvg(name: string, category: string, _unit: string = ""): string {
  const cleanName = name.replace(/^Gfrag®?\s*/i, "").trim();
  const lowerName = cleanName.toLowerCase();

  // Combos
  if (lowerName.includes("combo")) {
    return realCombo;
  }

  // Injections / Vials / Shots / MIC / HCG / Slim Tan / Potent
  if (
    lowerName.includes("injection") ||
    lowerName.includes("vial") ||
    lowerName.includes("shot") ||
    lowerName.includes("mic") ||
    lowerName.includes("hcg") ||
    lowerName.includes("slim tan") ||
    lowerName.includes("slim bomb") ||
    lowerName.includes("potent fat burner")
  ) {
    if (lowerName.includes("potent") || lowerName.includes("bomb")) {
      return injectionVial;
    }
    return realVial;
  }

  // Syrups / Droppers / Tinctures / Elixirs / Drops / Lymphlex / Kilo Off
  if (
    lowerName.includes("syrup") ||
    lowerName.includes("drops") ||
    lowerName.includes("tincture") ||
    lowerName.includes("elixir") ||
    lowerName.includes("lymphlex") ||
    lowerName.includes("kilo off")
  ) {
    if (lowerName.includes("lymphlex") || lowerName.includes("drops")) {
      return syrupBottle;
    }
    return realDropper;
  }

  // Chocolate / Cocoa / Hot Chocolate / Coffee
  if (lowerName.includes("chocolate") || lowerName.includes("cocoa") || lowerName.includes("coffee")) {
    return realCocoa;
  }

  // Teas / Botanicals
  if (lowerName.includes("tea") || lowerName.includes("pea")) {
    if (lowerName.includes("butterfly")) {
      return teaTin;
    }
    return realTea;
  }

  // Mists / Sprays / Serums / Creams / Oils / Skin
  if (
    lowerName.includes("mist") ||
    lowerName.includes("spray") ||
    lowerName.includes("serum") ||
    lowerName.includes("cream") ||
    lowerName.includes("oil") ||
    lowerName.includes("skin")
  ) {
    return realMist;
  }

  // Tubs / Powders / Shakes / Soups / Creatine / Collagen / Gut-Master / PCOS
  if (
    lowerName.includes("powder") ||
    lowerName.includes("shake") ||
    lowerName.includes("soup") ||
    lowerName.includes("juice") ||
    lowerName.includes("creatine") ||
    lowerName.includes("gut-master") ||
    lowerName.includes("pcos") ||
    lowerName.includes("electro") ||
    lowerName.includes("collagen 250g")
  ) {
    if (lowerName.includes("collagen") || lowerName.includes("pink")) {
      return powderTub;
    }
    return realTub;
  }

  // Capsules / Pills / Tablets / Supplements
  if (
    lowerName.includes("capsule") ||
    lowerName.includes("pill") ||
    lowerName.includes("berberine") ||
    lowerName.includes("cortisol") ||
    lowerName.includes("meno") ||
    lowerName.includes("skinny")
  ) {
    if (lowerName.includes("berberine") || lowerName.includes("cortisol")) {
      return capsuleBottle;
    }
    return realBottle;
  }

  // Default to real studio pill bottle photo
  return realBottle;
}
