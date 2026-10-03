export const fontMaps: Record<string, Record<string, string>> = {
  gothic: { a: 'ä', b: 'þ', c: '¢', d: 'ð', e: 'ë', f: 'ƒ', g: 'g', h: 'h', i: 'ï', j: 'j', k: 'k', l: 'l', m: 'm', n: 'ñ', o: 'ö', p: 'p', q: 'q', r: 'r', s: 'š', t: 't', u: 'ü', v: 'v', w: 'w', x: 'x', y: 'ÿ', z: 'z' },
  fancy:  { a: '𝓐', b: '𝓑', c: '𝓒', d: '𝓓', e: '𝓔', f: '𝓕', g: '𝓖', h: '𝓗', i: '𝓘', j: '𝓙', k: '𝓚', l: '𝓛', m: '𝓜', n: '𝓝', o: '𝓞', p: '𝓟', q: '𝓠', r: '𝓡', s: '𝓢', t: '𝓣', u: '𝓤', v: '𝓥', w: '𝓦', x: '𝓧', y: '𝓨', z: '𝓩' },
  circles:{ a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ' },
  squares:{ a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸', j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉' },
  bold:   { a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳', g: '𝗴', h: '𝗵', i: '𝗶', j: '𝗷', k: '𝗸', l: '𝗹', m: '𝗺', n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿', s: '𝘀', t: '𝘁', u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅', y: '𝘆', z: '𝘇' },
  italic: { a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫', k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵', u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻' },
  boldItalic: { a: '𝙖', b: '𝙗', c: '𝙘', d: '𝙙', e: '𝙚', f: '𝙛', g: '𝙜', h: '𝙝', i: '𝙞', j: '𝙟', k: '𝙠', l: '𝙡', m: '𝙢', n: '𝙣', o: '𝙤', p: '𝙥', q: '𝙦', r: '𝙧', s: '𝙨', t: '𝙩', u: '𝙪', v: '𝙫', w: '𝙬', x: '𝙭', y: '𝙮', z: '𝙯' },
  monospace: { a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓', k: '𝚔', l: '𝚕', m: '𝚖', n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝', u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣' },
  smallCaps: { a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ' },
  glitch: { a: 'a̷', b: 'b̷', c: 'c̷', d: 'd̷', e: 'e̷', f: 'f̷', g: 'g̷', h: 'h̷', i: 'i̷', j: 'j̷', k: 'k̷', l: 'l̷', m: 'm̷', n: 'n̷', o: 'o̷', p: 'p̷', q: 'q̷', r: 'r̷', s: 's̷', t: 't̷', u: 'u̷', v: 'v̷', w: 'w̷', x: 'x̷', y: 'y̷', z: 'z̷' },
  strikethrough: { a: 'a̶', b: 'b̶', c: 'c̶', d: 'd̶', e: 'e̶', f: 'f̶', g: 'g̶', h: 'h̶', i: 'i̶', j: 'j̶', k: 'k̶', l: 'l̶', m: 'm̶', n: 'n̶', o: 'o̶', p: 'p̶', q: 'q̶', r: 'r̶', s: 's̶', t: 't̶', u: 'u̶', v: 'v̶', w: 'w̶', x: 'x̶', y: 'y̶', z: 'z̶' },
  underline: { a: 'a̲', b: 'b̲', c: 'c̲', d: 'd̲', e: 'e̲', f: 'f̲', g: 'g̲', h: 'h̲', i: 'i̲', j: 'j̲', k: 'k̲', l: 'l̲', m: 'm̲', n: 'n̲', o: 'o̲', p: 'p̲', q: 'q̲', r: 'r̲', s: 's̲', t: 't̲', u: 'u̲', v: 'v̲', w: 'w̲', x: 'x̲', y: 'y̲', z: 'z̲' },
  inverted: { a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z' },
  tiny: { a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ᶦ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', q: 'ᵠ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ' },
  asian: { a: '卂', b: '乃', c: '匚', d: 'ᗪ', e: '乇', f: '千', g: 'Ꮆ', h: '卄', i: '丨', j: 'ﾌ', k: 'Ҝ', l: 'ㄥ', m: '爪', n: '几', o: 'ㄖ', p: '卩', q: 'Ɋ', r: '尺', s: '丂', t: 'ㄒ', u: 'ㄩ', v: 'ᐯ', w: '山', x: '乂', y: 'ㄚ', z: '乙' },
  wide: { a: 'ａ', b: 'ｂ', c: 'ｃ', d: 'ｄ', e: 'ｅ', f: 'ｆ', g: 'ｇ', h: 'ｈ', i: 'ｉ', j: 'ｊ', k: 'ｋ', l: 'ｌ', m: 'ｍ', n: 'ｎ', o: 'ｏ', p: 'ｐ', q: 'ｑ', r: 'ｒ', s: 'ｓ', t: 'ｔ', u: 'ｕ', v: 'ｖ', w: 'ｗ', x: 'ｘ', y: 'ｙ', z: 'ｚ' },
  bubbleBlack: { a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩' },
  fraktur: { a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧', k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫', o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱', u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷' },
  frakturBold: { a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋', g: '𝖌', h: '𝖍', i: '𝖎', j: '𝖏', k: '𝖐', l: '𝖑', m: '𝖒', n: '𝖓', o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙', u: '𝖚', v: '𝖛', w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟' },
  doubleStruck: { a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘', h: '𝕙', i: '𝕚', j: '𝕛', k: '𝕜', l: '𝕝', m: '𝕞', n: '𝕟', o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥', u: '𝕦', v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫' },
  script: { a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔', h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃', o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏' },
  sansSerif: { a: '𝖺', b: '𝖻', c: '𝖼', d: '𝖽', e: '𝖾', f: '𝖿', g: '𝗀', h: '𝗁', i: '𝗂', j: '𝗃', k: '𝗄', l: '𝗅', m: '𝗆', n: '𝗇', o: '𝗈', p: '𝗉', q: '𝗊', r: '𝗋', s: '𝗌', t: '𝗍', u: '𝗎', v: '𝗏', w: '𝗐', x: '𝗑', y: '𝗒', z: '𝗓' },
  currency: { a: '₳', b: '฿', c: '₵', d: 'Đ', e: 'Ɇ', f: '₣', g: '₲', h: 'Ⱨ', i: 'ł', j: 'J', k: '₭', l: 'Ⱡ', m: '₥', n: '₦', o: 'Ø', p: '₱', q: 'Q', r: 'Ɽ', s: '₴', t: '₮', u: 'Ʉ', v: 'V', w: '₩', x: 'Ӿ', y: 'Ɏ', z: 'Ⱬ' },
  magic: { a: 'ค', b: '๒', c: '¢', d: '໓', e: 'ē', f: 'f', g: 'ງ', h: 'h', i: 'i', j: 'ฯ', k: 'k', l: 'l', m: '๓', n: 'ຖ', o: '໐', p: 'p', q: 'q', r: 'r', s: 'Ş', t: 't', u: 'น', v: 'ง', w: 'ຟ', x: 'x', y: 'ฯ', z: 'ຊ' },
  kawaii: { a: 'α', b: 'в', c: '¢', d: '∂', e: 'є', f: 'ƒ', g: 'g', h: 'н', i: 'ι', j: 'נ', k: 'к', l: 'ℓ', m: 'м', n: 'η', o: 'σ', p: 'ρ', q: 'q', r: 'я', s: 'ѕ', t: 'т', u: 'υ', v: 'ν', w: 'ω', x: 'χ', y: 'у', z: 'z' },
  hacker: { a: '4', b: '8', c: 'c', d: 'd', e: 'e', f: 'f', g: '6', h: 'h', i: '1', j: 'j', k: 'k', l: 'l', m: 'm', n: 'n', o: '0', p: 'p', q: 'q', r: 'r', s: '5', t: '7', u: 'u', v: 'v', w: 'w', x: 'x', y: 'y', z: '2' },
  cursive: { a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳', k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽', u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃' },
  brackets: { a: '【a】', b: '【b】', c: '【c】', d: '【d】', e: '【e】', f: '【f】', g: '【g】', h: '【h】', i: '【i】', j: '【j】', k: '【k】', l: '【l】', m: '【m】', n: '【n】', o: '【o】', p: '【p】', q: '【q】', r: '【r】', s: '【s】', t: '【t】', u: '【u】', v: '【v】', w: '【w】', x: '【x】', y: '【y】', z: '【z】' },
  subscript: { a: 'ₐ', b: '♭', c: '꜀', d: 'ᵈ', e: 'ₑ', f: 'ᶠ', g: '₉', h: 'ₕ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', l: 'ₗ', m: 'ₘ', n: 'ₙ', o: 'ₒ', p: 'ₚ', q: 'q', r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', w: 'w', x: 'ₓ', y: 'y', z: 'z' },
  greek: { a: 'α', b: 'β', c: 'ς', d: 'δ', e: 'ε', f: 'φ', g: 'γ', h: 'η', i: 'ι', j: 'φ', k: 'κ', l: 'λ', m: 'μ', n: 'ν', o: 'ο', p: 'π', q: 'θ', r: 'ρ', s: 'σ', t: 'τ', u: 'υ', v: 'ω', w: 'ω', x: 'χ', y: 'ψ', z: 'ζ' },
  cyrillic: { a: 'а', b: 'в', c: 'с', d: 'd', e: 'е', f: 'f', g: 'g', h: 'н', i: 'i', j: 'j', k: 'к', l: 'l', m: 'м', n: 'п', o: 'о', p: 'р', q: 'q', r: 'я', s: 'ѕ', t: 'т', u: 'ц', v: 'v', w: 'ш', x: 'х', y: 'у', z: 'z' },
  medieval: { a: '𝔄', b: '𝔅', c: 'ℭ', d: '𝔇', e: '𝔈', f: '𝔉', g: '𝔊', h: 'ℌ', i: 'ℑ', j: '𝔍', k: '𝔎', l: '𝔏', m: '𝔐', n: '𝔑', o: '𝔒', p: '𝔓', q: '𝔔', r: 'ℜ', s: '𝔖', t: '𝔗', u: '𝔘', v: '𝔙', w: '𝔚', x: '𝔛', y: '𝔜', z: 'ℨ' },
  heavyCircles: { a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩' },
  blackSquares: { a: '🅰', b: '🅱', c: '🅲', d: '🅳', e: '🅴', f: '🅵', g: '🅶', h: '🅷', i: '🅸', j: '🅹', k: '🅺', l: '🅻', m: '🅼', n: '🅽', o: '🅾', p: '🅿', q: '🆀', r: '🆁', s: '🆂', t: '🆃', u: '🆄', v: '🆅', w: '🆆', x: '🆇', y: '🆈', z: '🆉' },
  creepy: { a: 'a̸', b: 'b̸', c: 'c̸', d: 'd̸', e: 'e̸', f: 'f̸', g: 'g̸', h: 'h̸', i: 'i̸', j: 'j̸', k: 'k̸', l: 'l̸', m: 'm̸', n: 'n̸', o: 'o̸', p: 'p̸', q: 'q̸', r: 'r̸', s: 's̸', t: 't̸', u: 'u̸', v: 'v̸', w: 'w̸', x: 'x̸', y: 'y̸', z: 'z̸' },
  stars: { a: 'a★', b: 'b★', c: 'c★', d: 'd★', e: 'e★', f: 'f★', g: 'g★', h: 'h★', i: 'i★', j: 'j★', k: 'k★', l: 'l★', m: 'm★', n: 'n★', o: 'o★', p: 'p★', q: 'q★', r: 'r★', s: 's★', t: 't★', u: 'u★', v: 'v★', w: 'w★', x: 'x★', y: 'y★', z: 'z★' },
  hearts: { a: 'a♥', b: 'b♥', c: 'c♥', d: 'd♥', e: 'e♥', f: 'f♥', g: 'g♥', h: 'h♥', i: 'i♥', j: 'j♥', k: 'k♥', l: 'l♥', m: 'm♥', n: 'n♥', o: 'o♥', p: 'p♥', q: 'q♥', r: 'r♥', s: 's♥', t: 't♥', u: 'u♥', v: 'v♥', w: 'w♥', x: 'x♥', y: 'y♥', z: 'z♥' },
  cross: { a: 'a†', b: 'b†', c: 'c†', d: 'd†', e: 'e†', f: 'f†', g: 'g†', h: 'h†', i: 'i†', j: 'j†', k: 'k†', l: 'l†', m: 'm†', n: 'n†', o: 'o†', p: 'p†', q: 'q†', r: 'r†', s: 's†', t: 't†', u: 'u†', v: 'v†', w: 'w†', x: 'x†', y: 'y†', z: 'z†' },
  birds: { a: 'aʚ', b: 'bʚ', c: 'cʚ', d: 'dʚ', e: 'eʚ', f: 'fʚ', g: 'gʚ', h: 'hʚ', i: 'iʚ', j: 'jʚ', k: 'kʚ', l: 'lʚ', m: 'mʚ', n: 'nʚ', o: 'oʚ', p: 'pʚ', q: 'qʚ', r: 'rʚ', s: 'sʚ', t: 'tʚ', u: 'uʚ', v: 'vʚ', w: 'wʚ', x: 'xʚ', y: 'yʚ', z: 'zʚ' },
};

export const decorationPrefixes = ["꧁༺ ", "⚡ ", "☠︎ ", "👑 ", "✿ ", "☬ ", "★ ", "♥ ", "✨ ", "🔥 ", "【 ", "『 ", "★彡 ", "×͜× ", "❀ ", "╰‿╯ ", "乂 ", "๖ۣۜ ", "꧁༒ ", "•°¯`•• "];
export const decorationSuffixes = [" ༻꧂", " ⚡", " ☠︎", " 👑", " ✿", " ☬", " ★", " ♥", " ✨", " 🔥", " 】", " 』", " 彡★", " ×͜×", " ❀", " ╰‿╯", " 乂", " ๖ۣۜ", " ༒꧂", " ••´¯°•"];

export const popularSymbols = [
  "꧁", "꧂", "༺", "༻", "⚡", "☠︎", "👑", "✿", "☬", "⚔️", "☯︎", "★", "♥", "✨", "🔥", "ツ", "×͜×", "シ", "ッ", "メ", "❀", "『", "』", "【", "】", "彡", "♣", "♦", "♠", "♡", "╰‿╯", "乂", "๖ۣۜ", "༒", "⚚", "⚕️", "⚜️", "🔱", "♾️", "❄️", "🌙"
];

export function generateFancyNicknames(inputText: string, style?: string, customSymbols?: string[]): string[] {
  inputText = inputText.trim() || "Gamer";
  let plainResults: string[] = [];
  let decoratedResults: string[] = [];
  
  const stylesToApply = style && style !== 'all' ? [style] : Object.keys(fontMaps);
  
  // First, generate all plain converted texts
  stylesToApply.forEach(s => {
    let convertedText = inputText.toLowerCase().split('').map(char => {
      return fontMaps[s]?.[char] || char;
    }).join('');
    plainResults.push(convertedText);
  });

  // Then, generate decorated versions
  stylesToApply.forEach(s => {
    let convertedText = inputText.toLowerCase().split('').map(char => {
      return fontMaps[s]?.[char] || char;
    }).join('');
    
    if (customSymbols && customSymbols.length > 0) {
      for (let i = 0; i < Math.min(customSymbols.length, 10); i++) {
        const sym = customSymbols[i];
        decoratedResults.push(`${sym} ${convertedText} ${sym}`);
        if (i % 2 === 0 && i + 1 < customSymbols.length) {
          decoratedResults.push(`${sym} ${convertedText} ${customSymbols[i+1]}`);
        }
      }
    } else {
      for (let i = 0; i < decorationPrefixes.length; i++) {
        decoratedResults.push(`${decorationPrefixes[i]}${convertedText}${decorationSuffixes[i]}`);
      }
    }
  });
  
  return Array.from(new Set([...plainResults, ...decoratedResults]));
}
