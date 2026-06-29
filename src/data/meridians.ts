import type { Meridian } from '@/types'

const ref = { book: '灵枢' as const, chapter: '经脉', quote: '经脉者，所以能决死生，处百病，调虚实，不可不通。' }

export const meridians: Meridian[] = [
  { id: 'hand-taiyin-lung', name: '手太阴肺经', type: 'hand', yinYang: '太阴', relatedOrgan: '肺', routeDescription: '起于中焦，下络大肠，还循胃口，上膈属肺，出腋下，循臂内前廉入寸口。', mainAcupoints: ['中府', '尺泽', '列缺', '太渊', '鱼际', '少商'], relatedSymptoms: ['咳', '喘', '胸满'], originalReferences: [ref] },
  { id: 'hand-yangming-large-intestine', name: '手阳明大肠经', type: 'hand', yinYang: '阳明', relatedOrgan: '大肠', routeDescription: '起于食指端，循臂上行，入缺盆，络肺，下膈属大肠。', mainAcupoints: ['商阳', '合谷', '曲池', '肩髃', '迎香'], relatedSymptoms: ['齿痛', '鼻塞', '咽喉不利'], originalReferences: [ref] },
  { id: 'foot-yangming-stomach', name: '足阳明胃经', type: 'foot', yinYang: '阳明', relatedOrgan: '胃', routeDescription: '起于鼻旁，循面颊，下颈入缺盆，属胃络脾，下行至足。', mainAcupoints: ['承泣', '地仓', '足三里', '丰隆', '内庭'], relatedSymptoms: ['胃痛', '腹胀', '面痛'], originalReferences: [ref] },
  { id: 'foot-taiyin-spleen', name: '足太阴脾经', type: 'foot', yinYang: '太阴', relatedOrgan: '脾', routeDescription: '起于大趾之端，循足内侧上行，入腹属脾络胃。', mainAcupoints: ['隐白', '太白', '三阴交', '阴陵泉', '血海'], relatedSymptoms: ['腹胀', '食少', '泄泻'], originalReferences: [ref] },
  { id: 'hand-shaoyin-heart', name: '手少阴心经', type: 'hand', yinYang: '少阴', relatedOrgan: '心', routeDescription: '起于心中，出属心系，下膈络小肠，循臂内后廉至小指。', mainAcupoints: ['极泉', '少海', '神门', '少冲'], relatedSymptoms: ['心痛', '烦躁', '失眠'], originalReferences: [ref] },
  { id: 'hand-taiyang-small-intestine', name: '手太阳小肠经', type: 'hand', yinYang: '太阳', relatedOrgan: '小肠', routeDescription: '起于小指之端，循手外侧上行，绕肩胛，入缺盆络心，属小肠。', mainAcupoints: ['少泽', '后溪', '养老', '肩贞', '听宫'], relatedSymptoms: ['肩背痛', '耳鸣', '咽痛'], originalReferences: [ref] },
  { id: 'foot-taiyang-bladder', name: '足太阳膀胱经', type: 'foot', yinYang: '太阳', relatedOrgan: '膀胱', routeDescription: '起于目内眦，上额交巅，下项挟脊，入络肾属膀胱，下行至足小趾。', mainAcupoints: ['睛明', '风门', '肾俞', '委中', '昆仑', '至阴'], relatedSymptoms: ['头项痛', '腰背痛', '小便不利'], originalReferences: [ref] },
  { id: 'foot-shaoyin-kidney', name: '足少阴肾经', type: 'foot', yinYang: '少阴', relatedOrgan: '肾', routeDescription: '起于小趾之下，斜走足心，上行入脊属肾络膀胱，贯肝膈入肺。', mainAcupoints: ['涌泉', '太溪', '复溜', '阴谷'], relatedSymptoms: ['腰膝酸', '咽干', '耳鸣'], originalReferences: [ref] },
  { id: 'hand-jueyin-pericardium', name: '手厥阴心包经', type: 'hand', yinYang: '厥阴', relatedOrgan: '心包', routeDescription: '起于胸中，出属心包络，下膈历络三焦，循臂内至中指。', mainAcupoints: ['天池', '曲泽', '内关', '劳宫', '中冲'], relatedSymptoms: ['胸闷', '心烦', '臂痛'], originalReferences: [ref] },
  { id: 'hand-shaoyang-triple-burner', name: '手少阳三焦经', type: 'hand', yinYang: '少阳', relatedOrgan: '三焦', routeDescription: '起于无名指端，循手臂外侧上肩，入缺盆，布膻中，散络心包，下膈属三焦。', mainAcupoints: ['关冲', '外关', '支沟', '肩髎', '翳风'], relatedSymptoms: ['耳鸣', '咽痛', '胁痛'], originalReferences: [ref] },
  { id: 'foot-shaoyang-gallbladder', name: '足少阳胆经', type: 'foot', yinYang: '少阳', relatedOrgan: '胆', routeDescription: '起于目锐眦，上抵头角，下耳后，循胁肋，下行至足四趾。', mainAcupoints: ['瞳子髎', '风池', '肩井', '环跳', '阳陵泉', '足临泣'], relatedSymptoms: ['偏头痛', '胁痛', '口苦'], originalReferences: [ref] },
  { id: 'foot-jueyin-liver', name: '足厥阴肝经', type: 'foot', yinYang: '厥阴', relatedOrgan: '肝', routeDescription: '起于大趾丛毛之际，上循足跗，过阴器，抵小腹，属肝络胆。', mainAcupoints: ['大敦', '行间', '太冲', '曲泉', '期门'], relatedSymptoms: ['胁痛', '情志不舒', '目疾'], originalReferences: [ref] }
]

export function getMeridian(id: string) {
  return meridians.find((item) => item.id === id)
}
