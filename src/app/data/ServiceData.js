// lib/serviceDetails.js
import LaserHairReduction from "../../source/LaserHairReduction.jpeg";
import HydraFacial from '../../source/HydraFacial.jpeg';
import CarbonFacial from '../../source/CarbonFacial.jpeg';
import PhotoFacial from '../../source/PhotoFacial.jpeg';
import TatooRemoval from '../../source/TatooRemoval.jpeg';
import CryoTreatment from '../../source/CryoTreatment.jpeg';
import MSculpt from '../../source/MSculpt.jpeg';
import FatFreezing from '../../source/FatFreezing.jpeg';
import MoleRemoval from '../../source/MoleRemoval.jpeg';
import ChemicalPeelRemoval from '../../source/ChemicalPeelRemoval.jpeg';
import PRPTreatment from '../../source/PRPTreatment.jpeg'
import HIFVTreatment from '../../source/HIFVTreatment.jpeg';
import BotoxTreatement from '../../source/BotoxTreatment.jpeg'; 

export const serviceDetails = {
  "skin-treatments": {
    category: "Skin & Dermatology",
    name: "Skin Treatments",
    image: "/images/services/skin-treatments.jpg",
    introduction:
      "Personalized, science-backed dermatology protocols for clear, healthy skin.",
    idealFor: [
      "Acne & post-acne marks",
      "Pigmentation & uneven tone",
      "Mild scars, texture, dullness",
    ],
    howItWorks:
      "Assessment-driven plans combine actives and in-clinic therapies (e.g., peels, energy devices) tailored to skin type and goals.",
    precare: [
      "Avoid retinoids/AHAs/BHAs for 3–5 days unless advised.",
      "No waxing/bleach on treatment areas for 5–7 days.",
      "Arrive with clean skin; disclose medications/allergies.",
    ],
    postCare: [
      "Use gentle cleanser + hydrating SPF 30+ daily.",
      "Avoid hot showers/sauna and active exfoliants for 3–5 days.",
      "Do not pick or scratch; follow prescribed topicals.",
    ],
    benefits: [
      "Clearer, brighter complexion",
      "More even tone and texture",
      "Customizable & stepwise approach",
    ],
    sessionTime: "30–60 min",
    downTime: "None to mild redness/flaking (0–3 days)",
    result:
      "Progressive improvement over 3–6 sessions; maintenance per plan.",
  },

  "laser-hair-reduction": {
    category: "Laser & Light Therapies",
    name: "Laser Hair Reduction",
    image: LaserHairReduction.src,
    introduction:
      "Long-term hair reduction using advanced, skin-type–matched laser parameters.",
    idealFor: [
      "Unwanted facial/body hair",
      "Razor bumps/ingrowns",
      "Preference for low-maintenance grooming",
    ],
    howItWorks:
      "Laser targets melanin in hair follicles to disable growth while protecting surrounding skin.",
    precare: [
      "Shave the area 12–24h before (no waxing/threading 3–4 weeks prior).",
      "Avoid sun/tanning & actives for 7–10 days.",
      "Do not apply oils/actives on the day of treatment.",
    ],
    postCare: [
      "Cool compress if red; moisturize + SPF 30+ daily.",
      "Avoid sun/steam/exercise heat for 24–48h.",
      "Let treated hairs shed naturally (7–21 days).",
    ],
    benefits: [
      "Noticeable reduction after a few sessions",
      "Smoother skin, fewer ingrowns",
      "Fast, targeted and predictable",
    ],
    sessionTime: "20–45 min per area",
    downTime: "None; transient redness (0–24h)",
    result:
      "Visible reduction after 2–3 sessions; 6–8 sessions typical; periodic maintenance.",
  },

  "hydra-facial": {
    category: "Facial Glow Rituals",
    name: "Hydra Facial",
    image: HydraFacial.src,
    introduction:
      "Deep cleanse, exfoliation, extraction and serum infusion for instant glow.",
    idealFor: ["Dull/dehydrated skin", "Congestion", "Pre-event refresh"],
    howItWorks:
      "Cycling tips gently exfoliate and vacuum impurities while infusing hydrating, antioxidant serums.",
    precare: [
      "Pause retinoids/AHAs/BHAs for 2–3 days.",
      "Avoid active acne picking or harsh scrubs.",
      "Arrive makeup-free if possible.",
    ],
    postCare: [
      "Hydrate + SPF 30+; avoid exfoliants for 48–72h.",
      "No steam/sauna the same day.",
      "Gentle skincare for 2–3 days.",
    ],
    benefits: [
      "Immediate brightness and smoothness",
      "Decongested pores",
      "Zero to minimal downtime",
    ],
    sessionTime: "45–60 min",
    downTime: "None",
    result: "Instant glow; lasts ~1–4 weeks; monthly maintenance recommended.",
  },

  "carbon-facial": {
    category: "Facial Glow Rituals",
    name: "Carbon Facial",
    image: CarbonFacial.src,
    introduction:
      "Laser + carbon mask synergy to refine pores and improve clarity.",
    idealFor: ["Oily/congested skin", "Pores", "Mild pigmentation/dullness"],
    howItWorks:
      "A carbon lotion binds oil/debris; laser energy vaporizes carbon, lifting impurities and polishing the surface.",
    precare: [
      "Pause retinoids/AHAs/BHAs for 3–5 days.",
      "Avoid tanning and recent waxing.",
      "Inform about photosensitivity medications.",
    ],
    postCare: [
      "Sunscreen + hydration daily.",
      "Avoid exfoliants for 3–5 days.",
      "No hot yoga/sauna for 24–48h.",
    ],
    benefits: [
      "Refined pores and smoother texture",
      "Fresh, mattified look",
      "Minimal downtime",
    ],
    sessionTime: "30–45 min",
    downTime: "None to mild pinkness (0–24h)",
    result: "Clearer look immediately; best in 3–6 sessions, 3–4 weeks apart.",
  },

  "photo-facial": {
    category: "Laser & Light Therapies",
    name: "Photo Facial",
    image: PhotoFacial.src,
    introduction:
      "Light-based rejuvenation (e.g., IPL) to even tone and improve clarity.",
    idealFor: ["Sun damage", "Redness", "Mild pigmentation/dullness"],
    howItWorks:
      "Selective light targets pigment/vessels to reduce discoloration and brighten skin.",
    precare: [
      "No tanning 2 weeks; SPF daily.",
      "Pause actives/retinoids for 3–5 days.",
      "Disclose photosensitivity/drugs.",
    ],
    postCare: [
      "Pigmented spots may darken then flake (3–7 days).",
      "SPF 30+; avoid heat/exfoliants for 3–5 days.",
      "Do not pick; moisturize.",
    ],
    benefits: [
      "More even tone",
      "Reduction in redness/brown spots",
      "Fresh, brighter look",
    ],
    sessionTime: "20–40 min",
    downTime: "Redness 0–48h; flaking 3–7 days (spot-dependent)",
    result:
      "Tone improves in 2–4 weeks; 3–5 sessions typical; maintain with SPF/care.",
  },

  "tattoo-removal": {
    category: "Laser & Light Therapies",
    name: "Tattoo Removal",
    image: TatooRemoval.src,
    introduction:
      "Advanced lasers to progressively fade unwanted tattoo ink safely.",
    idealFor: ["Professional/amateur tattoos", "Partial cover-up plans"],
    howItWorks:
      "Short pulses fragment ink particles for the body to clear gradually between sessions.",
    precare: [
      "No tanning 2 weeks; shave if needed.",
      "Avoid irritants on area 3–5 days.",
      "Discuss colors/age of tattoo for planning.",
    ],
    postCare: [
      "Cool compress; keep area clean/dry.",
      "Ointment + dressing as advised; no picking.",
      "Avoid sun, pools and friction until healed.",
    ],
    benefits: [
      "Progressive fading over time",
      "Targets multiple ink colors (device-dependent)",
      "Non-surgical",
    ],
    sessionTime: "15–45 min (size-dependent)",
    downTime: "Whitening/redness/blistering 3–10 days possible",
    result:
      "Fading over 6–10+ sessions spaced ~6–8 weeks; outcomes vary by ink/skin.",
  },

  "cryo-treatment": {
    category: "Skin & Dermatology",
    name: "Cryo Treatment",
    image: CryoTreatment.src,
    introduction:
      "Targeted cold therapy for benign skin concerns with minimal downtime.",
    idealFor: ["Warts/skin tags", "Seborrheic keratoses", "Benign lesions"],
    howItWorks:
      "Controlled low temperatures cause selective cellular destruction of lesions.",
    precare: [
      "No active infections on site.",
      "Discuss history of keloids or poor healing.",
      "Avoid tanning/irritants pre-session.",
    ],
    postCare: [
      "Expect blister/crust; keep clean; do not pick.",
      "Apply ointment as directed.",
      "SPF on exposed areas until healed.",
    ],
    benefits: [
      "Quick, precise treatment",
      "Generally minimal bleeding",
      "Short appointment",
    ],
    sessionTime: "10–20 min",
    downTime: "Crusting 5–14 days",
    result: "Lesion clearance in 1–3 sessions typically.",
  },

  "m-sculpt": {
    category: "Body Contouring",
    name: "M-Sculpt",
    image: MSculpt.src,
    introduction:
      "High-intensity EMS to strengthen and tone targeted muscle groups.",
    idealFor: ["Core/glutes/arms/thighs toning", "Posture support"],
    howItWorks:
      "Electromagnetic pulses induce supramaximal contractions beyond voluntary effort.",
    precare: [
      "Remove metal items; avoid heavy meals right before.",
      "Hydrate well.",
      "Disclose implants/metal devices in area.",
    ],
    postCare: [
      "Mild soreness can occur (24–48h).",
      "Hydration and light stretching help.",
      "Resume normal activity immediately.",
    ],
    benefits: [
      "Muscle strengthening",
      "Visible toning over a few weeks",
      "No downtime",
    ],
    sessionTime: "30 min per area",
    downTime: "None (possible DOMS 1–2 days)",
    result:
      "Toning noticeable in 2–4 weeks; common plan 4–8 sessions; maintain monthly/quarterly.",
  },

  "fat-freezing": {
    category: "Body Contouring",
    name: "Fat Freezing",
    image: FatFreezing.src,
    introduction:
      "Non-surgical spot reduction via controlled cooling (cryolipolysis).",
    idealFor: ["Local bulges (abdomen, flanks, thighs, arms, chin)"],
    howItWorks:
      "Cooling selectively injures fat cells; body clears them gradually over weeks.",
    precare: [
      "Stable weight; no active skin issues in area.",
      "Avoid blood thinners if advised by clinician.",
      "Eat light; hydrate before session.",
    ],
    postCare: [
      "Temporary numbness/swelling/bruising can occur.",
      "Gentle massage as instructed.",
      "Resume normal routine; protect skin.",
    ],
    benefits: [
      "Targeted contouring",
      "No anesthesia or surgery",
      "Predictable reduction per cycle",
    ],
    sessionTime: "35–60 min per applicator",
    downTime: "Tenderness/numbness 1–2 weeks possible",
    result:
      "Reduction visible by 4–8 weeks; peak ~12 weeks; may need 1–2 cycles/area.",
  },

  "mole-removal": {
    category: "Skin & Dermatology",
    name: "Mole Removal",
    image: MoleRemoval.src,
    introduction:
      "Safe removal using scar-aware techniques after clinical evaluation.",
    idealFor: ["Benign moles/skin tags causing concern or friction"],
    howItWorks:
      "Excision or energy-based methods chosen for lesion type and cosmetic goals.",
    precare: [
      "Clinical assessment; discuss history and expectations.",
      "Avoid blood thinners if advised.",
      "No active infections on site.",
    ],
    postCare: [
      "Wound care per instructions; keep clean/dry.",
      "Suture removal if applicable.",
      "SPF and scar care during healing phase.",
    ],
    benefits: [
      "Definitive removal",
      "Cosmetic planning",
      "Option for histopathology when indicated",
    ],
    sessionTime: "15–30 min",
    downTime: "Small wound 5–14 days",
    result:
      "Lesion removed; scar maturation over 3–6 months with care guidance.",
  },

  "chemical-peels": {
    category: "Skin & Dermatology",
    name: "Chemical Peels",
    image: ChemicalPeelRemoval.src,
    introduction:
      "Medical-grade peels to brighten, smooth and refine acne-prone or uneven skin.",
    idealFor: ["Acne/marks", "Dullness", "Pigmentation", "Texture"],
    howItWorks:
      "Controlled exfoliation with chosen acids triggers renewal and improves tone/texture.",
    precare: [
      "Stop retinoids/AHAs/BHAs 3–5 days prior.",
      "No waxing/laser 1 week prior.",
      "SPF daily; avoid tanning.",
    ],
    postCare: [
      "Flaking/peeling may occur (2–7 days).",
      "Hydrate and use SPF; avoid picking/scrubs.",
      "Pause actives until advised.",
    ],
    benefits: [
      "Brighter, smoother skin",
      "Helps acne and marks",
      "Customizable depths",
    ],
    sessionTime: "20–30 min",
    downTime: "None to flaking 2–7 days (depth-dependent)",
    result:
      "Visible clarity in 1–2 weeks; best in a series of 3–6 at 2–4 week intervals.",
  },

  "prp-treatment": {
    category: "Advanced Aesthetics",
    name: "PRP Treatment",
    image: PRPTreatment.src,
    introduction:
      "Platelet-rich plasma to support skin quality and hair density.",
    idealFor: ["Early hair thinning", "Texture/fine lines", "Under-eye quality"],
    howItWorks:
      "Concentrated platelets from your own blood deliver growth factors to targeted tissues.",
    precare: [
      "Hydrate; eat lightly before.",
      "Avoid blood thinners/alcohol if advised.",
      "Arrive with clean scalp/skin.",
    ],
    postCare: [
      "Mild swelling/bruising possible 1–3 days.",
      "No heavy workouts/sauna 24h; gentle cleansing only.",
      "Follow topicals as prescribed.",
    ],
    benefits: [
      "Autologous (your own plasma)",
      "Improves texture and hair support",
      "Pairs well with other treatments",
    ],
    sessionTime: "45–60 min",
    downTime: "Minimal; pinpoint marks/bruising 1–3 days",
    result:
      "Skin/hair benefits build over 6–12 weeks; 3–6 sessions common; maintenance as advised.",
  },

  "hifu-treatment": {
    category: "Advanced Aesthetics",
    name: "HIFU Treatment",
    image: HIFVTreatment,
    introduction:
      "Focused ultrasound for lifting/tightening with natural-looking results.",
    idealFor: ["Mild–moderate laxity", "Jawline/neck lift", "Brow/cheek lift"],
    howItWorks:
      "Energy focused at precise depths stimulates collagen and tissue contraction.",
    precare: [
      "Hydrate; avoid anti-inflammatories if advised.",
      "No active infections; remove makeup.",
      "Discuss recent fillers/threads.",
    ],
    postCare: [
      "Tenderness/tingling possible for a few days.",
      "SPF 30+; gentle skincare.",
      "Avoid high heat workouts same day.",
    ],
    benefits: [
      "Non-surgical lift",
      "Gradual, natural improvement",
      "Infrequent sessions",
    ],
    sessionTime: "45–90 min",
    downTime: "None; soreness possible 1–7 days",
    result:
      "Lift builds 8–12 weeks; peak at 3–6 months; yearly maintenance typical.",
  },

  botox: {
    category: "Advanced Aesthetics",
    name: "Botox",
    image: BotoxTreatement.src,
    introduction:
      "Precision anti-wrinkle injections to soften expression lines.",
    idealFor: ["Frown lines", "Crow’s feet", "Forehead lines"],
    howItWorks:
      "Small doses relax targeted muscles, reducing dynamic wrinkles while keeping a natural look.",
    precare: [
      "Avoid blood thinners/alcohol 24–48h if advised.",
      "Arrive makeup-free; disclose pregnancy/medical history.",
      "No active infections on site.",
    ],
    postCare: [
      "Stay upright 4–6h; no rubbing/massaging the area.",
      "Avoid heavy workouts/sauna same day.",
      "Results start in 3–7 days.",
    ],
    benefits: [
      "Softer lines with precision",
      "Quick treatment",
      "No significant downtime",
    ],
    sessionTime: "10–20 min",
    downTime: "None; small bumps/redness ~1h",
    result: "Effect in 3–7 days; lasts ~3–4 months; maintenance needed.",
  },


  pedicure: {
    category: "Grooming Lounge",
    name: "Pedicure",
    image: "/images/services/pedicure.jpg",
    introduction:
      "Hygienic foot care with exfoliation, cuticle work and polished finish.",
    idealFor: ["Callus/dryness", "Grooming", "Relaxation"],
    howItWorks:
      "Soak, cleanse, exfoliate, nail shaping and finishing, with hygiene-first standards.",
    precare: [
      "Disclose infections/cuts.",
      "Wear open footwear post-session if possible.",
      "Choose finish style ahead of time.",
    ],
    postCare: [
      "Keep feet dry for a bit after polish.",
      "Moisturize heels daily.",
      "Use SPF on exposed feet outdoors.",
    ],
    benefits: [
      "Clean, soft feet",
      "Improved comfort",
      "Aesthetic finish",
    ],
    sessionTime: "45–60 min",
    downTime: "None",
    result: "Instantly groomed appearance; lasts 1–3 weeks (finish-dependent).",
  },

  manicure: {
    category: "Grooming Lounge",
    name: "Manicure",
    image: "/images/services/manicure.jpg",
    introduction:
      "Clean, elegant hand and nail care with a polished finish.",
    idealFor: ["Cuticle care", "Nail shaping", "Event-ready hands"],
    howItWorks:
      "Soak, tidy, shape and finish with your preferred polish or treatment.",
    precare: [
      "Remove old polish if possible.",
      "Disclose any nail issues/sensitivities.",
      "Choose shade/finish in advance.",
    ],
    postCare: [
      "Avoid harsh chemicals soon after.",
      "Use cuticle oil and hand SPF.",
      "Gloves for chores to extend finish.",
    ],
    benefits: [
      "Neat, healthy-looking nails",
      "Custom finishes",
      "Quick grooming boost",
    ],
    sessionTime: "30–45 min",
    downTime: "None",
    result: "Instantly tidy look; finish longevity varies by product.",
  },

  "hair-spa": {
    name: "Hair Spa",
    image: "/images/services/hair-spa.jpg",
    introduction:
      "Scalp-first routines to nourish and improve hair feel and shine.",
    idealFor: ["Dry/itchy scalp", "Dull hair", "Stress relief"],
    howItWorks:
      "Cleansing + targeted masks and massage to support scalp health and strand conditioning.",
    precare: [
      "Arrive with detangled hair if possible.",
      "Disclose scalp conditions/sensitivity.",
      "Avoid heavy styling products before visit.",
    ],
    postCare: [
      "Gentle home care; avoid heavy heat styling same day.",
      "Use recommended shampoo/mask cadence.",
      "Protect hair from sun/chlorine.",
    ],
    benefits: [
      "Softer, shinier hair feel",
      "Relaxation",
      "Scalp comfort",
    ],
    sessionTime: "45–60 min",
    downTime: "None",
    result: "Immediate softness/shine; benefits build with routine care.",
  },

  "blow-dry": {
    name: "Blow Dry",
    image: "/images/services/blow-dry.jpg",
    introduction:
      "Smooth, long-lasting styling with heat protection and finish options.",
    idealFor: ["Events", "Frizz control", "Polished everyday look"],
    howItWorks:
      "Controlled heat and brush techniques shape hair while protecting integrity.",
    precare: [
      "Arrive with clean, product-free hair if possible.",
      "Bring inspiration photos.",
      "Disclose heat sensitivity/damage history.",
    ],
    postCare: [
      "Avoid humidity and rain soon after.",
      "Use silk pillowcase to extend style.",
      "Minimal product to retain volume.",
    ],
    benefits: [
      "Sleek, polished look",
      "Custom volume/shape",
      "Fast turnaround",
    ],
    sessionTime: "30–60 min",
    downTime: "None",
    result: "Immediate finish; longevity depends on hair type and climate.",
  },
};

// Optional: keep a correctly spelled alias for code that expects "Benifits"
Object.keys(serviceDetails).forEach((k) => {
  const b = serviceDetails[k].benefits;
  serviceDetails[k].benifits = b; // alias for compatibility
});

// Helper
export const getServiceDetails = (slug) => serviceDetails[slug];
