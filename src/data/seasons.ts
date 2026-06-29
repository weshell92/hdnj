import type { SeasonalCare } from '@/types'

export const seasons: SeasonalCare[] = [
  {
    id: 'spring', seasonName: '春', title: '春季养生：生发与舒展', corePrinciple: '生发',
    originalText: '春三月，此谓发陈，天地俱生，万物以荣。',
    translation: '春季是万物生发、舒展、更新的时期。人的生活也应顺应这种向外生发的节律。',
    lifestyleAdvice: ['保持规律作息，逐步增加户外活动', '让身体从冬季闭藏状态转向舒展', '避免突然过度劳累'],
    emotionAdvice: ['保持情绪舒展', '减少长期压抑和郁结', '适合做计划、整理目标'],
    dietDirection: ['饮食清淡有节', '减少过度厚味', '顺应春季生发但不盲目进补'],
    exerciseDirection: ['散步', '舒展类运动', '轻柔拉伸'],
    cautions: ['养生建议不等于治疗方案', '已有疾病或不适应咨询医生'], relatedConcepts: ['season-spring', 'tianren', 'zangfu']
  },
  {
    id: 'summer', seasonName: '夏', title: '夏季养生：长养与不过耗', corePrinciple: '长养',
    originalText: '夏三月，此谓蕃秀，天地气交，万物华实。',
    translation: '夏季是万物繁盛、阳气外达的时期，生活可适度开放，但应避免过度耗散。',
    lifestyleAdvice: ['保持通风与适度活动', '避免长期熬夜耗神', '注意暑热环境下的休息'],
    emotionAdvice: ['保持开朗但不过度亢奋', '减少急躁'],
    dietDirection: ['清爽有节', '注意水分补充', '不因炎热而过度贪凉'],
    exerciseDirection: ['选择清晨或傍晚活动', '避免高温暴晒下剧烈运动'],
    cautions: ['中暑、胸闷等情况应及时就医'], relatedConcepts: ['season-summer', 'tianren']
  },
  {
    id: 'autumn', seasonName: '秋', title: '秋季养生：收敛与安定', corePrinciple: '收敛',
    originalText: '秋三月，此谓容平，天气以急，地气以明。',
    translation: '秋季万物趋于收敛和平定，人的生活也应减少过度发散。',
    lifestyleAdvice: ['逐步调整作息', '减少过度消耗', '保持生活节奏平稳'],
    emotionAdvice: ['避免长期悲忧', '保持内心安定'],
    dietDirection: ['饮食平和', '根据个人情况注意润燥', '避免盲目进补'],
    exerciseDirection: ['适度有氧', '慢跑', '步行'],
    cautions: ['呼吸道不适应咨询医生'], relatedConcepts: ['season-autumn', 'tianren']
  },
  {
    id: 'winter', seasonName: '冬', title: '冬季养生：闭藏与蓄养', corePrinciple: '闭藏',
    originalText: '冬三月，此谓闭藏，水冰地坼，无扰乎阳。',
    translation: '冬季是闭藏蓄养的时期，应减少不必要消耗，保护内在生命力。',
    lifestyleAdvice: ['保证睡眠', '减少熬夜', '注意保暖和节制消耗'],
    emotionAdvice: ['保持安静稳定', '减少过度紧张'],
    dietDirection: ['饮食温和有节', '根据体质和医生建议调整', '避免盲目大补'],
    exerciseDirection: ['低到中等强度活动', '避免严寒中突然剧烈运动'],
    cautions: ['心脑血管、呼吸系统不适应及时就医'], relatedConcepts: ['season-winter', 'tianren']
  }
]

export function getSeason(id: string) {
  return seasons.find((item) => item.id === id)
}
