/**
 * DỮ LIỆU SÁCH GIÁO KHOA TIẾNG HOA TIỂU HỌC (TRÍCH XUẤT TỪ THƯ MỤC TAILIEUHOC - ĐỦ 66 TRANG SÁCH)
 * Sắp xếp tuần tự từ Trang 1 đến Trang 66 theo đúng thứ tự logic sư phạm và trang sách gốc (Trang 4 - 69).
 * 
 * CẤU TRÚC 2 PHẦN:
 * PHẦN I: NHẬP MÔN CHỮ TƯỢNG HÌNH, CHỮ SỐ & NÉT BÚT CĂN BẢN (Trang 1 - 35 [Trang sách 4 - 38])
 *   - Bài 1: Chữ số 1 - 10 (Trang 4 - 5)
 *   - Bài 2: Con người & Bộ phận cơ thể (Trang 6 - 13)
 *   - Bài 3: Đất trời & Tự nhiên (Trang 14 - 23)
 *   - Bài 4: Muông thú & Cỏ cây (Trang 24 - 33)
 *   - Bài 5: Đồ dùng, Phương tiện & Nét bút cơ bản (Trang 34 - 38)
 * 
 * PHẦN II: CÁC BÀI KHÓA TIỂU HỌC KINH ĐIỂN (Trang 36 - 66 [Trang sách 39 - 69])
 *   - Bài 6: 上学去 - Đi học (Trang 39 - 41)
 *   - Bài 7: 好学生 - Học sinh ngoan (Trang 42 - 45)
 *   - Bài 8: 学校里 - Trong trường học (Trang 46 - 49)
 *   - Bài 9: 课室里 - Trong lớp học (Trang 50 - 53)
 *   - Bài 10: 读书与写字 - Đọc sách và Tập viết (Trang 54 - 57)
 *   - Bài 11: 来拍球 - Cùng đập bóng (Trang 58 - 61)
 *   - Bài 12: 过马路 - An toàn giao thông (Trang 62 - 65)
 *   - Bài 13: 小猫和小羊 - Mèo con và Cừu con (Trang 66 - 69)
 */

export const TEXTBOOK_LESSONS = [
  {
    id: 'tb_01',
    lessonNumber: 1,
    title: '数字篇 (Chữ số 1 - 10)',
    titlePinyin: 'Shùzì piān',
    titleVn: 'Các chữ số từ Một đến Mười',
    part: 'Phần 1: Chữ Tượng Hình & Khởi Động',
    themeColor: 'from-amber-400 to-orange-400',
    borderColor: 'border-amber-300',
    badgeColor: 'bg-amber-500 text-white',
    icon: 'fa-solid fa-arrow-down-1-9',
    pageRange: 'Trang 1 - 2 (Sách gốc: Trang 4 - 5)',
    description: 'Bé làm quen với 10 chữ số đầu tiên trong tiếng Trung qua các nét ngang đơn giản và hình minh họa trực quan.',
    readingText: [
      { cn: '一、二、三、四、五。', pinyin: 'Yī, èr, sān, sì, wǔ.', vn: 'Một, hai, ba, bốn, năm.' },
      { cn: '六、七、八、九、十。', pinyin: 'Liù, qī, bā, jiǔ, shí.', vn: 'Sáu, bảy, tám, chín, mười.' },
      { cn: '一二三四五，六七八九十。', pinyin: 'Yī èr sān sì wǔ, liù qī bā jiǔ shí.', vn: 'Một hai ba bốn năm, sáu bảy tám chín mười.' }
    ],
    vocabulary: [
      { cn: '一', pinyin: 'yī', vn: 'Số 1', strokes: 1, radical: '一', icon: 'fa-solid fa-1', note: 'Một nét ngang thẳng đều.' },
      { cn: '二', pinyin: 'èr', vn: 'Số 2', strokes: 2, radical: '二', icon: 'fa-solid fa-2', note: 'Nét trên ngắn, nét dưới dài.' },
      { cn: '三', pinyin: 'sān', vn: 'Số 3', strokes: 3, radical: '一', icon: 'fa-solid fa-3', note: 'Ba nét ngang song song.' },
      { cn: '四', pinyin: 'sì', vn: 'Số 4', strokes: 5, radical: '囗', icon: 'fa-solid fa-4', note: 'Hình ô vuông bao quanh.' },
      { cn: '五', pinyin: 'wǔ', vn: 'Số 5', strokes: 4, radical: '二', icon: 'fa-solid fa-5', note: 'Tượng trưng cho ngũ hành.' },
      { cn: '六', pinyin: 'liù', vn: 'Số 6', strokes: 4, radical: '八', icon: 'fa-solid fa-6', note: 'Chấm trên đầu, dưới mở ra.' },
      { cn: '七', pinyin: 'qī', vn: 'Số 7', strokes: 2, radical: '一', icon: 'fa-solid fa-7', note: 'Ngang xiên cắt sổ cong móc.' },
      { cn: '八', pinyin: 'bā', vn: 'Số 8', strokes: 2, radical: '八', icon: 'fa-solid fa-8', note: 'Phẩy bên trái, mác bên phải.' },
      { cn: '九', pinyin: 'jiǔ', vn: 'Số 9', strokes: 2, radical: '丿', icon: 'fa-solid fa-9', note: 'Phẩy trước, cong gập móc sau.' },
      { cn: '十', pinyin: 'shí', vn: 'Số 10', strokes: 2, radical: '十', icon: 'fa-solid fa-cross', note: 'Ngang trước sổ sau tạo dấu thập tròn vẹn.' }
    ],
    strokeGuide: [
      { char: '一', pinyin: 'yī', meaning: 'Số 1', strokesTotal: 1, strokeSteps: ['一 (ngang)'], structure: 'Nét ngang cơ bản' },
      { char: '二', pinyin: 'èr', meaning: 'Số 2', strokesTotal: 2, strokeSteps: ['一 (ngang ngắn)', '一 (ngang dài)'], structure: 'Trên ngắn dưới dài' },
      { char: '三', pinyin: 'sān', meaning: 'Số 3', strokesTotal: 3, strokeSteps: ['一 (ngang vừa)', '一 (ngang ngắn)', '一 (ngang dài)'], structure: 'Ba nét đều đặn' },
      { char: '十', pinyin: 'shí', meaning: 'Số 10', strokesTotal: 2, strokeSteps: ['一 (ngang)', '丨 (sổ đứng)'], structure: 'Quy tắc: ngang trước sổ sau' }
    ],
    dialogues: [
      { speaker: '老师 👩‍🏫', role: 'Cô giáo', cn: '小朋友，伸出小手数一数！', pinyin: 'Xiǎopéngyou, shēn chū xiǎoshǒu shǔ yī shǔ!', vn: 'Các em ơi, hãy xòe đôi bàn tay ra đếm nào!' },
      { speaker: '小明 👦', role: 'Tiểu Minh', cn: '一、二、三、四、五，一只手有五个手指！', pinyin: 'Yī, èr, sān, sì, wǔ, yī zhī shǒu yǒu wǔ gè shǒuzhǐ!', vn: 'Một, hai, ba, bốn, năm, một bàn tay có năm ngón tay ạ!' },
      { speaker: '小红 👧', role: 'Tiểu Hồng', cn: '两只手合起来，一共有十个手指！', pinyin: 'Liǎng zhī shǒu hé qǐlái, yīgòng yǒu shí gè shǒuzhǐ!', vn: 'Hai bàn tay gộp lại có tất cả mười ngón tay ạ!' }
    ],
    exercises: [
      {
        id: 'ex_1_1',
        type: 'number_match',
        question: 'Chữ số Hán "五" tương ứng với số mấy?',
        options: ['Số 5', 'Số 3', 'Số 4', 'Số 8'],
        correctAnswer: 'Số 5',
        explanation: '五 (wǔ) nghĩa là số 5.'
      },
      {
        id: 'ex_1_2',
        type: 'fill_number',
        question: 'Điền chữ còn thiếu vào dãy số: "一, 二, 三, __, 五"',
        options: ['四', '六', '八', '十'],
        correctAnswer: '四',
        explanation: 'Sau chữ Tam (三) là chữ Tứ (四 - số 4).'
      }
    ]
  },
  {
    id: 'tb_02',
    lessonNumber: 2,
    title: '人体篇 (Con người & Cơ thể)',
    titlePinyin: 'Réntǐ piān',
    titleVn: 'Con người và các bộ phận cơ thể',
    part: 'Phần 1: Chữ Tượng Hình & Khởi Động',
    themeColor: 'from-sky-400 to-blue-500',
    borderColor: 'border-sky-300',
    badgeColor: 'bg-sky-500 text-white',
    icon: 'fa-solid fa-child',
    pageRange: 'Trang 3 - 10 (Sách gốc: Trang 6 - 13)',
    description: 'Khám phá các chữ tượng hình cổ xưa miêu tả con người và các giác quan: mắt, tai, miệng, răng, tay, chân.',
    readingText: [
      { cn: '人有头，有耳目。', pinyin: 'Rén yǒu tóu, yǒu ěrmù.', vn: 'Người có đầu, có tai và mắt.' },
      { cn: '人有口，有白牙。', pinyin: 'Rén yǒu kǒu, yǒu bái yá.', vn: 'Người có miệng, có hàm răng trắng.' },
      { cn: '双手能劳动，双足走天下。', pinyin: 'Shuāngshǒu néng láodòng, shuāngzú zǒu tiānxià.', vn: 'Đôi tay chăm lao động, đôi chân đi khắp nơi.' }
    ],
    vocabulary: [
      { cn: '人', pinyin: 'rén', vn: 'người', strokes: 2, radical: '人', icon: 'fa-solid fa-user', note: 'Hình ảnh con người đang đứng thẳng.' },
      { cn: '头', pinyin: 'tóu', vn: 'đầu', strokes: 5, radical: '大', icon: 'fa-solid fa-face-smile', note: 'Phần đầu não của cơ thể.' },
      { cn: '耳', pinyin: 'ěr', vn: 'tai', strokes: 6, radical: '耳', icon: 'fa-solid fa-ear-listen', note: 'Hình vẽ vành tai người để lắng nghe.' },
      { cn: '目', pinyin: 'mù', vn: 'mắt', strokes: 5, radical: '目', icon: 'fa-solid fa-eye', note: 'Hình vẽ con mắt đang mở to.' },
      { cn: '手', pinyin: 'shǒu', vn: 'tay', strokes: 4, radical: '手', icon: 'fa-solid fa-hand', note: 'Hình vẽ bàn tay xòe 5 ngón.' },
      { cn: '足', pinyin: 'zú', vn: 'chân', strokes: 7, radical: '足', icon: 'fa-solid fa-shoe-prints', note: 'Hình vẽ bàn chân vững chãi.' },
      { cn: '口', pinyin: 'kǒu', vn: 'miệng', strokes: 3, radical: '口', icon: 'fa-solid fa-comment-dots', note: 'Hình vẽ khuôn miệng mở ra nói cười.' },
      { cn: '牙', pinyin: 'yá', vn: 'răng', strokes: 4, radical: '牙', icon: 'fa-solid fa-teeth', note: 'Hình chiếc răng nhai thức ăn.' }
    ],
    strokeGuide: [
      { char: '人', pinyin: 'rén', meaning: 'Người', strokesTotal: 2, strokeSteps: ['丿 (phẩy trái)', '乀 (mác phải)'], structure: 'Phẩy trước mác sau' },
      { char: '口', pinyin: 'kǒu', meaning: 'Miệng', strokesTotal: 3, strokeSteps: ['丨 (sổ trái)', '𠃍 (ngang gập)', '一 (ngang đáy đóng lại)'], structure: 'Quy tắc: vào trước đóng sau' },
      { char: '手', pinyin: 'shǒu', meaning: 'Tay', strokesTotal: 4, strokeSteps: ['丿 (phẩy ngắn)', '一 (ngang)', '一 (ngang dài)', '亅 (sổ móc cong)'], structure: 'Bàn tay khéo léo' }
    ],
    dialogues: [
      { speaker: '妈妈 👩', role: 'Mẹ', cn: '宝宝，用你的耳朵听什么？', pinyin: 'Bǎobao, yòng nǐ de ěrduo tīng shénme?', vn: 'Bé cưng ơi, đôi tai của con dùng để làm gì?' },
      { speaker: '宝宝 🧒', role: 'Bé', cn: '耳朵听美妙的歌声！', pinyin: 'Ěrduo tīng měimiào de gēshēng!', vn: 'Đôi tai con dùng để nghe bài hát hay ạ!' },
      { speaker: '妈妈 👩', role: 'Mẹ', cn: '那双眼呢？', pinyin: 'Nà shuāngyǎn ne?', vn: 'Thế còn đôi mắt thì sao?' },
      { speaker: '宝宝 🧒', role: 'Bé', cn: '眼睛看美丽的世界！', pinyin: 'Yǎnjing kàn měilì de shìjiè!', vn: 'Đôi mắt con ngắm nhìn thế giới tươi đẹp!' }
    ],
    exercises: [
      {
        id: 'ex_2_1',
        type: 'body_match',
        question: 'Chữ Hán nào có nghĩa là "Đôi mắt"?',
        options: ['目', '耳', '口', '手'],
        correctAnswer: '目',
        explanation: '目 (mù) là chữ tượng hình vẽ đôi mắt.'
      },
      {
        id: 'ex_2_2',
        type: 'meaning_match',
        question: 'Từ "人口" trong tiếng Trung có nghĩa là gì?',
        options: ['Dân số / số miệng ăn trong nhà', 'Bàn tay', 'Hàm răng', 'Đôi chân'],
        correctAnswer: 'Dân số / số miệng ăn trong nhà',
        explanation: '人口 (rénkǒu) nghĩa là nhân khẩu, dân số.'
      }
    ]
  },
  {
    id: 'tb_03',
    lessonNumber: 3,
    title: '自然篇 (Trời Đất & Thiên Nhiên)',
    titlePinyin: 'Zìrán piān',
    titleVn: 'Trời Đất và Thế giới Tự nhiên',
    part: 'Phần 1: Chữ Tượng Hình & Khởi Động',
    themeColor: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-300',
    badgeColor: 'bg-emerald-500 text-white',
    icon: 'fa-solid fa-mountain-sun',
    pageRange: 'Trang 11 - 20 (Sách gốc: Trang 14 - 23)',
    description: 'Học các chữ tượng hình cổ điển về vũ trụ: mặt trời, mặt trăng, sông suối, ngọn lửa, núi non, ruộng đồng, sấm chớp, mưa rơi.',
    readingText: [
      { cn: '天上有日月，地上有山水。', pinyin: 'Tiān shàng yǒu rì yuè, dì shàng yǒu shān shuǐ.', vn: 'Trên trời có mặt trời mặt trăng, dưới đất có núi non sông nước.' },
      { cn: '田里有泥土，天上下大雨。', pinyin: 'Tián lǐ yǒu nítǔ, tiān shàng xià dà yǔ.', vn: 'Trong ruộng có đất đai mầu mỡ, trên trời đổ cơn mưa rào.' },
      { cn: '水火不相容，山水真美丽。', pinyin: 'Shuǐ huǒ bù xiāngróng, shānshuǐ zhēn měilì.', vn: 'Nước lửa vốn đối nhau, giang sơn phong cảnh tuyệt đẹp.' }
    ],
    vocabulary: [
      { cn: '日', pinyin: 'rì', vn: 'mặt trời / ngày', strokes: 4, radical: '日', icon: 'fa-solid fa-sun', note: 'Vòng tròn có chấm ở giữa thời cổ.' },
      { cn: '月', pinyin: 'yuè', vn: 'mặt trăng / tháng', strokes: 4, radical: '月', icon: 'fa-solid fa-moon', note: 'Vầng trăng khuyết chiếu sáng ban đêm.' },
      { cn: '水', pinyin: 'shuǐ', vn: 'nước / sông suối', strokes: 4, radical: '水', icon: 'fa-solid fa-droplet', note: 'Dòng nước uốn lượn chảy róc rách.' },
      { cn: '火', pinyin: 'huǒ', vn: 'ngọn lửa', strokes: 4, radical: '火', icon: 'fa-solid fa-fire', note: 'Đốm lửa bập bùng ấm áp.' },
      { cn: '山', pinyin: 'shān', vn: 'ngọn núi', strokes: 3, radical: '山', icon: 'fa-solid fa-mountain', note: 'Ba đỉnh núi cao chọc trời.' },
      { cn: '石', pinyin: 'shí', vn: 'hòn đá', strokes: 5, radical: '石', icon: 'fa-solid fa-gem', note: 'Tảng đá dưới vách đá dựng đứng.' },
      { cn: '田', pinyin: 'tián', vn: 'ruộng lúa', strokes: 5, radical: '田', icon: 'fa-solid fa-border-all', note: 'Mảnh ruộng được chia thành 4 bờ thẳng.' },
      { cn: '土', pinyin: 'tǔ', vn: 'đất đai', strokes: 3, radical: '土', icon: 'fa-solid fa-mound', note: 'Cây mầm vươn lên từ lòng đất mẹ.' },
      { cn: '雨', pinyin: 'yǔ', vn: 'cơn mưa', strokes: 8, radical: '雨', icon: 'fa-solid fa-cloud-rain', note: 'Bầu trời giăng mây tuôn rơi những giọt mưa.' },
      { cn: '电', pinyin: 'diàn', vn: 'sấm chớp / điện', strokes: 5, radical: '田', icon: 'fa-solid fa-bolt', note: 'Tia chớp uốn lượn xé toạc màn mây.' }
    ],
    strokeGuide: [
      { char: '山', pinyin: 'shān', meaning: 'Ngọn núi', strokesTotal: 3, strokeSteps: ['丨 (sổ giữa)', '𠄌 (sổ gập)', '丨 (sổ phải)'], structure: 'Giữa trước hai bên sau' },
      { char: '水', pinyin: 'shuǐ', meaning: 'Dòng nước', strokesTotal: 4, strokeSteps: ['亅 (sổ móc)', '㇇ (ngang phẩy)', '丿 (phẩy ngắn)', '乀 (mác)'], structure: 'Sổ móc giữa trước' },
      { char: '火', pinyin: 'huǒ', meaning: 'Ngọn lửa', strokesTotal: 4, strokeSteps: ['丶 (chấm trái)', '丿 (phẩy phải)', '丿 (phẩy dài)', '乀 (mác)'], structure: 'Hai chấm hai bên trước, nét chính sau' }
    ],
    dialogues: [
      { speaker: '爸爸 👨', role: 'Bố', cn: '你看远处的山，像不像汉字“山”？', pinyin: 'Nǐ kàn yuǎnchù de shān, xiàng bù xiàng hànzì "shān"?', vn: 'Con nhìn ngọn núi đằng xa kìa, có giống chữ Hán "Sơn" (山) không?' },
      { speaker: '天天 👦', role: 'Thiên Thiên', cn: '真像！中间最高，旁边两座矮一点！', pinyin: 'Zhēn xiàng! Zhōngjiān zuì gāo, pángbiān liǎng zuò ǎi yīdiǎn!', vn: 'Giống thật bố ạ! Đỉnh ở giữa cao nhất, hai đỉnh bên cạnh thấp hơn một chút!' }
    ],
    exercises: [
      {
        id: 'ex_3_1',
        type: 'nature_match',
        question: 'Chữ nào dưới đây mang ý nghĩa là "Dòng nước"?',
        options: ['水', '火', '土', '田'],
        correctAnswer: '水',
        explanation: '水 (shuǐ) tượng trưng cho dòng nước.'
      },
      {
        id: 'ex_3_2',
        type: 'compound_word',
        question: 'Từ "山水" (Sơn Thủy) trong tiếng Trung chỉ điều gì?',
        options: ['Phong cảnh thiên nhiên non nước', 'Mặt trời chiếu sáng', 'Cơn mưa to', 'Đá sỏi'],
        correctAnswer: 'Phong cảnh thiên nhiên non nước',
        explanation: '山水 (shānshuǐ) chỉ núi non và sông suối hữu tình.'
      }
    ]
  },
  {
    id: 'tb_04',
    lessonNumber: 4,
    title: '生灵篇 (Muông Thú & Hoa Cỏ)',
    titlePinyin: 'Shēnglíng piān',
    titleVn: 'Động vật và Cỏ cây muôn màu',
    part: 'Phần 1: Chữ Tượng Hình & Khởi Động',
    themeColor: 'from-green-400 to-lime-500',
    borderColor: 'border-green-300',
    badgeColor: 'bg-green-500 text-white',
    icon: 'fa-solid fa-paw',
    pageRange: 'Trang 21 - 30 (Sách gốc: Trang 24 - 33)',
    description: 'Bé học các chữ chỉ loài vật thân thuộc và thiên nhiên cỏ cây: chim bay, thú chạy, cá bơi, trâu bò, dê cừu, ngựa, hoa cỏ, cây cối.',
    readingText: [
      { cn: '鸟儿飞，鱼儿游。', pinyin: 'Niǎor fēi, yúr yóu.', vn: 'Chim tung cánh bay, cá tung tăng bơi.' },
      { cn: '草地上，有牛羊。', pinyin: 'Cǎodì shàng, yǒu niú yáng.', vn: 'Trên bãi cỏ xanh, có đàn bò và đàn cừu.' },
      { cn: '小马快快跑，花草绿油油。', pinyin: 'Xiǎomǎ kuàikuài pǎo, huācǎo lǜyóuyóu.', vn: 'Chú ngựa phi nhanh, cỏ hoa xanh mơn mởn.' }
    ],
    vocabulary: [
      { cn: '鸟', pinyin: 'niǎo', vn: 'con chim', strokes: 5, radical: '鸟', icon: 'fa-solid fa-dove', note: 'Hình con chim có mỏ, cánh và mắt sáng.' },
      { cn: '虫', pinyin: 'chóng', vn: 'sâu bọ / côn trùng', strokes: 6, radical: '虫', icon: 'fa-solid fa-bug', note: 'Con sâu uốn lượn bò trên lá.' },
      { cn: '鱼', pinyin: 'yú', vn: 'con cá', strokes: 8, radical: '鱼', icon: 'fa-solid fa-fish', note: 'Đầu cá nhọn, mình có vảy và đuôi xòe.' },
      { cn: '牛', pinyin: 'niú', vn: 'con bò / trâu', strokes: 4, radical: '牛', icon: 'fa-solid fa-cow', note: 'Đầu bò có cặp sừng cong mạnh mẽ.' },
      { cn: '羊', pinyin: 'yáng', vn: 'con cừu / dê', strokes: 6, radical: '羊', icon: 'fa-solid fa-sheep', note: 'Hai sừng xòe trên đầu và bộ lông dày.' },
      { cn: '马', pinyin: 'mǎ', vn: 'con ngựa', strokes: 3, radical: '马', icon: 'fa-solid fa-horse', note: 'Bờm ngựa tung bay trong gió khi phi.' },
      { cn: '草', pinyin: 'cǎo', vn: 'ngọn cỏ', strokes: 9, radical: '艹', icon: 'fa-solid fa-seedling', note: 'Có bộ thảo mầm cây sinh sôi nảy nở.' },
      { cn: '木', pinyin: 'mù', vn: 'cây cối / gỗ', strokes: 4, radical: '木', icon: 'fa-solid fa-tree', note: 'Thân cây thẳng đứng, cành xòe sang hai bên, rễ cắm sâu vào đất.' }
    ],
    strokeGuide: [
      { char: '牛', pinyin: 'niú', meaning: 'Con bò', strokesTotal: 4, strokeSteps: ['丿 (phẩy ngắn)', '一 (ngang ngắn)', '一 (ngang dài)', '丨 (sổ thẳng xuyên qua)'], structure: 'Sổ đứng thẳng giữa' },
      { char: '木', pinyin: 'mù', meaning: 'Cây cối', strokesTotal: 4, strokeSteps: ['一 (ngang)', '丨 (sổ đứng)', '丿 (phẩy trái)', '乀 (mác phải)'], structure: 'Ngang trước sổ sau, phẩy trước mác sau' }
    ],
    dialogues: [
      { speaker: '小兰 👧', role: 'Tiểu Lan', cn: '草地上有什么动物在吃草？', pinyin: 'Cǎodì shàng yǒu shénme dòngwù zài chī cǎo?', vn: 'Trên bãi cỏ có con vật nào đang ăn cỏ thế bạn?' },
      { speaker: '小刚 👦', role: 'Tiểu Cương', cn: '有大水牛，还有小白羊！', pinyin: 'Yǒu dà shuǐniú, hái yǒu xiǎo báiyáng!', vn: 'Có chú trâu nước to và cả những chú cừu trắng nữa!' }
    ],
    exercises: [
      {
        id: 'ex_4_1',
        type: 'animal_match',
        question: 'Chữ nào vẽ con cá có vảy và đuôi bơi lội dưới nước?',
        options: ['鱼', '鸟', '虫', '羊'],
        correctAnswer: '鱼',
        explanation: '鱼 (yú) là chữ tượng hình của loài cá.'
      },
      {
        id: 'ex_4_2',
        type: 'nature_match',
        question: 'Chữ "木" thêm một nét ngang ở dưới sẽ tạo thành chữ "Bản" (本 - gốc rễ), vậy "木" nghĩa là gì?',
        options: ['Cây cối / Gỗ', 'Bãi cỏ', 'Con bò', 'Cánh chim'],
        correctAnswer: 'Cây cối / Gỗ',
        explanation: '木 (mù) có nghĩa là cây cối hoặc chất liệu gỗ.'
      }
    ]
  },
  {
    id: 'tb_05',
    lessonNumber: 5,
    title: '物用篇 (Đồ Dùng, Xe Cộ & Bút Thuận)',
    titlePinyin: 'Wùyòng piān',
    titleVn: 'Đồ dùng sinh hoạt, Phương tiện & Nét bút',
    part: 'Phần 1: Chữ Tượng Hình & Khởi Động',
    themeColor: 'from-violet-400 to-purple-500',
    borderColor: 'border-violet-300',
    badgeColor: 'bg-violet-500 text-white',
    icon: 'fa-solid fa-shapes',
    pageRange: 'Trang 31 - 35 (Sách gốc: Trang 34 - 38)',
    description: 'Học các chữ tượng hình đồ vật: áo, khăn, dao, thìa, cung, cổng, thuyền, xe cùng bảng quy tắc nét bút thuận căn bản.',
    readingText: [
      { cn: '穿衣服，带毛巾。', pinyin: 'Chuān yīfu, dài máojīn.', vn: 'Mặc áo chỉnh tề, mang khăn sạch sẽ.' },
      { cn: '推开门，坐上车。', pinyin: 'Tuī kāi mén, zuò shàng chē.', vn: 'Mở rộng cánh cửa, ngồi lên cỗ xe.' },
      { cn: '小小舟儿水中漂，学好笔顺写字好。', pinyin: 'Xiǎoxiǎo zhōu ér shuǐ zhōng piāo, xué hǎo bǐshùn xiězì hǎo.', vn: 'Chiếc thuyền nho nhỏ lững lờ trôi, học thuộc nét bút để viết chữ đẹp.' }
    ],
    vocabulary: [
      { cn: '衣', pinyin: 'yī', vn: 'quần áo', strokes: 6, radical: '衣', icon: 'fa-solid fa-shirt', note: 'Hình áo có cổ áo và vạt áo chéo.' },
      { cn: '巾', pinyin: 'jīn', vn: 'khăn vải', strokes: 3, radical: '巾', icon: 'fa-solid fa-rug', note: 'Miếng vải dệt rủ xuống mềm mại.' },
      { cn: '刀', pinyin: 'dāo', vn: 'con dao', strokes: 2, radical: '刀', icon: 'fa-solid fa-utensils', note: 'Lưỡi dao sắc bén và cán cầm.' },
      { cn: '勺', pinyin: 'sháo', vn: 'cái thìa / muỗng', strokes: 3, radical: '勹', icon: 'fa-solid fa-spoon', note: 'Thìa múc canh có đồ ăn bên trong.' },
      { cn: '门', pinyin: 'mén', vn: 'cánh cổng / cửa', strokes: 3, radical: '门', icon: 'fa-solid fa-door-open', note: 'Hai cánh cửa ngôi nhà mở ra đón khách.' },
      { cn: '舟', pinyin: 'zhōu', vn: 'con thuyền / đò', strokes: 6, radical: '舟', icon: 'fa-solid fa-sailboat', note: 'Chiếc thuyền độc mộc lướt trên sông.' },
      { cn: '车', pinyin: 'chē', vn: 'cỗ xe / xe hơi', strokes: 4, radical: '车', icon: 'fa-solid fa-car-side', note: 'Khung xe và hai bánh xe lăn tròn.' }
    ],
    strokeGuide: [
      { char: '门', pinyin: 'mén', meaning: 'Cánh cửa', strokesTotal: 3, strokeSteps: ['丶 (chấm)', '丨 (sổ đứng)', '𠃍 (ngang gập móc)'], structure: 'Bên trái trước, bên phải sau' },
      { char: '车', pinyin: 'chē', meaning: 'Cỗ xe', strokesTotal: 4, strokeSteps: ['一 (ngang)', 'ㄥ (phẩy gập)', '一 (ngang dài)', '丨 (sổ đứng thẳng)'], structure: 'Trục thẳng xỏ xuyên qua' }
    ],
    dialogues: [
      { speaker: '老师 👩‍🏫', role: 'Cô giáo', cn: '汉字基本的笔画有哪些？', pinyin: 'Hànzì jīběn de bǐhuà yǒu nǎxiē?', vn: 'Các nét bút cơ bản của chữ Hán gồm có những nét nào?' },
      { speaker: '全班 👧👦', role: 'Cả lớp', cn: '横、竖、撇、捺、点、提、折、钩！', pinyin: 'Héng, shù, piě, nà, diǎn, tí, zhé, gōu!', vn: 'Ngang, Sổ, Phẩy, Mác, Chấm, Hất, Gập, Móc ạ!' }
    ],
    exercises: [
      {
        id: 'ex_5_1',
        type: 'item_match',
        question: 'Chữ Hán nào tượng trưng cho "Cỗ xe"?',
        options: ['车', '舟', '门', '刀'],
        correctAnswer: '车',
        explanation: '车 (chē) nghĩa là chiếc xe.'
      },
      {
        id: 'ex_5_2',
        type: 'stroke_rule',
        question: 'Quy tắc bút thuận cơ bản khi viết chữ Hán là gì?',
        options: ['Từ trên xuống dưới, từ trái sang phải', 'Từ dưới lên trên', 'Bên ngoài đóng trước, bên trong viết sau', 'Tùy ý không theo thứ tự'],
        correctAnswer: 'Từ trên xuống dưới, từ trái sang phải',
        explanation: 'Quy tắc căn bản nhất: Trên trước dưới sau, trái trước phải sau.'
      }
    ]
  },
  {
    id: 'tb_06',
    lessonNumber: 6,
    title: '上学去 (Đi Học)',
    titlePinyin: 'Shàngxué qù',
    titleVn: 'Bé đến trường ngày khai giảng',
    part: 'Phần 2: Các Bài Khóa Tiểu Học',
    themeColor: 'from-amber-400 to-orange-400',
    borderColor: 'border-amber-300',
    badgeColor: 'bg-amber-500 text-white',
    icon: 'fa-solid fa-school',
    pageRange: 'Trang 36 - 38 (Sách gốc: Trang 39 - 41)',
    description: 'Bé làm quen với ngày tựu trường rộn ràng, chào ba mẹ trước khi đi học và chào thầy cô bạn bè.',
    readingText: [
      { cn: '开学了，', pinyin: 'Kāixué le,', vn: 'Tựu trường rồi,' },
      { cn: '小朋友，', pinyin: 'xiǎopéngyou,', vn: 'các bạn nhỏ ơi,' },
      { cn: '上学去。', pinyin: 'shàngxué qù.', vn: 'chúng mình cùng đi học thôi.' }
    ],
    vocabulary: [
      { cn: '开学', pinyin: 'kāixué', vn: 'khai giảng / tựu trường', strokes: 7, radical: '廾', icon: 'fa-solid fa-bell', note: 'Bắt đầu một năm học mới đầy niềm vui.' },
      { cn: '了', pinyin: 'le', vn: 'rồi (trợ từ)', strokes: 2, radical: '乛', icon: 'fa-solid fa-check', note: 'Biểu thị sự việc bắt đầu diễn ra.' },
      { cn: '小朋友', pinyin: 'xiǎopéngyou', vn: 'bạn nhỏ / em nhỏ', strokes: 19, radical: '小', icon: 'fa-solid fa-child-reaching', note: 'Dùng để gọi các bé cùng trang lứa.' },
      { cn: '上学', pinyin: 'shàngxué', vn: 'đi học', strokes: 11, radical: '一', icon: 'fa-solid fa-book-open-reader', note: 'Đến trường học tập điều hay.' },
      { cn: '去', pinyin: 'qù', vn: 'đi', strokes: 5, radical: '厶', icon: 'fa-solid fa-person-walking', note: 'Di chuyển đến nơi khác.' }
    ],
    strokeGuide: [
      { char: '学', pinyin: 'xué', meaning: 'Học', strokesTotal: 8, strokeSteps: ['丶 (chấm)', '丶 (chấm)', '丿 (phẩy)', '丶 (chấm)', '乛 (ngang gập)', '一 (ngang)', '亅 (sổ móc)', '一 (ngang)'], structure: 'Phần trên là bộ lạp xước/tiểu cách điệu, dưới là chữ Tử (con trẻ)' },
      { char: '去', pinyin: 'qù', meaning: 'Đi', strokesTotal: 5, strokeSteps: ['一 (ngang)', '丨 (sổ)', '一 (ngang dài)', 'ㄥ (phẩy gập)', '丶 (chấm)'], structure: 'Trên chữ Thổ (đất), dưới bộ Khư' }
    ],
    dialogues: [
      { speaker: '小红 👧', role: 'Tiểu Hồng', cn: '早上好！你去哪里？', pinyin: 'Zǎoshang hǎo! Nǐ qù nǎlǐ?', vn: 'Chào buổi sáng bạn! Bạn đi đâu thế?' },
      { speaker: '小明 👦', role: 'Tiểu Minh', cn: '我去上学。我们一起走吧！', pinyin: 'Wǒ qù shàngxué. Wǒmen yīqǐ zǒu ba!', vn: 'Mình đi học đây. Chúng mình cùng đi chung nhé!' },
      { speaker: '小红 👧', role: 'Tiểu Hồng', cn: '好啊，开学了真高兴！', pinyin: 'Hǎo a, kāixué le zhēn gāoxìng!', vn: 'Được chứ, tựu trường rồi vui quá đi!' }
    ],
    exercises: [
      {
        id: 'ex_6_1',
        type: 'word_match',
        question: 'Từ "上学" có nghĩa là gì?',
        options: ['Đi học', 'Tan học', 'Đi chơi', 'Về nhà'],
        correctAnswer: 'Đi học',
        explanation: '上学 (shàngxué) nghĩa là đi học, tới trường.'
      },
      {
        id: 'ex_6_2',
        type: 'sentence_order',
        question: 'Chọn câu chào đúng khi đến trường:',
        options: ['老师早上好！', '我要睡觉。', '不爱学习。', '再见妈妈。'],
        correctAnswer: '老师早上好！',
        explanation: '"老师早上好！" nghĩa là Em chào buổi sáng cô giáo!'
      }
    ]
  },
  {
    id: 'tb_07',
    lessonNumber: 7,
    title: '好学生 (Học Sinh Ngoan)',
    titlePinyin: 'Hǎo xuésheng',
    titleVn: 'Em là học sinh chăm ngoan',
    part: 'Phần 2: Các Bài Khóa Tiểu Học',
    themeColor: 'from-pink-400 to-rose-500',
    borderColor: 'border-pink-300',
    badgeColor: 'bg-rose-500 text-white',
    icon: 'fa-solid fa-graduation-cap',
    pageRange: 'Trang 39 - 42 (Sách gốc: Trang 42 - 45)',
    description: 'Bé học cách làm một học sinh gương mẫu: yêu việc học tập, kính trọng thầy cô và đoàn kết yêu mến bạn bè bè.',
    readingText: [
      { cn: '我是好学生，', pinyin: 'Wǒ shì hǎo xuésheng,', vn: 'Em là học sinh ngoan,' },
      { cn: '天天上学去。', pinyin: 'tiāntiān shàngxué qù.', vn: 'ngày ngày đều chăm chỉ đến trường.' },
      { cn: '爱学习，爱老师，爱同学。', pinyin: 'Ài xuéxí, ài lǎoshī, ài tóngxué.', vn: 'Yêu học tập, kính yêu thầy cô, quý mến bạn học.' }
    ],
    vocabulary: [
      { cn: '好', pinyin: 'hǎo', vn: 'tốt / ngoan / đẹp', strokes: 6, radical: '女', icon: 'fa-solid fa-thumbs-up', note: 'Bộ Nữ ghép với chữ Tử (mẹ con hòa thuận là điều tốt).' },
      { cn: '学生', pinyin: 'xuésheng', vn: 'học sinh', strokes: 13, radical: '子 / 生', icon: 'fa-solid fa-user-graduate', note: 'Người đi học tiếp thu tri thức.' },
      { cn: '天天', pinyin: 'tiāntiān', vn: 'ngày ngày / mỗi ngày', strokes: 8, radical: '大', icon: 'fa-solid fa-calendar-days', note: 'Chỉ tính chuyên cần, đều đặn.' },
      { cn: '爱', pinyin: 'ài', vn: 'yêu / quý mến', strokes: 10, radical: '爫', icon: 'fa-solid fa-heart', note: 'Tấm lòng yêu thương chân thành.' },
      { cn: '学习', pinyin: 'xuéxí', vn: 'học tập', strokes: 11, radical: '子 / 乙', icon: 'fa-solid fa-book-open', note: 'Học hỏi và thực hành rèn luyện.' },
      { cn: '我是', pinyin: 'wǒ shì', vn: 'tôi là / em là', strokes: 16, radical: '戈 / 日', icon: 'fa-solid fa-id-badge', note: 'Dùng để tự giới thiệu bản thân.' }
    ],
    strokeGuide: [
      { char: '好', pinyin: 'hǎo', meaning: 'Tốt/Ngoan', strokesTotal: 6, strokeSteps: ['𡿨 (phẩy chấm)', '丿 (phẩy)', '一 (ngang)', '乛 (ngang gập)', '亅 (sổ móc)', '一 (ngang)'], structure: 'Bên trái bộ Nữ (女), bên phải chữ Tử (子)' },
      { char: '我', pinyin: 'wǒ', meaning: 'Tôi/Em', strokesTotal: 7, strokeSteps: ['丿 (phẩy ngắn)', '一 (ngang)', '亅 (sổ móc)', '提 (hất)', '㇂ (nghiêng móc)', '丿 (phẩy)', '丶 (chấm)'], structure: 'Chữ đơn thể quan trọng' }
    ],
    dialogues: [
      { speaker: '老师 👩‍🏫', role: 'Cô giáo', cn: '谁是听话的好学生？', pinyin: 'Shéi shì tīnghuà de hǎo xuésheng?', vn: 'Ai là học sinh ngoan biết nghe lời nào?' },
      { speaker: '东东 👦', role: 'Đông Đông', cn: '老师，我是好学生！我爱学习！', pinyin: 'Lǎoshī, wǒ shì hǎo xuésheng! Wǒ ài xuéxí!', vn: 'Thưa cô, em là học sinh ngoan ạ! Em rất yêu việc học!' }
    ],
    exercises: [
      {
        id: 'ex_7_1',
        type: 'vocab_meaning',
        question: 'Từ "好学生" có nghĩa là gì?',
        options: ['Học sinh ngoan / giỏi', 'Thầy giáo giỏi', 'Bạn bè thân', 'Trường học to'],
        correctAnswer: 'Học sinh ngoan / giỏi',
        explanation: '好 (hǎo: tốt, ngoan) + 学生 (xuésheng: học sinh) = học sinh ngoan.'
      },
      {
        id: 'ex_7_2',
        type: 'sentence_complete',
        question: 'Điền từ thích hợp: "我____好学生。"',
        options: ['是', '去', '吃', '上'],
        correctAnswer: '是',
        explanation: '"我是好学生" nghĩa là Em là học sinh ngoan.'
      }
    ]
  },
  {
    id: 'tb_08',
    lessonNumber: 8,
    title: '学校里 (Trong Trường Học)',
    titlePinyin: 'Xuéxiào lǐ',
    titleVn: 'Ngôi trường mến yêu của chúng em',
    part: 'Phần 2: Các Bài Khóa Tiểu Học',
    themeColor: 'from-blue-400 to-indigo-500',
    borderColor: 'border-blue-300',
    badgeColor: 'bg-indigo-500 text-white',
    icon: 'fa-solid fa-chalkboard-user',
    pageRange: 'Trang 43 - 46 (Sách gốc: Trang 46 - 49)',
    description: 'Bé khám phá trường học thân thương: có thầy cô tận tụy chỉ dạy, có bạn bè cùng nhau học hát múa ca và chơi trò chơi tập thể.',
    readingText: [
      { cn: '学校里，', pinyin: 'Xuéxiào lǐ,', vn: 'Ở trong trường,' },
      { cn: '有老师，有同学。', pinyin: 'yǒu lǎoshī, yǒu tóngxué.', vn: 'có thầy cô giáo, có bạn bè cùng lớp.' },
      { cn: '大家在一起，', pinyin: 'Dàjiā zài yīqǐ,', vn: 'Mọi người quây quần bên nhau,' },
      { cn: '唱歌又游戏。', pinyin: 'chànggē yòu yóuxì.', vn: 'vừa hát ca lại vừa cùng chơi đùa.' }
    ],
    vocabulary: [
      { cn: '学校', pinyin: 'xuéxiào', vn: 'trường học', strokes: 18, radical: '木', icon: 'fa-solid fa-school-flag', note: 'Nơi chúng mình học tập và vui chơi.' },
      { cn: '老师', pinyin: 'lǎoshī', vn: 'thầy cô giáo', strokes: 12, radical: '老 / 巾', icon: 'fa-solid fa-chalkboard-teacher', note: 'Người chỉ dạy cho chúng ta những bài học hay.' },
      { cn: '同学', pinyin: 'tóngxué', vn: 'bạn cùng trường / cùng lớp', strokes: 14, radical: '口 / 子', icon: 'fa-solid fa-user-group', note: 'Những người bạn cùng cắp sách tới trường.' },
      { cn: '大家', pinyin: 'dàjiā', vn: 'tất cả mọi người / cả nhà', strokes: 13, radical: '大 / 宀', icon: 'fa-solid fa-users', note: 'Chỉ tập thể đông vui.' },
      { cn: '游戏', pinyin: 'yóuxì', vn: 'trò chơi / chơi đùa', strokes: 21, radical: '氵 / 戈', icon: 'fa-solid fa-gamepad', note: 'Các hoạt động vui chơi giải trí lành mạnh.' }
    ],
    strokeGuide: [
      { char: '校', pinyin: 'xiào', meaning: 'Trường', strokesTotal: 10, strokeSteps: ['一 (ngang)', '丨 (sổ)', '丿 (phẩy)', '丶 (chấm)', '丶 (chấm)', '一 (ngang)', '丿 (phẩy)', '丿 (phẩy)', '㇇ (ngang phẩy)', '乀 (mác)'], structure: 'Bên trái bộ Mộc (木), bên phải chữ Giao (交)' },
      { char: '老', pinyin: 'lǎo', meaning: 'Già/Thầy', strokesTotal: 6, strokeSteps: ['一 (ngang)', '丨 (sổ)', '一 (ngang dài)', '丿 (phẩy xiên dài)', '匕 (thìa: phẩy, cong móc)'], structure: 'Chữ bộ Lão kính cẩn' }
    ],
    dialogues: [
      { speaker: '小明 👦', role: 'Tiểu Minh', cn: '学校里真热闹！', pinyin: 'Xuéxiào lǐ zhēn rènào!', vn: 'Trong trường học nhộn nhịp quá!' },
      { speaker: '小红 👧', role: 'Tiểu Hồng', cn: '你看，老师带着大家在操场上做游戏呢！', pinyin: 'Nǐ kàn, lǎoshī dài zhe dàjiā zài cāochǎng shàng zuò yóuxì ne!', vn: 'Cậu nhìn kìa, cô giáo đang dẫn các bạn chơi trò chơi trên sân trường đó!' }
    ],
    exercises: [
      {
        id: 'ex_8_1',
        type: 'word_check',
        question: 'Từ nào có nghĩa là "Thầy cô giáo"?',
        options: ['老师', '同学', '学生', '朋友'],
        correctAnswer: '老师',
        explanation: '老师 (lǎoshī) nghĩa là thầy giáo hoặc cô giáo.'
      },
      {
        id: 'ex_8_2',
        type: 'comprehension',
        question: 'Trong bài khóa, ở trường mọi người cùng làm gì?',
        options: ['唱歌又游戏 (Hát ca và chơi trò chơi)', 'Đi ngủ', 'Khóc nhè', 'Về nhà ngay'],
        correctAnswer: '唱歌又游戏 (Hát ca và chơi trò chơi)',
        explanation: 'Trích câu khóa: "大家在一起，唱歌又游戏。"'
      }
    ]
  },
  {
    id: 'tb_09',
    lessonNumber: 9,
    title: '课室里 (Trong Lớp Học)',
    titlePinyin: 'Kèshì lǐ',
    titleVn: 'Khung cảnh lớp học ngăn nắp',
    part: 'Phần 2: Các Bài Khóa Tiểu Học',
    themeColor: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-300',
    badgeColor: 'bg-cyan-600 text-white',
    icon: 'fa-solid fa-shapes',
    pageRange: 'Trang 47 - 50 (Sách gốc: Trang 50 - 53)',
    description: 'Lớp học của chúng em rất sạch sẽ, có bàn ghế thẳng hàng, bảng đen to rõ, các bạn chăm chú lắng nghe cô giáo giảng bài.',
    readingText: [
      { cn: '课室里，', pinyin: 'Kèshì lǐ,', vn: 'Trong phòng học,' },
      { cn: '桌椅整齐，黑板大。', pinyin: 'zhuōyǐ zhěngqí, hēibǎn dà.', vn: 'bàn ghế ngay ngắn, bảng đen thật to.' },
      { cn: '老师讲课，', pinyin: 'Lǎoshī jiǎngkè,', vn: 'Cô giáo giảng bài,' },
      { cn: '我们用心听。', pinyin: 'wǒmen yòngxīn tīng.', vn: 'chúng em chăm chú lắng nghe.' }
    ],
    vocabulary: [
      { cn: '课室', pinyin: 'kèshì', vn: 'phòng học / lớp học', strokes: 19, radical: '讠 / 宀', icon: 'fa-solid fa-door-open', note: 'Không gian học tập yên tĩnh, sạch đẹp.' },
      { cn: '桌椅', pinyin: 'zhuōyǐ', vn: 'bàn ghế', strokes: 22, radical: '木', icon: 'fa-solid fa-chair', note: 'Vật dụng cho học sinh ngồi học bài.' },
      { cn: '整齐', pinyin: 'zhěngqí', vn: 'ngay ngắn / ngăn nắp', strokes: 26, radical: '攵 / 齐', icon: 'fa-solid fa-align-left', note: 'Sắp xếp trật tự thẳng hàng lối.' },
      { cn: '黑板', pinyin: 'hēibǎn', vn: 'bảng đen', strokes: 20, radical: '黑 / 木', icon: 'fa-solid fa-square', note: 'Nơi thầy cô viết những kiến thức bổ ích.' },
      { cn: '用心听', pinyin: 'yòngxīn tīng', vn: 'chăm chú lắng nghe', strokes: 16, radical: '用 / 心 / 口', icon: 'fa-solid fa-ear-listen', note: 'Dùng cả trái tim để tiếp thu lời dạy.' }
    ],
    strokeGuide: [
      { char: '桌', pinyin: 'zhuō', meaning: 'Cái bàn', strokesTotal: 10, strokeSteps: ['丨 (sổ)', '一 (ngang)', '丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '一 (ngang)', '木 (bộ mộc bên dưới)'], structure: 'Chữ trên dưới, dưới có bộ Mộc làm chân' },
      { char: '听', pinyin: 'tīng', meaning: 'Nghe', strokesTotal: 7, strokeSteps: ['丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '丿 (phẩy)', '一 (ngang)', '丨 (sổ đứng)'], structure: 'Bên trái bộ Khẩu (miệng), bên phải chữ Cân' }
    ],
    dialogues: [
      { speaker: '班长 👦', role: 'Lớp trưởng', cn: '上课了，请大家坐好！', pinyin: 'Shàngkè le, qǐng dàjiā zuò hǎo!', vn: 'Đến giờ vào học rồi, xin mời các bạn ngồi ngay ngắn!' },
      { speaker: '老师 👩‍🏫', role: 'Cô giáo', cn: '同学们，今天我们来学习新课。', pinyin: 'Tóngxuémen, jīntiān wǒmen lái xuéxí xīn kè.', vn: 'Các em học sinh, hôm nay chúng ta cùng học bài mới nhé.' },
      { speaker: '全班 👧👦', role: 'Cả lớp', cn: '老师好！我们认真听！', pinyin: 'Lǎoshī hǎo! Wǒmen rènzhēn tīng!', vn: 'Chúng con chào cô ạ! Chúng con sẽ chăm chú lắng nghe!' }
    ],
    exercises: [
      {
        id: 'ex_9_1',
        type: 'word_match',
        question: 'Từ "黑板" có nghĩa là gì?',
        options: ['Bảng đen', 'Cái bàn', 'Cái ghế', 'Cặp sách'],
        correctAnswer: 'Bảng đen',
        explanation: '黑 (đen) + 板 (tấm ván) = 黑板 (bảng đen).'
      },
      {
        id: 'ex_9_2',
        type: 'listening_rule',
        question: 'Khi cô giáo giảng bài ("老师讲课"), các bạn nhỏ cần làm gì?',
        options: ['用心听 (Chăm chú lắng nghe)', 'Nói chuyện riêng', 'Ngủ gật', 'Chạy nhảy tung tăng'],
        correctAnswer: '用心听 (Chăm chú lắng nghe)',
        explanation: 'Trích câu bài khóa: "老师讲课，我们用心听。"'
      }
    ]
  },
  {
    id: 'tb_10',
    lessonNumber: 10,
    title: '读书写字 (Đọc Sách Và Tập Viết)',
    titlePinyin: 'Dúshū xiězì',
    titleVn: 'Bé rèn nét chữ và đọc bài to rõ',
    part: 'Phần 2: Các Bài Khóa Tiểu Học',
    themeColor: 'from-teal-400 to-emerald-600',
    borderColor: 'border-teal-300',
    badgeColor: 'bg-emerald-600 text-white',
    icon: 'fa-solid fa-pen-nib',
    pageRange: 'Trang 51 - 54 (Sách gốc: Trang 54 - 57)',
    description: 'Cầm bút nắn nót từng nét chữ vuông vắn, mở sách đọc bài rành mạch giúp bé rèn luyện tính kiên nhẫn và mở mang hiểu biết.',
    readingText: [
      { cn: '拿笔写字，', pinyin: 'Ná bǐ xiězì,', vn: 'Cầm bút nắn nót viết từng nét chữ,' },
      { cn: '打开书本读书。', pinyin: 'dǎkāi shūběn dúshū.', vn: 'mở trang sách ra say sưa đọc bài.' },
      { cn: '认认真真写，', pinyin: 'Rènrèn-zhēnzhēn xiě,', vn: 'Tập viết thật chăm chỉ, cẩn thận,' },
      { cn: '整整齐齐看。', pinyin: 'zhěngzhěng-qíqí kàn.', vn: 'trang vở luôn sạch đẹp, tinh tươm.' }
    ],
    vocabulary: [
      { cn: '写字', pinyin: 'xiězì', vn: 'viết chữ', strokes: 11, radical: '冖 / 宀', icon: 'fa-solid fa-pen', note: 'Dùng bút viết lại các kí tự chữ Hán.' },
      { cn: '读书', pinyin: 'dúshū', vn: 'đọc sách', strokes: 14, radical: '讠 / 乛', icon: 'fa-solid fa-book-open', note: 'Đọc to rõ các câu chuyện và tri thức.' },
      { cn: '拿笔', pinyin: 'ná bǐ', vn: 'cầm bút', strokes: 20, radical: '手 / 竹', icon: 'fa-solid fa-pencil', note: 'Tư thế cầm bút đúng cách bằng 3 đầu ngón tay.' },
      { cn: '书本', pinyin: 'shūběn', vn: 'sách vở', strokes: 9, radical: '乛 / 木', icon: 'fa-solid fa-book', note: 'Tập sách chứa bao điều bổ ích.' },
      { cn: '认真', pinyin: 'rènzhēn', vn: 'chăm chỉ / nghiêm túc', strokes: 14, radical: '讠 / 目', icon: 'fa-solid fa-circle-check', note: 'Thái độ học hành chu đáo, hết mình.' }
    ],
    strokeGuide: [
      { char: '字', pinyin: 'zì', meaning: 'Chữ', strokesTotal: 6, strokeSteps: ['丶 (chấm)', '丶 (chấm)', '乛 (ngang móc)', '乛 (ngang gập)', '亅 (sổ móc)', '一 (ngang)'], structure: 'Bộ Miên (mái nhà) ở trên, chữ Tử (con trẻ) ở dưới' },
      { char: '书', pinyin: 'shū', meaning: 'Sách', strokesTotal: 4, strokeSteps: ['𠃍 (ngang gập gập móc)', '㇇ (ngang gập)', '丨 (sổ đứng xuyên qua)', '丶 (chấm trên cùng)'], structure: 'Quy tắc: viết thân chữ trước, chấm sau cùng' }
    ],
    dialogues: [
      { speaker: '老师 👩‍🏫', role: 'Cô giáo', cn: '写字的时候，身体要怎样坐？', pinyin: 'Xiězì de shíhou, shēntǐ yào zěnyàng zuò?', vn: 'Khi ngồi viết chữ, tư thế ngồi cần thế nào các em?' },
      { speaker: '兰兰 👧', role: 'Lan Lan', cn: '背要挺直，胸口离桌子一拳远！', pinyin: 'Bèi yào tǐngzhí, xiōngkǒu lí zhuōzi yī quán yuǎn!', vn: 'Lưng phải giữ thẳng, ngực cách mép bàn một nắm tay ạ!' }
    ],
    exercises: [
      {
        id: 'ex_10_1',
        type: 'word_match',
        question: 'Từ ghép nào dưới đây nghĩa là "Đọc sách"?',
        options: ['读书', '写字', '画画', '唱歌'],
        correctAnswer: '读书',
        explanation: '读 (đọc) + 书 (sách) = 读书 (dúshū).'
      },
      {
        id: 'ex_10_2',
        type: 'writing_habit',
        question: 'Khi viết chữ Hán, bé cần viết như thế nào?',
        options: ['认认真真写 (Nắn nót, cẩn thận từng nét)', 'Cào cào cho xong', 'Vẽ lung tung ra bàn', 'Tẩy xóa lem luốc'],
        correctAnswer: '认认真真写 (Nắn nót, cẩn thận từng nét)',
        explanation: 'Nét chữ nết người, cần viết cẩn thận và nắn nót.'
      }
    ]
  },
  {
    id: 'tb_11',
    lessonNumber: 11,
    title: '来拍球 (Cùng Đập Bóng)',
    titlePinyin: 'Lái pāi qiú',
    titleVn: 'Giờ thể dục vui đùa cùng quả bóng',
    part: 'Phần 2: Các Bài Khóa Tiểu Học',
    themeColor: 'from-orange-400 to-amber-500',
    borderColor: 'border-orange-300',
    badgeColor: 'bg-orange-500 text-white',
    icon: 'fa-solid fa-volleyball',
    pageRange: 'Trang 55 - 58 (Sách gốc: Trang 58 - 61)',
    description: 'Bài học đếm số nhịp nhàng vui tươi khi chơi bóng. Bé vừa rèn luyện sức khỏe, vừa học đếm nhịp 1 2 3 4 5.',
    readingText: [
      { cn: '来拍球，拍皮球，', pinyin: 'Lái pāi qiú, pāi píqiú,', vn: 'Nào cùng đập bóng, đập quả bóng tròn,' },
      { cn: '一、二、三、四、五。', pinyin: 'yī, èr, sān, sì, wǔ.', vn: 'một, hai, ba, bốn, năm.' },
      { cn: '拍得高，拍得快，', pinyin: 'Pāi de gāo, pāi de kuài,', vn: 'Đập bóng nảy thật cao, đập bóng nảy thật nhanh,' },
      { cn: '大家笑嘻嘻。', pinyin: 'dàjiā xiàoxīxī.', vn: 'ai nấy đều cười vui hớn hở.' }
    ],
    vocabulary: [
      { cn: '拍球', pinyin: 'pāiqiú', vn: 'đập bóng / vỗ bóng', strokes: 19, radical: '扌 / 王', icon: 'fa-solid fa-hand-fist', note: 'Dùng lòng bàn tay nhấp bóng nhịp nhàng.' },
      { cn: '皮球', pinyin: 'píqiú', vn: 'quả bóng da', strokes: 16, radical: '皮 / 王', icon: 'fa-solid fa-basketball', note: 'Quả bóng đàn hồi tốt cho bé tập chơi thể thao.' },
      { cn: '拍得高', pinyin: 'pāi de gāo', vn: 'đập nảy thật cao', strokes: 26, radical: '扌 / 高', icon: 'fa-solid fa-arrow-up', note: 'Bóng bật lên tít trên không trung.' },
      { cn: '拍得快', pinyin: 'pāi de kuài', vn: 'đập nảy thật nhanh', strokes: 23, radical: '扌 / 忄', icon: 'fa-solid fa-gauge-high', note: 'Nhịp đập dồn dập rộn rã.' },
      { cn: '笑嘻嘻', pinyin: 'xiàoxīxī', vn: 'cười vui vẻ / cười toe toét', strokes: 34, radical: '竹 / 口', icon: 'fa-solid fa-face-laugh-beam', note: 'Nụ cười tươi rạng rỡ của tuổi thơ.' }
    ],
    strokeGuide: [
      { char: '拍', pinyin: 'pāi', meaning: 'Đập/Vỗ', strokesTotal: 8, strokeSteps: ['一 (ngang)', '丨 (sổ móc)', '提 (hất)', '丿 (phẩy)', '丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '一 (ngang)'], structure: 'Bên trái bộ Thủ (扌- tay), bên phải chữ Bạch (白)' },
      { char: '球', pinyin: 'qiú', meaning: 'Quả bóng', strokesTotal: 11, strokeSteps: ['一 (ngang)', '一 (ngang)', '丨 (sổ)', '提 (hất)', '一 (ngang)', '亅 (sổ móc)', '丶 (chấm)', '提 (hất)', '丿 (phẩy)', '乀 (mác)', '丶 (chấm)'], structure: 'Bên trái bộ Vương (ngọc quý), bên phải chữ Cầu' }
    ],
    dialogues: [
      { speaker: '小明 👦', role: 'Tiểu Minh', cn: '小华，我们来比赛拍球好吗？', pinyin: 'Xiǎohuá, wǒmen lái bǐsài pāiqiú hǎo ma?', vn: 'Tiểu Hoa ơi, chúng mình cùng thi đập bóng nhé?' },
      { speaker: '小华 👦', role: 'Tiểu Hoa', cn: '好呀！看谁拍得多！一、二、三……', pinyin: 'Hǎo ya! Kàn shéi pāi de duō! Yī, èr, sān...', vn: 'Được chứ! Xem ai đập bóng được nhiều hơn nào! Một, hai, ba...' }
    ],
    exercises: [
      {
        id: 'ex_11_1',
        type: 'word_match',
        question: 'Từ "皮球" có nghĩa là gì?',
        options: ['Quả bóng da', 'Chiếc xe', 'Cánh cửa', 'Quyển vở'],
        correctAnswer: 'Quả bóng da',
        explanation: '皮球 (píqiú) là quả bóng da để chơi thể thao.'
      },
      {
        id: 'ex_11_2',
        type: 'dialogue_meaning',
        question: 'Từ tượng thanh "笑嘻嘻" diễn tả điều gì?',
        options: ['Cười vui vẻ, rạng rỡ', 'Khóc lóc ầm ĩ', 'Tức giận quát tháo', 'Ngơ ngác không hiểu'],
        correctAnswer: 'Cười vui vẻ, rạng rỡ',
        explanation: '笑嘻嘻 (xiàoxīxī) là tiếng cười tíu tít hồn nhiên của trẻ thơ.'
      }
    ]
  },
  {
    id: 'tb_12',
    lessonNumber: 12,
    title: '过马路 (An Toàn Giao Thông)',
    titlePinyin: 'Guò mǎlù',
    titleVn: 'Bé học luật an toàn khi qua đường',
    part: 'Phần 2: Các Bài Khóa Tiểu Học',
    themeColor: 'from-amber-500 to-red-500',
    borderColor: 'border-red-300',
    badgeColor: 'bg-red-500 text-white',
    icon: 'fa-solid fa-traffic-light',
    pageRange: 'Trang 59 - 62 (Sách gốc: Trang 62 - 65)',
    description: 'Bài học thực tế quan trọng: chú ý tín hiệu đèn giao thông, đèn đỏ dừng lại, đèn xanh mới được đi, luôn đi trên vạch kẻ đường.',
    readingText: [
      { cn: '过马路，看信号。', pinyin: 'Guò mǎlù, kàn xìnhào.', vn: 'Bé qua đường, nhớ nhìn kĩ đèn tín hiệu.' },
      { cn: '红灯停，绿灯行。', pinyin: 'Hóngdēng tíng, lǜdēng xíng.', vn: 'Đèn đỏ dừng lại, đèn xanh mới được đi.' },
      { cn: '走斑马线，不跑不闹，', pinyin: 'Zǒu bānmǎxiàn, bù pǎo bù nào,', vn: 'Đi trên vạch ngựa vằn, không chạy nhảy xô đẩy,' },
      { cn: '安全第一记心头。', pinyin: 'ānquán dì-yī jì xīntóu.', vn: 'an toàn là số một luôn khắc ghi trong lòng.' }
    ],
    vocabulary: [
      { cn: '马路', pinyin: 'mǎlù', vn: 'đường phố / đường lộ', strokes: 16, radical: '马 / 足', icon: 'fa-solid fa-road', note: 'Đường đi nơi xe cộ lưu thông đông đúc.' },
      { cn: '红灯', pinyin: 'hóngdēng', vn: 'đèn đỏ', strokes: 12, radical: '纟 / 火', icon: 'fa-solid fa-circle text-rose-500', note: 'Báo hiệu dừng lại ngay lập tức để bảo đảm an toàn.' },
      { cn: '绿灯', pinyin: 'lǜdēng', vn: 'đèn xanh', strokes: 17, radical: '纟 / 火', icon: 'fa-solid fa-circle text-emerald-500', note: 'Báo hiệu an toàn, người đi bộ được phép băng qua.' },
      { cn: '停', pinyin: 'tíng', vn: 'dừng lại', strokes: 11, radical: '亻', icon: 'fa-solid fa-hand', note: 'Đứng yên một chỗ, không bước tiếp.' },
      { cn: '行', pinyin: 'xíng', vn: 'đi lại / lưu thông', strokes: 6, radical: '彳', icon: 'fa-solid fa-person-walking', note: 'Tiến về phía trước.' },
      { cn: '安全', pinyin: 'ānquán', vn: 'an toàn', strokes: 12, radical: '宀 / 人', icon: 'fa-solid fa-shield-halved', note: 'Bình yên vô sự, tránh mọi rủi ro va chạm.' }
    ],
    strokeGuide: [
      { char: '红', pinyin: 'hóng', meaning: 'Màu đỏ', strokesTotal: 6, strokeSteps: ['𡿨 (phẩy gập)', '𡿨 (phẩy gập)', '提 (hất)', '一 (ngang)', '丨 (sổ)', '一 (ngang dài)'], structure: 'Bên trái bộ Tịch/Ty (纟- sợi tơ), bên phải chữ Công (工)' },
      { char: '绿', pinyin: 'lǜ', meaning: 'Màu xanh lục', strokesTotal: 11, strokeSteps: ['𡿨 (phẩy gập)', '𡿨 (phẩy gập)', '提 (hất)', '彑 (bộ kệ)', '氺 (bộ thủy biến thể)'], structure: 'Bên trái bộ Tơ, bên phải chữ Lục' }
    ],
    dialogues: [
      { speaker: '交警 👮‍♂️', role: 'Chú cảnh sát giao thông', cn: '小朋友，现在是红灯，能过马路吗？', pinyin: 'Xiǎopéngyou, xiànzài shì hóngdēng, néng guò mǎlù ma?', vn: 'Cháu nhỏ ơi, bây giờ đang là đèn đỏ, có được qua đường không?' },
      { speaker: '小明 👦', role: 'Tiểu Minh', cn: '不能！红灯停，绿灯亮了才能走！', pinyin: 'Bù néng! Hóngdēng tíng, lǜdēng liàng le cái néng zǒu!', vn: 'Dạ không được ạ! Đèn đỏ phải dừng lại, khi nào đèn xanh sáng mới được đi ạ!' }
    ],
    exercises: [
      {
        id: 'ex_12_1',
        type: 'traffic_rule',
        question: 'Khi nhìn thấy "红灯" (Đèn đỏ), bé phải làm gì?',
        options: ['停 (Dừng lại)', '行 (Đi nhanh)', '跑 (Chạy sang)', '跳 (Nhảy múa)'],
        correctAnswer: '停 (Dừng lại)',
        explanation: 'Quy tắc vàng: "红灯停" - Đèn đỏ dừng lại.'
      },
      {
        id: 'ex_12_2',
        type: 'safety_question',
        question: 'Khi đi bộ sang đường, bé cần bước đi trên phần đường nào?',
        options: ['走斑马线 (Đi trên vạch kẻ sang đường dành cho người đi bộ)', 'Băng ngang giữa dòng xe', 'Đi lùi', 'Vừa đi vừa đá bóng'],
        correctAnswer: '走斑马线 (Đi trên vạch kẻ sang đường dành cho người đi bộ)',
        explanation: 'Luôn bước trên vạch kẻ người đi bộ (斑马线) để được đảm bảo an toàn.'
      }
    ]
  },
  {
    id: 'tb_13',
    lessonNumber: 13,
    title: '小猫和小羊 (Mèo Con Và Cừu Con)',
    titlePinyin: 'Xiǎomāo hé xiǎoyáng',
    titleVn: 'Tập tính đáng yêu của muông thú',
    part: 'Phần 2: Các Bài Khóa Tiểu Học',
    themeColor: 'from-purple-500 to-indigo-600',
    borderColor: 'border-purple-300',
    badgeColor: 'bg-purple-600 text-white',
    icon: 'fa-solid fa-cat',
    pageRange: 'Trang 63 - 66 (Sách gốc: Trang 66 - 69)',
    description: 'Tìm hiểu thói quen ăn uống của các con vật đáng yêu: mèo con thích ăn cá, cừu con thích gặm cỏ non, chim nhỏ mổ thóc lúa.',
    readingText: [
      { cn: '小猫叫，喵喵喵，', pinyin: 'Xiǎomāo jiào, miāo miāo miāo,', vn: 'Mèo con kêu, meo meo meo,' },
      { cn: '小猫爱吃鱼。', pinyin: 'xiǎomāo ài chī yú.', vn: 'mèo con rất thích ăn cá.' },
      { cn: '小羊叫，咩咩咩，', pinyin: 'Xiǎoyáng jiào, miē miē miē,', vn: 'Cừu con kêu, be be be,' },
      { cn: '小羊爱吃草。', pinyin: 'xiǎoyáng ài chī cǎo.', vn: 'cừu con rất thích ăn cỏ non.' },
      { cn: '小鸟叫，喳喳喳，小鸟爱吃米。', pinyin: 'Xiǎoniǎo jiào, zhāzhāzhā, xiǎoniǎo ài chī mǐ.', vn: 'Chim nhỏ kêu, ríu rít ríu rít, chim nhỏ rất thích ăn hạt thóc.' }
    ],
    vocabulary: [
      { cn: '小猫', pinyin: 'xiǎomāo', vn: 'mèo con', strokes: 14, radical: '犭 / 苗', icon: 'fa-solid fa-cat', note: 'Loài vật bắt chuột tài tình và hay làm nũng.' },
      { cn: '小羊', pinyin: 'xiǎoyáng', vn: 'cừu con / dê con', strokes: 9, radical: '小 / 羊', icon: 'fa-solid fa-sheep', note: 'Hiền lành với bộ lông trắng xốp như mây.' },
      { cn: '吃', pinyin: 'chī', vn: 'ăn', strokes: 6, radical: '口', icon: 'fa-solid fa-bowl-food', note: 'Dùng miệng đưa thức ăn vào cơ thể.' },
      { cn: '鱼', pinyin: 'yú', vn: 'con cá', strokes: 8, radical: '鱼', icon: 'fa-solid fa-fish', note: 'Món khoái khẩu nhất của chú mèo con.' },
      { cn: '草', pinyin: 'cǎo', vn: 'cỏ non', strokes: 9, radical: '艹', icon: 'fa-solid fa-seedling', note: 'Món ăn yêu thích giàu dinh dưỡng của dê và cừu.' },
      { cn: '叫', pinyin: 'jiào', vn: 'kêu / gọi', strokes: 5, radical: '口', icon: 'fa-solid fa-bullhorn', note: 'Phát ra âm thanh từ miệng.' }
    ],
    strokeGuide: [
      { char: '吃', pinyin: 'chī', meaning: 'Ăn', strokesTotal: 6, strokeSteps: ['丨 (sổ)', '𠃍 (ngang gập)', '一 (ngang)', '丿 (phẩy)', '一 (ngang)', '乙 (ngang gập cong móc)'], structure: 'Bên trái bộ Khẩu (口- miệng), bên phải chữ Khất (乞)' },
      { char: '猫', pinyin: 'māo', meaning: 'Con mèo', strokesTotal: 11, strokeSteps: ['丿 (phẩy)', '㇁ (cong móc khuyển)', '丿 (phẩy)', '艹 (bộ thảo)', '田 (bộ điền)'], structure: 'Bên trái bộ Khuyển (犭- thú bốn chân), bên phải chữ Miêu (苗)' }
    ],
    dialogues: [
      { speaker: '小明 👦', role: 'Tiểu Minh', cn: '小猫吃不吃草？', pinyin: 'Xiǎomāo chī bù chī cǎo?', vn: 'Mèo con có ăn cỏ không bạn?' },
      { speaker: '小红 👧', role: 'Tiểu Hồng', cn: '小猫不吃草，小猫爱吃香喷喷的小鱼！', pinyin: 'Xiǎomāo bù chī cǎo, xiǎomāo ài chī xiāngpēnpēn de xiǎoyú!', vn: 'Mèo con không ăn cỏ đâu, mèo con thích ăn món cá thơm ngon cơ!' }
    ],
    exercises: [
      {
        id: 'ex_13_1',
        type: 'diet_match',
        question: 'Món ăn yêu thích nhất của "小猫" (Mèo con) là gì?',
        options: ['鱼 (Cá)', '草 (Cỏ)', '木 (Gỗ)', '石 (Đá)'],
        correctAnswer: '鱼 (Cá)',
        explanation: 'Trích bài học: "小猫爱吃鱼" (Mèo con thích ăn cá).'
      },
      {
        id: 'ex_13_2',
        type: 'animal_sound',
        question: 'Tiếng kêu "咩咩咩" (miē miē miē) là của con vật nào?',
        options: ['小羊 (Cừu/Dê con)', '小猫 (Mèo con)', '小鸟 (Chim nhỏ)', '大水牛 (Trâu)'],
        correctAnswer: '小羊 (Cừu/Dê con)',
        explanation: '小羊 kêu "咩咩咩" (be be be).'
      }
    ]
  }
];

/**
 * DANH MỤC TOÀN BỘ 66 TRANG SÁCH GIÁO KHOA (Trang 1 -> Trang 66 tương ứng Trang 4 -> 69 sách gốc)
 * Giúp bé lật giở từng trang một, xem chi tiết ảnh minh họa, từ khóa, âm thanh và bài tập của từng trang!
 */
export const TEXTBOOK_PAGES_66 = [
  // --- NHÓM 1: CHỮ SỐ (Trang 1 - 2) ---
  {
    pageIndex: 1,
    bookPage: 4,
    unitTitle: 'Bài 1: Chữ Số Cơ Bản',
    title: 'Chữ số 1 đến 5: 一, 二, 三, 四, 五',
    category: 'Chữ số & Tượng hình',
    content: '一、二、三、四、五。',
    pinyin: 'Yī, èr, sān, sì, wǔ.',
    meaning: 'Một, hai, ba, bốn, năm.',
    keyWords: [
      { cn: '一', py: 'yī', vn: 'Số 1', note: '1 nét ngang' },
      { cn: '二', py: 'èr', vn: 'Số 2', note: '2 nét ngang' },
      { cn: '三', py: 'sān', vn: 'Số 3', note: '3 nét ngang' },
      { cn: '四', py: 'sì', vn: 'Số 4', note: 'Khung vuông 4 cạnh' },
      { cn: '五', py: 'wǔ', vn: 'Số 5', note: 'Ngũ hành' }
    ],
    strokesNotes: 'Quy tắc viết: nét ngang viết từ trái sang phải, các nét song song cách đều.',
    audioText: '一、二、三、四、五。一二三四五。'
  },
  {
    pageIndex: 2,
    bookPage: 5,
    unitTitle: 'Bài 1: Chữ Số Cơ Bản',
    title: 'Chữ số 6 đến 10: 六, 七, 八, 九, 十',
    category: 'Chữ số & Tượng hình',
    content: '六、七、八、九、十。',
    pinyin: 'Liù, qī, bā, jiǔ, shí.',
    meaning: 'Sáu, bảy, tám, chín, mười.',
    keyWords: [
      { cn: '六', py: 'liù', vn: 'Số 6', note: 'Chấm trên, dưới bát' },
      { cn: '七', py: 'qī', vn: 'Số 7', note: 'Ngang cong móc' },
      { cn: '八', py: 'bā', vn: 'Số 8', note: 'Phẩy trước mác sau' },
      { cn: '九', py: 'jiǔ', vn: 'Số 9', note: 'Phẩy cong gập móc' },
      { cn: '十', py: 'shí', vn: 'Số 10', note: 'Ngang trước sổ sau' }
    ],
    strokesNotes: 'Chữ 十: viết nét ngang trước, nét sổ thẳng từ trên xuống sau.',
    audioText: '六、七、八、九、十。六七八九十。'
  },

  // --- NHÓM 2: CƠ THỂ CON NGƯỜI (Trang 3 - 10) ---
  {
    pageIndex: 3,
    bookPage: 6,
    unitTitle: 'Bài 2: Con Người & Cơ Thể',
    title: 'Nhập môn cơ thể: 人 (Người), 头 (Đầu)',
    category: 'Chữ tượng hình',
    content: '人有头。大人、小人、头发。',
    pinyin: 'Rén yǒu tóu. Dàrén, xiǎorén, tóufa.',
    meaning: 'Người có đầu. Người lớn, em bé, mái tóc.',
    keyWords: [
      { cn: '人', py: 'rén', vn: 'Người', note: 'Tượng hình người đứng' },
      { cn: '头', py: 'tóu', vn: 'Cái đầu', note: 'Phần đầu cơ thể' }
    ],
    strokesNotes: 'Chữ 人: Phẩy trước mác sau, hai chân choãi vững.',
    audioText: '人、头。人有头。'
  },
  {
    pageIndex: 4,
    bookPage: 7,
    unitTitle: 'Bài 2: Con Người & Cơ Thể',
    title: 'Giác quan: 耳 (Tai), 目 (Mắt)',
    category: 'Chữ tượng hình',
    content: '耳朵听声音，目光看世界。',
    pinyin: 'Ěrduo tīng shēngyīn, mùguāng kàn shìjiè.',
    meaning: 'Đôi tai để nghe âm thanh, ánh mắt nhìn ngắm thế giới.',
    keyWords: [
      { cn: '耳', py: 'ěr', vn: 'Tai', note: 'Vành tai đón âm thanh' },
      { cn: '目', py: 'mù', vn: 'Mắt', note: 'Hình đôi mắt mở to' }
    ],
    strokesNotes: 'Chữ 目: Khung ngoài trước, hai nét ngang bên trong, đóng đáy sau cùng.',
    audioText: '耳、目。耳目。'
  },
  {
    pageIndex: 5,
    bookPage: 8,
    unitTitle: 'Bài 2: Con Người & Cơ Thể',
    title: 'Chi thể: 手 (Tay), 足 (Chân)',
    category: 'Chữ tượng hình',
    content: '双手做事情，双足走四方。',
    pinyin: 'Shuāngshǒu zuò shìqing, shuāngzú zǒu sìfāng.',
    meaning: 'Đôi tay làm lụng việc hay, đôi chân bước đi khắp bốn phương trời.',
    keyWords: [
      { cn: '手', py: 'shǒu', vn: 'Bàn tay', note: '5 ngón tay khéo léo' },
      { cn: '足', py: 'zú', vn: 'Bàn chân', note: 'Bàn chân đi lại' }
    ],
    strokesNotes: 'Chữ 手: Nét cong sổ móc ở giữa tạo độ cong tự nhiên của cổ tay.',
    audioText: '手、足。手足。'
  },
  {
    pageIndex: 6,
    bookPage: 9,
    unitTitle: 'Bài 2: Con Người & Cơ Thể',
    title: 'Miệng và Răng: 口 (Miệng), 牙 (Răng)',
    category: 'Chữ tượng hình',
    content: '张开口，露白牙。',
    pinyin: 'Zhāng kāi kǒu, lù bái yá.',
    meaning: 'Mở rộng khuôn miệng cười, để lộ hàm răng trắng tinh.',
    keyWords: [
      { cn: '口', py: 'kǒu', vn: 'Khuôn miệng', note: 'Hình miệng tròn mở' },
      { cn: '牙', py: 'yá', vn: 'Răng', note: 'Răng nhai thức ăn' }
    ],
    strokesNotes: 'Chữ 口: Sổ trái trước, ngang gập sau, đóng đáy ngang.',
    audioText: '口、牙。人口、白牙。'
  },
  {
    pageIndex: 7,
    bookPage: 10,
    unitTitle: 'Bài 2: Con Người & Cơ Thể',
    title: 'Lưỡi và Tấm lòng: 舌 (Lưỡi), 心 (Tim)',
    category: 'Chữ tượng hình',
    content: '舌尝味道，心里快乐。',
    pinyin: 'Shé cháng wèidao, xīn lǐ kuàilè.',
    meaning: 'Đầu lưỡi nếm vị thơm ngon, lòng tràn ngập niềm vui phơi phới.',
    keyWords: [
      { cn: '舌', py: 'shé', vn: 'Cái lưỡi', note: 'Lưỡi thè ra khỏi miệng' },
      { cn: '心', py: 'xīn', vn: 'Trái tim / Tâm', note: 'Trái tim đập rộn ràng' }
    ],
    strokesNotes: 'Chữ 心: Chấm trái trước, nằm móc ở giữa, hai chấm trên sau.',
    audioText: '舌、心。口舌、用心。'
  },
  {
    pageIndex: 8,
    bookPage: 11,
    unitTitle: 'Bài 2: Con Người & Cơ Thể',
    title: 'Luyện tập tổng hợp: Ghép từ bộ phận cơ thể',
    category: 'Bài tập ôn tập',
    content: '人口、目光、手足、手头、用心。',
    pinyin: 'Rénkǒu, mùguāng, shǒuzú, shǒutóu, yòngxīn.',
    meaning: 'Nhân khẩu (dân số), ánh mắt, anh em ruột thịt (thủ túc), có sẵn trong tay, chuyên tâm.',
    keyWords: [
      { cn: '人口', py: 'rénkǒu', vn: 'Dân số', note: 'Số người' },
      { cn: '手足', py: 'shǒuzú', vn: 'Chân tay/Anh em', note: 'Tình nghĩa thiết tha' }
    ],
    strokesNotes: 'Luyện đọc to và ghép các chữ đơn lẻ thành từ phức 2 chữ.',
    audioText: '人口、目光、手足、用心。'
  },
  {
    pageIndex: 9,
    bookPage: 12,
    unitTitle: 'Bài 2: Con Người & Cơ Thể',
    title: 'Quy tắc nét bút 1: Nét Ngang (横) & Nét Sổ (竖)',
    category: 'Tập viết nét',
    content: '一 là nét Ngang. 丨 là nét Sổ. Ngang bằng sổ thẳng.',
    pinyin: 'Héng bǐ, shù bǐ. Héng píng shù zhí.',
    meaning: 'Nét ngang phẳng phiu, nét sổ đứng thẳng đứng ngay ngắn.',
    keyWords: [
      { cn: '横', py: 'héng', vn: 'Nét ngang', note: 'Viết từ trái qua phải' },
      { cn: '竖', py: 'shù', vn: 'Nét sổ thẳng', note: 'Viết từ trên xuống dưới' }
    ],
    strokesNotes: 'Quy tắc vàng: Ngang trước sổ sau (như chữ 十).',
    audioText: '横、竖。横平竖直。'
  },
  {
    pageIndex: 10,
    bookPage: 13,
    unitTitle: 'Bài 2: Con Người & Cơ Thể',
    title: 'Luyện viết chữ mẫu: 一, 十, 人, 八, 口',
    category: 'Luyện chữ',
    content: '写一写：一、十、人、八、口。',
    pinyin: 'Xiě yī xiě: Yī, shí, rén, bā, kǒu.',
    meaning: 'Tập viết vào ô vuông: Nhất, Thập, Nhân, Bát, Khẩu.',
    keyWords: [
      { cn: '写字', py: 'xiězì', vn: 'Tập viết', note: 'Giữ vở sạch chữ đẹp' }
    ],
    strokesNotes: 'Tập viết đúng trọng tâm trong ô chữ Điền (田字格).',
    audioText: '一、十、人、八、口。认真写字。'
  },

  // --- NHÓM 3: THIÊN NHIÊN ĐẤT TRỜI (Trang 11 - 20) ---
  {
    pageIndex: 11,
    bookPage: 14,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Vũ trụ: 日 (Mặt trời), 月 (Mặt trăng)',
    category: 'Chữ tượng hình',
    content: '日出东方，月上柳梢。',
    pinyin: 'Rì chū dōngfāng, yuè shàng liǔshāo.',
    meaning: 'Mặt trời mọc đằng đông chói rọi, vầng trăng khuyết lơ lửng ngọn liễu.',
    keyWords: [
      { cn: '日', py: 'rì', vn: 'Mặt trời / Ngày', note: 'Thái dương tỏa nắng' },
      { cn: '月', py: 'yuè', vn: 'Mặt trăng / Tháng', note: 'Thái âm dịu dàng' }
    ],
    strokesNotes: 'Nhật (日) và Nguyệt (月) ghép lại thành chữ Minh (明 - sáng sủa).',
    audioText: '日、月。日月同辉。'
  },
  {
    pageIndex: 12,
    bookPage: 15,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Thủy Hỏa: 水 (Nước), 火 (Ngọn lửa)',
    category: 'Chữ tượng hình',
    content: '清水流，火苗旺。水火不容。',
    pinyin: 'Qīngshuǐ liú, huǒmiáo wàng. Shuǐ huǒ bù róng.',
    meaning: 'Nước trong xanh róc rách chảy, ngọn lửa bập bùng sáng rực rỡ.',
    keyWords: [
      { cn: '水', py: 'shuǐ', vn: 'Dòng nước', note: 'Sổ móc giữa trước' },
      { cn: '火', py: 'huǒ', vn: 'Ngọn lửa', note: 'Hai chấm hai bên trước' }
    ],
    strokesNotes: 'Chữ Thủy: nét sổ móc ở giữa trước, các nét rẻ hai bên sau.',
    audioText: '水、火。山清水秀，大火。'
  },
  {
    pageIndex: 13,
    bookPage: 16,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Núi non sỏi đá: 山 (Ngọn núi), 石 (Hòn đá)',
    category: 'Chữ tượng hình',
    content: '山高石大。山石壮美。',
    pinyin: 'Shān gāo shí dà. Shānshí zhuàngměi.',
    meaning: 'Ngọn núi cao ngút ngàn, tảng đá to hùng vĩ.',
    keyWords: [
      { cn: '山', py: 'shān', vn: 'Ngọn núi', note: 'Ba ngọn núi nhấp nhô' },
      { cn: '石', py: 'shí', vn: 'Hòn đá', note: 'Đá tảng dưới vách' }
    ],
    strokesNotes: 'Chữ Sơn: Sổ giữa cao nhất, sổ gập đáy, sổ ngắn bên phải.',
    audioText: '山、石。高山、石头。'
  },
  {
    pageIndex: 14,
    bookPage: 17,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Đồng ruộng đất đai: 田 (Đồng ruộng), 土 (Đất)',
    category: 'Chữ tượng hình',
    content: '田地肥沃，泥土芬芳。',
    pinyin: 'Tiándì féiwò, nítǔ fēnfāng.',
    meaning: 'Ruộng đồng mầu mỡ phì nhiêu, đất mẹ ngát hương thơm mùa lúa.',
    keyWords: [
      { cn: '田', py: 'tián', vn: 'Đồng ruộng', note: 'Chia ô vuông bờ đất' },
      { cn: '土', py: 'tǔ', vn: 'Đất đai', note: 'Mầm cây nhô lên từ đất' }
    ],
    strokesNotes: 'Chữ Điền: Viết khung bao ngoài và chữ thập bên trong, đóng đáy sau.',
    audioText: '田、土。水田、土地。'
  },
  {
    pageIndex: 15,
    bookPage: 18,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Thời tiết: 雨 (Cơn mưa), 电 (Sấm chớp / Điện)',
    category: 'Chữ tượng hình',
    content: '天空下大雨，闪电亮晶晶。',
    pinyin: 'Tiānkōng xià dà yǔ, shǎndiàn liàngjīngjīng.',
    meaning: 'Bầu trời tuôn cơn mưa to, tia chớp sáng lòa xé toạc màn mây.',
    keyWords: [
      { cn: '雨', py: 'yǔ', vn: 'Cơn mưa', note: 'Mây giăng và hạt mưa rơi' },
      { cn: '电', py: 'diàn', vn: 'Tia chớp / Điện', note: 'Tia sét uốn lượn' }
    ],
    strokesNotes: 'Chữ Vũ (雨) là bộ thủ của các chữ chỉ thời tiết: Tuyết, Sương, Lôi...',
    audioText: '雨、电。下雨、闪电。'
  },
  {
    pageIndex: 16,
    bookPage: 19,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Luyện đọc ghép từ thiên nhiên: 日月, 山水, 雨水',
    category: 'Luyện từ & câu',
    content: '日月光辉，山水秀丽，田土广阔。',
    pinyin: 'Rì yuè guānghuī, shān shuǐ xiùlì, tián tǔ guǎngkuò.',
    meaning: 'Mặt trời mặt trăng sáng ngời, non xanh nước biếc tú lệ, ruộng đồng bao la.',
    keyWords: [
      { cn: '山水', py: 'shānshuǐ', vn: 'Phong cảnh non nước' },
      { cn: '雨水', py: 'yǔshuǐ', vn: 'Nước mưa' }
    ],
    strokesNotes: 'Bé tập đọc diễn cảm và nhận biết chữ Hán nhanh qua thẻ từ.',
    audioText: '日月、山水、水火、田土、雨水。'
  },
  {
    pageIndex: 17,
    bookPage: 20,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Quy tắc nét bút 2: Nét Phẩy (撇) & Nét Mác (捺)',
    category: 'Tập viết nét',
    content: '丿 là nét Phẩy (vuốt nhọn sang trái), 乀 là nét Mác (đậm vuốt sang phải).',
    pinyin: 'Piě bǐ, nà bǐ.',
    meaning: 'Phẩy vuốt sang trái, mác xòe sang phải tạo thế đứng chân kiềng.',
    keyWords: [
      { cn: '撇', py: 'piě', vn: 'Nét phẩy' },
      { cn: '捺', py: 'nà', vn: 'Nét mác' }
    ],
    strokesNotes: 'Chữ 八 và chữ 人: Phẩy viết trước, mác viết sau.',
    audioText: '撇、捺。先撇后捺。'
  },
  {
    pageIndex: 18,
    bookPage: 21,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Luyện viết chữ thiên nhiên: 日, 月, 水, 火, 山',
    category: 'Luyện chữ',
    content: '在方格里写一写：日、月、水、火、山。',
    pinyin: 'Zài fānggé lǐ xiě yī xiě: Rì, yuè, shuǐ, huǒ, shān.',
    meaning: 'Luyện viết vào ô kẻ: Nhật, Nguyệt, Thủy, Hỏa, Sơn.',
    keyWords: [
      { cn: '书法', py: 'shūfǎ', vn: 'Thư pháp' }
    ],
    strokesNotes: 'Nhớ quy tắc: giữa trước hai bên sau đối với chữ Thủy và Sơn.',
    audioText: '日、月、水、火、山。'
  },
  {
    pageIndex: 19,
    bookPage: 22,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Luyện đọc câu đối đơn giản: 天地日月，山川秀丽',
    category: 'Đọc thơ & vần',
    content: '天高地厚，日月长明。山清水秀，风调雨顺。',
    pinyin: 'Tiān gāo dì hòu, rì yuè cháng míng. Shān qīng shuǐ xiù, fēng tiáo yǔ shùn.',
    meaning: 'Trời cao đất dày, nhật nguyệt ngàn thu sáng soi. Non xanh nước biếc, mưa thuận gió hòa.',
    keyWords: [
      { cn: '天地', py: 'tiāndì', vn: 'Trời đất' }
    ],
    strokesNotes: 'Đọc nhịp nhàng theo thể 4 chữ cổ truyền.',
    audioText: '天地日月，山川秀丽。'
  },
  {
    pageIndex: 20,
    bookPage: 23,
    unitTitle: 'Bài 3: Trời Đất & Thiên Nhiên',
    title: 'Bài tập nối hình chữ tượng hình: Mặt trời, Nước, Lửa, Núi',
    category: 'Trò chơi câu đố',
    content: '看图连字：把太阳连到“日”，把火焰连到“火”，把水流连到“水”。',
    pinyin: 'Kàn tú lián zì.',
    meaning: 'Nhìn tranh nối chữ: Nối ông mặt trời với chữ Nhật, đốm lửa với chữ Hỏa, dòng nước với chữ Thủy.',
    keyWords: [
      { cn: '连线', py: 'liánxiàn', vn: 'Nối hình' }
    ],
    strokesNotes: 'Giúp bé ghi nhớ sâu sắc nguồn gốc chữ Hán là vẽ từ thiên nhiên.',
    audioText: '看图连字，日、月、水、火、山。'
  },

  // --- NHÓM 4: ĐỘNG VẬT & CỎ CÂY (Trang 21 - 30) ---
  {
    pageIndex: 21,
    bookPage: 24,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Bầu trời và Rừng sâu: 鸟 (Chim), 兽 (Thú rừng)',
    category: 'Chữ tượng hình',
    content: '飞鸟在天，百兽在林。',
    pinyin: 'Fēiniǎo zài tiān, bǎishòu zài lín.',
    meaning: 'Chim sải cánh trên mây xanh, muôn loài dã thú sống trong rừng sâu.',
    keyWords: [
      { cn: '鸟', py: 'niǎo', vn: 'Con chim', note: 'Hình con chim đậu' },
      { cn: '兽', py: 'shòu', vn: 'Thú rừng' }
    ],
    strokesNotes: 'Chữ Điểu (鸟) có một nét chấm ở đầu tượng trưng cho con mắt tinh anh.',
    audioText: '鸟、兽。飞鸟、野兽。'
  },
  {
    pageIndex: 22,
    bookPage: 25,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Côn trùng và Thủy tộc: 虫 (Sâu bọ), 鱼 (Con cá)',
    category: 'Chữ tượng hình',
    content: '小虫草里爬，小鱼水里游。',
    pinyin: 'Xiǎochóng cǎo lǐ pá, xiǎoyú shuǐ lǐ yóu.',
    meaning: 'Chú sâu nhỏ bò trên ngọn cỏ, chú cá bơi lội dưới làn nước.',
    keyWords: [
      { cn: '虫', py: 'chóng', vn: 'Sâu bọ / Côn trùng' },
      { cn: '鱼', py: 'yú', vn: 'Con cá' }
    ],
    strokesNotes: 'Chữ Ngư (鱼): Nét phẩy gập đầu cá, thân cá và 1 nét ngang dài tượng trưng vây đuôi.',
    audioText: '虫、鱼。小虫、小鱼。'
  },
  {
    pageIndex: 23,
    bookPage: 26,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Vật nuôi hiền lành: 牛 (Con bò), 羊 (Con cừu / dê)',
    category: 'Chữ tượng hình',
    content: '大黄牛耕地，小白羊吃草。',
    pinyin: 'Dà huángniú gēngdì, xiǎo báiyáng chī cǎo.',
    meaning: 'Chú bò vàng chăm chỉ cày ruộng, chú cừu trắng thong thả gặm cỏ non.',
    keyWords: [
      { cn: '牛', py: 'niú', vn: 'Con bò / Trâu' },
      { cn: '羊', py: 'yáng', vn: 'Con cừu / Dê' }
    ],
    strokesNotes: 'Chữ Ngưu (牛) có nét sổ dài thẳng tắp xuyên qua các nét ngang.',
    audioText: '牛、羊。黄牛、白羊。'
  },
  {
    pageIndex: 24,
    bookPage: 27,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Chiến mã & Cún con: 马 (Ngựa), 犬 (Chó cưng)',
    category: 'Chữ tượng hình',
    content: '骏马奔腾，忠犬看家。',
    pinyin: 'Jùnmǎ bēnténg, zhōngquǎn kānjiā.',
    meaning: 'Ngựa phi nước đại dũng mãnh, chú chó trung thành trông giữ nhà cửa.',
    keyWords: [
      { cn: '马', py: 'mǎ', vn: 'Con ngựa' },
      { cn: '犬', py: 'quǎn', vn: 'Chó con' }
    ],
    strokesNotes: 'Chữ Mã (马) thời hiện đại giản thể chỉ có 3 nét.',
    audioText: '马、犬。跑马、猎犬。'
  },
  {
    pageIndex: 25,
    bookPage: 28,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Cỏ cây xanh tươi: 草 (Ngọn cỏ), 木 (Cây gỗ)',
    category: 'Chữ tượng hình',
    content: '青草绿油油，树木高又大。',
    pinyin: 'Qīngcǎo lǜyóuyóu, shùmù gāo yòu dà.',
    meaning: 'Cỏ xanh mơn mởn, thân cây vươn cao to lớn râm mát.',
    keyWords: [
      { cn: '草', py: 'cǎo', vn: 'Ngọn cỏ' },
      { cn: '木', py: 'mù', vn: 'Cây cối / Gỗ' }
    ],
    strokesNotes: 'Chữ Thảo (草) có bộ Thảo Đầu (艹) chỉ tất cả các loài cỏ hoa.',
    audioText: '草、木。花草、树木。'
  },
  {
    pageIndex: 26,
    bookPage: 29,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Hương thơm quả ngọt: 花 (Bông hoa), 果 (Trái cây)',
    category: 'Chữ tượng hình',
    content: '红花开得艳，硕果挂枝头。',
    pinyin: 'Hónghuā kāi de yàn, shuòguǒ guà zhītóu.',
    meaning: 'Bông hoa đỏ khoe sắc rực rỡ, trái chín trĩu nặng trên cành cây.',
    keyWords: [
      { cn: '花', py: 'huā', vn: 'Bông hoa' },
      { cn: '果', py: 'guǒ', vn: 'Trái cây / Hoa quả' }
    ],
    strokesNotes: 'Chữ Quả (果) có hình quả tròn phía trên cành cây (bộ Mộc).',
    audioText: '花、果。红花、水果。'
  },
  {
    pageIndex: 27,
    bookPage: 30,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Luyện tập ghép từ: 牛羊, 鸟语, 花草, 树木',
    category: 'Ghép từ & ôn tập',
    content: '鸟语花香，草木萌芽，牛羊成群。',
    pinyin: 'Niǎoyǔ huāxiāng, cǎomù méngyá, niúyáng chéngqún.',
    meaning: 'Chim ca hoa tỏa ngát hương, cỏ cây đâm chồi nảy lộc, đàn bò đàn cừu đông đúc.',
    keyWords: [
      { cn: '鸟语花香', py: 'niǎoyǔ huāxiāng', vn: 'Chim hót hoa thơm' }
    ],
    strokesNotes: 'Mở rộng vốn thành ngữ 4 chữ giàu hình tượng cho bé.',
    audioText: '牛羊、鸟语、花草、树木。'
  },
  {
    pageIndex: 28,
    bookPage: 31,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Quy tắc nét bút 3: Nét Chấm (点) & Nét Hất (提)',
    category: 'Tập viết nét',
    content: '丶 là nét Chấm, 提 là nét Hất (hất từ dưới lên trên chếch sang phải).',
    pinyin: 'Diǎn bǐ, tí bǐ.',
    meaning: 'Nét chấm tựa như giọt nước rơi, nét hất dứt khoát vút lên.',
    keyWords: [
      { cn: '点', py: 'diǎn', vn: 'Nét chấm' },
      { cn: '提', py: 'tí', vn: 'Nét hất' }
    ],
    strokesNotes: 'Chữ Thổ (土) đổi thành nét hất khi làm bộ thủ bên trái.',
    audioText: '点、提。先点后提。'
  },
  {
    pageIndex: 29,
    bookPage: 32,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Luyện viết chữ loài vật: 牛, 羊, 马, 鸟, 木',
    category: 'Luyện chữ',
    content: '方格练习：牛、羊、马、鸟、木。',
    pinyin: 'Fānggé liànxí: Niú, yáng, mǎ, niǎo, mù.',
    meaning: 'Luyện viết trong ô: Ngưu, Dương, Mã, Điểu, Mộc.',
    keyWords: [
      { cn: '练字', py: 'liànzì', vn: 'Luyện chữ' }
    ],
    strokesNotes: 'Chú ý nét móc của chữ Mã và Điểu viết thật dứt khoát.',
    audioText: '牛、羊、马、鸟、木。'
  },
  {
    pageIndex: 30,
    bookPage: 33,
    unitTitle: 'Bài 4: Muông Thú & Hoa Cỏ',
    title: 'Trò chơi sinh thái: Ai ăn gì? Con vật nào sống ở đâu?',
    category: 'Đố vui tương tác',
    content: '牛吃草，羊吃草，鸟儿吃虫子，小鱼水里游。',
    pinyin: 'Niú chī cǎo, yáng chī cǎo, niǎo ér chī chóngzi, xiǎoyú shuǐ lǐ yóu.',
    meaning: 'Bò ăn cỏ non, cừu ăn cỏ xanh, chim nhỏ bắt sâu bọ, cá tung tăng bơi lội.',
    keyWords: [
      { cn: '生态', py: 'shēngtài', vn: 'Sinh thái' }
    ],
    strokesNotes: 'Ôn tập mẫu câu: Ai (chủ ngữ) + Ăn/Làm gì (vị ngữ).',
    audioText: '牛吃草，羊吃草，鸟吃虫，鱼游水。'
  },

  // --- NHÓM 5: ĐỒ VẬT, XE CỘ & BÚT THUẬN (Trang 31 - 35) ---
  {
    pageIndex: 31,
    bookPage: 34,
    unitTitle: 'Bài 5: Đồ Dùng & Bút Thuận',
    title: 'Trang phục thường ngày: 衣 (Áo quần), 巾 (Khăn mặt)',
    category: 'Chữ tượng hình',
    content: '穿新衣，戴头巾。干干净净。',
    pinyin: 'Chuān xīn yī, dài tóujīn. Gāngānjìngjìng.',
    meaning: 'Mặc áo mới gọn gàng, quàng chiếc khăn êm ái, luôn sạch sẽ thơm tho.',
    keyWords: [
      { cn: '衣', py: 'yī', vn: 'Áo quần' },
      { cn: '巾', py: 'jīn', vn: 'Khăn vải' }
    ],
    strokesNotes: 'Chữ Y (衣) có phẩy chấm và vạt áo xòe mác rộng.',
    audioText: '衣、巾。衣服、毛巾。'
  },
  {
    pageIndex: 32,
    bookPage: 35,
    unitTitle: 'Bài 5: Đồ Dùng & Bút Thuận',
    title: 'Dụng cụ nhà bếp: 刀 (Con dao), 勺 (Chiếc muỗng/thìa)',
    category: 'Chữ tượng hình',
    content: '一把小刀，一个汤勺。',
    pinyin: 'Yī bǎ xiǎodāo, yī gè tāngsháo.',
    meaning: 'Một chiếc dao nhỏ sắc, một chiếc muỗng múc canh thơm phức.',
    keyWords: [
      { cn: '刀', py: 'dāo', vn: 'Con dao' },
      { cn: '勺', py: 'sháo', vn: 'Cái thìa / muỗng' }
    ],
    strokesNotes: 'Chữ Đao (刀): ngang gập móc trước, phẩy xiên sau.',
    audioText: '刀、勺。小刀、汤勺。'
  },
  {
    pageIndex: 33,
    bookPage: 36,
    unitTitle: 'Bài 5: Đồ Dùng & Bút Thuận',
    title: 'Vật dụng & Giao thông: 弓 (Cây cung), 门 (Cửa), 舟 (Thuyền), 车 (Xe)',
    category: 'Chữ tượng hình',
    content: '拉弓射箭，推开大门，小舟漂流水面，马车奔驰大道。',
    pinyin: 'Lā gōng shè jiàn, tuī kāi dàmén, xiǎozhōu piāoliú shuǐmiàn, mǎchē bēnchí dàdào.',
    meaning: 'Kéo căng dây cung, mở toang cổng lớn, thuyền con lướt sóng, cỗ xe lăn bánh dặm trường.',
    keyWords: [
      { cn: '弓', py: 'gōng', vn: 'Cây cung' },
      { cn: '门', py: 'mén', vn: 'Cánh cổng / cửa' },
      { cn: '舟', py: 'zhōu', vn: 'Con thuyền' },
      { cn: '车', py: 'chē', vn: 'Cỗ xe' }
    ],
    strokesNotes: 'Đây là 4 chữ tượng hình kinh điển về phương tiện & đồ dùng cổ đại.',
    audioText: '弓、门、舟、车。'
  },
  {
    pageIndex: 34,
    bookPage: 37,
    unitTitle: 'Bài 5: Đồ Dùng & Bút Thuận',
    title: '练习六: Ôn tập tổng hợp bảng 36 chữ tượng hình căn bản',
    category: 'Đại ôn tập',
    content: '一二三四五，六七八九十。人头手足口牙，日月水火山石田土，鸟兽虫鱼牛羊马，衣巾刀勺弓门舟车。',
    pinyin: 'Bảng chữ tượng hình căn bản tổng hợp.',
    meaning: 'Học sinh kiểm tra lại toàn bộ vốn chữ tượng hình đã học từ trang 4 đến trang 36.',
    keyWords: [
      { cn: '象形字', py: 'xiàngxíngzì', vn: 'Chữ tượng hình' }
    ],
    strokesNotes: 'Giúp bé nhận diện mặt chữ không cần nhìn phiên âm.',
    audioText: '练习六。象形字大复习。'
  },
  {
    pageIndex: 35,
    bookPage: 38,
    unitTitle: 'Bài 5: Đồ Dùng & Bút Thuận',
    title: 'Bảng quy tắc Bút thuận chuẩn: 7 quy tắc vàng viết chữ Hán',
    category: 'Quy tắc vàng',
    content: '1. Ngang trước sổ sau. 2. Phẩy trước mác sau. 3. Trên trước dưới sau. 4. Trái trước phải sau. 5. Ngoài trước trong sau. 6. Vào trước đóng sau. 7. Giữa trước hai bên sau.',
    pinyin: 'Hànzì bǐshùn guīzé.',
    meaning: '7 quy tắc cốt lõi giúp bé đặt nét bút chuẩn mực, viết chữ đẹp và ngay ngắn.',
    keyWords: [
      { cn: '笔顺', py: 'bǐshùn', vn: 'Thứ tự nét bút' }
    ],
    strokesNotes: 'Quy tắc bất biến: Vào nhà rồi mới đóng cửa (như chữ Nhật, Hồi, Quốc).',
    audioText: '汉字笔顺规则：先横后竖，先撇后捺，先上后下，先左后右。'
  },

  // --- NHÓM 6: BÀI 1 - 上学去 (Trang 36 - 38) ---
  {
    pageIndex: 36,
    bookPage: 39,
    unitTitle: 'Bài 6: 上学去 (Đi Học)',
    title: 'Bài khóa chính: 开学了，小朋友，上学去',
    category: 'Bài khóa',
    content: '开学了，小朋友，上学去。',
    pinyin: 'Kāixué le, xiǎopéngyou, shàngxué qù.',
    meaning: 'Tựu trường rồi, các bạn nhỏ ơi, chúng mình cùng đi học thôi.',
    keyWords: [
      { cn: '开学', py: 'kāixué', vn: 'Tựu trường' },
      { cn: '小朋友', py: 'xiǎopéngyou', vn: 'Bạn nhỏ' },
      { cn: '上学', py: 'shàngxué', vn: 'Đi học' }
    ],
    strokesNotes: 'Đọc với giọng vui tươi, háo hức đón năm học mới.',
    audioText: '开学了，小朋友，上学去。'
  },
  {
    pageIndex: 37,
    bookPage: 40,
    unitTitle: 'Bài 6: 上学去 (Đi Học)',
    title: 'Từ mới & Tập viết nét: 学, 去, 朋, 友',
    category: 'Từ vựng & Bút thuận',
    content: '生字：学（学习）、去（走去）、朋（朋友）、友（友好）。',
    pinyin: 'Shēngzì: Xué, qù, péng, yǒu.',
    meaning: 'Từ mới: Học (học tập), Khứ (đi đến), Bằng Hữu (bạn bè thân thiết).',
    keyWords: [
      { cn: '朋友', py: 'péngyou', vn: 'Bạn bè' },
      { cn: '去', py: 'qù', vn: 'Đi' }
    ],
    strokesNotes: 'Chữ 朋 gồm hai chữ Nguyệt đứng cạnh nhau (bạn thân như hai vầng trăng).',
    audioText: '学、去、朋、友。学习、上学、朋友。'
  },
  {
    pageIndex: 38,
    bookPage: 41,
    unitTitle: 'Bài 6: 上学去 (Đi Học)',
    title: 'Luyện nói & Bài tập: 我去上学，你上学吗？',
    category: 'Luyện nói',
    content: '句型练习：我去上学。哥哥去上学。我们都是好朋友。',
    pinyin: 'Wǒ qù shàngxué. Gēge qù shàngxué. Wǒmen dōu shì hǎo péngyou.',
    meaning: 'Mẫu câu: Em đi học. Anh trai đi học. Chúng mình đều là bạn tốt của nhau.',
    keyWords: [
      { cn: '哥哥', py: 'gēge', vn: 'Anh trai' },
      { cn: '好朋友', py: 'hǎo péngyou', vn: 'Bạn tốt' }
    ],
    strokesNotes: 'Thực hành chào hỏi ba mẹ trước khi ra khỏi nhà đến trường.',
    audioText: '我去上学。我们都是好朋友。'
  },

  // --- NHÓM 7: BÀI 2 - 好学生 (Trang 39 - 42) ---
  {
    pageIndex: 39,
    bookPage: 42,
    unitTitle: 'Bài 7: 好学生 (Học Sinh Ngoan)',
    title: 'Bài khóa 1: 我是好学生，天天上学去',
    category: 'Bài khóa',
    content: '我是好学生，天天上学去。',
    pinyin: 'Wǒ shì hǎo xuésheng, tiāntiān shàngxué qù.',
    meaning: 'Em là học sinh ngoan, ngày nào cũng chăm chỉ cắp sách đến trường.',
    keyWords: [
      { cn: '好学生', py: 'hǎo xuésheng', vn: 'Học sinh ngoan' },
      { cn: '天天', py: 'tiāntiān', vn: 'Ngày ngày / Mỗi ngày' }
    ],
    strokesNotes: 'Chữ Thiên (天): Nét ngang trên ngắn, nét ngang dưới dài, phẩy mác xòe rộng.',
    audioText: '我是好学生，天天上学去。'
  },
  {
    pageIndex: 40,
    bookPage: 43,
    unitTitle: 'Bài 7: 好学生 (Học Sinh Ngoan)',
    title: 'Bài khóa 2: 爱学习，爱老师，爱同学',
    category: 'Bài khóa tiếp nối',
    content: '在学校，爱学习，爱老师，爱同学。',
    pinyin: 'Zài xuéxiào, ài xuéxí, ài lǎoshī, ài tóngxué.',
    meaning: 'Ở trường, em yêu học tập, kính yêu thầy cô giáo, yêu mến các bạn cùng lớp.',
    keyWords: [
      { cn: '爱', py: 'ài', vn: 'Yêu thương / Kính yêu' },
      { cn: '同学', py: 'tóngxué', vn: 'Bạn cùng lớp' }
    ],
    strokesNotes: 'Chữ Ái (爱) thể hiện tình cảm ấm áp, đoàn kết giữa thầy và trò.',
    audioText: '爱学习，爱老师，爱同学。'
  },
  {
    pageIndex: 41,
    bookPage: 44,
    unitTitle: 'Bài 7: 好学生 (Học Sinh Ngoan)',
    title: 'Từ vựng & Bút thuận: 好, 生, 爱, 习, 我, 是',
    category: 'Từ vựng & Bút thuận',
    content: '生字笔顺：好（女+子）、生（5画）、我（7画）、是（9画）。',
    pinyin: 'Hǎo, shēng, ài, xí, wǒ, shì.',
    meaning: 'Từ mới: Hảo (tốt), Sinh (sống), Ái (yêu), Tập (ôn luyện), Ngã (tôi), Thị (là).',
    keyWords: [
      { cn: '我是', py: 'wǒ shì', vn: 'Tôi là / Em là' },
      { cn: '学习', py: 'xuéxí', vn: 'Học tập' }
    ],
    strokesNotes: 'Chữ 是: Trên chữ Nhật (日), dưới chữ Sơ/Chỉ có nét mác dài đỡ lấy.',
    audioText: '好、生、爱、习、我、是。我是好学生。'
  },
  {
    pageIndex: 42,
    bookPage: 45,
    unitTitle: 'Bài 7: 好学生 (Học Sinh Ngoan)',
    title: 'Luyện nói & Trắc nghiệm: Em là một học sinh gương mẫu',
    category: 'Luyện nói',
    content: '对话练习：“你是好学生吗？”——“我是好学生，我天天认真做功课！”',
    pinyin: 'Nǐ shì hǎo xuésheng ma? Wǒ shì hǎo xuésheng!',
    meaning: 'Luyện đối thoại: "Bạn có phải học sinh ngoan không?" - "Mình là học sinh ngoan, ngày nào mình cũng làm bài tập đầy đủ!"',
    keyWords: [
      { cn: '做功课', py: 'zuò gōngkè', vn: 'Làm bài tập về nhà' }
    ],
    strokesNotes: 'Bé tự tin phát âm dõng dạc trả lời cô giáo.',
    audioText: '你是好学生吗？我是好学生，我爱老师，爱学习。'
  },

  // --- NHÓM 8: BÀI 3 - 学校里 (Trang 43 - 46) ---
  {
    pageIndex: 43,
    bookPage: 46,
    unitTitle: 'Bài 8: 学校里 (Trong Trường Học)',
    title: 'Bài khóa 1: 学校里，有老师，有同学',
    category: 'Bài khóa',
    content: '学校里，有老师，有同学。',
    pinyin: 'Xuéxiào lǐ, yǒu lǎoshī, yǒu tóngxué.',
    meaning: 'Ở trong trường học thân yêu, có thầy cô giáo, có bạn bè cùng trang lứa.',
    keyWords: [
      { cn: '学校', py: 'xuéxiào', vn: 'Trường học' },
      { cn: '老师', py: 'lǎoshī', vn: 'Thầy cô giáo' }
    ],
    strokesNotes: 'Chữ Lý (里): Trên chữ Điền, dưới chữ Thổ (ở trong khuôn viên).',
    audioText: '学校里，有老师，有同学。'
  },
  {
    pageIndex: 44,
    bookPage: 47,
    unitTitle: 'Bài 8: 学校里 (Trong Trường Học)',
    title: 'Bài khóa 2: 大家在一起，唱歌又游戏',
    category: 'Bài khóa tiếp nối',
    content: '大家在一起，唱歌又游戏。多么快活！',
    pinyin: 'Dàjiā zài yīqǐ, chànggē yòu yóuxì. Duōme kuàihuo!',
    meaning: 'Mọi người sum vầy bên nhau, vừa cất tiếng hát lại vừa cùng chơi trò chơi thật vui sướng!',
    keyWords: [
      { cn: '大家', py: 'dàjiā', vn: 'Mọi người / Cả lớp' },
      { cn: '唱歌', py: 'chànggē', vn: 'Ca hát' },
      { cn: '游戏', py: 'yóuxì', vn: 'Trò chơi' }
    ],
    strokesNotes: 'Cấu trúc "又...又...": vừa... lại vừa... (chỉ hai hành động song song).',
    audioText: '大家在一起，唱歌又游戏。'
  },
  {
    pageIndex: 45,
    bookPage: 48,
    unitTitle: 'Bài 8: 学校里 (Trong Trường Học)',
    title: 'Từ vựng & Bút thuận: 校, 里, 有, 老, 师, 同, 的',
    category: 'Từ vựng & Bút thuận',
    content: '生字：校（木字旁）、老（老字头）、师（巾字底）、有（月字底）。',
    pinyin: 'Xiào, lǐ, yǒu, lǎo, shī, tóng, de.',
    meaning: 'Từ mới: Hiệu (trường), Lý (trong), Hữu (có), Lão (già/thầy), Sư (người dạy), Đồng (cùng), Đích (của).',
    keyWords: [
      { cn: '我们的', py: 'wǒmen de', vn: 'Của chúng em' },
      { cn: '有', py: 'yǒu', vn: 'Có' }
    ],
    strokesNotes: 'Chữ Lão (老): Nét phẩy dài xuyên qua các nét ngang.',
    audioText: '校、里、有、老、师、同、的。我们的学校。'
  },
  {
    pageIndex: 46,
    bookPage: 49,
    unitTitle: 'Bài 8: 学校里 (Trong Trường Học)',
    title: 'Luyện nói & Cảm thụ: 我们的学校大又美',
    category: 'Luyện nói',
    content: '我们的学校真美丽，有大大的操场，有亮亮的教室。',
    pinyin: 'Wǒmen de xuéxiào zhēn měilì, yǒu dàdà de cāochǎng, yǒu liàngliàng de jiàoshì.',
    meaning: 'Trường học của chúng em thật đẹp đẽ, có sân chơi rộng thênh thang, có phòng học sáng sủa khang trang.',
    keyWords: [
      { cn: '操场', py: 'cāochǎng', vn: 'Sân tập / Sân trường' },
      { cn: '美丽', py: 'měilì', vn: 'Đẹp đẽ' }
    ],
    strokesNotes: 'Bé tập miêu tả cảnh quan trường học của chính mình.',
    audioText: '我们的学校大又美，大家在一起真快乐！'
  },

  // --- NHÓM 9: BÀI 4 - 课室里 (Trang 47 - 50) ---
  {
    pageIndex: 47,
    bookPage: 50,
    unitTitle: 'Bài 9: 课室里 (Trong Lớp Học)',
    title: 'Bài khóa 1: 课室里，桌椅整齐，黑板大',
    category: 'Bài khóa',
    content: '课室里，桌椅整齐，黑板大。',
    pinyin: 'Kèshì lǐ, zhuōyǐ zhěngqí, hēibǎn dà.',
    meaning: 'Trong phòng học, bàn ghế kê ngay ngắn thẳng hàng, tấm bảng đen thật to.',
    keyWords: [
      { cn: '课室', py: 'kèshì', vn: 'Phòng học' },
      { cn: '桌椅', py: 'zhuōyǐ', vn: 'Bàn ghế' },
      { cn: '黑板', py: 'hēibǎn', vn: 'Bảng đen' }
    ],
    strokesNotes: 'Miêu tả không gian lớp học sạch sẽ, trang nghiêm.',
    audioText: '课室里，桌椅整齐，黑板大。'
  },
  {
    pageIndex: 48,
    bookPage: 51,
    unitTitle: 'Bài 9: 课室里 (Trong Lớp Học)',
    title: 'Bài khóa 2: 老师讲课，我们用心听',
    category: 'Bài khóa tiếp nối',
    content: '老师在讲课，同学们用心听。不说话，不乱动。',
    pinyin: 'Lǎoshī zài jiǎngkè, tóngxuémen yòngxīn tīng. Bù shuōhuà, bù luàndòng.',
    meaning: 'Cô giáo đang say sưa giảng bài, các bạn học sinh chăm chú lắng nghe, không nói chuyện riêng, không nghịch ngợm.',
    keyWords: [
      { cn: '讲课', py: 'jiǎngkè', vn: 'Giảng bài' },
      { cn: '用心听', py: 'yòngxīn tīng', vn: 'Chăm chú lắng nghe' }
    ],
    strokesNotes: 'Học sinh lễ phép, chăm chỉ nghe giảng trong giờ học.',
    audioText: '老师讲课，我们用心听。'
  },
  {
    pageIndex: 49,
    bookPage: 52,
    unitTitle: 'Bài 9: 课室里 (Trong Lớp Học)',
    title: 'Từ vựng & Bút thuận: 课, 室, 桌, 椅, 听, 讲',
    category: 'Từ vựng & Bút thuận',
    content: '生字学习：课（言字旁）、室（宝盖头）、听（口字旁）、讲（言字旁）。',
    pinyin: 'Kè, shì, zhuō, yǐ, tīng, jiǎng.',
    meaning: 'Từ mới: Khóa (tiết học), Thất (phòng), Trác (bàn), Y (ghế), Thính (nghe), Giảng (nói giải thích).',
    keyWords: [
      { cn: '上课', py: 'shàngkè', vn: 'Vào giờ học' },
      { cn: '教室', py: 'jiàoshì', vn: 'Phòng học' }
    ],
    strokesNotes: 'Bộ Ngôn (讠) xuất hiện trong các chữ liên quan đến lời nói: 讲, 课, 话.',
    audioText: '课、室、桌、椅、听、讲。课室里用心听。'
  },
  {
    pageIndex: 50,
    bookPage: 53,
    unitTitle: 'Bài 9: 课室里 (Trong Lớp Học)',
    title: 'Luyện nói & Trật tự lớp học: Giữ gìn vệ sinh chung',
    category: 'Luyện nói',
    content: '课室里干干净净，我们要爱护桌椅，不在墙壁上乱画。',
    pinyin: 'Kèshì lǐ gāngānjìngjìng, wǒmen yào àihù zhuōyǐ.',
    meaning: 'Trong lớp học luôn sạch sẽ tinh tươm, chúng em bảo vệ bàn ghế, không vẽ bậy lên tường.',
    keyWords: [
      { cn: '干干净净', py: 'gāngānjìngjìng', vn: 'Sạch sẽ tinh tươm' },
      { cn: '爱护', py: 'àihù', vn: 'Bảo vệ / Giữ gìn' }
    ],
    strokesNotes: 'Giáo dục ý thức giữ gìn tài sản chung và vệ sinh trường lớp.',
    audioText: '课室里干干净净，桌椅整整齐齐。'
  },

  // --- NHÓM 10: BÀI 5 - 读书与写字 (Trang 51 - 54) ---
  {
    pageIndex: 51,
    bookPage: 54,
    unitTitle: 'Bài 10: 读书与写字',
    title: 'Bài khóa 1: 拿笔写字，打开书本读书',
    category: 'Bài khóa',
    content: '拿笔写字，打开书本读书。',
    pinyin: 'Ná bǐ xiězì, dǎkāi shūběn dúshū.',
    meaning: 'Cầm bút nắn nót viết từng nét chữ, mở trang sách ra say sưa đọc bài.',
    keyWords: [
      { cn: '拿笔', py: 'ná bǐ', vn: 'Cầm bút' },
      { cn: '书本', py: 'shūběn', vn: 'Sách vở' },
      { cn: '写字', py: 'xiězì', vn: 'Viết chữ' }
    ],
    strokesNotes: 'Chữ Bút (笔) có bộ Trúc (竹) vì bút lông thời xưa làm bằng thân trúc.',
    audioText: '拿笔写字，打开书本读书。'
  },
  {
    pageIndex: 52,
    bookPage: 55,
    unitTitle: 'Bài 10: 读书与写字',
    title: 'Bài khóa 2: 认认真真写，整整齐齐看',
    category: 'Bài khóa tiếp nối',
    content: '认认真真写字，整整齐齐读书。学知识，长本领。',
    pinyin: 'Rènrèn-zhēnzhēn xiězì, zhěngzhěng-qíqí dúshū. Xué zhīshi, zhǎng běnlǐng.',
    meaning: 'Nắn nót từng nét viết cẩn thận, mở sách trang nghiêm đọc rành mạch. Học kiến thức, rèn giũa bản lĩnh tương lai.',
    keyWords: [
      { cn: '认认真真', py: 'rènrèn-zhēnzhēn', vn: 'Chăm chỉ nắn nót' },
      { cn: '知识', py: 'zhīshi', vn: 'Kiến thức' }
    ],
    strokesNotes: 'Từ láy 4 chữ tăng sức biểu cảm và tính nhịp điệu cho bài văn vần.',
    audioText: '认认真真写，整整齐齐看。'
  },
  {
    pageIndex: 53,
    bookPage: 56,
    unitTitle: 'Bài 10: 读书与写字',
    title: 'Từ vựng & Bút thuận: 书, 本, 笔, 读, 写, 字',
    category: 'Từ vựng & Bút thuận',
    content: '生字练习：书（4画）、本（木+横）、笔（竹字头）、字（宝盖头）。',
    pinyin: 'Shū, běn, bǐ, dú, xiě, zì.',
    meaning: 'Từ mới: Thư (sách), Bản (gốc/quyển), Bút (cây bút), Độc (đọc), Tả (viết), Tự (chữ).',
    keyWords: [
      { cn: '汉字', py: 'hànzì', vn: 'Chữ Hán' },
      { cn: '笔记本', py: 'bǐjìběn', vn: 'Quyển vở ghi chép' }
    ],
    strokesNotes: 'Chữ Thư (书) viết nét ngang gập gập móc dứt khoát, sau cùng thêm dấu chấm trên đầu.',
    audioText: '书、本、笔、读、写、字。读书写字。'
  },
  {
    pageIndex: 54,
    bookPage: 57,
    unitTitle: 'Bài 10: 读书与写字',
    title: 'Luyện nói & Thói quen: Tư thế ngồi học đúng chuẩn',
    category: 'Luyện nói',
    content: '读书时，身体坐直；写字时，胸口离桌一拳，眼睛离书本一尺。',
    pinyin: 'Dúshū shí, shēntǐ zuò zhí; xiězì shí, yǎnjing lí shūběn yī chǐ.',
    meaning: 'Khi đọc sách ngồi thẳng lưng; khi viết bài ngực cách mép bàn một nắm đấm, mắt cách trang vở một gang tay.',
    keyWords: [
      { cn: '坐直', py: 'zuò zhí', vn: 'Ngồi thẳng lưng' },
      { cn: '保护眼睛', py: 'bǎohù yǎnjing', vn: 'Bảo vệ đôi mắt' }
    ],
    strokesNotes: 'Giữ khoảng cách để tránh cận thị và cong vẹo cột sống.',
    audioText: '身体坐端正，天天读书写字好习惯。'
  },

  // --- NHÓM 11: BÀI 6 - 来拍球 (Trang 55 - 58) ---
  {
    pageIndex: 55,
    bookPage: 58,
    unitTitle: 'Bài 11: 来拍球 (Cùng Đập Bóng)',
    title: 'Bài khóa 1: 来拍球，拍皮球，一二三四五',
    category: 'Bài khóa',
    content: '来拍球，拍皮球，一、二、三、四、五。',
    pinyin: 'Lái pāi qiú, pāi píqiú, yī, èr, sān, sì, wǔ.',
    meaning: 'Nào cùng đập bóng, đập quả bóng da tròn xoe, một, hai, ba, bốn, năm.',
    keyWords: [
      { cn: '拍球', py: 'pāiqiú', vn: 'Đập bóng' },
      { cn: '皮球', py: 'píqiú', vn: 'Quả bóng da' }
    ],
    strokesNotes: 'Bài học kết hợp nhịp điệu vận động thể thao với ôn tập số đếm.',
    audioText: '来拍球，拍皮球，一二三四五。'
  },
  {
    pageIndex: 56,
    bookPage: 59,
    unitTitle: 'Bài 11: 来拍球 (Cùng Đập Bóng)',
    title: 'Bài khóa 2: 拍得高，拍得快，大家笑嘻嘻',
    category: 'Bài khóa tiếp nối',
    content: '拍得高，拍得快，大家笑嘻嘻。你拍六，我拍七，八九十！',
    pinyin: 'Pāi de gāo, pāi de kuài, dàjiā xiàoxīxī. Nǐ pāi liù, wǒ pāi qī, bā jiǔ shí!',
    meaning: 'Đập bóng nảy cao, đập bóng nhịp nhanh, cả bọn cười toe toét. Bạn đập sáu, mình đập bảy, tám chín mười!',
    keyWords: [
      { cn: '拍得高', py: 'pāi de gāo', vn: 'Đập bóng nảy cao' },
      { cn: '拍得快', py: 'pāi de kuài', vn: 'Đập bóng nảy nhanh' },
      { cn: '笑嘻嘻', py: 'xiàoxīxī', vn: 'Cười tươi hớn hở' }
    ],
    strokesNotes: 'Tập đếm tiếp từ 6 đến 10 theo nhịp nảy của bóng.',
    audioText: '拍得高，拍得快，大家笑嘻嘻。'
  },
  {
    pageIndex: 57,
    bookPage: 60,
    unitTitle: 'Bài 11: 来拍球 (Cùng Đập Bóng)',
    title: 'Từ vựng & Bút thuận: 拍, 球, 高, 快, 笑',
    category: 'Từ vựng & Bút thuận',
    content: '生字：拍（提手旁）、球（王字旁）、高（高字头）、快（竖心旁）、笑（竹字头）。',
    pinyin: 'Pāi, qiú, gāo, kuài, xiào.',
    meaning: 'Từ mới: Phách (vỗ/đập), Cầu (quả bóng), Cao (nảy cao), Khoái (nhanh nhẹn), Tiếu (nụ cười).',
    keyWords: [
      { cn: '快乐', py: 'kuàilè', vn: 'Vui vẻ' },
      { cn: '高兴', py: 'gāoxìng', vn: 'Hân hoan' }
    ],
    strokesNotes: 'Chữ Tiếu (笑) có bộ Trúc trên đầu tựa như đôi lông mày cong lên khi cười.',
    audioText: '拍、球、高、快、笑。拍球真快乐。'
  },
  {
    pageIndex: 58,
    bookPage: 61,
    unitTitle: 'Bài 11: 来拍球 (Cùng Đập Bóng)',
    title: 'Luyện nói & Trò chơi vận động: Em yêu thể dục thể thao',
    category: 'Luyện nói',
    content: '下课了，我们在操场上拍皮球、跳绳、跑步，锻炼身体好健康！',
    pinyin: 'Xiàkè le, wǒmen zài cāochǎng shàng pāi píqiú.',
    meaning: 'Giờ ra chơi, chúng em ra sân trường đập bóng, nhảy dây, chạy bộ, rèn luyện thân thể dẻo dai khỏe mạnh!',
    keyWords: [
      { cn: '操场', py: 'cāochǎng', vn: 'Sân bóng / Sân trường' },
      { cn: '健康', py: 'jiànkāng', vn: 'Khỏe mạnh' }
    ],
    strokesNotes: 'Khuyến khích bé năng vận động ngoài trời cùng bạn bè.',
    audioText: '操场上拍球真好玩，一二三四五，健康成长！'
  },

  // --- NHÓM 12: BÀI 7 - 过马路 (Trang 59 - 62) ---
  {
    pageIndex: 59,
    bookPage: 62,
    unitTitle: 'Bài 12: 过马路 (An Toàn Giao Thông)',
    title: 'Bài khóa 1: 过马路，看信号，红灯停，绿灯行',
    category: 'Bài khóa',
    content: '过马路，看信号。红灯停，绿灯行。',
    pinyin: 'Guò mǎlù, kàn xìnhào. Hóngdēng tíng, lǜdēng xíng.',
    meaning: 'Bé sang đường, nhớ quan sát tín hiệu đèn. Đèn đỏ dừng lại, đèn xanh mới được đi.',
    keyWords: [
      { cn: '信号', py: 'xìnhào', vn: 'Tín hiệu đèn' },
      { cn: '红灯停', py: 'hóngdēng tíng', vn: 'Đèn đỏ dừng lại' },
      { cn: '绿灯行', py: 'lǜdēng xíng', vn: 'Đèn xanh được đi' }
    ],
    strokesNotes: 'Khẩu quyết nằm lòng về an toàn giao thông cho trẻ em toàn thế giới.',
    audioText: '过马路，看信号。红灯停，绿灯行。'
  },
  {
    pageIndex: 60,
    bookPage: 63,
    unitTitle: 'Bài 12: 过马路 (An Toàn Giao Thông)',
    title: 'Bài khóa 2: 走斑马线，不跑不闹，安全第一',
    category: 'Bài khóa tiếp nối',
    content: '过街走斑马线，不跑不闹。左右看清来往车辆，安全第一！',
    pinyin: 'Guò jiē zǒu bānmǎxiàn, bù pǎo bù nào. Ānquán dì-yī!',
    meaning: 'Sang đường đi trên vạch ngựa vằn, không chạy nhảy xô đẩy. Nhìn trái nhìn phải xe cộ, an toàn là trên hết!',
    keyWords: [
      { cn: '斑马线', py: 'bānmǎxiàn', vn: 'Vạch kẻ sang đường' },
      { cn: '安全第一', py: 'ānquán dì-yī', vn: 'An toàn là số 1' }
    ],
    strokesNotes: 'Vạch kẻ đường gọi là 斑马线 vì có các sọc trắng đen như lông chú ngựa vằn.',
    audioText: '走斑马线，不跑不闹，安全第一。'
  },
  {
    pageIndex: 61,
    bookPage: 64,
    unitTitle: 'Bài 12: 过马路 (An Toàn Giao Thông)',
    title: 'Từ vựng & Bút thuận: 路, 灯, 红, 绿, 停, 行, 走',
    category: 'Từ vựng & Bút thuận',
    content: '生字：路（足字旁）、灯（火字旁）、红（绞丝旁）、绿（绞丝旁）、停（单人旁）。',
    pinyin: 'Lù, dēng, hóng, lǜ, tíng, xíng, zǒu.',
    meaning: 'Từ mới: Lộ (đường đi), Đăng (đèn), Hồng (đỏ), Lục (xanh), Đình (dừng), Hành (đi), Tẩu (bước đi).',
    keyWords: [
      { cn: '交通', py: 'jiāotōng', vn: 'Giao thông' },
      { cn: '红绿灯', py: 'hónglǜdēng', vn: 'Đèn giao thông xanh đỏ' }
    ],
    strokesNotes: 'Chữ Lộ (路) có bộ Túc (bước chân) đi trên đường.',
    audioText: '路、灯、红、绿、停、行、走。红绿灯。'
  },
  {
    pageIndex: 62,
    bookPage: 65,
    unitTitle: 'Bài 12: 过马路 (An Toàn Giao Thông)',
    title: 'Luyện nói & Tình huống thực tế: Nắm tay người lớn khi qua đường',
    category: 'Luyện nói',
    content: '小朋友过马路，要拉着爸爸妈妈的手，绿灯亮时再走斑马线。',
    pinyin: 'Xiǎopéngyou guò mǎlù, yào lā zhe bàba māmā de shǒu.',
    meaning: 'Các bé nhỏ khi sang đường cần nắm chặt tay ba mẹ, đợi đèn xanh sáng mới bước qua vạch kẻ đường.',
    keyWords: [
      { cn: '拉手', py: 'lāshǒu', vn: 'Nắm tay' },
      { cn: '小心', py: 'xiǎoxīn', vn: 'Cẩn thận' }
    ],
    strokesNotes: 'Rèn luyện kĩ năng sống tự bảo vệ bản thân khi tham gia giao thông.',
    audioText: '过马路拉手走，看清红绿灯，人人夸我好少年。'
  },

  // --- NHÓM 13: BÀI 8 - 小猫和小羊 (Trang 63 - 66) ---
  {
    pageIndex: 63,
    bookPage: 66,
    unitTitle: 'Bài 13: 小猫和小羊',
    title: 'Bài khóa 1: 小猫叫，喵喵喵，小猫爱吃鱼',
    category: 'Bài khóa',
    content: '小猫叫，喵喵喵，小猫爱吃鱼。',
    pinyin: 'Xiǎomāo jiào, miāo miāo miāo, xiǎomāo ài chī yú.',
    meaning: 'Mèo con kêu, meo meo meo, mèo con rất thích ăn cá.',
    keyWords: [
      { cn: '小猫', py: 'xiǎomāo', vn: 'Mèo con' },
      { cn: '喵喵喵', py: 'miāo miāo miāo', vn: 'Tiếng mèo kêu meo meo' },
      { cn: '吃鱼', py: 'chī yú', vn: 'Ăn cá' }
    ],
    strokesNotes: 'Chữ Miêu (喵) là chữ tượng thanh giả lập tiếng kêu của mèo.',
    audioText: '小猫叫，喵喵喵，小猫爱吃鱼。'
  },
  {
    pageIndex: 64,
    bookPage: 67,
    unitTitle: 'Bài 13: 小猫和小羊',
    title: 'Bài khóa 2: 小羊叫，咩咩咩，小羊爱吃草',
    category: 'Bài khóa tiếp nối',
    content: '小羊叫，咩咩咩，小羊爱吃草。',
    pinyin: 'Xiǎoyáng jiào, miē miē miē, xiǎoyáng ài chī cǎo.',
    meaning: 'Cừu con kêu, be be be, cừu con rất thích ăn cỏ non.',
    keyWords: [
      { cn: '小羊', py: 'xiǎoyáng', vn: 'Cừu con' },
      { cn: '咩咩咩', py: 'miē miē miē', vn: 'Tiếng cừu kêu be be' },
      { cn: '吃草', py: 'chī cǎo', vn: 'Ăn cỏ' }
    ],
    strokesNotes: 'Đối xứng cấu trúc câu với bài khóa về mèo con ở trang trước.',
    audioText: '小羊叫，咩咩咩，小羊爱吃草。'
  },
  {
    pageIndex: 65,
    bookPage: 68,
    unitTitle: 'Bài 13: 小猫和小羊',
    title: 'Từ vựng & Bút thuận: 猫, 羊, 吃, 鱼, 草, 叫',
    category: 'Từ vựng & Bút thuận',
    content: '生字：猫（反犬旁）、吃（口字旁）、叫（口字旁）、草（草字头）、羊（羊字头）。',
    pinyin: 'Māo, yáng, chī, yú, cǎo, jiào.',
    meaning: 'Từ mới: Miêu (mèo), Dương (dê/cừu), Ngật (ăn), Ngư (cá), Thảo (cỏ), Khiếu (kêu tiếng).',
    keyWords: [
      { cn: '小动物', py: 'xiǎo dòngwù', vn: 'Động vật nhỏ đáng yêu' },
      { cn: '爱吃', py: 'ài chī', vn: 'Thích ăn' }
    ],
    strokesNotes: 'Các động từ hành động ăn, kêu đều có bộ Khẩu (口) bên trái.',
    audioText: '猫、羊、吃、鱼、草、叫。小动物真可爱。'
  },
  {
    pageIndex: 66,
    bookPage: 69,
    unitTitle: 'Bài 13: 小猫和小羊',
    title: 'Luyện nói & Tổng kết sách: 猫吃鱼，羊吃草，鸟吃米',
    category: 'Tổng kết hoàn thành tập sách',
    content: '小猫吃鱼，不吃草；小羊吃草，不吃鱼；小鸟在树上，爱吃大米粒！我们学完了整本语文书，真棒！',
    pinyin: 'Xiǎomāo chī yú, bù chī cǎo; xiǎoyáng chī cǎo, bù chī yú; xiǎoniǎo ài chī mǐ!',
    meaning: 'Mèo con ăn cá, không ăn cỏ; cừu con ăn cỏ, không ăn cá; chú chim trên cành thích ăn thóc gạo! Chúng mình đã hoàn thành trọn vẹn 66 trang sách giáo khoa, chúc mừng các bé!',
    keyWords: [
      { cn: '大米', py: 'dàmǐ', vn: 'Gạo / Thóc' },
      { cn: '太棒了', py: 'tài bàng le', vn: 'Xuất sắc tuyệt vời' }
    ],
    strokesNotes: 'Trang sách thứ 66 kết thúc chương trình Sách Giáo Khoa Tiếng Hoa Lớp 1 Tập 1 trọn vẹn và đầy tự hào!',
    audioText: '小猫吃鱼，小羊吃草，小鸟吃米。恭喜你学完了整本书！太棒了！'
  }
];
