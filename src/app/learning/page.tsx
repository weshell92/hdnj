import { SectionHeader } from '@/components/ui/SectionHeader'

const paths = [
  { title: '普通人入门路径', steps: ['今日节气', '四季养生', '名句精读', '五脏基础', '阴阳入门', '原文选读'] },
  { title: '中医初学者路径', steps: ['上古天真论', '四气调神大论', '阴阳应象大论', '藏气法时论', '五脏生成', '经脉篇', '病因病机', '治则治法'] },
  { title: '深度研究路径', steps: ['通读《素问》', '通读《灵枢》', '建立阴阳五行框架', '建立脏腑经络框架', '整理病因病机', '整理诊法治则', '主题式原文对读', '建立个人笔记系统'] }
]

export default function LearningPage() {
  return (
    <div>
      <SectionHeader eyebrow="LEARNING" title="学习路径" description="不同用户用不同入口进入同一套生命经典系统。" />
      <div className="grid gap-6 md:grid-cols-3">
        {paths.map((path) => (
          <section key={path.title} className="rounded-[2rem] bg-white/60 p-6 shadow-soft">
            <h2 className="font-serifCN text-3xl font-bold">{path.title}</h2>
            <ol className="mt-6 space-y-3">
              {path.steps.map((step, index) => <li key={step} className="rounded-2xl bg-paper/70 p-4"><span className="mr-3 text-cinnabar">{index + 1}</span>{step}</li>)}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
