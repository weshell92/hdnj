import type { Meridian } from '@/types'

const ref = { book: '灵枢' as const, chapter: '经脉', quote: '经脉者，所以能决死生，处百病，调虚实，不可不通。' }

export const meridians: Meridian[] = [
  {
    id: 'hand-taiyin-lung', name: '手太阴肺经', type: 'hand', yinYang: '太阴', relatedOrgan: '肺', pairedMeridian: '手阳明大肠经', flowTime: '寅时 03:00-05:00', chartSide: 'front',
    routeDescription: '起于中焦，下络大肠，还循胃口，上膈属肺，横出腋下，循臂内前廉，经肘中、寸口、鱼际，出大指之端；支者从腕后直出次指内廉。',
    sourceText: '肺手太阴之脉，起于中焦，下络大肠，还循胃口，上膈属肺，从肺系横出腋下，下循臑内，行少阴心主之前，下肘中，循臂内上骨下廉，入寸口，上鱼，循鱼际，出大指之端；其支者，从腕后直出次指内廉出其端。',
    branchRoutes: ['腕后支脉直出食指内廉，与手阳明大肠经相接。'], mainAcupoints: ['中府', '云门', '尺泽', '孔最', '列缺', '太渊', '鱼际', '少商'], relatedSymptoms: ['咳', '喘', '胸满', '咽喉不利'], clinicalKeywords: ['肺系', '胸胁', '臂内前廉', '大指'], originalReferences: [ref], pathPoints: [{ x: 180, y: 205, label: '中焦' }, { x: 145, y: 180, label: '肺' }, { x: 112, y: 205, label: '腋' }, { x: 95, y: 270, label: '臂内' }, { x: 82, y: 340, label: '寸口' }, { x: 70, y: 410, label: '少商' }]
  },
  {
    id: 'hand-yangming-large-intestine', name: '手阳明大肠经', type: 'hand', yinYang: '阳明', relatedOrgan: '大肠', pairedMeridian: '手太阴肺经', flowTime: '卯时 05:00-07:00', chartSide: 'front',
    routeDescription: '起于食指端，循手背与臂外前廉上肩，入缺盆，络肺，下膈属大肠；支者上颈贯颊，入下齿，夹口，交人中，上挟鼻孔。',
    sourceText: '大肠手阳明之脉，起于大指次指之端，循指上廉，出合谷两骨之间，上入两筋之中，循臂上廉，入肘外廉，上臑外前廉，上肩，出髃骨之前廉，上出于柱骨之会上，下入缺盆，络肺，下膈，属大肠。其支者，从缺盆上颈，贯颊，入下齿中，还出挟口，交人中，左之右，右之左，上挟鼻孔。',
    branchRoutes: ['缺盆支脉上颈贯颊，入下齿，挟口交人中，上挟鼻孔。'], mainAcupoints: ['商阳', '二间', '三间', '合谷', '阳溪', '曲池', '臂臑', '肩髃', '迎香'], relatedSymptoms: ['齿痛', '鼻塞', '咽喉肿痛', '肩臂痛'], clinicalKeywords: ['食指', '合谷', '曲池', '鼻旁'], originalReferences: [ref], pathPoints: [{ x: 70, y: 410, label: '商阳' }, { x: 86, y: 340, label: '合谷' }, { x: 104, y: 275, label: '曲池' }, { x: 118, y: 210, label: '肩髃' }, { x: 160, y: 145, label: '颊' }, { x: 174, y: 120, label: '迎香' }]
  },
  {
    id: 'foot-yangming-stomach', name: '足阳明胃经', type: 'foot', yinYang: '阳明', relatedOrgan: '胃', pairedMeridian: '足太阴脾经', flowTime: '辰时 07:00-09:00', chartSide: 'front',
    routeDescription: '起于鼻旁，上行至额，入上齿，环唇，下颈入缺盆，下膈属胃络脾；直行者经乳中、腹、股前，下膝胫，入足次趾外侧。',
    sourceText: '胃足阳明之脉，起于鼻之交頞中，旁纳太阳之脉，下循鼻外，入上齿中，还出挟口环唇，下交承浆，却循颐后下廉，出大迎，循颊车，上耳前，过客主人，循发际，至额颅。其支者，下人迎，循喉咙，入缺盆，下膈，属胃，络脾。',
    branchRoutes: ['面部支脉循颊车、耳前至额。', '缺盆支脉下膈属胃络脾。', '腹股支脉沿股前、胫前至足次趾。'], mainAcupoints: ['承泣', '四白', '地仓', '颊车', '人迎', '梁门', '天枢', '梁丘', '足三里', '丰隆', '内庭', '厉兑'], relatedSymptoms: ['胃痛', '腹胀', '面痛', '膝胫痛'], clinicalKeywords: ['面部', '胃脘', '腹部', '足三里'], originalReferences: [ref], pathPoints: [{ x: 180, y: 118, label: '承泣' }, { x: 165, y: 150, label: '地仓' }, { x: 170, y: 205, label: '缺盆' }, { x: 170, y: 260, label: '胃' }, { x: 155, y: 350, label: '足三里' }, { x: 150, y: 465, label: '厉兑' }]
  },
  {
    id: 'foot-taiyin-spleen', name: '足太阴脾经', type: 'foot', yinYang: '太阴', relatedOrgan: '脾', pairedMeridian: '足阳明胃经', flowTime: '巳时 09:00-11:00', chartSide: 'front',
    routeDescription: '起于大趾之端，循足内侧白肉际，上内踝前廉，循胫骨后，入腹属脾络胃，上膈挟咽，连舌本，散舌下。',
    sourceText: '脾足太阴之脉，起于大指之端，循指内侧白肉际，过核骨后，上内踝前廉，上踹内，循胫骨后，交出厥阴之前，上膝股内前廉，入腹，属脾，络胃，上膈，挟咽，连舌本，散舌下。',
    branchRoutes: ['胃部支脉上膈注心中，与手少阴心经相接。'], mainAcupoints: ['隐白', '大都', '太白', '公孙', '三阴交', '阴陵泉', '血海', '大包'], relatedSymptoms: ['腹胀', '食少', '泄泻', '舌本强'], clinicalKeywords: ['大趾', '足内侧', '腹', '舌'], originalReferences: [ref], pathPoints: [{ x: 152, y: 468, label: '隐白' }, { x: 148, y: 420, label: '三阴交' }, { x: 150, y: 350, label: '阴陵泉' }, { x: 162, y: 285, label: '腹' }, { x: 168, y: 235, label: '脾' }, { x: 180, y: 145, label: '舌' }]
  },
  {
    id: 'hand-shaoyin-heart', name: '手少阴心经', type: 'hand', yinYang: '少阴', relatedOrgan: '心', pairedMeridian: '手太阳小肠经', flowTime: '午时 11:00-13:00', chartSide: 'front',
    routeDescription: '起于心中，出属心系，下膈络小肠；支者上挟咽，系目系；直者从心系上肺，下出腋下，循臂内后廉至小指。',
    sourceText: '心手少阴之脉，起于心中，出属心系，下膈，络小肠。其支者，从心系，上挟咽，系目系。其直者，复从心系却上肺，下出腋下，下循臑内后廉，行太阴心主之后，下肘内，循臂内后廉，抵掌后锐骨之端，入掌内后廉，循小指之内，出其端。',
    branchRoutes: ['心系支脉上挟咽，系目系。', '直行支脉从心系上肺，下出腋下，循臂内后廉至小指。'], mainAcupoints: ['极泉', '青灵', '少海', '通里', '阴郄', '神门', '少府', '少冲'], relatedSymptoms: ['心痛', '烦躁', '失眠', '咽干'], clinicalKeywords: ['心中', '腋下', '臂内后廉', '小指'], originalReferences: [ref], pathPoints: [{ x: 178, y: 205, label: '心' }, { x: 122, y: 210, label: '极泉' }, { x: 105, y: 280, label: '少海' }, { x: 88, y: 350, label: '神门' }, { x: 76, y: 415, label: '少冲' }]
  },
  {
    id: 'hand-taiyang-small-intestine', name: '手太阳小肠经', type: 'hand', yinYang: '太阳', relatedOrgan: '小肠', pairedMeridian: '手少阴心经', flowTime: '未时 13:00-15:00', chartSide: 'back',
    routeDescription: '起于小指之端，循手外侧上腕，出踝中，循臂外后廉，绕肩胛，入缺盆，络心，属小肠；支者上颊，至目外眦、入耳中。',
    sourceText: '小肠手太阳之脉，起于小指之端，循手外侧上腕，出踝中，直上循臂骨下廉，出肘内侧两筋之间，上循臑外后廉，出肩解，绕肩胛，交肩上，入缺盆，络心，循咽，下膈，抵胃，属小肠。',
    branchRoutes: ['缺盆支脉循颈上颊，至目锐眦，却入耳中。'], mainAcupoints: ['少泽', '前谷', '后溪', '腕骨', '养老', '小海', '肩贞', '天宗', '颧髎', '听宫'], relatedSymptoms: ['肩背痛', '耳鸣', '咽痛', '颊肿'], clinicalKeywords: ['小指', '肩胛', '颊', '耳'], originalReferences: [ref], pathPoints: [{ x: 74, y: 418, label: '少泽' }, { x: 90, y: 350, label: '后溪' }, { x: 108, y: 285, label: '小海' }, { x: 132, y: 210, label: '肩贞' }, { x: 165, y: 150, label: '颧髎' }, { x: 154, y: 126, label: '听宫' }]
  },
  {
    id: 'foot-taiyang-bladder', name: '足太阳膀胱经', type: 'foot', yinYang: '太阳', relatedOrgan: '膀胱', pairedMeridian: '足少阴肾经', flowTime: '申时 15:00-17:00', chartSide: 'back',
    routeDescription: '起于目内眦，上额交巅，入络脑，还出别下项，挟脊抵腰，络肾属膀胱；支者从腰中下挟脊贯臀，入腘中，下至小趾外侧。',
    sourceText: '膀胱足太阳之脉，起于目内眦，上额交巅；其支者，从巅至耳上角。其直者，从巅入络脑，还出别下项，循肩膊内，挟脊抵腰中，入循膂，络肾，属膀胱。',
    branchRoutes: ['巅顶支脉至耳上角。', '腰部支脉贯臀入腘中。', '背部分支沿脊旁下行至足小趾外侧。'], mainAcupoints: ['睛明', '攒竹', '天柱', '风门', '肺俞', '心俞', '肾俞', '委中', '承山', '昆仑', '申脉', '至阴'], relatedSymptoms: ['头项痛', '腰背痛', '小便不利', '目痛'], clinicalKeywords: ['目内眦', '项背', '腰', '腘', '小趾'], originalReferences: [ref], pathPoints: [{ x: 175, y: 116, label: '睛明' }, { x: 180, y: 80, label: '巅顶' }, { x: 145, y: 180, label: '天柱' }, { x: 140, y: 260, label: '肾俞' }, { x: 138, y: 350, label: '委中' }, { x: 132, y: 468, label: '至阴' }]
  },
  {
    id: 'foot-shaoyin-kidney', name: '足少阴肾经', type: 'foot', yinYang: '少阴', relatedOrgan: '肾', pairedMeridian: '足太阳膀胱经', flowTime: '酉时 17:00-19:00', chartSide: 'front',
    routeDescription: '起于小趾之下，斜走足心，出然谷，循内踝之后，贯脊属肾络膀胱，上贯肝膈，入肺中，循喉咙，挟舌本。',
    sourceText: '肾足少阴之脉，起于小指之下，邪走足心，出于然谷之下，循内踝之后，别入跟中，以上踹内，出腘内廉，上股内后廉，贯脊，属肾，络膀胱。',
    branchRoutes: ['肾支脉上贯肝膈，入肺中，循喉咙，挟舌本。', '肺支脉络心，注胸中，与手厥阴相接。'], mainAcupoints: ['涌泉', '然谷', '太溪', '照海', '复溜', '阴谷', '肓俞', '俞府'], relatedSymptoms: ['腰膝酸', '咽干', '耳鸣', '足心热'], clinicalKeywords: ['足心', '内踝', '肾', '喉咙'], originalReferences: [ref], pathPoints: [{ x: 150, y: 470, label: '涌泉' }, { x: 150, y: 420, label: '太溪' }, { x: 155, y: 350, label: '阴谷' }, { x: 170, y: 265, label: '肾' }, { x: 178, y: 195, label: '肺' }, { x: 182, y: 145, label: '喉' }]
  },
  {
    id: 'hand-jueyin-pericardium', name: '手厥阴心包经', type: 'hand', yinYang: '厥阴', relatedOrgan: '心包', pairedMeridian: '手少阳三焦经', flowTime: '戌时 19:00-21:00', chartSide: 'front',
    routeDescription: '起于胸中，出属心包络，下膈历络三焦；支者循胸出胁，下腋三寸，上抵腋下，循臂内中行至中指。',
    sourceText: '心主手厥阴心包络之脉，起于胸中，出属心包络，下膈，历络三焦。其支者，循胸出胁，下腋三寸，上抵腋下，循臑内，行太阴少阴之间，入肘中，下臂，行两筋之间，入掌中，循中指出其端。',
    branchRoutes: ['掌中支脉从劳宫出无名指端，与手少阳三焦经相接。'], mainAcupoints: ['天池', '曲泽', '郄门', '间使', '内关', '大陵', '劳宫', '中冲'], relatedSymptoms: ['胸闷', '心烦', '臂痛', '掌心热'], clinicalKeywords: ['胸中', '心包', '臂内中行', '中指'], originalReferences: [ref], pathPoints: [{ x: 178, y: 205, label: '胸中' }, { x: 120, y: 225, label: '天池' }, { x: 103, y: 285, label: '曲泽' }, { x: 88, y: 350, label: '内关' }, { x: 74, y: 415, label: '中冲' }]
  },
  {
    id: 'hand-shaoyang-triple-burner', name: '手少阳三焦经', type: 'hand', yinYang: '少阳', relatedOrgan: '三焦', pairedMeridian: '手厥阴心包经', flowTime: '亥时 21:00-23:00', chartSide: 'side',
    routeDescription: '起于无名指端，循手背上腕，出臂外两骨之间，上贯肘，循臑外上肩，入缺盆，布膻中，络心包，下膈属三焦；支者上项系耳后。',
    sourceText: '三焦手少阳之脉，起于小指次指之端，上出两指之间，循手表腕，出臂外两骨之间，上贯肘，循臑外，上肩，而交出足少阳之后，入缺盆，布膻中，散络心包，下膈，遍属三焦。',
    branchRoutes: ['膻中支脉上出缺盆，上项，系耳后，出耳上角。', '耳后支脉入耳中，出走耳前，至目锐眦。'], mainAcupoints: ['关冲', '液门', '中渚', '阳池', '外关', '支沟', '肩髎', '翳风', '耳门', '丝竹空'], relatedSymptoms: ['耳鸣', '咽痛', '胁痛', '目外眦痛'], clinicalKeywords: ['无名指', '臂外', '耳后', '三焦'], originalReferences: [ref], pathPoints: [{ x: 74, y: 415, label: '关冲' }, { x: 90, y: 350, label: '外关' }, { x: 106, y: 285, label: '支沟' }, { x: 125, y: 210, label: '肩髎' }, { x: 155, y: 125, label: '翳风' }, { x: 175, y: 115, label: '丝竹空' }]
  },
  {
    id: 'foot-shaoyang-gallbladder', name: '足少阳胆经', type: 'foot', yinYang: '少阳', relatedOrgan: '胆', pairedMeridian: '足厥阴肝经', flowTime: '子时 23:00-01:00', chartSide: 'side',
    routeDescription: '起于目锐眦，上抵头角，下耳后，循颈行手少阳之前，至肩，入缺盆；支者下胸中贯膈络肝属胆，循胁里，下气街，绕毛际，横入髀厌中，下行至足四趾端。',
    sourceText: '胆足少阳之脉，起于目锐眦，上抵头角，下耳后，循颈，行手少阳之前，至肩上，却交出手少阳之后，入缺盆。其支者，从耳后入耳中，出走耳前，至目锐眦后。',
    branchRoutes: ['耳后支脉入耳中，出耳前，至目锐眦。', '缺盆支脉下胸贯膈，络肝属胆，循胁里，入髀厌。'], mainAcupoints: ['瞳子髎', '听会', '率谷', '风池', '肩井', '日月', '环跳', '阳陵泉', '光明', '足临泣', '足窍阴'], relatedSymptoms: ['偏头痛', '胁痛', '口苦', '髀膝外侧痛'], clinicalKeywords: ['目锐眦', '头侧', '胁肋', '足四趾'], originalReferences: [ref], pathPoints: [{ x: 185, y: 116, label: '瞳子髎' }, { x: 155, y: 130, label: '听会' }, { x: 145, y: 180, label: '风池' }, { x: 132, y: 225, label: '肩井' }, { x: 142, y: 300, label: '环跳' }, { x: 132, y: 370, label: '阳陵泉' }, { x: 128, y: 468, label: '足窍阴' }]
  },
  {
    id: 'foot-jueyin-liver', name: '足厥阴肝经', type: 'foot', yinYang: '厥阴', relatedOrgan: '肝', pairedMeridian: '足少阳胆经', flowTime: '丑时 01:00-03:00', chartSide: 'front',
    routeDescription: '起于大趾丛毛之际，上循足跗，去内踝一寸，上踝八寸交出太阴之后，上腘内廉，循股阴，入毛中，环阴器，抵小腹，挟胃属肝络胆，上贯膈布胁肋。',
    sourceText: '肝足厥阴之脉，起于大指丛毛之际，上循足跗上廉，去内踝一寸，上踝八寸，交出太阴之后，上腘内廉，循股阴，入毛中，过阴器，抵小腹，挟胃，属肝，络胆，上贯膈，布胁肋。',
    branchRoutes: ['胁肋支脉上入喉咙，连目系，上出额，与督脉会于巅。', '目系支脉下颊里，环唇内。'], mainAcupoints: ['大敦', '行间', '太冲', '中封', '曲泉', '章门', '期门'], relatedSymptoms: ['胁痛', '情志不舒', '目疾', '少腹痛'], clinicalKeywords: ['大趾', '足跗', '阴器', '小腹', '胁肋', '目系'], originalReferences: [ref], pathPoints: [{ x: 152, y: 468, label: '大敦' }, { x: 150, y: 420, label: '太冲' }, { x: 154, y: 350, label: '曲泉' }, { x: 170, y: 285, label: '小腹' }, { x: 165, y: 235, label: '肝' }, { x: 158, y: 195, label: '期门' }, { x: 176, y: 118, label: '目系' }]
  }
]

export function getMeridian(id: string) {
  return meridians.find((item) => item.id === id)
}
