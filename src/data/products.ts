import { Product } from "../types";

export const PRODUCT_CATEGORIES = [
  "All",
  "Injections",
  "Appetite Management",
  "Fat Burners",
  "Gut Health",
  "Skin Range",
  "Women's Health",
  "Men's Health",
  "Kids Range",
  "Heart Health",
  "Summer Range",
  "Winter Range",
  "Collagen Range",
  "Nutraceuticals",
  "Other",
];

const getGfragUrl = (slug: string) => `https://www.gfrag.co.za/wp-content/uploads/${slug}.jpg`;

export const PRODUCTS: Product[] = [
  {
    "id": 1,
    "name": "Gfrag® Slim Tan",
    "category": "Injections",
    "price": 850,
    "unit": "10mg",
    "description": "L-Tyrosine formula to lose weight while getting a beautiful bronze skin tone.",
    "image": getGfragUrl("Gfrag-Slim-Tan")
  },
  {
    "id": 2,
    "name": "Gfrag® Hunger Hush Injection",
    "category": "Injections",
    "price": 2000,
    "unit": "1 Month Supply",
    "description": "Suppresses Appetite naturally, supports Hormonal Weight Management, enhances Energy Utilisation, aids in managing Insulin Resistance.",
    "image": getGfragUrl("Gfrag-Hunger-Hush-Injection")
  },
  {
    "id": 3,
    "name": "Gfrag® Weight Loss + Appetite Suppressant Peptides",
    "category": "Injections",
    "price": 1600,
    "unit": "5ml",
    "description": "Reverses Diet Induced Obesity, increases Appetite, increases Energy Regulators, treats Related Metabolic Conditions.",
    "image": getGfragUrl("Gfrag-Weight-Loss-Shot")
  },
  {
    "id": 4,
    "name": "Gfrag® HCG +HCG Protocol",
    "category": "Injections",
    "price": 850,
    "unit": "500IU",
    "description": "Hormonal Slimming, prevents Hormonal Tension, regulates Hormonal Imbalances, improves Metabolism.",
    "image": getGfragUrl("Gfrag-HCG-Protocol")
  },
  {
    "id": 5,
    "name": "Gfrag® Potent Fat Burner Injection",
    "category": "Injections",
    "price": 770,
    "unit": "5mg",
    "description": "Aids in Weight Loss, resets Metabolism, regulates Blood Sugar, reduces Body Fat, anti-aging, improves sleep pattern.",
    "image": getGfragUrl("Gfrag-Potent-Fat-Burner-Injection")
  },
  {
    "id": 6,
    "name": "Gfrag® Lipolytic mic 5ml",
    "category": "Injections",
    "price": 770,
    "unit": "5ml",
    "description": "Burns Stored & Unwanted Fat, boosts Leptin Levels, increases BMR, great for belly fat.",
    "image": getGfragUrl("Gfrag-Lipolytic-mic")
  },
  {
    "id": 7,
    "name": "Gfrag® Slim Bomb",
    "category": "Injections",
    "price": 1300,
    "unit": "10mg",
    "description": "3x the strength of Gfrag® Potent Fat Burner.",
    "image": getGfragUrl("Gfrag-Slim-Bomb")
  },
  {
    "id": 8,
    "name": "Gfrag® Weight Loss Shot",
    "category": "Injections",
    "price": 900,
    "unit": "5ml",
    "description": "Reduces body fat, converts fat to energy, minimizes visceral fat, boosts metabolism, lowers cholesterol, reduces fatty deposits in the liver.",
    "image": getGfragUrl("Gfrag-Weight-Loss-Shot")
  },
  {
    "id": 9,
    "name": "Gfrag® HCG + Lipolytic MIC Combo",
    "category": "Injections",
    "price": 1350,
    "unit": "Combo",
    "description": "HCG + Lipolytic MIC combination for enhanced results.",
    "image": getGfragUrl("Gfrag-HCG-Lipolytic-Combo")
  },
  {
    "id": 10,
    "name": "Gfrag® Potent Fat Burner Lipo Combo",
    "category": "Injections",
    "price": 1100,
    "unit": "Combo",
    "description": "Potent Fat Burner + Lipolytic MIC combo.",
    "image": getGfragUrl("Gfrag-Fat-Burner-Lipo-Combo")
  },
  {
    "id": 11,
    "name": "Gfrag® Weight Loss Shot + Appetite Suppressant Combo",
    "category": "Injections",
    "price": 1600,
    "unit": "Combo",
    "description": "Weight Loss Shot + Appetite Suppressant Peptides + Hunger Hush Booster Injection combo.",
    "image": getGfragUrl("Gfrag-Weight-Loss-Shot-Combo")
  },
  {
    "id": 12,
    "name": "Gfrag® Hunger Buster",
    "category": "Appetite Management",
    "price": 350,
    "unit": "90 Caps",
    "description": "Natural Appetite Suppressant. Suitable for all ages.",
    "image": getGfragUrl("Gfrag-Hunger-Buster")
  },
  {
    "id": 13,
    "name": "Gfrag® Skinny",
    "category": "Appetite Management",
    "price": 440,
    "unit": "30 Caps",
    "description": "Dual Formula - Appetite Suppressant & Fat burner. Our best seller.",
    "image": getGfragUrl("Gfrag-Skinny")
  },
  {
    "id": 14,
    "name": "Gfrag® 7 Day",
    "category": "Appetite Management",
    "price": 210,
    "unit": "7 Day",
    "description": "Increases Metabolism, controls Appetite, aids in looking good for the wedding or any important upcoming event.",
    "image": getGfragUrl("Gfrag-7-Day")
  },
  {
    "id": 15,
    "name": "Gfrag® Kilo Off Slimming Syrup",
    "category": "Appetite Management",
    "price": 420,
    "unit": "100ml",
    "description": "Fat Accelerator, Appetite Management, Energy Booster. Added Wholefood. Contains high doses of caffeine.",
    "image": getGfragUrl("Gfrag-Kilo-Off-Slimming-Syrup")
  },
  {
    "id": 16,
    "name": "Gfrag® Super Appetite Suppress",
    "category": "Appetite Management",
    "price": 500,
    "unit": "Caps",
    "description": "Contains 5-HTP and will assist with emotional eating.",
    "image": getGfragUrl("Gfrag-Super-Appetite-Suppress")
  },
  {
    "id": 17,
    "name": "Gfrag® Fat Burning Hot Chocolate",
    "category": "Appetite Management",
    "price": 420,
    "unit": "500g",
    "description": "20 Calories per Serving, made from Dutch Cocoa, promotes healthy gut, fat burner, contains L-Carnitine, sugar free, contains anti-oxidants, boosts immune system.",
    "image": getGfragUrl("Gfrag-Fat-Burning-Hot-Chocolate")
  },
  {
    "id": 18,
    "name": "Gfrag® Fat Burning Slimming Coffee",
    "category": "Appetite Management",
    "price": 450,
    "unit": "500ml",
    "description": "Burns body fat, appetite reduction after 4 days, snack less, reduces cellulite, increases metabolism.",
    "image": getGfragUrl("Gfrag-Fat-Burning-Slimming-Coffee")
  },
  {
    "id": 19,
    "name": "Gfrag® Skinny Juice",
    "category": "Appetite Management",
    "price": 300,
    "unit": "250g",
    "description": "All-in-one fat support, aids in weight loss, increases energy, multivitamin & anti-oxidant, great pre-workout.",
    "image": getGfragUrl("Gfrag-Skinny-Juice")
  },
  {
    "id": 20,
    "name": "Gfrag® Slimming Powder",
    "category": "Appetite Management",
    "price": 400,
    "unit": "175g",
    "description": "Burns visceral fat around organs, combines other health benefits connected to Anthocyanins.",
    "image": getGfragUrl("Gfrag-Slimming-Powder")
  },
  {
    "id": 21,
    "name": "Gfrag® AMPK",
    "category": "Appetite Management",
    "price": 400,
    "unit": "90 Caps",
    "description": "Fat burner for Peri/Menopausal Women, encourages the body to burn stored abdominal fat, revitalises youthful AMPK levels.",
    "image": getGfragUrl("Gfrag-AMPK")
  },
  {
    "id": 22,
    "name": "Gfrag® Potent Fat Burner",
    "category": "Fat Burners",
    "price": 280,
    "unit": "60 Caps",
    "description": "Fat Loss, increases Metabolism, suited for people with heart problems or epilepsy.",
    "image": getGfragUrl("Gfrag-Potent-Fat-Burner")
  },
  {
    "id": 23,
    "name": "Gfrag® Thermoslim 12 Hour",
    "category": "Fat Burners",
    "price": 350,
    "unit": "60 Caps",
    "description": "Scientific Fat Burn Formulation for 12 hours, thermogenic fat burn with added benefit of mood enhancer, enhances mental sharpness, increases energy.",
    "image": getGfragUrl("Gfrag-Thermoslim-12-Hour")
  },
  {
    "id": 24,
    "name": "Gfrag® Gut-Amine",
    "category": "Gut Health",
    "price": 290,
    "unit": "200g",
    "description": "Relieves IBS and heals leaky gut, anti-aging, improves Athletic Performance, improves symptoms caused by Diabetes, improves gut health, anti-inflammatory.",
    "image": getGfragUrl("Gfrag-Gut-Amine")
  },
  {
    "id": 25,
    "name": "Gfrag® Sculpt & Cleanse",
    "category": "Gut Health",
    "price": 290,
    "unit": "60 Caps",
    "description": "Helps with constipation.",
    "image": getGfragUrl("Gfrag-Sculpt-Cleanse")
  },
  {
    "id": 26,
    "name": "Gfrag® IBS",
    "category": "Gut Health",
    "price": 340,
    "unit": "90 Caps",
    "description": "Helps with inflammation of colon, strengthens colon lining, bloating and flatulence, abdominal pain.",
    "image": getGfragUrl("Gfrag-IBS")
  },
  {
    "id": 27,
    "name": "Gfrag® Pro Bi",
    "category": "Gut Health",
    "price": 300,
    "unit": "60 Caps",
    "description": "Promotes intestinal health, increases healthy bacteria in the gut, improves IBS, diarrhoea, constipation, acid reflux/heartburn.",
    "image": getGfragUrl("Gfrag-Pro-Bi")
  },
  {
    "id": 28,
    "name": "Gfrag® Colitis & Crohns",
    "category": "Gut Health",
    "price": 290,
    "unit": "30 Caps",
    "description": "A herbal supplement that assists with pain and inflammation associated to Ulcerative Colitis, Crohns, Gastritis & Enteritis.",
    "image": getGfragUrl("Gfrag-Colitis-Crohns")
  },
  {
    "id": 29,
    "name": "Gfrag® Gut-Master",
    "category": "Gut Health",
    "price": 580,
    "unit": "500g",
    "description": "Anti-inflammatory, digestion, Leaky gut, microbiome, constipation, IBD & IBS, gut-health, cherry berry flavour.",
    "image": getGfragUrl("Gfrag-Gut-Master")
  },
  {
    "id": 30,
    "name": "Gfrag® Zinc L-Carnosine",
    "category": "Gut Health",
    "price": 450,
    "unit": "60 Caps",
    "description": "Leaky gut, gastritis, ulcers, Helicobacter Pylori, beneficial for children/grown-ups with Autism.",
    "image": getGfragUrl("Gfrag-Zinc-L-Carnosine")
  },
  {
    "id": 31,
    "name": "Gfrag® Bromo Boost",
    "category": "Gut Health",
    "price": 320,
    "unit": "250g",
    "description": "Enzyme extract from pineapple stems and fruit. Digestive enzyme, anti-inflammatory, great for Pancreatic problems, helps with Angina, Bronchitis, Sinusitis, Osteoarthritis, wound healing.",
    "image": getGfragUrl("Gfrag-Bromo-Boost")
  },
  {
    "id": 32,
    "name": "Gfrag® NMN Anti-Ageing",
    "category": "Skin Range",
    "price": 820,
    "unit": "Caps",
    "description": "Anti-ageing & longevity, Mitochondrial function & energy support, NAD+ production & cognitive function, boosted energy levels, improves feeling of wellness.",
    "image": getGfragUrl("Gfrag-NMN-Anti-Ageing")
  },
  {
    "id": 33,
    "name": "Gfrag® Skin Renew",
    "category": "Skin Range",
    "price": 400,
    "unit": "30 Caps",
    "description": "Natural skin renewal supplement - hydrates the skin from the inside, delaying skin-ageing, improving skin elasticity, assisting with sun damage, may reduce pigmentation.",
    "image": getGfragUrl("Gfrag-Skin-Renew")
  },
  {
    "id": 34,
    "name": "Gfrag® Skin Lips Hair",
    "category": "Skin Range",
    "price": 280,
    "unit": "60 Caps",
    "description": "Assists with acne, helps clear the skin, anti-inflammatory for skin and lips, banishes cold sores, fights hair loss.",
    "image": getGfragUrl("Gfrag-Skin-Lips-Hair")
  },
  {
    "id": 35,
    "name": "Gfrag® Collagen Cream",
    "category": "Skin Range",
    "price": 425,
    "unit": "50ml",
    "description": "Made with collagen peptides, hydrates, lifts, firms, restores. With Vitamin A, C, E and Co-Enzyme Q10 & Collagen.",
    "image": getGfragUrl("Gfrag-Collagen-Cream")
  },
  {
    "id": 36,
    "name": "Gfrag® Female Health",
    "category": "Women's Health",
    "price": 350,
    "unit": "60 Caps",
    "description": "Fights inflammation, helps with age associated memory, removes excess bad oestrogen, decreases uterine fibroids, longevity, anti-aging, prevents atherosclerosis.",
    "image": getGfragUrl("Gfrag-Female-Health")
  },
  {
    "id": 37,
    "name": "Gfrag® Menopause Supplement",
    "category": "Women's Health",
    "price": 400,
    "unit": "90 Caps",
    "description": "All natural, daily supplement to restore balance and relieve the symptoms of menopause. Increases hormones like FSH slightly, helps for severity of hot flushes.",
    "image": getGfragUrl("Gfrag-Menopause-Supplement")
  },
  {
    "id": 38,
    "name": "Gfrag® Meno Belly",
    "category": "Women's Health",
    "price": 395,
    "unit": "120 Caps",
    "description": "Normalise Hormonal Toxicity, helps with menopausal belly fat, lessens high cortisol levels.",
    "image": getGfragUrl("Gfrag-Meno-Belly")
  },
  {
    "id": 39,
    "name": "Gfrag® SHE",
    "category": "Women's Health",
    "price": 410,
    "unit": "60 Caps",
    "description": "Balances hormones, PMS relief, mood support, hormonal harmony, PMDD relief.",
    "image": getGfragUrl("Gfrag-SHE")
  },
  {
    "id": 40,
    "name": "Gfrag® Wild Yam Complex",
    "category": "Women's Health",
    "price": 380,
    "unit": "60 Caps",
    "description": "Increases Progesterone, helps with low DHEA.",
    "image": getGfragUrl("Gfrag-Wild-Yam-Complex")
  },
  {
    "id": 41,
    "name": "Gfrag® Fembido Libido Support",
    "category": "Women's Health",
    "price": 350,
    "unit": "60 Caps",
    "description": "Female Intimacy Supplement that helps with sexual drive.",
    "image": getGfragUrl("Gfrag-Fembido-Libido-Support")
  },
  {
    "id": 42,
    "name": "Gfrag® Hot Flush / Gloede",
    "category": "Women's Health",
    "price": 330,
    "unit": "60 Caps",
    "description": "Excessive sweating, hot flushes, night sweats.",
    "image": getGfragUrl("Gfrag-Hot-Flush")
  },
  {
    "id": 43,
    "name": "Gfrag® PCOS",
    "category": "Women's Health",
    "price": 580,
    "unit": "500g",
    "description": "Regulates Menstrual Cycle, regulates Hormonal Acne, regulates Blood Sugar, insulin (Facial Hair), PMMD.",
    "image": getGfragUrl("Gfrag-PCOS")
  },
  {
    "id": 44,
    "name": "Gfrag® PCOS & Insulin Resistance Supplement",
    "category": "Women's Health",
    "price": 500,
    "unit": "120 Caps",
    "description": "Helps promote a Healthy Hormone Balance for ladies with PCOS, support overall Reproductive Health, promotes Regulation of Menstrual Cycle.",
    "image": getGfragUrl("Gfrag-PCOS-Insulin-Resistance")
  },
  {
    "id": 45,
    "name": "Gfrag® Vitamin E with Herbal Co-Factors",
    "category": "Women's Health",
    "price": 290,
    "unit": "30 Caps",
    "description": "Beneficial to people who suffer from Parkinson Disease, good for brain health and pain, works against free radicals, cholesterol balancer.",
    "image": getGfragUrl("Gfrag-Vitamin-E")
  },
  {
    "id": 46,
    "name": "Gfrag® Omega 3",
    "category": "Women's Health",
    "price": 410,
    "unit": "120 Caps",
    "description": "Supports joint health, supports nervous system, supports cardiovascular health, brain health, mood, eye health, effective anti-inflammatory.",
    "image": getGfragUrl("Gfrag-Omega-3")
  },
  {
    "id": 47,
    "name": "Gfrag® Progesterone Booster",
    "category": "Women's Health",
    "price": 260,
    "unit": "30 Caps",
    "description": "Supports your body's natural hormone rhythms with expertly crafted formula designed to promote healthy progesterone levels. Ideal for Pre-menopause & Menopausal Women.",
    "image": getGfragUrl("Gfrag-Progesterone-Booster")
  },
  {
    "id": 48,
    "name": "Gfrag® Testo Booster",
    "category": "Women's Health",
    "price": 400,
    "unit": "60 Caps",
    "description": "Increases free testosterone naturally, enhances libido, energy and vitality, improve mood, muscle strength and stamina, regulates oestrogen/progesterone balance.",
    "image": getGfragUrl("Gfrag-Testo-Booster")
  },
  {
    "id": 49,
    "name": "Gfrag® Male Health",
    "category": "Men's Health",
    "price": 300,
    "unit": "90 Caps",
    "description": "Boosts Testosterone & Energy, boosts overall health, increases lean muscle, increases libido, anti-oxidant, anti-cancer properties, anti-viral & anti-bacterial, longevity.",
    "image": getGfragUrl("Gfrag-Male-Health")
  },
  {
    "id": 50,
    "name": "Gfrag® Prostate+ Support",
    "category": "Men's Health",
    "price": 320,
    "unit": "90 Caps",
    "description": "Strong anti-oxidant effects, reduces swelling (hyperplasia) and inflammation of the prostate, increases urine flow, alleviates the amount of urinating at night.",
    "image": getGfragUrl("Gfrag-Prostate-Support")
  },
  {
    "id": 51,
    "name": "Gfrag® Gout",
    "category": "Men's Health",
    "price": 380,
    "unit": "60 Caps",
    "description": "Gfrag® Gout will lower the PH of ones body and will also help with pain relief.",
    "image": getGfragUrl("Gfrag-Gout")
  },
  {
    "id": 52,
    "name": "Gfrag® Hangover | Babelas Recovery Remedy",
    "category": "Men's Health",
    "price": 300,
    "unit": "60 Caps",
    "description": "Absorbs alcohol and so alleviating your hangover. Gfrag® Liverite will help remove alcohol from the liver.",
    "image": getGfragUrl("Gfrag-Hangover-Recovery")
  },
  {
    "id": 53,
    "name": "Gfrag® Wild Yam Complex (Men)",
    "category": "Men's Health",
    "price": 350,
    "unit": "60 Caps",
    "description": "Prostate health, penile dysfunction, low sperm count, helps with low progesterone.",
    "image": getGfragUrl("Gfrag-Wild-Yam-Men")
  },
  {
    "id": 54,
    "name": "Gfrag® Progesterone Booster (Men)",
    "category": "Men's Health",
    "price": 260,
    "unit": "30 Caps",
    "description": "Supports natural hormone rhythms, designed to promote healthy progesterone levels. Ideal for Men with low progesterone.",
    "image": getGfragUrl("Gfrag-Progesterone-Booster-Men")
  },
  {
    "id": 55,
    "name": "Gfrag® Testo Booster (Men)",
    "category": "Men's Health",
    "price": 400,
    "unit": "60 Caps",
    "description": "Increases free testosterone naturally, enhances libido, energy and vitality, improve mood, muscle strength, stamina.",
    "image": getGfragUrl("Gfrag-Testo-Booster-Men")
  },
  {
    "id": 56,
    "name": "Gfrag® Calm Kiddies",
    "category": "Kids Range",
    "price": 280,
    "unit": "60 Caps",
    "description": "Relieves Anxiety and Tension, assists with Stress, has a Calming Effect, assists with the treatment of ADD and ADHD Symptoms.",
    "image": getGfragUrl("Gfrag-Calm-Kiddies")
  },
  {
    "id": 57,
    "name": "Gfrag® Memory Booster",
    "category": "Kids Range",
    "price": 350,
    "unit": "90 Caps",
    "description": "Assists Short term Memory, improves Long term Memory, increases Learning Abilities, supports Mental Focus. For Adults and Children.",
    "image": getGfragUrl("Gfrag-Memory-Booster")
  },
  {
    "id": 58,
    "name": "Gfrag® Kiddies Immune Booster",
    "category": "Kids Range",
    "price": 210,
    "unit": "250ml",
    "description": "Use Gfrag® Kiddies Immune Booster to fend off viruses and to boost Immune system - a must for all crèche and primary school kids.",
    "image": getGfragUrl("Gfrag-Kiddies-Immune-Booster")
  },
  {
    "id": 59,
    "name": "Gfrag® Memory Booster Syrup",
    "category": "Kids Range",
    "price": 220,
    "unit": "250ml",
    "description": "Assists Short Term Memory, improves Long Term Memory, increases Learning Abilities, supports Mental Focus.",
    "image": getGfragUrl("Gfrag-Memory-Booster-Syrup")
  },
  {
    "id": 60,
    "name": "Gfrag® Kiddies Multi Vitamin & Mineral Supplement",
    "category": "Kids Range",
    "price": 210,
    "unit": "250ml",
    "description": "Gfrag® Multivitamin And Mineral Syrup is a yummy syrup that comes packed with all the essential nutrients your little one's body to maintain great health.",
    "image": getGfragUrl("Gfrag-Kiddies-Multivitamin")
  },
  {
    "id": 61,
    "name": "Gfrag® Calm Kids Syrup",
    "category": "Kids Range",
    "price": 285,
    "unit": "250ml",
    "description": "Relieves Anxiety & Tension, assists with Stress, has a Calming Effect, assists with the treatment of ADHD & ADD symptoms.",
    "image": getGfragUrl("Gfrag-Calm-Kids-Syrup")
  },
  {
    "id": 62,
    "name": "Gfrag® Kids Lifestyle Plan",
    "category": "Kids Range",
    "price": 140,
    "unit": "Plan",
    "description": "Gfrag® Kids Lifestyle Plan for everyday guidelines and lunch box recipes.",
    "image": getGfragUrl("Gfrag-Kids-Lifestyle-Plan")
  },
  {
    "id": 63,
    "name": "Gfrag® Cardio Health",
    "category": "Heart Health",
    "price": 280,
    "unit": "60 Caps",
    "description": "Strengthens Heart Muscle, strengthens Blood Pressure, regulates Heartbeat, lowers Cholesterol, can be used as preventative for Heart Ailments.",
    "image": getGfragUrl("Gfrag-Cardio-Health")
  },
  {
    "id": 64,
    "name": "Gfrag® Circulation Capsules",
    "category": "Heart Health",
    "price": 320,
    "unit": "90 Caps",
    "description": "Improves Blood Circulation, cleanses & dilates arteries, helps with winter hands and feel, helps with pins and needles, varicose veins, lowers cholesterol.",
    "image": getGfragUrl("Gfrag-Circulation-Capsules")
  },
  {
    "id": 65,
    "name": "Gfrag® Blood Pressure",
    "category": "Heart Health",
    "price": 300,
    "unit": "60 Caps",
    "description": "A Natural Supplement to lower high blood pressure. Can be used with any of our other Health and Wellness Products.",
    "image": getGfragUrl("Gfrag-Blood-Pressure")
  },
  {
    "id": 66,
    "name": "Gfrag® Cholesterol",
    "category": "Heart Health",
    "price": 320,
    "unit": "30 Caps",
    "description": "Lowers Bad Cholesterol (LDL cholesterol), lowers fat in blood, removes cholesterol out of the veins and by doing so cleanses arteries, prevents inflammation in veins.",
    "image": getGfragUrl("Gfrag-Cholesterol")
  },
  {
    "id": 67,
    "name": "Gfrag® Cellulite Release",
    "category": "Summer Range",
    "price": 350,
    "unit": "90 Caps",
    "description": "Highly effective in reducing and eradicating cellulite. Targets all main tell-tale areas: bottom, thighs & abdomen.",
    "image": getGfragUrl("Gfrag-Cellulite-Release")
  },
  {
    "id": 68,
    "name": "Gfrag® Beautifully Bronze",
    "category": "Summer Range",
    "price": 500,
    "unit": "90 Caps",
    "description": "Activate your Tan without the Sun! Gradual Bronze Glow over time, amplifies & prolongs existing Tan, makes skin stronger against the sun.",
    "image": getGfragUrl("Gfrag-Beautifully-Bronze")
  },
  {
    "id": 69,
    "name": "Gfrag® Tight & Tone",
    "category": "Summer Range",
    "price": 400,
    "unit": "90 Caps",
    "description": "Lipolysis in a bottle, promotes Lean Body Mass, boosts Metabolism, breaks down Fat Cells, promotes Lipolysis.",
    "image": getGfragUrl("Gfrag-Tight-Tone")
  },
  {
    "id": 70,
    "name": "Gfrag® Boot Camp Body Shake",
    "category": "Summer Range",
    "price": 340,
    "unit": "1kg",
    "description": "Add to Smoothies, use for Baking, 5 shakes per day can be used as a meal replacement. Chocolate, Vanilla/Strawberry flavour.",
    "image": getGfragUrl("Gfrag-Boot-Camp-Body-Shake")
  },
  {
    "id": 71,
    "name": "Gfrag® Fat Burning Water Enhancer",
    "category": "Summer Range",
    "price": 250,
    "unit": "250ml",
    "description": "Contains Fat Burning Ingredients, a great way to consume your daily water intake, added Wholefoods. Contains Iodine.",
    "image": getGfragUrl("Gfrag-Fat-Burning-Water-Enhancer")
  },
  {
    "id": 72,
    "name": "Gfrag® G-tone CLA",
    "category": "Summer Range",
    "price": 260,
    "unit": "90 Caps",
    "description": "Prevents Weight Regain, maintains LEAN Body Mass, mobilizes Stored Fat, increases Energy, aids in Skin Firmness.",
    "image": getGfragUrl("Gfrag-G-Tone-CLA")
  },
  {
    "id": 73,
    "name": "Gfrag® Detox",
    "category": "Winter Range",
    "price": 430,
    "unit": "90 Caps",
    "description": "Removes toxins from the liver, kidneys, lymphatics, blood and tissues. Also reduces free radicals, water and fat soluble toxins, improves energy and assists with weight loss.",
    "image": getGfragUrl("Gfrag-Detox")
  },
  {
    "id": 74,
    "name": "Gfrag® Beta-Immune",
    "category": "Winter Range",
    "price": 300,
    "unit": "60 Caps",
    "description": "Advanced Immune Formula, contains Beta Glucans for Immune Support. For Adults and Children.",
    "image": getGfragUrl("Gfrag-Beta-Immune")
  },
  {
    "id": 75,
    "name": "Gfrag® Lung Defence",
    "category": "Winter Range",
    "price": 350,
    "unit": "60 Caps",
    "description": "Promotes healthy lungs, bronchitis, reduces respiratory infections, enhances and optimises oxygen smokers lungs, COVID-19, for athletes.",
    "image": getGfragUrl("Gfrag-Lung-Defence")
  },
  {
    "id": 76,
    "name": "Gfrag® 8-in-1 Super Immune Booster Blend",
    "category": "Winter Range",
    "price": 320,
    "unit": "60 Caps",
    "description": "Compromised Immune System, flu, colds/COVID, stress, resists infections, prevents cell damage, use if you have an Underactive Thyroid.",
    "image": getGfragUrl("Gfrag-Super-Immune-Booster")
  },
  {
    "id": 77,
    "name": "Gfrag® Flu & Cold Caps",
    "category": "Winter Range",
    "price": 300,
    "unit": "60 Caps",
    "description": "Recover faster from Flu and Colds, non-sedative, natural ingredients.",
    "image": getGfragUrl("Gfrag-Flu-Cold-Caps")
  },
  {
    "id": 78,
    "name": "Gfrag® High Protein Meaty Soup",
    "category": "Winter Range",
    "price": 420,
    "unit": "600g",
    "description": "20g Protein per serving, use as a meal replacement or as a snack, use in recipes or as a delicious gravy, added Amino Acids and Fat Burner, 48 Calories per serving.",
    "image": getGfragUrl("Gfrag-High-Protein-Meaty-Soup")
  },
  {
    "id": 79,
    "name": "Gfrag® Breath Easy Mints",
    "category": "Winter Range",
    "price": 25,
    "unit": "Pack",
    "description": "Powerful eucalyptus-infused capsules designed to release soothing vapors that ease cold, flu, and cough symptoms. Only for Inhalation.",
    "image": getGfragUrl("Gfrag-Breathe-Easy-Mints")
  },
  {
    "id": 80,
    "name": "Gfrag® Hydrolyzed Pepton Collagen",
    "category": "Collagen Range",
    "price": 400,
    "unit": "250g",
    "description": "Support bone & joint health, supports a healthy gut, reduces wrinkles, improves skin hydration, reduces cellulite, maintains & builds muscle, healthy strong nails, promotes organ health.",
    "image": getGfragUrl("Gfrag-Hydrolyzed-Pepton-Collagen")
  },
  {
    "id": 81,
    "name": "Gfrag® Travel Collagen",
    "category": "Collagen Range",
    "price": 150,
    "unit": "80g",
    "description": "Refillable travel collagen.",
    "image": getGfragUrl("Gfrag-Travel-Collagen")
  },
  {
    "id": 82,
    "name": "Gfrag® Collagen Sachets",
    "category": "Collagen Range",
    "price": 380,
    "unit": "15 sachets",
    "description": "Sleek waterproof pouch packaging. Each sachet delivers 10g of Collagen = 10g of Collagen for optimal results. Your daily dose of Gfrag®, anytime, anywhere.",
    "image": getGfragUrl("Gfrag-Collagen-Sachets")
  },
  {
    "id": 83,
    "name": "Gfrag® Collagen Cream",
    "category": "Collagen Range",
    "price": 425,
    "unit": "50ml",
    "description": "Made with Collagen Peptides, hydrates, lifts, firms, restores. With Vitamin A, C, E and Co-Enzyme Q10 & Collagen.",
    "image": getGfragUrl("Gfrag-Collagen-Cream")
  },
  {
    "id": 84,
    "name": "Gfrag® Hot Chocolate Collagen",
    "category": "Collagen Range",
    "price": 500,
    "unit": "500g",
    "description": "Type 1 & 3, once a day, creamy & versatile, 100% Natural, 5g Protein per Serving, cocoa for drinking or baking.",
    "image": getGfragUrl("Gfrag-Hot-Chocolate-Collagen")
  },
  {
    "id": 85,
    "name": "Gfrag® Fat Burn Hot Chocolate",
    "category": "Collagen Range",
    "price": 420,
    "unit": "500g",
    "description": "Promotes healthy gut, fat burner, contains L-Carnitine, sugar free, contains anti-oxidants, boosts immune system, can be added to plain yogurt.",
    "image": getGfragUrl("Gfrag-Fat-Burn-Hot-Chocolate")
  },
  {
    "id": 86,
    "name": "Gfrag® Hydra Collagen Glow Body Oil",
    "category": "Collagen Range",
    "price": 285,
    "unit": "Bottle",
    "description": "Fast absorbing, hydrating, glow restoring, anti-aging, skin plumping.",
    "image": getGfragUrl("Gfrag-Hydra-Collagen-Glow-Body-Oil")
  },
  {
    "id": 87,
    "name": "Gfrag® Super Green Health & Beauty Supplement",
    "category": "Nutraceuticals",
    "price": 680,
    "unit": "400g",
    "description": "Hair, skin, nails, gut health, immune boosting, hormone balancing, daily dose of greens, anti-ageing, improves appearance of cellulite.",
    "image": getGfragUrl("Gfrag-Super-Green-Health-Beauty")
  },
  {
    "id": 88,
    "name": "Gfrag® Magnesium Ultra Potent Pink Powder",
    "category": "Nutraceuticals",
    "price": 300,
    "unit": "200g",
    "description": "Relieves tension, headache and migraines, helps with insomnia, reduces stress symptoms like anxiety, manages fibromyalgia pain, relieves muscle cramping, PMS.",
    "image": getGfragUrl("Gfrag-Magnesium-Ultra-Potent-Pink-Powder")
  },
  {
    "id": 89,
    "name": "Gfrag® Magnesium X7",
    "category": "Nutraceuticals",
    "price": 410,
    "unit": "120 Caps",
    "description": "Blend of X7 Magnesiums - Glycinate for anxiety, Taurate for peaceful sleep, Threonate for blood sugar, Gluconate to reduce inflammation, Citrate, Aspartate for neuron protection, Bisglycinate to treat PMS.",
    "image": getGfragUrl("Gfrag-Magnesium-X7")
  },
  {
    "id": 90,
    "name": "Gfrag® Lymphlex",
    "category": "Nutraceuticals",
    "price": 300,
    "unit": "100ml",
    "description": "Lymph drainage, improves the appearance of cellulite, relieves oedema, detoxifies.",
    "image": getGfragUrl("Gfrag-Lymphlex")
  },
  {
    "id": 91,
    "name": "Gfrag® Hypothyroid",
    "category": "Nutraceuticals",
    "price": 330,
    "unit": "60 Caps",
    "description": "Herbal & Nutrient formulation that assists the production of thyroid hormones and supports normal thyroid functions.",
    "image": getGfragUrl("Gfrag-Hypothyroid")
  },
  {
    "id": 92,
    "name": "Gfrag® Liverite",
    "category": "Nutraceuticals",
    "price": 330,
    "unit": "60 Caps",
    "description": "Cleanses liver of toxins, fights fatty liver, assists with fatty liver, removes excess oestrogen, gallbladder support, thyroid support.",
    "image": getGfragUrl("Gfrag-Liverite")
  },
  {
    "id": 93,
    "name": "Gfrag® Cortisol Support",
    "category": "Nutraceuticals",
    "price": 380,
    "unit": "60 Caps",
    "description": "Promotes healthy cortisol levels, supports healthy adrenal function, hormonal belly fat, reduces stress levels, relieves fatigue, low libido, adrenal fatigue.",
    "image": getGfragUrl("Gfrag-Cortisol-Support")
  },
  {
    "id": 94,
    "name": "Gfrag® Migraine Support",
    "category": "Nutraceuticals",
    "price": 200,
    "unit": "30 Caps",
    "description": "Prevents migraines, lessens the severity of migraines, assists with bad headaches, helps with psoriasis, helps with tinnitus.",
    "image": getGfragUrl("Gfrag-Migraine-Support")
  },
  {
    "id": 95,
    "name": "Gfrag® Berberine",
    "category": "Nutraceuticals",
    "price": 400,
    "unit": "90 Caps",
    "description": "PCOS, assists with depression, reduces cholesterol, reduces Sleep Apnea, prevents Weight Gain, lowers Cholesterol, lowers Glucose, metabolic syndrome, Candida, Diabetes, anti-viral.",
    "image": getGfragUrl("Gfrag-Berberine")
  },
  {
    "id": 96,
    "name": "Gfrag® Memory Booster",
    "category": "Nutraceuticals",
    "price": 350,
    "unit": "90 Caps",
    "description": "Assists Short term Memory, improves Long term Memory, increases Learning Abilities, supports Mental Focus.",
    "image": getGfragUrl("Gfrag-Memory-Booster")
  },
  {
    "id": 97,
    "name": "Gfrag® Green Tea",
    "category": "Nutraceuticals",
    "price": 280,
    "unit": "60 Caps",
    "description": "98% Pure Green Tea, aids in weight loss and abdominal fat, speeds up metabolism, reduces abdominal bloating, lowers blood pressure, sugar and cholesterol.",
    "image": getGfragUrl("Gfrag-Green-Tea")
  },
  {
    "id": 98,
    "name": "Gfrag® Green T & CLA",
    "category": "Nutraceuticals",
    "price": 300,
    "unit": "60 Caps",
    "description": "Combines the powerful benefits of Green Tea Extract with Conjugated Linoleic Acid (CLA), creating a potent formula designed to support fat loss, boost metabolism, and improve overall body composition.",
    "image": getGfragUrl("Gfrag-Green-Tea-CLA")
  },
  {
    "id": 99,
    "name": "Gfrag® Iron Booster",
    "category": "Nutraceuticals",
    "price": 200,
    "unit": "30 Caps",
    "description": "Increases the serum iron levels and prevents iron induced constipation.",
    "image": getGfragUrl("Gfrag-Iron-Booster")
  },
  {
    "id": 100,
    "name": "Gfrag® High Protein Ice Coffee",
    "category": "Nutraceuticals",
    "price": 480,
    "unit": "700g",
    "description": "93 Calories, 20g Protein, 2g Carbohydrates, add a scoop with ice into a blender for a coffee treat.",
    "image": getGfragUrl("Gfrag-High-Protein-Ice-Coffee")
  },
  {
    "id": 101,
    "name": "Gfrag® Super Greens Blacks",
    "category": "Nutraceuticals",
    "price": 800,
    "unit": "180 Caps",
    "description": "Overall health supplement, green & red wholefoods, nutrition in capsules, gluten free, non GMO. Fights cancer, improves gut health, anti-inflammatory, blood cleanser.",
    "image": getGfragUrl("Gfrag-Super-Greens-Blacks")
  },
  {
    "id": 102,
    "name": "Gfrag® Electro Fusion",
    "category": "Nutraceuticals",
    "price": 460,
    "unit": "250g",
    "description": "Electrolytes packed with red superfoods, anti-oxidants & daily vitamins, for everyday use, for GLP1 users, chronic fatigue, nerve function, hydration, pots syndrome, kidney health.",
    "image": getGfragUrl("Gfrag-Electro-Fusion")
  },
  {
    "id": 103,
    "name": "Gfrag® Calm Down Juice",
    "category": "Nutraceuticals",
    "price": 300,
    "unit": "200g",
    "description": "Helps with stress, lowers blood pressure, increases alertness, calms, improves sleep, improves concentration, improves attention span. Strawberry flavour.",
    "image": getGfragUrl("Gfrag-Calm-Down-Juice")
  },
  {
    "id": 104,
    "name": "Gfrag® Shroom Power",
    "category": "Nutraceuticals",
    "price": 320,
    "unit": "20g",
    "description": "Mushroom coffee blends especially those containing medicinal mushrooms like Cordyceps, Lion's Mane, Cha Turkey Tail and Reishi.",
    "image": getGfragUrl("Gfrag-Shroom-Power")
  },
  {
    "id": 105,
    "name": "Gfrag® Kidney Supplement",
    "category": "Nutraceuticals",
    "price": 350,
    "unit": "90 Caps",
    "description": "Potent, plant-powered supplement crafted to promote optimal kidney function, natural detox, and urinary tract health.",
    "image": getGfragUrl("Gfrag-Kidney-Supplement")
  },
  {
    "id": 106,
    "name": "Gfrag® Night Cap Cocoa",
    "category": "Nutraceuticals",
    "price": 350,
    "unit": "250g",
    "description": "Luxurious night time ritual. Promotes deep, restful sleep, calms the mind and body, reduces anxiety and tension, supports gut health and muscle recovery.",
    "image": getGfragUrl("Gfrag-Night-Cap-Cocoa")
  },
  {
    "id": 107,
    "name": "Gfrag® Eye Supplement",
    "category": "Nutraceuticals",
    "price": 380,
    "unit": "120 Caps",
    "description": "Supports retinal and macular health, combats screen fatigue and digital eye strain, enhances night and contrast vision, protects against oxidative and environmental damage.",
    "image": getGfragUrl("Gfrag-Eye-Supplement")
  },
  {
    "id": 108,
    "name": "Gfrag® Pure Focus Lions Mane Drops",
    "category": "Nutraceuticals",
    "price": 100,
    "unit": "10ml",
    "description": "Sharpens focus & clarity, boosts mood & clarity, supports nerves & gut-brain health, great for adults and kids!",
    "image": getGfragUrl("Gfrag-Pure-Focus-Lions-Mane")
  },
  {
    "id": 109,
    "name": "Gfrag® Butterfly Pea Flower Health and Wellness Tea",
    "category": "Other",
    "price": 200,
    "unit": "50g",
    "description": "Lifts mood, ameliorates skin conditions, celebrates graceful ageing, accelerates fat loss, stimulates hair growth, uplifts cardiac wellness, powerful anti-oxidant.",
    "image": getGfragUrl("Gfrag-Butterfly-Pea-Tea")
  },
  {
    "id": 110,
    "name": "Gfrag® Butterfly Pea Tea Including Tea Infuser",
    "category": "Other",
    "price": 250,
    "unit": "Set",
    "description": "Includes Butterfly Pea Flower Wellness Tea and stainless steel Tea Infuser.",
    "image": getGfragUrl("Gfrag-Butterfly-Pea-Tea-Infuser")
  },
  {
    "id": 111,
    "name": "Gfrag® Pain Spray",
    "category": "Other",
    "price": 200,
    "unit": "50ml",
    "description": "Pain spray eases pain associated with sciatica, muscle pain & strain, joint pain & arthritis, menstrual pain, inflammatory, rheumatoid arthritis, corns & bunions, nerve pain, migraines & headaches.",
    "image": getGfragUrl("Gfrag-Pain-Spray")
  },
  {
    "id": 112,
    "name": "Gfrag® Joint Pain Relief",
    "category": "Other",
    "price": 300,
    "unit": "90 Caps",
    "description": "Anti-inflammatory supplement that helps with joint pain, tendons and ligaments. Also relieves pain in the joint but around the joint too.",
    "image": getGfragUrl("Gfrag-Joint-Pain-Relief")
  },
  {
    "id": 113,
    "name": "Gfrag® Anxiety & Depression",
    "category": "Other",
    "price": 380,
    "unit": "60 Caps",
    "description": "Natural stress relief, calms the mind, helps support mental well-being, may help improve symptoms of depression, helps with anxiety.",
    "image": getGfragUrl("Gfrag-Anxiety-Depression")
  },
  {
    "id": 114,
    "name": "Gfrag® ZZZZ Sleep Supplement",
    "category": "Other",
    "price": 410,
    "unit": "60 Caps",
    "description": "Sleep supplement aids in achieving REM sleep, helps with tension and anxiety.",
    "image": getGfragUrl("Gfrag-ZZZZ-Sleep")
  },
  {
    "id": 115,
    "name": "Gfrag® Aqua Ban",
    "category": "Other",
    "price": 300,
    "unit": "60 Caps",
    "description": "Natural Diuretic that assists with Water Retention.",
    "image": getGfragUrl("Gfrag-Aqua-Ban")
  },
  {
    "id": 116,
    "name": "Gfrag® Bottom Slim",
    "category": "Other",
    "price": 310,
    "unit": "30 Caps",
    "description": "Burns visceral fat around the hips and thighs. Use in conjunction with other Gfrag® Products for Stubborn Hip and Thigh Fat.",
    "image": getGfragUrl("Gfrag-Bottom-Slim")
  },
  {
    "id": 117,
    "name": "Gfrag® Leptiburn",
    "category": "Other",
    "price": 340,
    "unit": "90 Caps",
    "description": "Supports Leptin Production & Sensitivity, supports accelerated fat loss, diminishes weight loss plateaus.",
    "image": getGfragUrl("Gfrag-Leptiburn")
  },
  {
    "id": 118,
    "name": "Gfrag® Crave Crusher",
    "category": "Other",
    "price": 290,
    "unit": "60 Caps",
    "description": "Blood Sugar Regulator that assists with cravings once blood sugar is regulated, the desire to snack is less.",
    "image": getGfragUrl("Gfrag-Crave-Crusher")
  },
  {
    "id": 119,
    "name": "Gfrag® Cheat Pill",
    "category": "Other",
    "price": 380,
    "unit": "90 Caps",
    "description": "A Blend of Fat and Carb blocking agents that binds on fat and carbs consumed in high calorie meals.",
    "image": getGfragUrl("Gfrag-Cheat-Pill")
  },
  {
    "id": 120,
    "name": "Gfrag® Belly Fat Reducer",
    "category": "Other",
    "price": 320,
    "unit": "90 Caps",
    "description": "Made up of Advanced Clinically Studied Ingredients to Combat Visceral Stomach Fat.",
    "image": getGfragUrl("Gfrag-Belly-Fat-Reducer")
  },
  {
    "id": 121,
    "name": "Gfrag® Water bottles",
    "category": "Other",
    "price": 150,
    "unit": "500ml",
    "description": "Available in green, orange and pink. Please check with your sales coach about stock availability before placing your order.",
    "image": getGfragUrl("Gfrag-Water-Bottles")
  },
  {
    "id": 122,
    "name": "Gfrag® Collagen Serum with 1% Retinol",
    "category": "Collagen Range",
    "price": 380,
    "unit": "30ml",
    "description": "Anti-ageing serum infused with 1% retinol and pure collagen peptides to firm, smooth, and restore youthful radiance.",
    "image": getGfragUrl("Gfrag-Collagen-Serum-Retinol")
  },
  {
    "id": 123,
    "name": "Gfrag® Collagen Mist",
    "category": "Collagen Range",
    "price": 380,
    "unit": "100ml",
    "description": "Hydrating and revitalizing facial collagen mist for instant skin plumping and on-the-go glow.",
    "image": getGfragUrl("Gfrag-Collagen-Mist")
  },
  {
    "id": 124,
    "name": "Gfrag® Collagen Booster Add-on",
    "category": "Collagen Range",
    "price": 700,
    "unit": "60 Caps",
    "description": "Targeted support formula to optimize collagen function, elastin integrity, and strengthen connective tissue.",
    "image": getGfragUrl("Gfrag-Collagen-Booster")
  },
  {
    "id": 125,
    "name": "Gfrag® Body & Brain Creatine",
    "category": "Nutraceuticals",
    "price": 460,
    "unit": "300g",
    "description": "Pure micronized creatine monohydrate to support muscle power, cellular energy, and cognitive focus.",
    "image": getGfragUrl("Gfrag-Body-Brain-Creatine")
  },
  {
    "id": 126,
    "name": "Gfrag® Advanced Peptide Elixir",
    "category": "Nutraceuticals",
    "price": 400,
    "unit": "50ml",
    "description": "Bio-active peptide formulation for metabolic activation, cellular rejuvenation, and enhanced vitality.",
    "image": getGfragUrl("Gfrag-Advanced-Peptide-Elixir")
  },
  {
    "id": 127,
    "name": "Gfrag® Perfect Tan",
    "category": "Summer Range",
    "price": 520,
    "unit": "60 Softgels",
    "description": "Advanced tanning accelerator softgels for a golden, radiant complexion without extended sun exposure.",
    "image": getGfragUrl("Gfrag-Perfect-Tan")
  }
];
