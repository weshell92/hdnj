import type { BookId, ClassicChapter } from '@/types'

export const bookNames: Record<BookId, string> = {
  suwen: '素问',
  lingshu: '灵枢'
}

export const classicChapters = [
  {
    "id": "suwen-shang-gu-tian-zhen-lun",
    "book": "suwen",
    "chapterNumber": 1,
    "title": "上古天真论篇第1",
    "baseTitle": "上古天真论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shang-gu-tian-zhen-lun/zh",
    "introduction": "《素问》上古天真论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "昔在黄帝，生而神灵，弱而能言，幼而徇齐，长而敦敏，成而登天。迺问于天师曰：余闻上古之人，春秋皆度百岁，而动作不衰；今时之人，年半百而动作皆衰者，时世异耶，人将失之耶？岐伯对曰：上古之人，其知道者，法于阴阳，和于术数，食饮有节，起居有常，不妄作劳，故能形与神俱，而尽终其天年，度百岁乃去。",
    "punctuatedText": "昔在黄帝，生而神灵，弱而能言，幼而徇齐，长而敦敏，成而登天。迺问于天师曰：余闻上古之人，春秋皆度百岁，而动作不衰；今时之人，年半百而动作皆衰者，时世异耶，人将失之耶？岐伯对曰：上古之人，其知道者，法于阴阳，和于术数，食饮有节，起居有常，不妄作劳，故能形与神俱，而尽终其天年，度百岁乃去。",
    "translation": "本篇以黄帝问岐伯的形式，说明古人重视阴阳节律、饮食起居与精神守持，所以能够形神协调、尽其天年。",
    "interpretation": "这是全书养生思想的入口，强调健康不是外求补益，而是建立与自然、节律、情志和生活方式相协调的生命秩序。",
    "keywords": [
      "养生",
      "天年",
      "阴阳",
      "术数",
      "形神",
      "治未病"
    ],
    "famousQuotes": [
      "法于阴阳，和于术数",
      "食饮有节，起居有常",
      "形与神俱"
    ],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-si-qi-tiao-shen-da-lun",
    "book": "suwen",
    "chapterNumber": 2,
    "title": "四气调神大论篇第2",
    "baseTitle": "四气调神大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/si-qi-tiao-shen-da-lun/zh",
    "introduction": "《素问》四气调神大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "春三月，此谓发陈，天地俱生，万物以荣。夏三月，此谓蕃秀，天地气交，万物华实。秋三月，此谓容平，天气以急，地气以明。冬三月，此谓闭藏，水冰地坼，无扰乎阳。",
    "punctuatedText": "春三月，此谓发陈，天地俱生，万物以荣。夏三月，此谓蕃秀，天地气交，万物华实。秋三月，此谓容平，天气以急，地气以明。冬三月，此谓闭藏，水冰地坼，无扰乎阳。",
    "translation": "春夏秋冬各有生、长、收、藏之气，人的作息、情志与活动应顺应四时变化。",
    "interpretation": "本篇是四季养生的核心依据，说明养生不是固定方案，而是随时间节律变化而调整身心。",
    "keywords": [
      "四时",
      "调神",
      "春夏秋冬",
      "生长收藏",
      "天人相应"
    ],
    "famousQuotes": [
      "春三月，此谓发陈",
      "春夏养阳，秋冬养阴",
      "圣人不治已病治未病"
    ],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-sheng-qi-tong-tian-lun",
    "book": "suwen",
    "chapterNumber": 3,
    "title": "生气通天论篇第3",
    "baseTitle": "生气通天论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/sheng-qi-tong-tian-lun/zh",
    "introduction": "《素问》生气通天论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《生气通天论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《生气通天论》全文。",
    "translation": "本篇围绕“生气通天论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《生气通天论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "生气通天",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-jin-kui-zhen-yan-lun",
    "book": "suwen",
    "chapterNumber": 4,
    "title": "金匮真言论篇第4",
    "baseTitle": "金匮真言论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jin-kui-zhen-yan-lun/zh",
    "introduction": "《素问》金匮真言论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《金匮真言论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《金匮真言论》全文。",
    "translation": "本篇围绕“金匮真言论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《金匮真言论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "金匮真言",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-yin-yang-ying-xiang-da-lun",
    "book": "suwen",
    "chapterNumber": 5,
    "title": "阴阳应象大论篇第5",
    "baseTitle": "阴阳应象大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yin-yang-ying-xiang-da-lun/zh",
    "introduction": "《素问》阴阳应象大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "阴阳者，天地之道也，万物之纲纪，变化之父母，生杀之本始，神明之府也。治病必求于本。",
    "punctuatedText": "阴阳者，天地之道也，万物之纲纪，变化之父母，生杀之本始，神明之府也。治病必求于本。",
    "translation": "阴阳是解释天地、万物、人体和疾病变化的基础关系模型，治病与调养都要追求根本。",
    "interpretation": "阴阳不是两个实体，而是寒热、动静、内外、升降等相对关系。理解它，才能理解脏腑、经络和治则。",
    "keywords": [
      "阴阳",
      "天地之道",
      "变化",
      "治病求本"
    ],
    "famousQuotes": [
      "阴阳者，天地之道也",
      "治病必求于本"
    ],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-yin-yang-li-he-lun",
    "book": "suwen",
    "chapterNumber": 6,
    "title": "阴阳离合论篇第6",
    "baseTitle": "阴阳离合论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yin-yang-li-he-lun/zh",
    "introduction": "《素问》阴阳离合论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳离合论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳离合论》全文。",
    "translation": "本篇围绕“阴阳离合论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《阴阳离合论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "阴阳离合",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-yin-yang-bie-lun",
    "book": "suwen",
    "chapterNumber": 7,
    "title": "阴阳别论篇第7",
    "baseTitle": "阴阳别论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yin-yang-bie-lun/zh",
    "introduction": "《素问》阴阳别论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳别论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳别论》全文。",
    "translation": "本篇围绕“阴阳别论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《阴阳别论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "阴阳别",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-ling-lan-mi-dian-lun",
    "book": "suwen",
    "chapterNumber": 8,
    "title": "灵兰秘典论篇第8",
    "baseTitle": "灵兰秘典论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ling-lan-mi-dian-lun/zh",
    "introduction": "《素问》灵兰秘典论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《灵兰秘典论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《灵兰秘典论》全文。",
    "translation": "本篇围绕“灵兰秘典论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《灵兰秘典论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "灵兰秘典",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-liu-jie-zang-xiang-lun",
    "book": "suwen",
    "chapterNumber": 9,
    "title": "六节藏象论篇第9",
    "baseTitle": "六节藏象论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/liu-jie-zang-xiang-lun/zh",
    "introduction": "《素问》六节藏象论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《六节藏象论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《六节藏象论》全文。",
    "translation": "本篇围绕“六节藏象论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《六节藏象论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "六节藏象",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "zangfu",
      "wuxing"
    ]
  },
  {
    "id": "suwen-wu-zang-sheng-cheng",
    "book": "suwen",
    "chapterNumber": 10,
    "title": "五藏生成篇第10",
    "baseTitle": "五藏生成",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-zang-sheng-cheng/zh",
    "introduction": "《素问》五藏生成，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五藏生成》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五藏生成》全文。",
    "translation": "本篇围绕“五藏生成”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五藏生成》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五藏生成",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "zangfu",
      "wuxing"
    ]
  },
  {
    "id": "suwen-wu-zang-bie-lun",
    "book": "suwen",
    "chapterNumber": 11,
    "title": "五藏别论篇第11",
    "baseTitle": "五藏别论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-zang-bie-lun/zh",
    "introduction": "《素问》五藏别论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五藏别论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五藏别论》全文。",
    "translation": "本篇围绕“五藏别论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五藏别论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五藏别",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "zangfu",
      "wuxing"
    ]
  },
  {
    "id": "suwen-yi-fa-fang-yi-lun",
    "book": "suwen",
    "chapterNumber": 12,
    "title": "异法方宜论篇第12",
    "baseTitle": "异法方宜论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yi-fa-fang-yi-lun/zh",
    "introduction": "《素问》异法方宜论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《异法方宜论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《异法方宜论》全文。",
    "translation": "本篇围绕“异法方宜论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《异法方宜论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "异法方宜",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-yi-jing-bian-qi-lun",
    "book": "suwen",
    "chapterNumber": 13,
    "title": "移精变气论篇第13",
    "baseTitle": "移精变气论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yi-jing-bian-qi-lun/zh",
    "introduction": "《素问》移精变气论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《移精变气论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《移精变气论》全文。",
    "translation": "本篇围绕“移精变气论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《移精变气论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "移精变气",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-tang-ye-lao-li-lun",
    "book": "suwen",
    "chapterNumber": 14,
    "title": "汤液醪醴论篇第14",
    "baseTitle": "汤液醪醴论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/tang-ye-lao-li-lun/zh",
    "introduction": "《素问》汤液醪醴论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《汤液醪醴论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《汤液醪醴论》全文。",
    "translation": "本篇围绕“汤液醪醴论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《汤液醪醴论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "汤液醪醴",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-yu-ban-lun-yao",
    "book": "suwen",
    "chapterNumber": 15,
    "title": "玉版论要篇第15",
    "baseTitle": "玉版论要",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yu-ban-lun-yao/zh",
    "introduction": "《素问》玉版论要，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《玉版论要》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《玉版论要》全文。",
    "translation": "本篇围绕“玉版论要”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《玉版论要》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "玉版要",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-zhen-yao-jing-zhong-lun",
    "book": "suwen",
    "chapterNumber": 16,
    "title": "诊要经终论篇第16",
    "baseTitle": "诊要经终论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zhen-yao-jing-zhong-lun/zh",
    "introduction": "《素问》诊要经终论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《诊要经终论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《诊要经终论》全文。",
    "translation": "本篇围绕“诊要经终论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《诊要经终论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "诊要经终",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-mai-yao-jing-wei-lun",
    "book": "suwen",
    "chapterNumber": 17,
    "title": "脉要精微论篇第17",
    "baseTitle": "脉要精微论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/mai-yao-jing-wei-lun/zh",
    "introduction": "《素问》脉要精微论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《脉要精微论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《脉要精微论》全文。",
    "translation": "本篇围绕“脉要精微论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《脉要精微论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "脉要精微",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-ping-ren-qi-xiang-lun",
    "book": "suwen",
    "chapterNumber": 18,
    "title": "平人气象论篇第18",
    "baseTitle": "平人气象论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ping-ren-qi-xiang-lun/zh",
    "introduction": "《素问》平人气象论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《平人气象论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《平人气象论》全文。",
    "translation": "本篇围绕“平人气象论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《平人气象论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "平人气象",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-yu-ji-zhen-zang-lun",
    "book": "suwen",
    "chapterNumber": 19,
    "title": "玉机真藏论篇第19",
    "baseTitle": "玉机真藏论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yu-ji-zhen-zang-lun/zh",
    "introduction": "《素问》玉机真藏论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《玉机真藏论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《玉机真藏论》全文。",
    "translation": "本篇围绕“玉机真藏论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《玉机真藏论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "玉机真藏",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "zangfu",
      "wuxing"
    ]
  },
  {
    "id": "suwen-san-bu-jiu-hou-lun",
    "book": "suwen",
    "chapterNumber": 20,
    "title": "三部九候论篇第20",
    "baseTitle": "三部九候论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/san-bu-jiu-hou-lun/zh",
    "introduction": "《素问》三部九候论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《三部九候论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《三部九候论》全文。",
    "translation": "本篇围绕“三部九候论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《三部九候论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "三部九候",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-jing-mai-bie-lun",
    "book": "suwen",
    "chapterNumber": 21,
    "title": "经脉别论篇第21",
    "baseTitle": "经脉别论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jing-mai-bie-lun/zh",
    "introduction": "《素问》经脉别论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经脉别论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经脉别论》全文。",
    "translation": "本篇围绕“经脉别论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《经脉别论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "经脉别",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-zang-qi-fa-shi-lun",
    "book": "suwen",
    "chapterNumber": 22,
    "title": "藏气法时论篇第22",
    "baseTitle": "藏气法时论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zang-qi-fa-shi-lun/zh",
    "introduction": "《素问》藏气法时论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "肝主春，足厥阴少阳主治，其日甲乙。心主夏，手少阴太阳主治，其日丙丁。脾主长夏，足太阴阳明主治，其日戊己。肺主秋，手太阴阳明主治，其日庚辛。肾主冬，足少阴太阳主治，其日壬癸。",
    "punctuatedText": "肝主春，足厥阴少阳主治，其日甲乙。心主夏，手少阴太阳主治，其日丙丁。脾主长夏，足太阴阳明主治，其日戊己。肺主秋，手太阴阳明主治，其日庚辛。肾主冬，足少阴太阳主治，其日壬癸。",
    "translation": "五脏与四时、五行、经脉存在对应关系，人的身体被放在时间系统中理解。",
    "interpretation": "这一篇体现了“时间中的身体”：脏腑不是孤立器官，而与季节、五行、经络构成关系网络。",
    "keywords": [
      "五脏",
      "五行",
      "四时",
      "脏气",
      "法时"
    ],
    "famousQuotes": [
      "肝主春",
      "心主夏",
      "肺主秋",
      "肾主冬"
    ],
    "relatedConcepts": [
      "zangfu",
      "wuxing"
    ]
  },
  {
    "id": "suwen-xuan-ming-wu-qi",
    "book": "suwen",
    "chapterNumber": 23,
    "title": "宣明五气篇第23",
    "baseTitle": "宣明五气",
    "sourceUrl": "https://ctext.org/huangdi-neijing/xuan-ming-wu-qi/zh",
    "introduction": "《素问》宣明五气，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《宣明五气》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《宣明五气》全文。",
    "translation": "本篇围绕“宣明五气”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《宣明五气》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "宣明五气",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-xue-qi-xing-zhi",
    "book": "suwen",
    "chapterNumber": 24,
    "title": "血气形志篇第24",
    "baseTitle": "血气形志",
    "sourceUrl": "https://ctext.org/huangdi-neijing/xue-qi-xing-zhi/zh",
    "introduction": "《素问》血气形志，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《血气形志》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《血气形志》全文。",
    "translation": "本篇围绕“血气形志”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《血气形志》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "血气形志",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-bao-ming-quan-xing-lun",
    "book": "suwen",
    "chapterNumber": 25,
    "title": "宝命全形论篇第25",
    "baseTitle": "宝命全形论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/bao-ming-quan-xing-lun/zh",
    "introduction": "《素问》宝命全形论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《宝命全形论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《宝命全形论》全文。",
    "translation": "本篇围绕“宝命全形论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《宝命全形论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "宝命全形",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-ba-zheng-shen-ming-lun",
    "book": "suwen",
    "chapterNumber": 26,
    "title": "八正神明论篇第26",
    "baseTitle": "八正神明论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ba-zheng-shen-ming-lun/zh",
    "introduction": "《素问》八正神明论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《八正神明论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《八正神明论》全文。",
    "translation": "本篇围绕“八正神明论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《八正神明论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "八正神明",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-li-he-zhen-xie",
    "book": "suwen",
    "chapterNumber": 27,
    "title": "离合真邪篇第27",
    "baseTitle": "离合真邪",
    "sourceUrl": "https://ctext.org/huangdi-neijing/li-he-zhen-xie/zh",
    "introduction": "《素问》离合真邪，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《离合真邪》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《离合真邪》全文。",
    "translation": "本篇围绕“离合真邪”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《离合真邪》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "离合真邪",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-tong-ping-xu-shi-lun",
    "book": "suwen",
    "chapterNumber": 28,
    "title": "通评虚实论篇第28",
    "baseTitle": "通评虚实论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/tong-ping-xu-shi-lun/zh",
    "introduction": "《素问》通评虚实论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《通评虚实论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《通评虚实论》全文。",
    "translation": "本篇围绕“通评虚实论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《通评虚实论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "通评虚实",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-tai-yin-yang-ming-lun",
    "book": "suwen",
    "chapterNumber": 29,
    "title": "太阴阳明论篇第29",
    "baseTitle": "太阴阳明论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/tai-yin-yang-ming-lun/zh",
    "introduction": "《素问》太阴阳明论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《太阴阳明论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《太阴阳明论》全文。",
    "translation": "本篇围绕“太阴阳明论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《太阴阳明论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "太阴阳明",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-yang-ming-mai-jie",
    "book": "suwen",
    "chapterNumber": 30,
    "title": "阳明脉解篇第30",
    "baseTitle": "阳明脉解",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yang-ming-mai-jie/zh",
    "introduction": "《素问》阳明脉解，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阳明脉解》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阳明脉解》全文。",
    "translation": "本篇围绕“阳明脉解”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《阳明脉解》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "阳明脉解",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-re-lun",
    "book": "suwen",
    "chapterNumber": 31,
    "title": "热论篇第31",
    "baseTitle": "热论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/re-lun/zh",
    "introduction": "《素问》热论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《热论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《热论》全文。",
    "translation": "本篇围绕“热论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《热论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "热",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-ci-re",
    "book": "suwen",
    "chapterNumber": 32,
    "title": "刺热篇第32",
    "baseTitle": "刺热",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-re/zh",
    "introduction": "《素问》刺热，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺热》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺热》全文。",
    "translation": "本篇围绕“刺热”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺热》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺热",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi",
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-ping-re-bing-lun",
    "book": "suwen",
    "chapterNumber": 33,
    "title": "评热病论篇第33",
    "baseTitle": "评热病论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ping-re-bing-lun/zh",
    "introduction": "《素问》评热病论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《评热病论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《评热病论》全文。",
    "translation": "本篇围绕“评热病论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《评热病论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "评热病",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-ni-tiao-lun",
    "book": "suwen",
    "chapterNumber": 34,
    "title": "逆调论篇第34",
    "baseTitle": "逆调论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ni-tiao-lun/zh",
    "introduction": "《素问》逆调论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《逆调论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《逆调论》全文。",
    "translation": "本篇围绕“逆调论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《逆调论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "逆调",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-nue-lun",
    "book": "suwen",
    "chapterNumber": 35,
    "title": "疟论篇第35",
    "baseTitle": "疟论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/nue-lun/zh",
    "introduction": "《素问》疟论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《疟论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《疟论》全文。",
    "translation": "本篇围绕“疟论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《疟论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "疟",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-ci-nue",
    "book": "suwen",
    "chapterNumber": 36,
    "title": "刺疟篇第36",
    "baseTitle": "刺疟",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-nue/zh",
    "introduction": "《素问》刺疟，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺疟》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺疟》全文。",
    "translation": "本篇围绕“刺疟”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺疟》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺疟",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi",
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-qi-jue-lun",
    "book": "suwen",
    "chapterNumber": 37,
    "title": "气厥论篇第37",
    "baseTitle": "气厥论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/qi-jue-lun/zh",
    "introduction": "《素问》气厥论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《气厥论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《气厥论》全文。",
    "translation": "本篇围绕“气厥论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《气厥论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "气厥",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-ke-lun",
    "book": "suwen",
    "chapterNumber": 38,
    "title": "欬论篇第38",
    "baseTitle": "欬论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ke-lun/zh",
    "introduction": "《素问》欬论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《欬论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《欬论》全文。",
    "translation": "本篇围绕“欬论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《欬论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "欬",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-ju-tong-lun",
    "book": "suwen",
    "chapterNumber": 39,
    "title": "举痛论篇第39",
    "baseTitle": "举痛论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ju-tong-lun/zh",
    "introduction": "《素问》举痛论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《举痛论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《举痛论》全文。",
    "translation": "本篇围绕“举痛论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《举痛论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "举痛",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-fu-zhong-lun",
    "book": "suwen",
    "chapterNumber": 40,
    "title": "腹中论篇第40",
    "baseTitle": "腹中论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/fu-zhong-lun/zh",
    "introduction": "《素问》腹中论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《腹中论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《腹中论》全文。",
    "translation": "本篇围绕“腹中论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《腹中论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "腹中",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-ci-yao-tong",
    "book": "suwen",
    "chapterNumber": 41,
    "title": "刺腰痛篇第41",
    "baseTitle": "刺腰痛",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-yao-tong/zh",
    "introduction": "《素问》刺腰痛，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺腰痛》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺腰痛》全文。",
    "translation": "本篇围绕“刺腰痛”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺腰痛》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺腰痛",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi",
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-feng-lun",
    "book": "suwen",
    "chapterNumber": 42,
    "title": "风论篇第42",
    "baseTitle": "风论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/feng-lun/zh",
    "introduction": "《素问》风论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《风论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《风论》全文。",
    "translation": "本篇围绕“风论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《风论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "风",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-bi-lun",
    "book": "suwen",
    "chapterNumber": 43,
    "title": "痹论篇第43",
    "baseTitle": "痹论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/bi-lun/zh",
    "introduction": "《素问》痹论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《痹论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《痹论》全文。",
    "translation": "本篇围绕“痹论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《痹论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "痹",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-wei-lun",
    "book": "suwen",
    "chapterNumber": 44,
    "title": "痿论篇第44",
    "baseTitle": "痿论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wei-lun/zh",
    "introduction": "《素问》痿论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《痿论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《痿论》全文。",
    "translation": "本篇围绕“痿论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《痿论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "痿",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-jue-lun",
    "book": "suwen",
    "chapterNumber": 45,
    "title": "厥论篇第45",
    "baseTitle": "厥论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jue-lun/zh",
    "introduction": "《素问》厥论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《厥论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《厥论》全文。",
    "translation": "本篇围绕“厥论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《厥论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "厥",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-bing-neng-lun",
    "book": "suwen",
    "chapterNumber": 46,
    "title": "病能论篇第46",
    "baseTitle": "病能论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/bing-neng-lun/zh",
    "introduction": "《素问》病能论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《病能论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《病能论》全文。",
    "translation": "本篇围绕“病能论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《病能论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "病能",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-qi-bing-lun",
    "book": "suwen",
    "chapterNumber": 47,
    "title": "奇病论篇第47",
    "baseTitle": "奇病论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/qi-bing-lun/zh",
    "introduction": "《素问》奇病论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《奇病论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《奇病论》全文。",
    "translation": "本篇围绕“奇病论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《奇病论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "奇病",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-da-qi-lun",
    "book": "suwen",
    "chapterNumber": 48,
    "title": "大奇论篇第48",
    "baseTitle": "大奇论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/da-qi-lun/zh",
    "introduction": "《素问》大奇论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《大奇论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《大奇论》全文。",
    "translation": "本篇围绕“大奇论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《大奇论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "大奇",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-mai-jie",
    "book": "suwen",
    "chapterNumber": 49,
    "title": "脉解篇第49",
    "baseTitle": "脉解",
    "sourceUrl": "https://ctext.org/huangdi-neijing/mai-jie/zh",
    "introduction": "《素问》脉解，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《脉解》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《脉解》全文。",
    "translation": "本篇围绕“脉解”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《脉解》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "脉解",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-ci-yao-lun",
    "book": "suwen",
    "chapterNumber": 50,
    "title": "刺要论篇第50",
    "baseTitle": "刺要论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-yao-lun/zh",
    "introduction": "《素问》刺要论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺要论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺要论》全文。",
    "translation": "本篇围绕“刺要论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺要论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺要",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-ci-qi-lun",
    "book": "suwen",
    "chapterNumber": 51,
    "title": "刺齐论篇第51",
    "baseTitle": "刺齐论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-qi-lun/zh",
    "introduction": "《素问》刺齐论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺齐论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺齐论》全文。",
    "translation": "本篇围绕“刺齐论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺齐论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺齐",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-ci-jin-lun",
    "book": "suwen",
    "chapterNumber": 52,
    "title": "刺禁论篇第52",
    "baseTitle": "刺禁论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-jin-lun/zh",
    "introduction": "《素问》刺禁论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺禁论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺禁论》全文。",
    "translation": "本篇围绕“刺禁论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺禁论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺禁",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-ci-zhi-lun",
    "book": "suwen",
    "chapterNumber": 53,
    "title": "刺志论篇第53",
    "baseTitle": "刺志论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-zhi-lun/zh",
    "introduction": "《素问》刺志论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺志论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺志论》全文。",
    "translation": "本篇围绕“刺志论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺志论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺志",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-zhen-jie",
    "book": "suwen",
    "chapterNumber": 54,
    "title": "针解篇第54",
    "baseTitle": "针解",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zhen-jie/zh",
    "introduction": "《素问》针解，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《针解》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《针解》全文。",
    "translation": "本篇围绕“针解”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《针解》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "针解",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-chang-ci-jie-lun",
    "book": "suwen",
    "chapterNumber": 55,
    "title": "长刺节论篇第55",
    "baseTitle": "长刺节论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/chang-ci-jie-lun/zh",
    "introduction": "《素问》长刺节论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《长刺节论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《长刺节论》全文。",
    "translation": "本篇围绕“长刺节论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《长刺节论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "长刺节",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-pi-bu-lun",
    "book": "suwen",
    "chapterNumber": 56,
    "title": "皮部论篇第56",
    "baseTitle": "皮部论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/pi-bu-lun/zh",
    "introduction": "《素问》皮部论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《皮部论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《皮部论》全文。",
    "translation": "本篇围绕“皮部论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《皮部论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "皮部",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-jing-luo-lun",
    "book": "suwen",
    "chapterNumber": 57,
    "title": "经络论篇第57",
    "baseTitle": "经络论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jing-luo-lun/zh",
    "introduction": "《素问》经络论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经络论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经络论》全文。",
    "translation": "本篇围绕“经络论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《经络论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "经络",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-qi-xue-lun",
    "book": "suwen",
    "chapterNumber": 58,
    "title": "气穴论篇第58",
    "baseTitle": "气穴论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/qi-xue-lun/zh",
    "introduction": "《素问》气穴论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《气穴论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《气穴论》全文。",
    "translation": "本篇围绕“气穴论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《气穴论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "气穴",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-qi-fu-lun",
    "book": "suwen",
    "chapterNumber": 59,
    "title": "气府论篇第59",
    "baseTitle": "气府论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/qi-fu-lun/zh",
    "introduction": "《素问》气府论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《气府论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《气府论》全文。",
    "translation": "本篇围绕“气府论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《气府论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "气府",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "zangfu",
      "wuxing"
    ]
  },
  {
    "id": "suwen-gu-kong-lun",
    "book": "suwen",
    "chapterNumber": 60,
    "title": "骨空论篇第60",
    "baseTitle": "骨空论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/gu-kong-lun/zh",
    "introduction": "《素问》骨空论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《骨空论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《骨空论》全文。",
    "translation": "本篇围绕“骨空论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《骨空论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "骨空",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-shui-re-xue-lun",
    "book": "suwen",
    "chapterNumber": 61,
    "title": "水热穴论篇第61",
    "baseTitle": "水热穴论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shui-re-xue-lun/zh",
    "introduction": "《素问》水热穴论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《水热穴论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《水热穴论》全文。",
    "translation": "本篇围绕“水热穴论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《水热穴论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "水热穴",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi",
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-tiao-jing-lun",
    "book": "suwen",
    "chapterNumber": 62,
    "title": "调经论篇第62",
    "baseTitle": "调经论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/tiao-jing-lun/zh",
    "introduction": "《素问》调经论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《调经论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《调经论》全文。",
    "translation": "本篇围绕“调经论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《调经论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "调经",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-miu-ci-lun",
    "book": "suwen",
    "chapterNumber": 63,
    "title": "缪刺论篇第63",
    "baseTitle": "缪刺论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/miu-ci-lun/zh",
    "introduction": "《素问》缪刺论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《缪刺论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《缪刺论》全文。",
    "translation": "本篇围绕“缪刺论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《缪刺论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "缪刺",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-si-shi-ci-ni-cong-lun",
    "book": "suwen",
    "chapterNumber": 64,
    "title": "四时刺逆从论篇第64",
    "baseTitle": "四时刺逆从论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/si-shi-ci-ni-cong-lun/zh",
    "introduction": "《素问》四时刺逆从论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《四时刺逆从论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《四时刺逆从论》全文。",
    "translation": "本篇围绕“四时刺逆从论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《四时刺逆从论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "四时刺逆从",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing",
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-biao-ben-bing-chuan-lun",
    "book": "suwen",
    "chapterNumber": 65,
    "title": "标本病传论篇第65",
    "baseTitle": "标本病传论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/biao-ben-bing-chuan-lun/zh",
    "introduction": "《素问》标本病传论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《标本病传论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《标本病传论》全文。",
    "translation": "本篇围绕“标本病传论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《标本病传论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "标本病传",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-tian-yuan-ji-da-lun",
    "book": "suwen",
    "chapterNumber": 66,
    "title": "天元纪大论篇第66",
    "baseTitle": "天元纪大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/tian-yuan-ji-da-lun/zh",
    "introduction": "《素问》天元纪大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《天元纪大论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《天元纪大论》全文。",
    "translation": "本篇围绕“天元纪大论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《天元纪大论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "天元纪大",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-wu-yun-xing-da-lun",
    "book": "suwen",
    "chapterNumber": 67,
    "title": "五运行大论篇第67",
    "baseTitle": "五运行大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-yun-xing-da-lun/zh",
    "introduction": "《素问》五运行大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五运行大论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五运行大论》全文。",
    "translation": "本篇围绕“五运行大论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五运行大论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五运行大",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-liu-wei-zhi-da-lun",
    "book": "suwen",
    "chapterNumber": 68,
    "title": "六微旨大论篇第68",
    "baseTitle": "六微旨大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/liu-wei-zhi-da-lun/zh",
    "introduction": "《素问》六微旨大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《六微旨大论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《六微旨大论》全文。",
    "translation": "本篇围绕“六微旨大论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《六微旨大论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "六微旨大",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-qi-jiao-bian-da-lun",
    "book": "suwen",
    "chapterNumber": 69,
    "title": "气交变大论篇第69",
    "baseTitle": "气交变大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/qi-jiao-bian-da-lun/zh",
    "introduction": "《素问》气交变大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《气交变大论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《气交变大论》全文。",
    "translation": "本篇围绕“气交变大论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《气交变大论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "气交变大",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-wu-chang-zheng-da-lun",
    "book": "suwen",
    "chapterNumber": 70,
    "title": "五常政大论篇第70",
    "baseTitle": "五常政大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-chang-zheng-da-lun/zh",
    "introduction": "《素问》五常政大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五常政大论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五常政大论》全文。",
    "translation": "本篇围绕“五常政大论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五常政大论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五常政大",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-liu-yuan-zheng-ji-da-lun",
    "book": "suwen",
    "chapterNumber": 71,
    "title": "六元正纪大论篇第71",
    "baseTitle": "六元正纪大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/liu-yuan-zheng-ji-da-lun/zh",
    "introduction": "《素问》六元正纪大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《六元正纪大论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《六元正纪大论》全文。",
    "translation": "本篇围绕“六元正纪大论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《六元正纪大论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "六元正纪大",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-ci-fa-lun",
    "book": "suwen",
    "chapterNumber": 72,
    "title": "刺法论篇第72",
    "baseTitle": "刺法论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-fa-lun/zh",
    "introduction": "《素问》刺法论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺法论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺法论》全文。",
    "translation": "本篇围绕“刺法论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺法论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺法",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "suwen-ben-bing-lun",
    "book": "suwen",
    "chapterNumber": 73,
    "title": "本病论篇第73",
    "baseTitle": "本病论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ben-bing-lun/zh",
    "introduction": "《素问》本病论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《本病论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《本病论》全文。",
    "translation": "本篇围绕“本病论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《本病论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "本病",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "suwen-zhi-zhen-yao-da-lun",
    "book": "suwen",
    "chapterNumber": 74,
    "title": "至真要大论篇第74",
    "baseTitle": "至真要大论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zhi-zhen-yao-da-lun/zh",
    "introduction": "《素问》至真要大论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《至真要大论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《至真要大论》全文。",
    "translation": "本篇围绕“至真要大论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《至真要大论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "至真要大",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-zhu-zhi-jiao-lun",
    "book": "suwen",
    "chapterNumber": 75,
    "title": "著至教论篇第75",
    "baseTitle": "著至教论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zhu-zhi-jiao-lun/zh",
    "introduction": "《素问》著至教论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《著至教论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《著至教论》全文。",
    "translation": "本篇围绕“著至教论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《著至教论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "著至教",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-shi-cong-rong-lun",
    "book": "suwen",
    "chapterNumber": 76,
    "title": "示从容论篇第76",
    "baseTitle": "示从容论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shi-cong-rong-lun/zh",
    "introduction": "《素问》示从容论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《示从容论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《示从容论》全文。",
    "translation": "本篇围绕“示从容论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《示从容论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "示从容",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-shu-wu-guo-lun",
    "book": "suwen",
    "chapterNumber": 77,
    "title": "疏五过论篇第77",
    "baseTitle": "疏五过论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shu-wu-guo-lun/zh",
    "introduction": "《素问》疏五过论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《疏五过论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《疏五过论》全文。",
    "translation": "本篇围绕“疏五过论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《疏五过论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "疏五过",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-zheng-si-shi-lun",
    "book": "suwen",
    "chapterNumber": 78,
    "title": "徵四失论篇第78",
    "baseTitle": "徵四失论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zheng-si-shi-lun/zh",
    "introduction": "《素问》徵四失论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《徵四失论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《徵四失论》全文。",
    "translation": "本篇围绕“徵四失论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《徵四失论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "徵四失",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-yin-yang-lei-lun",
    "book": "suwen",
    "chapterNumber": 79,
    "title": "阴阳类论篇第79",
    "baseTitle": "阴阳类论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yin-yang-lei-lun/zh",
    "introduction": "《素问》阴阳类论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳类论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳类论》全文。",
    "translation": "本篇围绕“阴阳类论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《阴阳类论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "阴阳类",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "suwen-fang-sheng-shuai-lun",
    "book": "suwen",
    "chapterNumber": 80,
    "title": "方盛衰论篇第80",
    "baseTitle": "方盛衰论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/fang-sheng-shuai-lun/zh",
    "introduction": "《素问》方盛衰论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《方盛衰论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《方盛衰论》全文。",
    "translation": "本篇围绕“方盛衰论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《方盛衰论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "方盛衰",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "suwen-jie-jing-wei-lun",
    "book": "suwen",
    "chapterNumber": 81,
    "title": "解精微论篇第81",
    "baseTitle": "解精微论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jie-jing-wei-lun/zh",
    "introduction": "《素问》解精微论，属于《黄帝内经》理论体系中的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《解精微论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《解精微论》全文。",
    "translation": "本篇围绕“解精微论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《解精微论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "解精微",
      "黄帝内经",
      "素问"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "tianren"
    ]
  },
  {
    "id": "lingshu-jiu-zhen-shi-er-yuan",
    "book": "lingshu",
    "chapterNumber": 1,
    "title": "九针十二原第1",
    "baseTitle": "九针十二原",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jiu-zhen-shi-er-yuan/zh",
    "introduction": "《灵枢》九针十二原，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "黄帝问于岐伯曰：余子万民，养百姓而收其租税；余哀其不给而属有疾病。余欲勿使被毒药，无用砭石，欲以微针通其经脉，调其血气，营其逆顺出入之会。",
    "punctuatedText": "黄帝问于岐伯曰：余子万民，养百姓而收其租税；余哀其不给而属有疾病。余欲勿使被毒药，无用砭石，欲以微针通其经脉，调其血气，营其逆顺出入之会。",
    "translation": "本篇讲九针、十二原与针法大义，强调通经脉、调血气、明逆顺。",
    "interpretation": "这是《灵枢》的开端，奠定针经的技术方向，也表现出《内经》对经脉、血气运行的重视。",
    "keywords": [
      "九针",
      "十二原",
      "针法",
      "经脉",
      "血气"
    ],
    "famousQuotes": [
      "小针之要，易陈而难入"
    ],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-ben-shu",
    "book": "lingshu",
    "chapterNumber": 2,
    "title": "本输第2",
    "baseTitle": "本输",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ben-shu/zh",
    "introduction": "《灵枢》本输，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《本输》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《本输》全文。",
    "translation": "本篇围绕“本输”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《本输》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "本输",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-xiao-zhen-jie",
    "book": "lingshu",
    "chapterNumber": 3,
    "title": "小针解第3",
    "baseTitle": "小针解",
    "sourceUrl": "https://ctext.org/huangdi-neijing/xiao-zhen-jie/zh",
    "introduction": "《灵枢》小针解，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《小针解》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《小针解》全文。",
    "translation": "本篇围绕“小针解”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《小针解》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "小针解",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-xie-qi-zang-fu-bing-xing",
    "book": "lingshu",
    "chapterNumber": 4,
    "title": "邪气藏府病形第4",
    "baseTitle": "邪气藏府病形",
    "sourceUrl": "https://ctext.org/huangdi-neijing/xie-qi-zang-fu-bing-xing/zh",
    "introduction": "《灵枢》邪气藏府病形，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《邪气藏府病形》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《邪气藏府病形》全文。",
    "translation": "本篇围绕“邪气藏府病形”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《邪气藏府病形》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "邪气藏府病形",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "zangfu",
      "wuxing",
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-gen-jie",
    "book": "lingshu",
    "chapterNumber": 5,
    "title": "根结第5",
    "baseTitle": "根结",
    "sourceUrl": "https://ctext.org/huangdi-neijing/gen-jie/zh",
    "introduction": "《灵枢》根结，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《根结》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《根结》全文。",
    "translation": "本篇围绕“根结”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《根结》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "根结",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-shou-yao-gang-rou",
    "book": "lingshu",
    "chapterNumber": 6,
    "title": "寿夭刚柔第6",
    "baseTitle": "寿夭刚柔",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shou-yao-gang-rou/zh",
    "introduction": "《灵枢》寿夭刚柔，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《寿夭刚柔》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《寿夭刚柔》全文。",
    "translation": "本篇围绕“寿夭刚柔”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《寿夭刚柔》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "寿夭刚柔",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-guan-zhen",
    "book": "lingshu",
    "chapterNumber": 7,
    "title": "官针第7",
    "baseTitle": "官针",
    "sourceUrl": "https://ctext.org/huangdi-neijing/guan-zhen/zh",
    "introduction": "《灵枢》官针，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《官针》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《官针》全文。",
    "translation": "本篇围绕“官针”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《官针》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "官针",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-ben-shen",
    "book": "lingshu",
    "chapterNumber": 8,
    "title": "本神第8",
    "baseTitle": "本神",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ben-shen/zh",
    "introduction": "《灵枢》本神，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《本神》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《本神》全文。",
    "translation": "本篇围绕“本神”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《本神》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "本神",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-zhong-shi",
    "book": "lingshu",
    "chapterNumber": 9,
    "title": "终始第9",
    "baseTitle": "终始",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zhong-shi/zh",
    "introduction": "《灵枢》终始，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《终始》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《终始》全文。",
    "translation": "本篇围绕“终始”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《终始》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "终始",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-jing-mai",
    "book": "lingshu",
    "chapterNumber": 10,
    "title": "经脉第10",
    "baseTitle": "经脉",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jing-mai/zh",
    "introduction": "《灵枢》经脉，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "雷公曰：愿卒闻经脉之始生。黄帝曰：经脉者，所以能决死生，处百病，调虚实，不可不通。肺手太阴之脉，起于中焦，下络大肠，还循胃口，上膈属肺。",
    "punctuatedText": "雷公曰：愿卒闻经脉之始生。黄帝曰：经脉者，所以能决死生，处百病，调虚实，不可不通。肺手太阴之脉，起于中焦，下络大肠，还循胃口，上膈属肺。",
    "translation": "本篇系统讲十二经脉循行、病候与经络意义，是经络图谱的主要原典依据。",
    "interpretation": "《经脉》把脏腑、体表、气血和病候连接起来，是网站经络模块最重要的文本基础。",
    "keywords": [
      "经脉",
      "十二经",
      "循行",
      "虚实",
      "病候"
    ],
    "famousQuotes": [
      "经脉者，所以能决死生，处百病，调虚实，不可不通"
    ],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-jing-bie",
    "book": "lingshu",
    "chapterNumber": 11,
    "title": "经别第11",
    "baseTitle": "经别",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jing-bie/zh",
    "introduction": "《灵枢》经别，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经别》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经别》全文。",
    "translation": "本篇围绕“经别”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《经别》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "经别",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-jing-shui",
    "book": "lingshu",
    "chapterNumber": 12,
    "title": "经水第12",
    "baseTitle": "经水",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jing-shui/zh",
    "introduction": "《灵枢》经水，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经水》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经水》全文。",
    "translation": "本篇围绕“经水”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《经水》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "经水",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-jing-jin",
    "book": "lingshu",
    "chapterNumber": 13,
    "title": "经筋第13",
    "baseTitle": "经筋",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jing-jin/zh",
    "introduction": "《灵枢》经筋，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经筋》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《经筋》全文。",
    "translation": "本篇围绕“经筋”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《经筋》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "经筋",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-gu-du",
    "book": "lingshu",
    "chapterNumber": 14,
    "title": "骨度第14",
    "baseTitle": "骨度",
    "sourceUrl": "https://ctext.org/huangdi-neijing/gu-du/zh",
    "introduction": "《灵枢》骨度，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《骨度》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《骨度》全文。",
    "translation": "本篇围绕“骨度”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《骨度》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "骨度",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wu-shi-ying",
    "book": "lingshu",
    "chapterNumber": 15,
    "title": "五十营第15",
    "baseTitle": "五十营",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-shi-ying/zh",
    "introduction": "《灵枢》五十营，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五十营》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五十营》全文。",
    "translation": "本篇围绕“五十营”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五十营》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五十营",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-ying-qi",
    "book": "lingshu",
    "chapterNumber": 16,
    "title": "营气第16",
    "baseTitle": "营气",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ying-qi/zh",
    "introduction": "《灵枢》营气，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《营气》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《营气》全文。",
    "translation": "本篇围绕“营气”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《营气》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "营气",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-mai-du",
    "book": "lingshu",
    "chapterNumber": 17,
    "title": "脉度第17",
    "baseTitle": "脉度",
    "sourceUrl": "https://ctext.org/huangdi-neijing/mai-du/zh",
    "introduction": "《灵枢》脉度，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《脉度》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《脉度》全文。",
    "translation": "本篇围绕“脉度”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《脉度》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "脉度",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-ying-wei-sheng-hui",
    "book": "lingshu",
    "chapterNumber": 18,
    "title": "营卫生会第18",
    "baseTitle": "营卫生会",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ying-wei-sheng-hui/zh",
    "introduction": "《灵枢》营卫生会，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《营卫生会》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《营卫生会》全文。",
    "translation": "本篇围绕“营卫生会”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《营卫生会》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "营卫生会",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-si-shi-qi",
    "book": "lingshu",
    "chapterNumber": 19,
    "title": "四时气第19",
    "baseTitle": "四时气",
    "sourceUrl": "https://ctext.org/huangdi-neijing/si-shi-qi/zh",
    "introduction": "《灵枢》四时气，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《四时气》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《四时气》全文。",
    "translation": "本篇围绕“四时气”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《四时气》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "四时气",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "lingshu-wu-xie",
    "book": "lingshu",
    "chapterNumber": 20,
    "title": "五邪第20",
    "baseTitle": "五邪",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-xie/zh",
    "introduction": "《灵枢》五邪，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五邪》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五邪》全文。",
    "translation": "本篇围绕“五邪”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五邪》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五邪",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-han-re-bing",
    "book": "lingshu",
    "chapterNumber": 21,
    "title": "寒热病第21",
    "baseTitle": "寒热病",
    "sourceUrl": "https://ctext.org/huangdi-neijing/han-re-bing/zh",
    "introduction": "《灵枢》寒热病，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《寒热病》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《寒热病》全文。",
    "translation": "本篇围绕“寒热病”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《寒热病》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "寒热病",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-lai-kuang-bing",
    "book": "lingshu",
    "chapterNumber": 22,
    "title": "癞狂病第22",
    "baseTitle": "癞狂病",
    "sourceUrl": "https://ctext.org/huangdi-neijing/lai-kuang-bing/zh",
    "introduction": "《灵枢》癞狂病，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《癞狂病》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《癞狂病》全文。",
    "translation": "本篇围绕“癞狂病”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《癞狂病》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "癞狂病",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-re-bing",
    "book": "lingshu",
    "chapterNumber": 23,
    "title": "热病第23",
    "baseTitle": "热病",
    "sourceUrl": "https://ctext.org/huangdi-neijing/re-bing/zh",
    "introduction": "《灵枢》热病，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《热病》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《热病》全文。",
    "translation": "本篇围绕“热病”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《热病》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "热病",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-jue-bing",
    "book": "lingshu",
    "chapterNumber": 24,
    "title": "厥病第24",
    "baseTitle": "厥病",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jue-bing/zh",
    "introduction": "《灵枢》厥病，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《厥病》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《厥病》全文。",
    "translation": "本篇围绕“厥病”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《厥病》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "厥病",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-bing-ben",
    "book": "lingshu",
    "chapterNumber": 25,
    "title": "病本第25",
    "baseTitle": "病本",
    "sourceUrl": "https://ctext.org/huangdi-neijing/bing-ben/zh",
    "introduction": "《灵枢》病本，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《病本》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《病本》全文。",
    "translation": "本篇围绕“病本”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《病本》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "病本",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-za-bing",
    "book": "lingshu",
    "chapterNumber": 26,
    "title": "杂病第26",
    "baseTitle": "杂病",
    "sourceUrl": "https://ctext.org/huangdi-neijing/za-bing/zh",
    "introduction": "《灵枢》杂病，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《杂病》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《杂病》全文。",
    "translation": "本篇围绕“杂病”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《杂病》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "杂病",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-zhou-bi",
    "book": "lingshu",
    "chapterNumber": 27,
    "title": "周痹第27",
    "baseTitle": "周痹",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zhou-bi/zh",
    "introduction": "《灵枢》周痹，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《周痹》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《周痹》全文。",
    "translation": "本篇围绕“周痹”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《周痹》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "周痹",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-kou-wen",
    "book": "lingshu",
    "chapterNumber": 28,
    "title": "口问第28",
    "baseTitle": "口问",
    "sourceUrl": "https://ctext.org/huangdi-neijing/kou-wen/zh",
    "introduction": "《灵枢》口问，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《口问》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《口问》全文。",
    "translation": "本篇围绕“口问”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《口问》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "口问",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-shi-chuan",
    "book": "lingshu",
    "chapterNumber": 29,
    "title": "师传第29",
    "baseTitle": "师传",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shi-chuan/zh",
    "introduction": "《灵枢》师传，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《师传》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《师传》全文。",
    "translation": "本篇围绕“师传”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《师传》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "师传",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-jue-qi",
    "book": "lingshu",
    "chapterNumber": 30,
    "title": "决气第30",
    "baseTitle": "决气",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jue-qi/zh",
    "introduction": "《灵枢》决气，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《决气》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《决气》全文。",
    "translation": "本篇围绕“决气”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《决气》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "决气",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-chang-wei",
    "book": "lingshu",
    "chapterNumber": 31,
    "title": "肠胃第31",
    "baseTitle": "肠胃",
    "sourceUrl": "https://ctext.org/huangdi-neijing/chang-wei/zh",
    "introduction": "《灵枢》肠胃，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《肠胃》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《肠胃》全文。",
    "translation": "本篇围绕“肠胃”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《肠胃》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "肠胃",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-ping-ren-jue-gu",
    "book": "lingshu",
    "chapterNumber": 32,
    "title": "平人绝谷第32",
    "baseTitle": "平人绝谷",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ping-ren-jue-gu/zh",
    "introduction": "《灵枢》平人绝谷，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《平人绝谷》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《平人绝谷》全文。",
    "translation": "本篇围绕“平人绝谷”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《平人绝谷》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "平人绝谷",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-hai-lun",
    "book": "lingshu",
    "chapterNumber": 33,
    "title": "海论第33",
    "baseTitle": "海论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/hai-lun/zh",
    "introduction": "《灵枢》海论，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《海论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《海论》全文。",
    "translation": "本篇围绕“海论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《海论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "海",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wu-luan",
    "book": "lingshu",
    "chapterNumber": 34,
    "title": "五乱第34",
    "baseTitle": "五乱",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-luan/zh",
    "introduction": "《灵枢》五乱，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五乱》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五乱》全文。",
    "translation": "本篇围绕“五乱”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五乱》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五乱",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-zhang-lun",
    "book": "lingshu",
    "chapterNumber": 35,
    "title": "胀论第35",
    "baseTitle": "胀论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zhang-lun/zh",
    "introduction": "《灵枢》胀论，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《胀论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《胀论》全文。",
    "translation": "本篇围绕“胀论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《胀论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "胀",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wu-long-jin-ye-bie",
    "book": "lingshu",
    "chapterNumber": 36,
    "title": "五癃津液别第36",
    "baseTitle": "五癃津液别",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-long-jin-ye-bie/zh",
    "introduction": "《灵枢》五癃津液别，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五癃津液别》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五癃津液别》全文。",
    "translation": "本篇围绕“五癃津液别”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五癃津液别》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五癃津液别",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wu-yue-wu-shi",
    "book": "lingshu",
    "chapterNumber": 37,
    "title": "五阅五使第37",
    "baseTitle": "五阅五使",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-yue-wu-shi/zh",
    "introduction": "《灵枢》五阅五使，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五阅五使》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五阅五使》全文。",
    "translation": "本篇围绕“五阅五使”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五阅五使》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五阅五使",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-ni-shun-fei-shou",
    "book": "lingshu",
    "chapterNumber": 38,
    "title": "逆顺肥瘦第38",
    "baseTitle": "逆顺肥瘦",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ni-shun-fei-shou/zh",
    "introduction": "《灵枢》逆顺肥瘦，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《逆顺肥瘦》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《逆顺肥瘦》全文。",
    "translation": "本篇围绕“逆顺肥瘦”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《逆顺肥瘦》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "逆顺肥瘦",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-xue-luo-lun",
    "book": "lingshu",
    "chapterNumber": 39,
    "title": "血络论第39",
    "baseTitle": "血络论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/xue-luo-lun/zh",
    "introduction": "《灵枢》血络论，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《血络论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《血络论》全文。",
    "translation": "本篇围绕“血络论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《血络论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "血络",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-yin-yang-qing-zhuo",
    "book": "lingshu",
    "chapterNumber": 40,
    "title": "阴阳清浊第40",
    "baseTitle": "阴阳清浊",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yin-yang-qing-zhuo/zh",
    "introduction": "《灵枢》阴阳清浊，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳清浊》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳清浊》全文。",
    "translation": "本篇围绕“阴阳清浊”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《阴阳清浊》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "阴阳清浊",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "lingshu-yin-yang-xi-ri-yue",
    "book": "lingshu",
    "chapterNumber": 41,
    "title": "阴阳系日月第41",
    "baseTitle": "阴阳系日月",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yin-yang-xi-ri-yue/zh",
    "introduction": "《灵枢》阴阳系日月，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳系日月》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳系日月》全文。",
    "translation": "本篇围绕“阴阳系日月”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《阴阳系日月》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "阴阳系日月",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "lingshu-bing-chuan",
    "book": "lingshu",
    "chapterNumber": 42,
    "title": "病传第42",
    "baseTitle": "病传",
    "sourceUrl": "https://ctext.org/huangdi-neijing/bing-chuan/zh",
    "introduction": "《灵枢》病传，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《病传》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《病传》全文。",
    "translation": "本篇围绕“病传”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《病传》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "病传",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-yin-xie-fa-meng",
    "book": "lingshu",
    "chapterNumber": 43,
    "title": "淫邪发梦第43",
    "baseTitle": "淫邪发梦",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yin-xie-fa-meng/zh",
    "introduction": "《灵枢》淫邪发梦，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《淫邪发梦》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《淫邪发梦》全文。",
    "translation": "本篇围绕“淫邪发梦”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《淫邪发梦》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "淫邪发梦",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-shun-qi-一-ri-分-为-si-shi",
    "book": "lingshu",
    "chapterNumber": 44,
    "title": "顺气一日分为四时第44",
    "baseTitle": "顺气一日分为四时",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shun-qi-yi-ri-fen-wei-si-shi/zh",
    "introduction": "《灵枢》顺气一日分为四时，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《顺气一日分为四时》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《顺气一日分为四时》全文。",
    "translation": "本篇围绕“顺气一日分为四时”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《顺气一日分为四时》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "顺气一日分为四时",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "lingshu-wai-chuai",
    "book": "lingshu",
    "chapterNumber": 45,
    "title": "外揣第45",
    "baseTitle": "外揣",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wai-chuai/zh",
    "introduction": "《灵枢》外揣，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《外揣》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《外揣》全文。",
    "translation": "本篇围绕“外揣”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《外揣》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "外揣",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wu-bian",
    "book": "lingshu",
    "chapterNumber": 46,
    "title": "五变第46",
    "baseTitle": "五变",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-bian/zh",
    "introduction": "《灵枢》五变，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五变》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五变》全文。",
    "translation": "本篇围绕“五变”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五变》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五变",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-ben-zang",
    "book": "lingshu",
    "chapterNumber": 47,
    "title": "本藏第47",
    "baseTitle": "本藏",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ben-zang/zh",
    "introduction": "《灵枢》本藏，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《本藏》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《本藏》全文。",
    "translation": "本篇围绕“本藏”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《本藏》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "本藏",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "zangfu",
      "wuxing"
    ]
  },
  {
    "id": "lingshu-jin-fu",
    "book": "lingshu",
    "chapterNumber": 48,
    "title": "禁服第48",
    "baseTitle": "禁服",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jin-fu/zh",
    "introduction": "《灵枢》禁服，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《禁服》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《禁服》全文。",
    "translation": "本篇围绕“禁服”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《禁服》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "禁服",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wu-se",
    "book": "lingshu",
    "chapterNumber": 49,
    "title": "五色第49",
    "baseTitle": "五色",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-se/zh",
    "introduction": "《灵枢》五色，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五色》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五色》全文。",
    "translation": "本篇围绕“五色”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五色》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五色",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-lun-yong",
    "book": "lingshu",
    "chapterNumber": 50,
    "title": "论勇第50",
    "baseTitle": "论勇",
    "sourceUrl": "https://ctext.org/huangdi-neijing/lun-yong/zh",
    "introduction": "《灵枢》论勇，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《论勇》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《论勇》全文。",
    "translation": "本篇围绕“论勇”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《论勇》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "勇",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-bei-shu",
    "book": "lingshu",
    "chapterNumber": 51,
    "title": "背腧第51",
    "baseTitle": "背腧",
    "sourceUrl": "https://ctext.org/huangdi-neijing/bei-shu/zh",
    "introduction": "《灵枢》背腧，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《背腧》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《背腧》全文。",
    "translation": "本篇围绕“背腧”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《背腧》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "背腧",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-wei-qi",
    "book": "lingshu",
    "chapterNumber": 52,
    "title": "卫气第52",
    "baseTitle": "卫气",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wei-qi/zh",
    "introduction": "《灵枢》卫气，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《卫气》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《卫气》全文。",
    "translation": "本篇围绕“卫气”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《卫气》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "卫气",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-lun-tong",
    "book": "lingshu",
    "chapterNumber": 53,
    "title": "论痛第53",
    "baseTitle": "论痛",
    "sourceUrl": "https://ctext.org/huangdi-neijing/lun-tong/zh",
    "introduction": "《灵枢》论痛，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《论痛》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《论痛》全文。",
    "translation": "本篇围绕“论痛”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《论痛》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "痛",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-tian-nian",
    "book": "lingshu",
    "chapterNumber": 54,
    "title": "天年第54",
    "baseTitle": "天年",
    "sourceUrl": "https://ctext.org/huangdi-neijing/tian-nian/zh",
    "introduction": "《灵枢》天年，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《天年》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《天年》全文。",
    "translation": "本篇围绕“天年”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《天年》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "天年",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-ni-shun",
    "book": "lingshu",
    "chapterNumber": 55,
    "title": "逆顺第55",
    "baseTitle": "逆顺",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ni-shun/zh",
    "introduction": "《灵枢》逆顺，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《逆顺》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《逆顺》全文。",
    "translation": "本篇围绕“逆顺”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《逆顺》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "逆顺",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wu-wei",
    "book": "lingshu",
    "chapterNumber": 56,
    "title": "五味第56",
    "baseTitle": "五味",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-wei/zh",
    "introduction": "《灵枢》五味，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五味》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五味》全文。",
    "translation": "本篇围绕“五味”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五味》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五味",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-shui-zhang",
    "book": "lingshu",
    "chapterNumber": 57,
    "title": "水胀第57",
    "baseTitle": "水胀",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shui-zhang/zh",
    "introduction": "《灵枢》水胀，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《水胀》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《水胀》全文。",
    "translation": "本篇围绕“水胀”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《水胀》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "水胀",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-zei-feng",
    "book": "lingshu",
    "chapterNumber": 58,
    "title": "贼风第58",
    "baseTitle": "贼风",
    "sourceUrl": "https://ctext.org/huangdi-neijing/zei-feng/zh",
    "introduction": "《灵枢》贼风，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《贼风》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《贼风》全文。",
    "translation": "本篇围绕“贼风”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《贼风》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "贼风",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wei-qi-shi-chang",
    "book": "lingshu",
    "chapterNumber": 59,
    "title": "卫气失常第59",
    "baseTitle": "卫气失常",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wei-qi-shi-chang/zh",
    "introduction": "《灵枢》卫气失常，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《卫气失常》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《卫气失常》全文。",
    "translation": "本篇围绕“卫气失常”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《卫气失常》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "卫气失常",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-yu-ban",
    "book": "lingshu",
    "chapterNumber": 60,
    "title": "玉版第60",
    "baseTitle": "玉版",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yu-ban/zh",
    "introduction": "《灵枢》玉版，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《玉版》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《玉版》全文。",
    "translation": "本篇围绕“玉版”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《玉版》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "玉版",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-wu-jin",
    "book": "lingshu",
    "chapterNumber": 61,
    "title": "五禁第61",
    "baseTitle": "五禁",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-jin/zh",
    "introduction": "《灵枢》五禁，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五禁》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五禁》全文。",
    "translation": "本篇围绕“五禁”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五禁》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五禁",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-dong-shu",
    "book": "lingshu",
    "chapterNumber": 62,
    "title": "动输第62",
    "baseTitle": "动输",
    "sourceUrl": "https://ctext.org/huangdi-neijing/dong-shu/zh",
    "introduction": "《灵枢》动输，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《动输》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《动输》全文。",
    "translation": "本篇围绕“动输”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《动输》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "动输",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-wu-wei-lun",
    "book": "lingshu",
    "chapterNumber": 63,
    "title": "五味论第63",
    "baseTitle": "五味论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-wei-lun/zh",
    "introduction": "《灵枢》五味论，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五味论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五味论》全文。",
    "translation": "本篇围绕“五味论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五味论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五味",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-yin-yang-er-shi-wu-ren",
    "book": "lingshu",
    "chapterNumber": 64,
    "title": "阴阳二十五人第64",
    "baseTitle": "阴阳二十五人",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yin-yang-er-shi-wu-ren/zh",
    "introduction": "《灵枢》阴阳二十五人，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳二十五人》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《阴阳二十五人》全文。",
    "translation": "本篇围绕“阴阳二十五人”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《阴阳二十五人》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "阴阳二十五人",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "yinyang",
      "tianren",
      "wuxing"
    ]
  },
  {
    "id": "lingshu-wu-yin-wu-wei",
    "book": "lingshu",
    "chapterNumber": 65,
    "title": "五音五味第65",
    "baseTitle": "五音五味",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wu-yin-wu-wei/zh",
    "introduction": "《灵枢》五音五味，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五音五味》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《五音五味》全文。",
    "translation": "本篇围绕“五音五味”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《五音五味》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "五音五味",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-bai-bing-shi-sheng",
    "book": "lingshu",
    "chapterNumber": 66,
    "title": "百病始生第66",
    "baseTitle": "百病始生",
    "sourceUrl": "https://ctext.org/huangdi-neijing/bai-bing-shi-sheng/zh",
    "introduction": "《灵枢》百病始生，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《百病始生》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《百病始生》全文。",
    "translation": "本篇围绕“百病始生”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《百病始生》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "百病始生",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-xing-zhen",
    "book": "lingshu",
    "chapterNumber": 67,
    "title": "行针第67",
    "baseTitle": "行针",
    "sourceUrl": "https://ctext.org/huangdi-neijing/xing-zhen/zh",
    "introduction": "《灵枢》行针，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《行针》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《行针》全文。",
    "translation": "本篇围绕“行针”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《行针》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "行针",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-shang-ge",
    "book": "lingshu",
    "chapterNumber": 68,
    "title": "上膈第68",
    "baseTitle": "上膈",
    "sourceUrl": "https://ctext.org/huangdi-neijing/shang-ge/zh",
    "introduction": "《灵枢》上膈，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《上膈》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《上膈》全文。",
    "translation": "本篇围绕“上膈”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《上膈》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "上膈",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-you-hui-wu-yan",
    "book": "lingshu",
    "chapterNumber": 69,
    "title": "忧恚无言第69",
    "baseTitle": "忧恚无言",
    "sourceUrl": "https://ctext.org/huangdi-neijing/you-hui-wu-yan/zh",
    "introduction": "《灵枢》忧恚无言，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《忧恚无言》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《忧恚无言》全文。",
    "translation": "本篇围绕“忧恚无言”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《忧恚无言》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "忧恚无言",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-han-re",
    "book": "lingshu",
    "chapterNumber": 70,
    "title": "寒热第70",
    "baseTitle": "寒热",
    "sourceUrl": "https://ctext.org/huangdi-neijing/han-re/zh",
    "introduction": "《灵枢》寒热，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《寒热》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《寒热》全文。",
    "translation": "本篇围绕“寒热”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《寒热》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "寒热",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-xie-ke",
    "book": "lingshu",
    "chapterNumber": 71,
    "title": "邪客第71",
    "baseTitle": "邪客",
    "sourceUrl": "https://ctext.org/huangdi-neijing/xie-ke/zh",
    "introduction": "《灵枢》邪客，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《邪客》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《邪客》全文。",
    "translation": "本篇围绕“邪客”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《邪客》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "邪客",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-tong-tian",
    "book": "lingshu",
    "chapterNumber": 72,
    "title": "通天第72",
    "baseTitle": "通天",
    "sourceUrl": "https://ctext.org/huangdi-neijing/tong-tian/zh",
    "introduction": "《灵枢》通天，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《通天》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《通天》全文。",
    "translation": "本篇围绕“通天”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《通天》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "通天",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-guan-neng",
    "book": "lingshu",
    "chapterNumber": 73,
    "title": "官能第73",
    "baseTitle": "官能",
    "sourceUrl": "https://ctext.org/huangdi-neijing/guan-neng/zh",
    "introduction": "《灵枢》官能，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《官能》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《官能》全文。",
    "translation": "本篇围绕“官能”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《官能》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "官能",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-lun-ji-zhen-chi",
    "book": "lingshu",
    "chapterNumber": 74,
    "title": "论疾诊尺第74",
    "baseTitle": "论疾诊尺",
    "sourceUrl": "https://ctext.org/huangdi-neijing/lun-ji-zhen-chi/zh",
    "introduction": "《灵枢》论疾诊尺，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《论疾诊尺》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《论疾诊尺》全文。",
    "translation": "本篇围绕“论疾诊尺”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《论疾诊尺》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "疾诊尺",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-ci-jie-zhen-xie",
    "book": "lingshu",
    "chapterNumber": 75,
    "title": "刺节真邪第75",
    "baseTitle": "刺节真邪",
    "sourceUrl": "https://ctext.org/huangdi-neijing/ci-jie-zhen-xie/zh",
    "introduction": "《灵枢》刺节真邪，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺节真邪》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《刺节真邪》全文。",
    "translation": "本篇围绕“刺节真邪”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《刺节真邪》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "刺节真邪",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi",
      "disease-balance",
      "diagnosis"
    ]
  },
  {
    "id": "lingshu-wei-qi-xing",
    "book": "lingshu",
    "chapterNumber": 76,
    "title": "卫气行第76",
    "baseTitle": "卫气行",
    "sourceUrl": "https://ctext.org/huangdi-neijing/wei-qi-xing/zh",
    "introduction": "《灵枢》卫气行，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《卫气行》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《卫气行》全文。",
    "translation": "本篇围绕“卫气行”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《卫气行》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "卫气行",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-jiu-gong-ba-feng",
    "book": "lingshu",
    "chapterNumber": 77,
    "title": "九宫八风第77",
    "baseTitle": "九宫八风",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jiu-gong-ba-feng/zh",
    "introduction": "《灵枢》九宫八风，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《九宫八风》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《九宫八风》全文。",
    "translation": "本篇围绕“九宫八风”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《九宫八风》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "九宫八风",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-jiu-zhen-lun",
    "book": "lingshu",
    "chapterNumber": 78,
    "title": "九针论第78",
    "baseTitle": "九针论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/jiu-zhen-lun/zh",
    "introduction": "《灵枢》九针论，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《九针论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《九针论》全文。",
    "translation": "本篇围绕“九针论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《九针论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "九针",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo",
      "qi"
    ]
  },
  {
    "id": "lingshu-sui-lu-lun",
    "book": "lingshu",
    "chapterNumber": 79,
    "title": "岁露论第79",
    "baseTitle": "岁露论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/sui-lu-lun/zh",
    "introduction": "《灵枢》岁露论，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《岁露论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《岁露论》全文。",
    "translation": "本篇围绕“岁露论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《岁露论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "岁露",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-da-huo-lun",
    "book": "lingshu",
    "chapterNumber": 80,
    "title": "大惑论第80",
    "baseTitle": "大惑论",
    "sourceUrl": "https://ctext.org/huangdi-neijing/da-huo-lun/zh",
    "introduction": "《灵枢》大惑论，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《大惑论》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《大惑论》全文。",
    "translation": "本篇围绕“大惑论”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《大惑论》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "大惑",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  },
  {
    "id": "lingshu-yong-ju",
    "book": "lingshu",
    "chapterNumber": 81,
    "title": "痈疽第81",
    "baseTitle": "痈疽",
    "sourceUrl": "https://ctext.org/huangdi-neijing/yong-ju/zh",
    "introduction": "《灵枢》痈疽，属于《黄帝内经》针经、经络与血气体系的重要篇章。页面提供本地导读、关键词、体系关联，并通过 CText 原典源读取完整原文。",
    "originalText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《痈疽》全文。",
    "punctuatedText": "本篇完整原文已接入 CText 原典源动态读取。若当前部署环境无法联网，请使用页面中的“查看 CText 原典来源”打开《痈疽》全文。",
    "translation": "本篇围绕“痈疽”展开，具体文义需要结合原文上下文阅读。网站保留完整篇目入口，并可通过原典来源读取全文。",
    "interpretation": "《痈疽》应放在《黄帝内经》的整体系统中理解：既看本篇主题，也看它与阴阳、脏腑、经络、气血、病机和治则之间的关系。",
    "keywords": [
      "痈疽",
      "黄帝内经",
      "灵枢"
    ],
    "famousQuotes": [],
    "relatedConcepts": [
      "jingluo"
    ]
  }
] satisfies ClassicChapter[]

export function getChaptersByBook(book: BookId) {
  return classicChapters.filter((chapter) => chapter.book === book).sort((a, b) => a.chapterNumber - b.chapterNumber)
}

export function getChapter(book: BookId, id: string) {
  return classicChapters.find((chapter) => chapter.book === book && chapter.id === id)
}

export function getAdjacentChapters(book: BookId, id: string) {
  const chapters = getChaptersByBook(book)
  const index = chapters.findIndex((chapter) => chapter.id === id)
  return { previous: index > 0 ? chapters[index - 1] : undefined, next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : undefined }
}

export const classicStats = {
  suwen: getChaptersByBook('suwen').length,
  lingshu: getChaptersByBook('lingshu').length,
  total: classicChapters.length
}
