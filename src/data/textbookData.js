/**
 * DỮ LIỆU SÁCH GIÁO KHOA TIẾNG HOA TIỂU HỌC (TRÍCH XUẤT TỪ THƯ MỤC TAILIEUHOC)
 * Tài liệu gồm các bài học kinh điển:
 * 1. 上学去 (Đi học)
 * 2. 课室里 (Trong lớp học)
 * 3. 来拍球 (Cùng đập bóng)
 * 4. 小猫和小羊 (Mèo con và cừu con)
 * 5. 象形字与大自然 (Chữ tượng hình & Thế giới tự nhiên)
 */

export const TEXTBOOK_LESSONS = [
  {
    id: 'tb_01',
    lessonNumber: 1,
    title: '上学去',
    titlePinyin: 'Shàngxué qù',
    titleVn: 'Đi học',
    themeColor: 'from-amber-400 to-orange-400',
    borderColor: 'border-amber-300',
    badgeColor: 'bg-amber-500 text-white',
    icon: 'fa-solid fa-school',
    pageRange: 'Trang 39 - 41',
    description: 'Bé làm quen với ngày tựu trường, chào ba mẹ trước khi đi học và chào thầy cô bạn bè.',
    
    // Bài khóa chính
    readingText: [
      {
        cn: '开学了，',
        pinyin: 'Kāixué le,',
        vn: 'Tựu trường rồi,'
      },
      {
        cn: '小朋友，',
        pinyin: 'xiǎopéngyou,',
        vn: 'các bạn nhỏ ơi,'
      },
      {
        cn: '上学去。',
        pinyin: 'shàngxué qù.',
        vn: 'chúng mình cùng đi học thôi.'
      }
    ],

    // Từ mới trong bài
    vocabulary: [
      {
        cn: '开学',
        pinyin: 'kāixué',
        vn: 'khai giảng / tựu trường',
        strokes: 7,
        radical: '廾',
        icon: 'fa-solid fa-bell',
        note: 'Bắt đầu một năm học mới đầy niềm vui.'
      },
      {
        cn: '了',
        pinyin: 'le',
        vn: 'rồi (trợ từ ngữ khí)',
        strokes: 2,
        radical: '乛',
        icon: 'fa-solid fa-check',
        note: 'Biểu thị sự việc đã bắt đầu diễn ra.'
      },
      {
        cn: '小朋友',
        pinyin: 'xiǎopéngyou',
        vn: 'bạn nhỏ / em nhỏ',
        strokes: 19,
        radical: '小 / 月',
        icon: 'fa-solid fa-child-reaching',
        note: 'Dùng để gọi các bé hoặc các bạn cùng trang lứa.'
      },
      {
        cn: '上学',
        pinyin: 'shàngxué',
        vn: 'đi học',
        strokes: 11,
        radical: '一 / 宀',
        icon: 'fa-solid fa-book-open-reader',
        note: 'Đến trường học tập điều hay.'
      },
      {
        cn: '去',
        pinyin: 'qù',
        vn: 'đi',
        strokes: 5,
        radical: '厶',
        icon: 'fa-solid fa-person-walking',
        note: 'Rời vị trí hiện tại để đi đến nơi khác.'
      }
    ],

    // Hướng dẫn nét bút chuẩn (Bút thuận) theo sách
    strokeGuide: [
      {
        char: '学',
        pinyin: 'xué',
        meaning: 'Học',
        strokesTotal: 8,
        strokeSteps: ['丶 (chấm)', '丶 (chấm)', '丿 (phẩy)', '丶 (chấm)', '乛 (ngang gập)', '一 (ngang)', '亅 (sổ móc)', '一 (ngang)'],
        structure: 'Kết cấu trên dưới (上下结构)'
      },
      {
        char: '去',
        pinyin: 'qù',
        meaning: 'Đi',
        strokesTotal: 5,
        strokeSteps: ['一 (ngang)', '丨 (sổ)', '一 (ngang dài)', 'ㄥ (phẩy gập)', '丶 (chấm)'],
        structure: 'Kết cấu trên dưới (上下结构)'
      },
      {
        char: '朋',
        pinyin: 'péng',
        meaning: 'Bè bạn',
        strokesTotal: 8,
        strokeSteps: ['丿 (phẩy)', '𠃌 (ngang gập móc)', '一 (ngang)', '一 (ngang)', '丿 (phẩy)', '𠃌 (ngang gập móc)', '一 (ngang)', '一 (ngang)'],
        structure: 'Hai chữ Nguyệt 月 ghép thành (左右结构)'
      },
      {
        char: '友',
        pinyin: 'yǒu',
        meaning: 'Bạn hữu',
        strokesTotal: 4,
        strokeSteps: ['一 (ngang)', '丿 (phẩy dài)', '㇇ (ngang phẩy)', '乀 (mác)'],
        structure: 'Bộ Hựu 又 bên dưới'
      }
    ],

    // 看图说话 (Luyện nói & Đối thoại thực tế)
    dialogues: [
      {
        speaker: '爸爸 👨',
        role: 'Ba',
        cn: '每天早上你去哪儿？',
        pinyin: 'Měitiān zǎoshang nǐ qù nǎr?',
        vn: 'Mỗi sáng con đi đâu vậy?'
      },
      {
        speaker: '小朋友 🎒',
        role: 'Bé',
        cn: '爸爸、妈妈，我上学去了！',
        pinyin: 'Bàba, māma, wǒ shàngxué qù le!',
        vn: 'Ba ơi, mẹ ơi, con đi học đây ạ!'
      },
      {
        speaker: '老师 👩‍🏫',
        role: 'Cô giáo',
        cn: '早上好，小朋友！',
        pinyin: 'Zǎoshang hǎo, xiǎopéngyou!',
        vn: 'Chào buổi sáng các em nhỏ!'
      },
      {
        speaker: '小朋友 👧',
        role: 'Bé',
        cn: '老师好，同学们好！',
        pinyin: 'Lǎoshī hǎo, tóngxuémen hǎo!',
        vn: 'Em chào cô giáo, mình chào các bạn!'
      }
    ],

    // Bài tập tương tác (Mini exercises)
    exercises: [
      {
        id: 'ex_1_1',
        type: 'fill_blank',
        question: 'Điền từ còn thiếu vào câu: "开学了，_____，上学去。"',
        options: ['小朋友', '大朋友', '小猫', '小羊'],
        correctAnswer: '小朋友',
        explanation: 'Bài thơ gốc: "开学了，小朋友，上学去。"'
      },
      {
        id: 'ex_1_2',
        type: 'meaning_match',
        question: 'Chữ "去" trong câu "上学去" có nghĩa là gì?',
        options: ['Đi', 'Về', 'Ở lại', 'Chơi'],
        correctAnswer: 'Đi',
        explanation: '"去" (qù) có nghĩa là Đi, "上学去" là Đi học.'
      },
      {
        id: 'ex_1_3',
        type: 'dialogue_choice',
        question: 'Khi chào tạm biệt ba mẹ trước khi tới trường, bé sẽ nói câu nào?',
        options: [
          '爸爸、妈妈，我上学去了！',
          '爸爸、妈妈，我不去！',
          '爸爸、妈妈，睡觉了！',
          '爸爸、妈妈，我吃饱了！'
        ],
        correctAnswer: '爸爸、妈妈，我上学去了！',
        explanation: 'Bé lễ phép thưa: 爸爸、妈妈，我上学去了！ (Ba mẹ ơi con đi học đây ạ!)'
      }
    ]
  },

  {
    id: 'tb_02',
    lessonNumber: 2,
    title: '课室里',
    titlePinyin: 'Kèshì lǐ',
    titleVn: 'Trong lớp học',
    themeColor: 'from-blue-400 to-indigo-500',
    borderColor: 'border-blue-300',
    badgeColor: 'bg-blue-600 text-white',
    icon: 'fa-solid fa-chalkboard-user',
    pageRange: 'Trang 50 - 51',
    description: 'Khám phá các đồ dùng quen thuộc trong lớp: bàn, ghế, bảng đen và các bạn chăm chỉ học bài.',
    
    readingText: [
      {
        cn: '课室里，',
        pinyin: 'Kèshì lǐ,',
        vn: 'Trong lớp học,'
      },
      {
        cn: '有桌子，有椅子，有黑板。',
        pinyin: 'yǒu zhuōzi, yǒu yǐzi, yǒu hēibǎn.',
        vn: 'có bàn học, có ghế ngồi, có bảng đen.'
      },
      {
        cn: '我们在课室里上课。',
        pinyin: 'Wǒmen zài kèshì lǐ shàngkè.',
        vn: 'Chúng em cùng học bài trong lớp học.'
      }
    ],

    vocabulary: [
      {
        cn: '课室',
        pinyin: 'kèshì',
        vn: 'phòng học / lớp học',
        strokes: 19,
        radical: '讠 / 宀',
        icon: 'fa-solid fa-door-open',
        note: 'Nơi cô giáo dạy bài và các bạn cùng học.'
      },
      {
        cn: '桌子',
        pinyin: 'zhuōzi',
        vn: 'cái bàn',
        strokes: 13,
        radical: '木',
        icon: 'fa-solid fa-table',
        note: 'Bàn để bé viết chữ và để sách vở.'
      },
      {
        cn: '椅子',
        pinyin: 'yǐzi',
        vn: 'cái ghế',
        strokes: 15,
        radical: '木',
        icon: 'fa-solid fa-chair',
        note: 'Ghế ngồi tựa lưng ngay ngắn khi học.'
      },
      {
        cn: '黑板',
        pinyin: 'hēibǎn',
        vn: 'bảng đen',
        strokes: 20,
        radical: '黑 / 木',
        icon: 'fa-solid fa-chalkboard',
        note: 'Bảng lớn để cô giáo viết chữ bằng phấn trắng.'
      },
      {
        cn: '在',
        pinyin: 'zài',
        vn: 'ở / tại',
        strokes: 6,
        radical: '土',
        icon: 'fa-solid fa-location-dot',
        note: 'Chỉ địa điểm đang có mặt.'
      },
      {
        cn: '上课',
        pinyin: 'shàngkè',
        vn: 'lên lớp / học bài',
        strokes: 13,
        radical: '一 / 讠',
        icon: 'fa-solid fa-graduation-cap',
        note: 'Giờ học bắt đầu khi tiếng chuông vang lên.'
      }
    ],

    strokeGuide: [
      {
        char: '课',
        pinyin: 'kè',
        meaning: 'Bài học',
        strokesTotal: 10,
        strokeSteps: ['丶 (chấm)', '𠃌 (ngang gập hất)', '丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '一 (ngang)', '丨 (sổ)', '一 (ngang)', '丿 (phẩy)', '乀 (mác)'],
        structure: 'Bộ Ngôn 讠 bên trái (左右结构)'
      },
      {
        char: '桌',
        pinyin: 'zhuō',
        meaning: 'Bàn',
        strokesTotal: 10,
        strokeSteps: ['丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '一 (ngang)', '丨 (sổ)', '一 (ngang)', '一 (ngang)', '丨 (sổ)', '丿 (phẩy)', '乀 (mác)'],
        structure: 'Bộ Mộc 木 bên dưới'
      },
      {
        char: '黑',
        pinyin: 'hēi',
        meaning: 'Đen',
        strokesTotal: 12,
        strokeSteps: ['丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '一 (ngang)', '丨 (sổ)', '一 (ngang)', '一 (ngang dài)', '丶 (chấm)', '丶 (chấm)', '丶 (chấm)', '丶 (chấm)'],
        structure: 'Bộ Hỏa bốn chấm 灬 ở đáy'
      },
      {
        char: '板',
        pinyin: 'bǎn',
        meaning: 'Tấm ván / Bảng',
        strokesTotal: 8,
        strokeSteps: ['一 (ngang)', '丨 (sổ)', '丿 (phẩy)', '丶 (chấm)', '丿 (phẩy)', '丿 (phẩy)', '㇇ (ngang phẩy)', '乀 (mác)'],
        structure: 'Bộ Mộc 木 bên trái + chữ Phản 反'
      }
    ],

    dialogues: [
      {
        speaker: '老师 👩‍🏫',
        role: 'Cô giáo',
        cn: '课室里有什么？',
        pinyin: 'Kèshì lǐ yǒu shénme?',
        vn: 'Trong lớp học chúng mình có những gì nào?'
      },
      {
        speaker: '同学 👦',
        role: 'Học sinh',
        cn: '课室里有桌子、椅子和黑板。',
        pinyin: 'Kèshì lǐ yǒu zhuōzi, yǐzi hé hēibǎn.',
        vn: 'Dạ trong lớp có bàn, có ghế và có bảng đen ạ.'
      },
      {
        speaker: '老师 👩‍🏫',
        role: 'Cô giáo',
        cn: '我们在课室里做什么？',
        pinyin: 'Wǒmen zài kèshì lǐ zuò shénme?',
        vn: 'Chúng mình làm gì trong lớp học?'
      },
      {
        speaker: '同学 👧',
        role: 'Học sinh',
        cn: '我们在课室里认真上课！',
        pinyin: 'Wǒmen zài kèshì lǐ rènzhēn shàngkè!',
        vn: 'Chúng em chăm chỉ học bài trong lớp ạ!'
      }
    ],

    exercises: [
      {
        id: 'ex_2_1',
        type: 'word_selection',
        question: 'Vật dụng nào dùng để cô giáo viết chữ lên cho cả lớp xem?',
        options: ['黑板 (Bảng đen)', '椅子 (Ghế ngồi)', '书包 (Cặp sách)', '门 (Cửa)'],
        correctAnswer: '黑板 (Bảng đen)',
        explanation: '黑板 (hēibǎn) là bảng đen dùng để viết bài.'
      },
      {
        id: 'ex_2_2',
        type: 'fill_blank',
        question: 'Chọn từ đúng: "我们在课室里_____。"',
        options: ['上课', '睡觉', '拍球', '洗澡'],
        correctAnswer: '上课',
        explanation: 'Câu trong bài: "我们在课室里上课。" (Chúng em học bài trong lớp).'
      }
    ]
  },

  {
    id: 'tb_03',
    lessonNumber: 3,
    title: '来拍球',
    titlePinyin: 'Lái pāi qiú',
    titleVn: 'Cùng đập bóng',
    themeColor: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-300',
    badgeColor: 'bg-emerald-600 text-white',
    icon: 'fa-solid fa-basketball',
    pageRange: 'Trang 58 - 61',
    description: 'Giờ ra chơi vui nhộn cùng đập bóng và đếm số: một, hai, ba, bốn, năm. Học đại từ nhân xưng Bạn - Tôi - Cậu ấy.',
    
    readingText: [
      {
        cn: '下课了！',
        pinyin: 'Xiàkè le!',
        vn: 'Tan học rồi! (Đến giờ ra chơi rồi!)'
      },
      {
        cn: '大家来拍球。',
        pinyin: 'Dàjiā lái pāi qiú.',
        vn: 'Cả lớp cùng đến đập bóng nào.'
      },
      {
        cn: '你来拍，我来数：',
        pinyin: 'Nǐ lái pāi, wǒ lái shǔ:',
        vn: 'Bạn đập nhé, mình sẽ đếm:'
      },
      {
        cn: '一、二、三、四、五。',
        pinyin: 'yī, èr, sān, sì, wǔ.',
        vn: 'Một, hai, ba, bốn, năm.'
      },
      {
        cn: '他来拍，你来数：',
        pinyin: 'Tā lái pāi, nǐ lái shǔ:',
        vn: 'Bạn ấy đập nhé, bạn hãy đếm:'
      },
      {
        cn: '一、二、三、四、五。',
        pinyin: 'yī, èr, sān, sì, wǔ.',
        vn: 'Một, hai, ba, bốn, năm.'
      }
    ],

    vocabulary: [
      {
        cn: '下课',
        pinyin: 'xiàkè',
        vn: 'tan học / hết tiết',
        strokes: 13,
        radical: '一 / 讠',
        icon: 'fa-solid fa-bell-slash',
        note: 'Hết giờ học bài, được vui chơi giải lao.'
      },
      {
        cn: '大家',
        pinyin: 'dàjiā',
        vn: 'mọi người / cả lớp',
        strokes: 13,
        radical: '大 / 宀',
        icon: 'fa-solid fa-people-group',
        note: 'Tất cả các bạn bè cùng một nhóm.'
      },
      {
        cn: '拍球',
        pinyin: 'pāi qiú',
        vn: 'đập bóng / vỗ bóng',
        strokes: 19,
        radical: '扌 / 王',
        icon: 'fa-solid fa-baseball',
        note: 'Dùng tay vỗ đều quả bóng xuống sân.'
      },
      {
        cn: '数',
        pinyin: 'shǔ',
        vn: 'đếm (số lượng)',
        strokes: 13,
        radical: '攵',
        icon: 'fa-solid fa-arrow-down-1-9',
        note: 'Đếm từng nhịp 1, 2, 3, 4, 5.'
      },
      {
        cn: '你 / 我 / 他',
        pinyin: 'nǐ / wǒ / tā',
        vn: 'Bạn / Tôi / Cậu ấy (Đại từ)',
        strokes: 21,
        radical: '亻 / 戈 / 亻',
        icon: 'fa-solid fa-users',
        note: 'Ba ngôi xưng hô giao tiếp căn bản nhất.'
      }
    ],

    strokeGuide: [
      {
        char: '下',
        pinyin: 'xià',
        meaning: 'Dưới / Xuống',
        strokesTotal: 3,
        strokeSteps: ['一 (ngang)', '丨 (sổ)', '丶 (chấm)'],
        structure: 'Chữ chỉ sự (chấm ở bên dưới nét ngang)'
      },
      {
        char: '大',
        pinyin: 'dà',
        meaning: 'To lớn',
        strokesTotal: 3,
        strokeSteps: ['一 (ngang)', '丿 (phẩy)', '乀 (mác)'],
        structure: 'Hình dáng người dang rộng hai tay'
      },
      {
        char: '来',
        pinyin: 'lái',
        meaning: 'Đến / Lại đây',
        strokesTotal: 7,
        strokeSteps: ['一 (ngang)', '丶 (chấm)', '丿 (phẩy)', '一 (ngang dài)', '丨 (sổ)', '丿 (phẩy)', '乀 (mác)'],
        structure: 'Hình bông lúa trĩu hạt'
      },
      {
        char: '拍',
        pinyin: 'pāi',
        meaning: 'Vỗ / Đập',
        strokesTotal: 8,
        strokeSteps: ['一 (ngang)', '丨 (sổ móc)', '㇀ (hất)', '丿 (phẩy)', '丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '一 (ngang)'],
        structure: 'Bộ Thủ 扌 (tay) + chữ Bạch 白'
      }
    ],

    dialogues: [
      {
        speaker: '小明 👦',
        role: 'Tiểu Minh',
        cn: '下课了！大家来拍球吧！',
        pinyin: 'Xiàkè le! Dàjiā lái pāi qiú ba!',
        vn: 'Ra chơi rồi! Các bạn ơi ra đập bóng đi!'
      },
      {
        speaker: '小华 👧',
        role: 'Tiểu Hoa',
        cn: '好呀！你来拍，我来数。',
        pinyin: 'Hǎo ya! Nǐ lái pāi, wǒ lái shǔ.',
        vn: 'Được chứ! Cậu đập đi, tớ đếm cho.'
      },
      {
        speaker: '小明 👦',
        role: 'Tiểu Minh',
        cn: '一、二、三、四、五！拍得真好！',
        pinyin: 'Yī, èr, sān, sì, wǔ! Pāi de zhēn hǎo!',
        vn: 'Một, hai, ba, bốn, năm! Đập giỏi quá!'
      }
    ],

    exercises: [
      {
        id: 'ex_3_1',
        type: 'pronoun_match',
        question: 'Ai là người đếm khi "你来拍" (Bạn đập bóng)?',
        options: ['我来数 (Tôi đếm)', '他来数 (Bạn ấy đếm)', '老师数 (Cô giáo đếm)', '不数 (Không ai đếm)'],
        correctAnswer: '我来数 (Tôi đếm)',
        explanation: 'Trong bài có câu: "你来拍，我来数：一二三四五。"'
      },
      {
        id: 'ex_3_2',
        type: 'fill_blank',
        question: 'Điền từ trái nghĩa với "上课" (Vào học): "_____了，大家来拍球。"',
        options: ['下课', '回家', '开学', '去'],
        correctAnswer: '下课',
        explanation: '下课 (xiàkè) có nghĩa là tan học / hết giờ học.'
      }
    ]
  },

  {
    id: 'tb_04',
    lessonNumber: 4,
    title: '小猫和小羊',
    titlePinyin: 'Xiǎomāo hé xiǎoyáng',
    titleVn: 'Mèo con và Cừu con',
    themeColor: 'from-pink-400 to-rose-400',
    borderColor: 'border-pink-300',
    badgeColor: 'bg-rose-500 text-white',
    icon: 'fa-solid fa-cat',
    pageRange: 'Trang 66 - 69',
    description: 'Bài đồng dao dễ thương về tiếng kêu và món ăn khoái khẩu của mèo con, cừu con và chim nhỏ.',
    
    readingText: [
      {
        cn: '咪咪咪，小猫叫。',
        pinyin: 'Mī mī mī, xiǎomāo jiào.',
        vn: 'Meo meo meo, chú mèo con kêu.'
      },
      {
        cn: '小猫不吃米，要吃鱼。',
        pinyin: 'Xiǎomāo bù chī mǐ, yào chī yú.',
        vn: 'Mèo con chẳng ăn gạo, chỉ thích ăn cá tươi.'
      },
      {
        cn: '咩咩咩，小羊叫。',
        pinyin: 'Miē miē miē, xiǎoyáng jiào.',
        vn: 'Be be be, bé cừu con kêu.'
      },
      {
        cn: '小羊不吃鱼，要吃草。',
        pinyin: 'Xiǎoyáng bù chī yú, yào chī cǎo.',
        vn: 'Cừu con chẳng ăn cá, chỉ thích gặm cỏ non.'
      }
    ],

    vocabulary: [
      {
        cn: '小猫',
        pinyin: 'xiǎomāo',
        vn: 'mèo con',
        strokes: 14,
        radical: '犭',
        icon: 'fa-solid fa-cat',
        note: 'Loài vật kêu meo meo, thích ăn cá và bắt chuột.'
      },
      {
        cn: '小羊',
        pinyin: 'xiǎoyáng',
        vn: 'cừu con / dê con',
        strokes: 9,
        radical: '羊',
        icon: 'fa-solid fa-shield-cat',
        note: 'Loài vật có lông mịn, kêu be be và ăn cỏ.'
      },
      {
        cn: '叫',
        pinyin: 'jiào',
        vn: 'kêu / gọi',
        strokes: 5,
        radical: '口',
        icon: 'fa-solid fa-volume-high',
        note: 'Phát ra âm thanh tiếng kêu.'
      },
      {
        cn: '吃',
        pinyin: 'chī',
        vn: 'ăn',
        strokes: 6,
        radical: '口',
        icon: 'fa-solid fa-utensils',
        note: 'Đưa thức ăn vào miệng.'
      },
      {
        cn: '鱼',
        pinyin: 'yú',
        vn: 'con cá',
        strokes: 8,
        radical: '鱼',
        icon: 'fa-solid fa-fish',
        note: 'Bơi dưới nước, thức ăn yêu thích của mèo con.'
      },
      {
        cn: '草',
        pinyin: 'cǎo',
        vn: 'cỏ non',
        strokes: 9,
        radical: '艹',
        icon: 'fa-solid fa-seedling',
        note: 'Cỏ xanh tươi mát trên cánh đồng.'
      }
    ],

    strokeGuide: [
      {
        char: '羊',
        pinyin: 'yáng',
        meaning: 'Con cừu / con dê',
        strokesTotal: 6,
        strokeSteps: ['丶 (chấm)', '丿 (phẩy)', '一 (ngang)', '一 (ngang)', '一 (ngang dài)', '丨 (sổ)'],
        structure: 'Chữ tượng hình đầu chú cừu có hai sừng'
      },
      {
        char: '米',
        pinyin: 'mǐ',
        meaning: 'Hạt gạo / lúa gạo',
        strokesTotal: 6,
        strokeSteps: ['丶 (chấm)', '丿 (phẩy)', '一 (ngang)', '丨 (sổ)', '丿 (phẩy)', '丶 (chấm)'],
        structure: 'Hình những hạt thóc tỏa đều quanh thân lúa'
      },
      {
        char: '鱼',
        pinyin: 'yú',
        meaning: 'Con cá',
        strokesTotal: 8,
        strokeSteps: ['丿 (phẩy)', '𠃍 (ngang gập)', '丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '一 (ngang)', '一 (ngang)', '一 (ngang dài)'],
        structure: 'Chữ tượng hình đầu cá, thân vảy cá và đuôi'
      },
      {
        char: '草',
        pinyin: 'cǎo',
        meaning: 'Cây cỏ',
        strokesTotal: 9,
        strokeSteps: ['一 (ngang)', '丨 (sổ)', '丨 (sổ)', '丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '一 (ngang)', '丨 (sổ)', '一 (ngang)'],
        structure: 'Bộ Thảo 艹 (cây cỏ) bên trên'
      }
    ],

    dialogues: [
      {
        speaker: '妈妈 👩',
        role: 'Mẹ',
        cn: '小猫叫的声音是怎样的？',
        pinyin: 'Xiǎomāo jiào de shēngyīn shì zěnyàng de?',
        vn: 'Tiếng kêu của mèo con thế nào hả con?'
      },
      {
        speaker: '宝宝 🧒',
        role: 'Bé',
        cn: '咪咪咪，小猫叫！小猫要吃鱼。',
        pinyin: 'Mī mī mī, xiǎomāo jiào! Xiǎomāo yào chī yú.',
        vn: 'Meo meo meo! Mèo con thích ăn cá mẹ ơi.'
      },
      {
        speaker: '妈妈 👩',
        role: 'Mẹ',
        cn: '那小羊呢？小羊吃什么？',
        pinyin: 'Nà xiǎoyáng ne? Xiǎoyáng chī shénme?',
        vn: 'Thế còn cừu con thì sao? Cừu con ăn gì?'
      },
      {
        speaker: '宝宝 🧒',
        role: 'Bé',
        cn: '咩咩咩，小羊不吃鱼，要吃草！',
        pinyin: 'Miē miē miē, xiǎoyáng bù chī yú, yào chī cǎo!',
        vn: 'Be be be, cừu con không ăn cá, chỉ ăn cỏ thôi ạ!'
      }
    ],

    exercises: [
      {
        id: 'ex_4_1',
        type: 'match_food',
        question: 'Món ăn khoái khẩu của "小猫" (mèo con) là gì?',
        options: ['鱼 (Cá)', '草 (Cỏ)', '米 (Gạo)', '木 (Gỗ)'],
        correctAnswer: '鱼 (Cá)',
        explanation: '小猫要吃鱼 (Mèo con thích ăn cá).'
      },
      {
        id: 'ex_4_2',
        type: 'sound_match',
        question: 'Tiếng kêu "咩咩咩" (Miē miē miē) là của bạn nhỏ nào?',
        options: ['小羊 (Cừu con)', '小猫 (Mèo con)', '小狗 (Cún con)', '小鸟 (Chim non)'],
        correctAnswer: '小羊 (Cừu con)',
        explanation: '咩咩咩 là tiếng kêu be be của chú cừu con (小羊).'
      }
    ]
  },

  {
    id: 'tb_05',
    lessonNumber: 5,
    title: '象形字与自然',
    titlePinyin: 'Xiàngxíngzì yǔ zìrán',
    titleVn: 'Chữ tượng hình & Thế giới tự nhiên',
    themeColor: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-300',
    badgeColor: 'bg-violet-600 text-white',
    icon: 'fa-solid fa-mountain-sun',
    pageRange: 'Trang 17, 19, 21, 30, 35 - 37',
    description: 'Tìm hiểu chữ Hán cổ qua tranh vẽ: Núi, Đá, Nước, Lửa, Mặt Trời, Mặt Trăng, Thuyền, Xe...',
    
    readingText: [
      {
        cn: '日月水火，',
        pinyin: 'Rì yuè shuǐ huǒ,',
        vn: 'Mặt trời, mặt trăng, dòng nước, ngọn lửa,'
      },
      {
        cn: '山石田土。',
        pinyin: 'shān shí tián tǔ.',
        vn: 'núi non, tảng đá, cánh đồng, đất màu.'
      },
      {
        cn: '雨电虫鱼，',
        pinyin: 'Yǔ diàn chóng yú,',
        vn: 'Cơn mưa, tia chớp, côn trùng, cá lội,'
      },
      {
        cn: '门舟弓车。',
        pinyin: 'mén zhōu gōng chē.',
        vn: 'cánh cổng, con thuyền, cây cung, cỗ xe.'
      }
    ],

    vocabulary: [
      {
        cn: '山',
        pinyin: 'shān',
        vn: 'núi non',
        strokes: 3,
        radical: '山',
        icon: 'fa-solid fa-mountain',
        note: 'Vẽ ba đỉnh núi sừng sững vươn cao.'
      },
      {
        cn: '水',
        pinyin: 'shuǐ',
        vn: 'nước / dòng suối',
        strokes: 4,
        radical: '水',
        icon: 'fa-solid fa-droplet',
        note: 'Vẽ dòng chảy uốn lượn có những giọt nước hai bên.'
      },
      {
        cn: '火',
        pinyin: 'huǒ',
        vn: 'ngọn lửa',
        strokes: 4,
        radical: '火',
        icon: 'fa-solid fa-fire',
        note: 'Vẽ ngọn lửa bùng sáng bốc lên.'
      },
      {
        cn: '日',
        pinyin: 'rì',
        vn: 'mặt trời / ngày',
        strokes: 4,
        radical: '日',
        icon: 'fa-solid fa-sun',
        note: 'Vẽ mặt trời hình tròn có chấm sáng ở giữa.'
      },
      {
        cn: '月',
        pinyin: 'yuè',
        vn: 'mặt trăng / tháng',
        strokes: 4,
        radical: '月',
        icon: 'fa-solid fa-moon',
        note: 'Vẽ vầng trăng khuyết dịu dàng.'
      },
      {
        cn: '舟',
        pinyin: 'zhōu',
        vn: 'con thuyền / đò',
        strokes: 6,
        radical: '舟',
        icon: 'fa-solid fa-sailboat',
        note: 'Vẽ hình chiếc thuyền nan nổi trên mặt sông.'
      },
      {
        cn: '车',
        pinyin: 'chē',
        vn: 'cỗ xe',
        strokes: 4,
        radical: '车',
        icon: 'fa-solid fa-car',
        note: 'Vẽ trục xe và hai bánh xe lăn tròn.'
      },
      {
        cn: '门',
        pinyin: 'mén',
        vn: 'cánh cửa / cổng',
        strokes: 3,
        radical: '门',
        icon: 'fa-solid fa-door-closed',
        note: 'Vẽ hai cánh cửa mở ra vào ngôi nhà.'
      }
    ],

    strokeGuide: [
      {
        char: '山',
        pinyin: 'shān',
        meaning: 'Ngọn núi',
        strokesTotal: 3,
        strokeSteps: ['丨 (sổ giữa cao nhất)', '𠄌 (sổ gập)', '丨 (sổ phải)'],
        structure: 'Chữ đơn thể tượng hình'
      },
      {
        char: '水',
        pinyin: 'shuǐ',
        meaning: 'Dòng nước',
        strokesTotal: 4,
        strokeSteps: ['亅 (sổ móc giữa)', '㇇ (ngang phẩy trái)', '丿 (phẩy ngắn)', '乀 (mác phải)'],
        structure: 'Quy tắc: giữa trước hai bên sau'
      },
      {
        char: '火',
        pinyin: 'huǒ',
        meaning: 'Ngọn lửa',
        strokesTotal: 4,
        strokeSteps: ['丶 (chấm trái)', '丿 (phẩy ngắn phải)', '丿 (phẩy dài giữa)', '乀 (mác phải)'],
        structure: 'Hai chấm hai bên trước, nét phẩy mác sau'
      },
      {
        char: '车',
        pinyin: 'chē',
        meaning: 'Cỗ xe',
        strokesTotal: 4,
        strokeSteps: ['一 (ngang)', 'ㄥ (phẩy gập)', '一 (ngang dài)', '丨 (sổ thẳng xuyên qua)'],
        structure: 'Trục thẳng đứng xỏ qua trục xe'
      }
    ],

    dialogues: [
      {
        speaker: '老师 👩‍🏫',
        role: 'Cô giáo',
        cn: '古人是怎样造出“山”这个字的？',
        pinyin: 'Gǔrén shì zěnyàng zào chū "shān" zhè ge zì de?',
        vn: 'Người xưa đã sáng tạo ra chữ "Sơn" (Núi) như thế nào vậy các em?'
      },
      {
        speaker: '聪聪 👦',
        role: 'Thông Thông',
        cn: '古人看着高高的三座山峰，画出了“山”字！',
        pinyin: 'Gǔrén kàn zhe gāogāo de sān zuò shānfēng, huà chū le "shān" zì!',
        vn: 'Người xưa nhìn ngắm 3 ngọn núi cao hùng vĩ rồi vẽ thành chữ "山" ạ!'
      },
      {
        speaker: '老师 👩‍🏫',
        role: 'Cô giáo',
        cn: '回答得真棒！汉字真奇妙！',
        pinyin: 'Huídá de zhēn bàng! Hànzì zhēn qímiào!',
        vn: 'Em trả lời xuất sắc lắm! Chữ Hán thật là kỳ diệu!'
      }
    ],

    exercises: [
      {
        id: 'ex_5_1',
        type: 'hieroglyph_match',
        question: 'Chữ tượng hình nào vẽ hình dạng "Ngọn núi ba đỉnh"?',
        options: ['山', '水', '火', '田'],
        correctAnswer: '山',
        explanation: 'Chữ 山 (shān) tượng trưng cho hình dáng các ngọn núi.'
      },
      {
        id: 'ex_5_2',
        type: 'word_selection',
        question: 'Ghép đôi thiên nhiên: "日" (Mặt trời) luôn đi đôi với chữ nào?',
        options: ['月 (Mặt trăng)', '门 (Cánh cổng)', '车 (Cỗ xe)', '草 (Ngọn cỏ)'],
        correctAnswer: '月 (Mặt trăng)',
        explanation: 'Nhật Nguyệt (日月 - Mặt trời và Mặt trăng) cùng chiếu sáng thế gian.'
      }
    ]
  }
];
