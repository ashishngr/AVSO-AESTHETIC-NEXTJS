// lib/serviceDetails.js
export const serviceDetails = {
  "skin-treatments": {
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
    name: "Laser Hair Reduction",
    image: "/images/services/laser-hair-reduction.jpg",
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
    name: "Hydra Facial",
    image: "/images/services/hydra-facial.jpg",
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
    name: "Carbon Facial",
    image: "/images/services/carbon-facial.jpg",
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

  "rf-facial": {
    name: "RF Facial",
    image: "/images/services/rf-facial.jpg",
    introduction:
      "Radiofrequency tightening to support firmness and texture with comfort.",
    idealFor: ["Mild laxity", "Fine lines", "Early jowling/texture"],
    howItWorks:
      "Controlled RF heats dermis to stimulate collagen remodeling without injuring surface.",
    precare: [
      "Hydrate well; avoid tanning 1 week.",
      "No fillers on the same day; disclose recent procedures.",
      "Remove metal jewelry; arrive makeup-free.",
    ],
    postCare: [
      "SPF 30+ daily; gentle skincare.",
      "Avoid hot environments/exercise for 24h.",
      "Expect mild warmth/tenderness for a day.",
    ],
    benefits: [
      "Subtle tightening",
      "Texture refinement over weeks",
      "Comfortable, no needles",
    ],
    sessionTime: "30–60 min",
    downTime: "None; transient warmth/redness (hours)",
    result:
      "Builds gradually over 4–12 weeks; often 3–6 sessions; maintenance quarterly/biannual.",
  },

  "photo-facial": {
    name: "Photo Facial",
    image: "/images/services/photo-facial.jpg",
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
    name: "Tattoo Removal",
    image: "/images/services/tattoo-removal.jpg",
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
    name: "Cryo Treatment",
    image: "/images/services/cryo-treatment.jpg",
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
    name: "M-Sculpt",
    image: "/images/services/m-sculpt.jpg",
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
    name: "Fat Freezing",
    image: "/images/services/fat-freezing.jpg",
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
    name: "Mole Removal",
    image: "/images/services/mole-removal.jpg",
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
    name: "Chemical Peels",
    image: "/images/services/chemical-peels.jpg",
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
    name: "PRP Treatment",
    image: "/images/services/prp-treatment.jpg",
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
    name: "HIFU Treatment",
    image: "/images/services/hifu-treatment.jpg",
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
    name: "Botox",
    image: "/images/services/botox.jpg",
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

  fillers: {
    name: "Fillers",
    image: "/images/services/fillers.jpg",
    introduction:
      "Hyaluronic acid fillers to lift, contour and hydrate with balance.",
    idealFor: ["Cheeks/lips/chin/jawline", "Under-eye hollows", "Lines/folds"],
    howItWorks:
      "Gel placed at precise depths restores volume/shape; reversible HA options available.",
    precare: [
      "Avoid alcohol/blood thinners 24–48h if advised.",
      "Arrive makeup-free; discuss goals/photos.",
      "No active skin infections.",
    ],
    postCare: [
      "Swelling/bruising 2–7 days possible.",
      "Cold compress first 24h; sleep elevated.",
      "Delay facials/sauna/workouts 24–48h.",
    ],
    benefits: [
      "Immediate enhancement",
      "Customizable, reversible (HA)",
      "Natural, anatomy-led results",
    ],
    sessionTime: "20–45 min",
    downTime: "Swelling/bruising 2–7 days",
    result:
      "Immediate volume; settles 1–2 weeks; longevity ~6–18 months (product/area).",
  },

  "thread-lift": {
    name: "Thread Lift",
    image: "/images/services/thread-lift.jpg",
    introduction:
      "Minimally invasive lift using biostimulatory threads for refreshed contours.",
    idealFor: ["Mild sagging", "Jawline/cheek/eyebrow support"],
    howItWorks:
      "Threads reposition tissues and stimulate collagen as they dissolve.",
    precare: [
      "Avoid blood thinners/alcohol 48h if advised.",
      "No active acne/infections on track.",
      "Discuss recent fillers/HIFU timing.",
    ],
    postCare: [
      "Tenderness/dimpling possible 3–14 days.",
      "Sleep on back; avoid wide mouth movements initially.",
      "No facials/sauna/heavy workouts 1–2 weeks.",
    ],
    benefits: [
      "Immediate lift + collagen over time",
      "Tiny entry points",
      "Customizable vectors",
    ],
    sessionTime: "30–60 min",
    downTime: "Social downtime 3–7 days typical",
    result:
      "Lift visible immediately; collagen builds 3–6 months; lasts ~12–18 months.",
  },

  "permanent-glow": {
    name: "Permanent Glow",
    image: "/images/services/permanent-glow.jpg",
    introduction:
      "Protocol-based brightening for sustained radiance and smoothness.",
    idealFor: ["Dullness", "Uneven tone", "Event prep/maintenance"],
    howItWorks:
      "Layered treatments (boosters/peels/light/RF) tailored to skin to enhance clarity and hydration.",
    precare: [
      "Pause actives 2–3 days unless advised.",
      "Avoid tanning; SPF daily.",
      "Arrive makeup-free.",
    ],
    postCare: [
      "Hydrate + SPF; gentle routine for 2–3 days.",
      "Avoid harsh scrubs/heat for 48h.",
      "Follow booster/serum plan as prescribed.",
    ],
    benefits: [
      "Radiance with minimal downtime",
      "Customizable mix of modalities",
      "Supports long-lasting freshness",
    ],
    sessionTime: "30–45 min",
    downTime: "None to mild pinkness (hours)",
    result:
      "Glow in days; best as a 3–4 session program; maintenance every 4–8 weeks.",
  },

  "beauty-treatments": {
    name: "Beauty Treatments",
    image: "/images/services/beauty-treatments.jpg",
    introduction:
      "Routine grooming and relaxation therapies that complement clinical care.",
    idealFor: ["Regular upkeep", "Event prep", "Self-care sessions"],
    howItWorks:
      "Curated protocols for cleansing, massage and finishing tailored to preferences.",
    precare: [
      "Share sensitivities/allergies.",
      "Avoid retinoids 24–48h before if choosing exfoliation.",
      "Arrive makeup-free for facials.",
    ],
    postCare: [
      "Hydration + SPF if daytime.",
      "Avoid new actives for 24h after exfoliating treatments.",
      "Follow finishing product advice.",
    ],
    benefits: [
      "Immediate refreshed look",
      "Relaxation and maintenance",
      "Pairs well with medical treatments",
    ],
    sessionTime: "30–90 min",
    downTime: "None",
    result: "Instant polish and comfort; ideal as periodic upkeep.",
  },

  pedicure: {
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
