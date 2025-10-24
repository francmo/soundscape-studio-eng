// Soundscape Field Recording Exercises - Professional Exercises
// Based on R. Murray Schafer's exercises - "Sound Education"
// Total: 96 fully detailed professional exercises

var fieldRecordingExercises = {
  'ascolto-base': [
    {
      title: "📝 Personal Acoustic Catalog",
      description: "Document every sound entering your awareness",
      prompt: "Here's where we start—something straightforward yet powerful. Spend a few minutes writing down every sound you can hear right now. If you're in a group, share your lists aloud afterward and notice how wildly they differ. Listening is deeply subjective: we each perceive and prioritize different acoustic elements, and every response is valid, no matter how long or short. Try this in different spaces—home, park, café, subway—and you'll sharpen your awareness with each iteration.",
      duration: "10-15 min",
      examples: [
        "📍 At home: fridge hum, clock ticking, footsteps upstairs, HVAC whoosh",
        "🌳 Outdoors: rustling leaves, distant voices, car engines, bird calls",
        "🏢 In an office: keyboard clicks, phones, PC fan, hushed conversations"
      ]
    },
    {
      title: "🏷️ Systematic Classification",
      description: "Organize your sound inventory using multiple criteria",
      prompt: "Take your list from the first exercise and code it. First pass: assign each sound a letter—'N' for natural origin, 'H' for human, 'T' for technological. Which category dominates your environment? Second pass: mark every sound you created with an 'X.' Are you mostly a producer or a receiver of sound? Third pass: classify temporality—'C' for continuous, 'R' for repetitive, 'U' for unique or one-off.",
      duration: "15 min",
      examples: [
        "💡 Street traffic = T + others + C (tech, made by others, continuous)",
        "🗣️ Your voice = H + X + U (human, made by you, unique)",
        "🌊 Park fountain = N + others + C (natural, continuous)"
      ]
    },
    {
      title: "📊 Intensity Mapping",
      description: "Visualize the soundscape by volume and emotional preference",
      prompt: "Take a blank sheet. Mentally divide it in two: upper half for loud sounds, lower half for quiet ones. List every sound you hear, positioning it vertically by perceived intensity. Then take a second sheet and repeat—but this time, upper half for pleasant sounds, lower half for unpleasant. Compare the two maps: is there a correlation between loudness and enjoyment in your environment?",
      duration: "20 min",
      examples: [
        "🔊 Loud: traffic, ambulance siren, jackhammer, kids yelling",
        "🔉 Quiet: fridge hum, leaf rustle, breathing, wristwatch tick",
        "😊 Pleasant: birdsong, distant laughter, fountain / 😣 Unpleasant: chainsaw, honking, car alarm"
      ]
    },
    {
      title: "🎯 Radial Spatial Mapping",
      description: "Create a geographic representation of your acoustic environment",
      prompt: "Turn your paper landscape. Draw a medium-sized circle in the center: that's you. Inside the circle, write every sound you produce directly (voice, footsteps, breathing, clothing rustle). Around the circle, distribute all other sounds according to their actual distance and direction from you. Use position on the page to indicate whether they come from right, left, front, back. The farther the sound, the farther from the central circle you'll place it.",
      duration: "15 min",
      examples: [
        "🧍 Center: breathing, heartbeat, clothing rustle, swallowing",
        "➡️ Right near: colleague's voice, keyboard, fan / Right far: street traffic",
        "⬆️ Above: footsteps upstairs, plane overhead / ⬇️ Below: heating system in basement"
      ]
    },
    {
      title: "⏱️ Temporal Acoustic Inventory",
      description: "Count discrete sound events in a set timeframe",
      prompt: "Set a timer for exactly one minute. Close your eyes or look down. The moment the timer starts, begin counting individual sound events—not continuous drones, but discrete occurrences: a footstep, a door closing, a cough. When the timer rings, write down your count. Now repeat in a different acoustic context (another room, outside, at rush hour). How do the counts compare? In which environment did you perceive more discrete events? Did the nature of the sounds change the difficulty of counting?",
      duration: "10 min (2 rounds)",
      examples: [
        "🏠 Quiet room: 8 events (3 creaks, 2 door slams from neighbor, 1 car passing, 2 bird calls)",
        "🚇 Subway platform: 47 events (footsteps, announcements, brake squeals, conversations, bag zips)",
        "🌃 Late-night bedroom: 3 events (1 car, 1 distant siren, 1 house settling creak)"
      ]
    },
    {
      title: "🔍 Single-Sound Anchoring",
      description: "Focus on one sound for an extended period",
      prompt: "Choose a single sustained sound in your environment—fridge hum, distant traffic, HVAC, birdsong, wind. Commit to listening to it, and only it, for as long as you can maintain focus. Describe its texture, fluctuations, timbral evolution. Does it change? Does your perception of it change? How long can you hold your attention before your mind wanders or another sound intrudes? This is meditation, essentially—anchoring awareness on an acoustic object.",
      duration: "5-10 min",
      examples: [
        "🌬️ Wind through trees: initial whoosh, micro-silences, shifts in pitch as gusts vary",
        "❄️ Refrigerator: steady low hum, periodic compressor clicks, subtle harmonic overtones",
        "🚗 Distant highway: composite drone, individual vehicles briefly emerging then dissolving back into texture"
      ]
    },
    {
      title: "🚶 Walking Sound Inventory",
      description: "Catalog sounds produced by a single pedestrian in motion",
      prompt: "Go outside. Stand still and silent. Wait for a single person to walk past you. As they approach, pass, and recede, list every sound they generate: footsteps, clothing rustle, bag jostling, keys jingling, breathing, phone notification. How many discrete sound sources does a single moving human body produce? How does distance affect what you hear? How does pace? Try this with different types of pedestrians: jogger, elderly person with cane, parent pushing stroller.",
      duration: "15 min",
      examples: [
        "👟 Jogger: rhythmic footfalls, breathing, synthetic jacket swish, earbud leak, shoe sole squeak",
        "👠 Business person: heel clicks, phone conversation, briefcase clasp, keys, accelerating pace",
        "🦽 Person with mobility aid: cane tap, slower footsteps, labored breathing, pause mid-stride"
      ]
    },
    {
      title: "🎧 Ears vs. Eyes Inventory",
      description: "Compare auditory and visual event detection",
      prompt: "Stand in a public space. For one minute, keep your eyes closed and count every sound event you perceive. Record the number. Then, for one minute, keep your ears plugged (or covered with noise-canceling headphones in transparency mode off) and count every visual event you perceive. Which sense detected more discrete events? Which sense felt more overwhelming? Which felt safer? What does this reveal about how you navigate the world?",
      duration: "10 min",
      examples: [
        "👂 Ears only (busy street): 52 events (footsteps, voices, horns, brakes, rustles, doors)",
        "👁️ Eyes only (same street): 31 events (people passing, cars, bikes, gestures, signs swaying)",
        "🤔 Insight: Ears may detect events outside field of vision or behind obstacles—more omnidirectional awareness"
      ]
    }
  ],

  'consapevolezza': [
    {
      title: "🌅 Awakening Soundscape",
      description: "Document the first sounds you hear each morning",
      prompt: "Before you even open your eyes, before you move, before you think—what do you hear? For one full week, keep a notebook by your bed. The instant you wake, before touching your phone, write down the first three sounds that enter your consciousness. Do patterns emerge? Do certain sounds recur? Does the acoustic texture of your awakening change day to day, or remain stable? This exercise trains you to notice the acoustic threshold between sleep and waking.",
      duration: "5 min daily for 1 week",
      examples: [
        "🐦 Monday: birdsong, distant traffic hum, partner breathing",
        "🚚 Tuesday: garbage truck hydraulics, dog barking, alarm clock from next apartment",
        "☔ Wednesday: rain on window, gutter drip, wind gust"
      ]
    },
    {
      title: "🌙 Pre-Sleep Acoustic Scan",
      description: "Listen to your environment just before falling asleep",
      prompt: "Tonight, as you lie in bed preparing for sleep, resist the urge to scroll or read. Instead, perform a slow acoustic scan of your environment. What sounds persist after you turn off lights and devices? What sounds are always there but usually masked? Listen for the room tone, the building's hum, the neighborhood's baseline. Let your ears adjust to the quiet. Note what you hear. This is the acoustic signature of rest.",
      duration: "10 min",
      examples: [
        "🏠 House settling: creaks, HVAC cycling, appliance hums, distant freeway drone",
        "🏙️ Urban apartment: muffled neighbor TV, street traffic fading, elevator ding, radiator hiss",
        "🌲 Rural home: wind, insect chorus, animal calls, absolute silences between events"
      ]
    },
    {
      title: "📴 Silence Census",
      description: "Identify and measure moments of true silence in your day",
      prompt: "For 24 hours, carry a small notebook. Every time you perceive what feels like silence—even momentarily—note the time and location. At the end of the day, review your log. How many moments of silence did you experience? Were any of them true silence, or just relative quiet? What does 'silence' mean in your daily life? Is it the absence of sound, or the absence of unwanted sound?",
      duration: "Full day observation",
      examples: [
        "🛁 7:15 AM, bathroom, door closed: running water stops, brief pause, fan hum remains—not true silence",
        "🚗 12:40 PM, car at red light, engine off: nearby construction—not true silence",
        "🌳 6:10 PM, park bench, deep in trees: wind stopped, no voices, no machines—closest to true silence (8 seconds)"
      ]
    },
    {
      title: "🔇 Personal Silence Threshold",
      description: "Determine your minimum detectable sound level",
      prompt: "Enter the quietest space you have access to. Sit still. Breathe as quietly as possible. Wait. As your ears adjust, you'll begin to perceive sounds you normally don't notice. Write them down. Then, listen for sounds that emerge only when you hold your breath. What is the quietest sound you can perceive in this space? Can you hear your own heartbeat? Your pulse in your ears? This is your current silence threshold—the floor of your acoustic awareness.",
      duration: "15 min",
      examples: [
        "🫀 Internal sounds: heartbeat, pulse, breathing, swallowing, joint creaks, eyelid blinks",
        "🔌 Electronic hum: LED bulb buzz, phone vibration motor standby, electrical outlet 50/60 Hz tone",
        "🌬️ Micro-environment: air pressure shifts, distant HVAC rumble, building structure resonance"
      ]
    },
    {
      title: "🎛️ Voluntary Acoustic Reduction",
      description: "Systematically remove sound sources from your environment",
      prompt: "In your home, identify every controllable sound source: appliances, devices, HVAC, lights. One by one, turn them off. After each shutdown, pause and listen to the resulting soundscape. How many layers of sound exist in your 'normal' environment? How deep can you go? When you've silenced everything possible, what remains? Document the step-by-step acoustic stripping process. Then reverse it—turn everything back on in sequence, listening to each layer's reintroduction.",
      duration: "30 min",
      examples: [
        "Layer 1 removed (TV off): conversation and traffic become foreground",
        "Layer 2 removed (HVAC off): fridge hum and outdoor birds emerge",
        "Layer 3 removed (lights off): electrical hum drops, only ambient environmental sounds remain",
        "Baseline: wind, distant traffic, neighbor activity—sounds beyond your control"
      ]
    },
    {
      title: "🌆 Dusk Acoustic Transition",
      description: "Track soundscape changes from day to night",
      prompt: "Choose a single outdoor location. Arrive 30 minutes before sunset. Record (audio or notes) the soundscape every 5 minutes as daylight fades. What sounds disappear? What sounds emerge? When does the shift happen—gradually or suddenly? Is there an acoustic 'dusk,' a transition zone where day and night sounds overlap? Repeat at dawn to compare.",
      duration: "60 min (sunset or sunrise)",
      examples: [
        "🌇 Sunset park: birds quiet around -15 min, children leave around -10 min, insects begin +5 min, traffic thickens +20 min",
        "🏙️ Sunset city street: pedestrian voices shift to bar/restaurant noise, fewer delivery trucks, more car stereos",
        "🌄 Sunrise forest: insect silence breaks around -30 min, first birdsong -20 min, crescendo at true sunrise"
      ]
    },
    {
      title: "🍽️ Meal Acoustic Ritual",
      description: "Pay attention to sounds during eating and preparation",
      prompt: "Choose one meal today. From the moment you begin preparation to the moment you finish eating, notice every sound. Knife on cutting board. Water boiling. Pan sizzle. Chewing. Swallowing. Utensil scrape on plate. These are intimate, quotidian sounds we rarely attend to. Make them the focus. What rhythms emerge? What textures? How does the acoustic character of the meal change from prep to consumption to cleanup?",
      duration: "Duration of one meal",
      examples: [
        "🍳 Breakfast: coffee grinder burr whirr, kettle whistle, toast pop, butter knife scrape, cereal crunch, spoon clink",
        "🥘 Dinner prep: vegetable chop rhythm, oil sizzle, timer beep, pot lid clatter, plate stack",
        "🍷 Eating: chewing texture, liquid gulp, utensil contact, conversation pauses, satisfaction sigh"
      ]
    },
    {
      title: "🛏️ Bed Acoustic Micro-Environment",
      description: "Explore the soundscape of your sleeping space",
      prompt: "Lie in your bed during the day, fully awake. Move slowly. Listen. What sounds does the bed itself make? Mattress compression. Sheet rustle. Pillow compacting. Frame creak. Now stay perfectly still. What sounds exist in the space around the bed? HVAC vent. Window draft. Wall shared with neighbor. This is your nightly acoustic micro-environment, usually experienced semi-consciously. Bring full awareness to it.",
      duration: "15 min",
      examples: [
        "🛌 Bed sounds: memory foam slow release hiss, spring squeak, headboard wall tap, blanket static",
        "🪟 Room sounds: curtain sway, window seal whistle, radiator tick, floor settle under weight shift",
        "🏚️ Building sounds: pipe knock, neighbor footsteps, elevator cable, HVAC duct resonance"
      ]
    }
  ],

  'movimento': [
    {
      title: "🚶‍♂️ Walking Pace Variations",
      description: "Compare soundscapes at different walking speeds",
      prompt: "Choose a familiar route you can walk safely without looking up constantly. Walk it three times at three different paces: very slow (stroll), normal, very fast (near-jog). Mentally note or record what sounds you perceive at each pace. Does speed change what you hear? Do certain sounds become more prominent or vanish? Does your own sound production (footfalls, breathing, clothing) change? Which pace offers the richest acoustic experience?",
      duration: "45 min (3 walks of ~15 min each)",
      examples: [
        "🐢 Slow walk: individual bird species distinguishable, distant conversations clear, footstep texture detailed",
        "🚶 Normal walk: balanced perception, rhythmic stride sound, general soundscape awareness",
        "🏃 Fast walk: breathing dominates, wind in ears increases, environmental sounds blur into texture"
      ]
    },
    {
      title: "🔄 360° Listening Walk",
      description: "Stop periodically and rotate to hear directional sound",
      prompt: "During a 20-minute walk, stop every 2 minutes. Stand still. Slowly rotate your body 360°, pausing every 90° (facing four cardinal directions). At each pause, note what you hear. Do certain sounds emerge or disappear depending on which way you face? Are there acoustic 'shadows' created by buildings or terrain? How much of your acoustic environment is directional versus omnipresent?",
      duration: "20 min",
      examples: [
        "🧭 North (facing buildings): traffic echo, HVAC exhaust, voices amplified by wall reflection",
        "🧭 East (facing park): bird calls, leaf rustle, children on playground",
        "🧭 South (facing street): direct traffic, car horns, bus brakes, pedestrian chatter",
        "🧭 West (facing alley): dumpster lids, delivery truck beep, restaurant kitchen exhaust fan"
      ]
    },
    {
      title: "🛤️ Identical Path, Different Focus",
      description: "Walk the same route while focusing on different acoustic elements",
      prompt: "Choose a 10-minute walking loop. Walk it three times, each time focusing exclusively on a different category of sound: (1) human-made sounds only, (2) natural sounds only, (3) mechanical/technological sounds only. Do not try to hear everything—filter ruthlessly. How does selective attention reshape the acoustic experience? Which category dominates your route? Which is hardest to isolate?",
      duration: "30 min (3 walks of ~10 min each)",
      examples: [
        "👥 Human focus: footsteps, conversations, laughter, coughs, phone rings, singing, arguments",
        "🌿 Natural focus: wind, birds, rustling leaves, water, animal calls, rain, insects",
        "⚙️ Mechanical focus: engines, HVAC, construction, alarms, electronics, tools, appliances"
      ]
    },
    {
      title: "🏙️ Urban Acoustic Gradient Walk",
      description: "Walk from busy to quiet areas, noting the transition",
      prompt: "Plan a route that takes you from the noisiest part of your area (main road, commercial district, construction zone) to the quietest (residential street, park, dead-end alley). Walk it continuously. Note where acoustic transitions occur. Is the change gradual or sudden? Are there threshold points where the soundscape character shifts? Can you identify acoustic 'seams' in the urban fabric?",
      duration: "30 min",
      examples: [
        "🚦 Busy intersection: 85+ dB, layered traffic, horns, crosswalk signals, ventilation, crowd",
        "🏘️ Residential side street: 55 dB, occasional car, birds, distant lawnmower, kids playing",
        "🌳 Park interior: 45 dB, wind, birdsong, footsteps on gravel, distant traffic hum as backdrop"
      ]
    },
    {
      title: "🚴 Cycling Acoustic Experience",
      description: "Notice how movement speed changes auditory perception",
      prompt: "If you have access to a bicycle, ride a familiar route you've also walked. How does speed alter what you hear? Does wind noise dominate? Can you still perceive environmental sounds clearly, or do they blur? What about your own sounds—chain, gears, breathing? Compare to walking the same route. Which mode of transport offers richer acoustic detail? Which offers more sonic variety?",
      duration: "20 min",
      examples: [
        "🚴 Cycling at 15 mph: wind roar, chain rhythmic click, tire hum, breathing, muffled environmental sounds",
        "🚶 Walking same route: clear environmental sounds, minimal self-noise, detailed acoustic texture",
        "🛴 Skating/scooting: wheel rumble, pavement texture amplified, wind moderate, environmental sounds partially clear"
      ]
    },
    {
      title: "🪜 Elevation Acoustic Shift",
      description: "Compare soundscapes at different vertical levels",
      prompt: "Find a location where you can experience different elevations: a building with accessible floors, a hill, a stairwell, an underpass vs. overpass. Listen at ground level, then ascend/descend and listen again. How does the soundscape change? Do certain sounds vanish? Do new ones emerge? Does elevation change sound quality (reverberation, clarity, bass content)? Which level offers the most complex acoustic experience?",
      duration: "20 min",
      examples: [
        "🏢 Ground floor: direct pedestrian voices, door slams, street-level traffic, trash truck",
        "🏢 5th floor: diffuse traffic hum, wind, bird calls at ear level, reduced detail from street",
        "🏢 Rooftop: wind dominates, HVAC units, distant traffic as wash, airplane clarity, reduced human presence"
      ]
    },
    {
      title: "🌧️ Weather-Dependent Walk",
      description: "Walk the same route in different weather conditions",
      prompt: "Choose a route you can walk repeatedly over time. Walk it in as many weather conditions as possible: sun, rain, wind, fog, snow (if applicable), extreme heat/cold. How does weather change the acoustic character? Does rain mask or reveal sounds? Does wind? Does temperature affect sound propagation? Keep a log and compare entries.",
      duration: "20 min per walk, multiple conditions over weeks/months",
      examples: [
        "☀️ Sunny, calm: clear sounds, birds active, people outdoors, windows open—maximum acoustic detail",
        "🌧️ Heavy rain: rain sound dominates, voices muffled, traffic splash, fewer people, reverb reduced",
        "💨 Windy: wind roar, rustling leaves, objects rattling, voices carried/distorted, reduced clarity",
        "❄️ Snow: muffled quiet, snow crunch underfoot, reduced traffic, absorption of high frequencies"
      ]
    },
    {
      title: "🕐 Hourly Route Repetition",
      description: "Walk the same path at different times of day",
      prompt: "Choose a short route (5-10 min). Walk it once per hour for several hours, ideally spanning morning to night. Note how the acoustic environment evolves throughout the day. When is it loudest? Quietest? Most diverse? Do certain sounds appear only at certain times? This is acoustic time-lapse—using repetition to reveal temporal patterns.",
      duration: "5-10 min per walk, repeated hourly",
      examples: [
        "6 AM: near-silence, first birds, rare vehicles, sprinkler systems, newspaper delivery",
        "12 PM: peak activity, lunch crowds, construction, delivery trucks, maximum acoustic density",
        "6 PM: commute traffic, restaurant prep, children playing, dog walkers, voices shift from work to leisure",
        "10 PM: reduced activity, bar/restaurant noise, occasional car, distant siren, wind becomes prominent"
      ]
    }
  ],

  'analisi': [
    {
      title: "🎼 Foreground/Background Separation",
      description: "Distinguish between acoustic layers in a soundscape",
      prompt: "Sit in a moderately active environment (café, park, office). Identify the foreground sounds—those that naturally draw your attention, the 'events.' Then shift focus to the background—the continuous acoustic substrate, the 'texture.' List both separately. Can you consciously toggle between perceiving one or the other? Which is easier to focus on? When you focus on background, does foreground vanish, or simply recede?",
      duration: "15 min",
      examples: [
        "☕ Café foreground: espresso machine hiss, cup clink, cash register, order calls, door chime",
        "☕ Café background: HVAC hum, general conversation wash, street traffic outside, music at low volume",
        "🌳 Park foreground: footsteps, dog bark, child shout, bike bell, conversation",
        "🌳 Park background: wind in trees, distant traffic hum, bird chorus, leaf rustle bed"
      ]
    },
    {
      title: "🔁 Repetition Recognition",
      description: "Identify and count repetitive sound patterns",
      prompt: "In your current environment, identify any sound that repeats at regular or semi-regular intervals. It could be mechanical (HVAC cycling, turn signal), natural (bird call pattern), or human (footsteps, typing rhythm). Time the interval between repetitions. How precise is it? Does it drift? Do multiple repetitive sounds coexist, creating a polyrhythm? List all repetitive sounds and their approximate intervals.",
      duration: "10 min",
      examples: [
        "❄️ Refrigerator compressor: cycles every ~8 minutes, runs for ~2 minutes",
        "🚦 Crosswalk signal: beeps every 1 second when active, silent otherwise",
        "🔨 Construction jackhammer: 3-second bursts, 5-second pauses, irregular overall pattern",
        "💓 Your own heartbeat (in quiet): ~1 beat per second, steady microrhythm"
      ]
    },
    {
      title: "🎚️ Dynamic Range Assessment",
      description: "Identify the quietest and loudest sounds in your environment",
      prompt: "Over a 15-minute observation period, note the quietest sound you can perceive and the loudest sound that occurs. Estimate (or measure with a phone SPL app) the difference in decibels. This is the dynamic range of your current soundscape. How wide is it? Does a wide range create richness or chaos? A narrow range—monotony or calm? What is the 'average' loudness between the extremes?",
      duration: "15 min",
      examples: [
        "🏠 Home: Quietest = 25 dB (fridge hum), Loudest = 75 dB (blender) → 50 dB range",
        "🏙️ City street: Quietest = 50 dB (footsteps), Loudest = 95 dB (motorcycle) → 45 dB range",
        "🌲 Forest: Quietest = 20 dB (leaf rustle), Loudest = 70 dB (crow call) → 50 dB range"
      ]
    },
    {
      title: "🧬 Acoustic DNA",
      description: "Define the unique sonic signature of a place",
      prompt: "Choose a specific location you know well. Spend 20 minutes there, identifying sounds that are unique or characteristic of that place—sounds you wouldn't hear elsewhere. These are the acoustic markers that define its identity. If you were to recreate this place sonically for someone who'd never been there, which sounds would be essential? Which could you omit? What is the minimum set of sounds that conveys 'this place'?",
      duration: "20 min",
      examples: [
        "🏖️ Beach: waves (essential), seagull calls (essential), sand footsteps (characteristic), lifeguard whistle (optional)",
        "🏥 Hospital: PA system (essential), EKG beep (characteristic), rolling beds (characteristic), elevator ding (common but not unique)",
        "🏟️ Stadium: crowd roar (essential), announcer (essential), organ (characteristic), vendor calls (characteristic)"
      ]
    },
    {
      title: "🎭 Soundscape Emotions",
      description: "Assess the emotional character of an acoustic environment",
      prompt: "Listen to your current soundscape and attempt to assign it an emotional quality. Is it anxious? Calm? Energetic? Melancholic? What specific sounds contribute to that quality? If you removed certain sounds, would the emotional character change? This is subjective—there's no right answer. The goal is to become aware of how soundscapes shape (or reflect) emotional states.",
      duration: "10 min",
      examples: [
        "😌 Calm library: soft pages turning, hushed footsteps, distant typing, occasional cough → meditative, focused",
        "😰 Rush-hour subway: screeching brakes, crowd density, announcements, doors slamming → urgent, stressful",
        "😊 Weekend park: children laughing, dogs, distant music, birds → joyful, relaxed",
        "😔 Empty office at night: HVAC hum, fluorescent buzz, lone keyboard → lonely, eerie"
      ]
    },
    {
      title: "🧩 Soundmark Identification",
      description: "Recognize the iconic sounds of your community",
      prompt: "R. Murray Schafer coined the term 'soundmark'—an acoustic landmark unique to a place, analogous to a visual landmark. Does your area have soundmarks? A specific church bell pattern? A factory whistle? A train horn? A market vendor's call? List any sounds that are locally significant or historically rooted. These are often the sounds residents notice when they're absent, or visitors notice when they arrive.",
      duration: "15 min + ongoing awareness",
      examples: [
        "🔔 Town square clock tower: chimes every hour, familiar melody, heard across downtown",
        "🚂 Train crossing: specific horn pattern, happens 6x daily, locals set watches by it",
        "📢 Market call: fish vendor's rhythmic chant, Saturday mornings only, decades-old tradition",
        "🏭 Factory shift whistle: 7 AM, 3 PM, 11 PM—punctuates the day for entire neighborhood"
      ]
    },
    {
      title: "🔊 Signal-to-Noise Ratio",
      description: "Analyze desired vs. undesired sounds in an environment",
      prompt: "In the context of soundscape studies, 'signal' is sound you want to hear, and 'noise' is sound you don't. These are subjective and context-dependent. In your current environment, classify every sound as signal or noise based on your current goal (working, relaxing, conversing, etc.). What's the ratio? Is the environment optimized for your purpose, or hostile to it? How could the ratio be improved?",
      duration: "10 min",
      examples: [
        "💼 Trying to work in café: Signal = music (low), ambient chatter (texture); Noise = baby crying, loud phone talker, blender",
        "🎧 Trying to enjoy music on subway: Signal = your music; Noise = everything else (announcements, wheels, conversations)",
        "🌳 Trying to hear birds in park: Signal = bird calls; Noise = traffic, lawn mower, dogs barking, nearby conversation"
      ]
    },
    {
      title: "📐 Geometry of Sound",
      description: "Observe how space shapes sound through reflection and absorption",
      prompt: "Choose two contrasting spaces: one hard and reflective (tiled bathroom, concrete garage), one soft and absorptive (carpeted room, forest). In each, clap your hands or snap your fingers. Listen to the decay. How long does it take for the sound to disappear? This is reverberation time (RT60 in acoustics). How does the space shape the sound? Walk around while making intermittent sounds. Does the acoustic character change with position?",
      duration: "15 min (7-8 min per space)",
      examples: [
        "🚿 Tiled bathroom: sharp clap, long reverb tail (~2 sec), bright and ringy, flutter echoes between parallel walls",
        "🛋️ Carpeted living room: dull clap, short decay (~0.3 sec), warm and dry, sound absorbed by soft furnishings",
        "🏛️ Cathedral: extremely long reverb (5-8 sec), sound builds and lingers, spatial vastness audible"
      ]
    }
  ],

  'registrazione': [
    {
      title: "🎙️ First Field Recording",
      description: "Capture a 5-minute environmental soundscape",
      prompt: "Choose a location and time. Set up your recording device (phone, portable recorder, anything). Press record and leave it stationary for exactly 5 minutes. Do not move or speak. When finished, listen back on headphones. Did the microphone hear things you didn't notice in real time? Did it miss things you heard? This is the gap between human perception and mechanical capture—understanding it is essential for field recording.",
      duration: "5 min recording + 5 min playback",
      examples: [
        "🌳 Park bench at noon: captured bird details you missed, also captured wind rumble on mic you didn't hear",
        "🏙️ Urban corner at 5 PM: captured bass traffic rumble strongly, missed quiet conversation happening nearby",
        "🏠 Kitchen during breakfast: captured fridge hum prominently (you'd tuned it out), missed some spatial breadth"
      ]
    },
    {
      title: "🧭 Directional Recording",
      description: "Explore microphone placement and orientation",
      prompt: "Choose a sound source (busy street, bird in tree, running water). Make three recordings from different positions relative to the source: directly facing it, 90° to the side, and behind an obstacle (tree, wall). Keep distance constant. Listen back. How does position change the captured sound? What's gained or lost in each position? This teaches microphone perspective—the recordist's equivalent of camera angle.",
      duration: "15 min (3 recordings of 3-5 min each)",
      examples: [
        "🚗 Traffic, mic facing street: loud, direct, clear vehicle detail, minimal ambience",
        "🚗 Traffic, mic perpendicular: balanced between traffic and surroundings, more spatial",
        "🚗 Traffic, mic behind building: muffled, reverberant, traffic as texture rather than detail"
      ]
    },
    {
      title: "📏 Distance Variations",
      description: "Record the same source from multiple distances",
      prompt: "Choose a sound source you can approach safely (fountain, construction site, musician). Make recordings at 1 meter, 5 meters, 20 meters, and 100 meters (or maximum safe distance). Keep mic position and settings identical. Listen back. How does distance change not just loudness, but timbre, clarity, and ambient ratio? At what distance does the source become inseparable from the environment?",
      duration: "20 min (4 recordings)",
      examples: [
        "⛲ Fountain at 1m: water detail, individual droplets, splashes, minimal background",
        "⛲ Fountain at 5m: balanced, water clear but contextualized by birds and park sounds",
        "⛲ Fountain at 20m: water blends with wind and traffic, becomes part of soundscape texture",
        "⛲ Fountain at 100m: barely distinguishable, just a faint liquid quality in broader environmental wash"
      ]
    },
    {
      title: "⏰ Same Place, Different Times",
      description: "Capture temporal variation in one location",
      prompt: "Choose a single location. Record 3 minutes at dawn, midday, dusk, and night. Use identical mic placement. Listen to all four in sequence. How does the acoustic environment evolve over 24 hours? Which recording is richest? Which is quietest? Are there sounds unique to certain times? This is time-lapse listening—revealing patterns invisible in single snapshots.",
      duration: "12 min recording (4× 3 min) spread over a day",
      examples: [
        "🌅 Dawn (6 AM): bird chorus peak, minimal human activity, cool air (affects sound propagation)",
        "☀️ Midday (12 PM): human activity peak, birds quiet, traffic maximum, harsh acoustic quality",
        "🌇 Dusk (6 PM): birds resume, commute traffic, insects begin, transitional acoustic texture",
        "🌙 Night (10 PM): distant hum dominates, occasional car, wind more prominent, stark quiet gaps"
      ]
    },
    {
      title: "🎚️ Gain Staging Practice",
      description: "Learn to set recording levels correctly",
      prompt: "Record a dynamic sound source (conversation, street, music). First, set your levels too low (peaks around -30 dB). Then too high (peaks hitting 0 dB, clipping). Then correctly (peaks around -12 to -6 dB). Listen back. What's wrong with each approach? Too low = noise floor audible when boosted. Too high = distortion. Correct = clean, with headroom for unexpected loud moments. This is fundamental recording technique.",
      duration: "15 min (3 recordings of ~3 min)",
      examples: [
        "❌ Too low: quiet, hiss when amplified, lacks punch, unusable for professional work",
        "❌ Too high: distorted peaks, harsh, digital clipping artifacts, unpleasant",
        "✅ Correct: clean, dynamic, no noise, no distortion, balanced and natural"
      ]
    },
    {
      title: "🎧 Monitoring vs. Reality",
      description: "Compare what you hear in real-time vs. in headphones",
      prompt: "While recording in a moderately complex environment (park, café, street), wear headphones connected to your recorder's monitor output. Listen to what the mic hears in real-time. How does it differ from what your ears hear without headphones? Is the perspective narrower? Are certain frequencies emphasized? This split awareness—ears vs. mic—is the field recordist's core skill.",
      duration: "10 min",
      examples: [
        "🎤 Headphones reveal: wind noise you didn't feel, handling noise from holding the recorder, bass rumble from distant trucks",
        "👂 Ears reveal: spatial breadth the mono/stereo mic can't fully capture, ability to focus on specific sounds mentally",
        "🤔 Insight: Microphones are not ears—they hear differently. Monitoring teaches you to predict and compensate."
      ]
    },
    {
      title: "🌬️ Wind & Handling Noise",
      description: "Learn to identify and prevent mechanical noise",
      prompt: "Make a recording outdoors on a windy day. First, record with no wind protection. Then, use makeshift protection (cover mic with foam, cloth, or hand-cupped shield). Then, try to eliminate handling noise by mounting the recorder on a stable surface or stand instead of holding it. Compare all three. This teaches you to recognize and mitigate the most common field recording problems.",
      duration: "15 min (3 recordings)",
      examples: [
        "💨 No wind protection: massive low-frequency rumble, mic overload, environmental sounds masked",
        "🧤 Improvised protection (foam/cloth): rumble reduced, sounds clearer, still some wind artifacts",
        "🪵 Stable mounting: minimal handling noise, clean capture, only pure environmental sound"
      ]
    },
    {
      title: "🔇 Recording Silence",
      description: "Capture room tone and environmental baseline",
      prompt: "In the quietest location you have access to, record 5 minutes of 'nothing'—no deliberate sound events, just the ambient baseline. Listen back critically. What did you capture? HVAC? Electrical hum? Distant traffic? This is 'room tone' or 'atmos'—the acoustic signature of a space at rest. It's essential for audio editing (filling gaps) and reveals the noise floor of both your environment and your recording gear.",
      duration: "5 min recording + 5 min critical playback",
      examples: [
        "🏠 Bedroom at night: fridge hum from kitchen, HVAC cycling, recorder self-noise, distant freeway wash",
        "🌲 Forest clearing: wind microstructure, distant bird, insect bed, rustling leaves, surprisingly complex 'silence'",
        "📚 Library after hours: fluorescent light buzz, HVAC, building creak, pages turning in distant room, profound quiet between events"
      ]
    }
  ],

  'progetto': [
    {
      title: "🗂️ 7-Day Soundscape Diary",
      description: "Document the acoustic environment of your week",
      prompt: "For seven consecutive days, make at least one field recording per day (3-5 min each) that represents your dominant acoustic environment for that day. This could be your workplace, commute, home, or a place you visited. At the end of the week, listen to all seven in sequence. What story do they tell about your life? What patterns emerge? Are there recurring sounds across days? Unique moments? This is a sonic autobiography of a week.",
      duration: "7 days, ~5 min recording per day + 1 hour final review",
      examples: [
        "📅 Monday: office HVAC and keyboard typing (work)",
        "📅 Tuesday: subway commute (travel)",
        "📅 Wednesday: café ambience (lunch break)",
        "📅 Thursday: gym sounds (personal time)",
        "📅 Friday: home cooking and music (evening)",
        "📅 Saturday: park with children (weekend)",
        "📅 Sunday: quiet morning reading with bird sounds (rest)"
      ]
    },
    {
      title: "🏛️ Historical Soundscape Recreation",
      description: "Imagine and describe a past acoustic environment",
      prompt: "Choose a historical period and location (your town 100 years ago, ancient Rome, 1950s New York). Research what sounds would have existed then. What would be absent (no car traffic, no planes, no electronics)? What would be present (horse hooves, street vendors, factory whistles, church bells)? Write a detailed description of a typical soundscape from that time and place. If possible, record a modern location and note what would need to be removed/added to match your historical soundscape.",
      duration: "1-2 hours research and writing",
      examples: [
        "🏙️ New York, 1920s: streetcars, horse carriages, factory whistles, newspaper boys, live street musicians, no amplified sound",
        "🏰 Medieval village: church bells, blacksmith hammer, market vendors, animal sounds, wooden cart wheels, human voices only",
        "🌾 Rural farm, 1800s: animal calls, hand tools, wind, water mill, distant church bell, near-total silence at night"
      ]
    },
    {
      title: "🎨 Soundscape Composition",
      description: "Create a curated sonic portrait of a place",
      prompt: "Choose a location meaningful to you. Over multiple visits, record various sounds that characterize it—not just one long take, but individual elements (birds, footsteps, doors, machines, voices, weather). Then, using free audio software (Audacity, GarageBand, etc.), layer these sounds into a composed soundscape that captures the essence of the place. This isn't documentary realism—it's artistic distillation. What sounds are essential? What can you emphasize or fade?",
      duration: "Several hours over multiple sessions",
      examples: [
        "🏖️ Beach composition: layered waves, seagull calls, distant voices, wind, footsteps on sand—arranged to evoke memory",
        "🌃 Night city: distant traffic wash, closer footsteps, bar music leaking out, siren passing, wind between buildings",
        "🏡 Childhood home: specific door creak, kitchen sounds, TV in another room, wind through specific tree—intensely personal"
      ]
    },
    {
      title: "📻 Sonic Postcard",
      description: "Create a 60-second audio snapshot of a place",
      prompt: "Record and edit a 60-second 'postcard' from a location. The goal: convey the character of the place in one minute. Choose sounds carefully—what's essential? What's cliché? What's surprising? This constraint forces curation and teaches you to identify sonic signifiers. Share it with someone unfamiliar with the place. Can they guess where it is? What do they perceive?",
      duration: "1-2 hours (recording + editing)",
      examples: [
        "🚇 Subway postcard: train arrival, doors, announcement, busker playing, departure—60 sec, tells complete story",
        "🌲 Forest postcard: wind in trees, bird calls, distant stream, footsteps on trail, single moment of silence—60 sec of calm",
        "🏙️ City postcard: traffic swell, crosswalk signal, distant siren, street vendor call, conversation snippet—60 sec of urban density"
      ]
    },
    {
      title: "🗺️ Acoustic Transect",
      description: "Document sound changes along a defined path",
      prompt: "Choose a route (1-3 km) that crosses different acoustic zones (residential to commercial, urban to park, quiet to loud). Walk it while recording continuously, or make stop-recordings every 100 meters. The goal: document how soundscape changes across space. Create a map showing your path and annotate it with acoustic observations. Where are the thresholds? The gradients? The surprises?",
      duration: "1-2 hours",
      examples: [
        "🏘️→🏙️ Residential to downtown: gradual increase in traffic, human density, mechanical sounds; decrease in birds, quiet gaps",
        "🌳→🛣️ Park to highway: abrupt threshold at park edge where traffic becomes dominant, birdsong vanishes",
        "🌊→🏘️ Beach to inland: ocean sound fades over ~200m, replaced by urban hum, seagulls persist longer than waves"
      ]
    },
    {
      title: "🔊 Soundscape Intervention",
      description: "Deliberately alter an environment's acoustic character",
      prompt: "Choose a space you control (your room, office, backyard). Identify its current soundscape. Then, make deliberate changes to alter it: add a water fountain, play background music, introduce wind chimes, rearrange furniture to change reverberation, close/open windows. Record before and after. How did your intervention change the acoustic character? Did it improve it (for your purposes)? This is applied soundscape design.",
      duration: "2-3 hours (planning, intervention, recording)",
      examples: [
        "🏡 Backyard: added small fountain, masked distant traffic with water sound, attracted birds, created focal sound point",
        "💼 Office: added fabric panels to walls, reduced echo and HVAC harshness, improved speech clarity, felt calmer",
        "🛏️ Bedroom: closed window (removed traffic), added white noise machine, masked neighbor sounds, improved sleep quality"
      ]
    },
    {
      title: "👂 Blindfold Soundwalk",
      description: "Experience a familiar place through sound alone",
      prompt: "Choose a safe, familiar route (your home, a quiet park path). Blindfold yourself or close your eyes. Have a trusted partner guide you safely. Walk slowly, relying entirely on sound for spatial awareness and orientation. What do you hear that you normally ignore? Can you identify where you are by sound alone? How does removing vision change your relationship to the environment? Record the walk and your verbal observations.",
      duration: "15-20 min",
      examples: [
        "🏡 Home navigation: doorways identified by acoustic change (reverberation shift), rooms by characteristic sounds (kitchen = fridge hum)",
        "🌳 Park path: spatial awareness from wind direction, footstep surface texture, bird calls, distance to traffic hum",
        "🤔 Insight: Vision dominates; when removed, acoustic detail explodes—sounds you 'knew' were there but never truly heard"
      ]
    },
    {
      title: "🎤 Interview the Soundscape",
      description: "Talk to people about their acoustic environment",
      prompt: "Interview 3-5 people (neighbors, coworkers, strangers in a public place) about the soundscape around them. Ask: What sounds do you notice most? Which do you like? Which annoy you? Are there sounds you'd miss if they disappeared? Record the interviews (with permission). Compare responses. Do people agree? What does this reveal about subjective perception of shared acoustic space?",
      duration: "1-2 hours",
      examples: [
        "🏘️ Neighbor A: loves morning birds, hates leaf blowers, would miss church bells",
        "🏘️ Neighbor B: doesn't notice birds, loves lawn mowers (means weekend), hates car alarms",
        "🤔 Insight: Same environment, radically different perceptions—soundscape is culturally and personally constructed"
      ]
    }
  ]
};
