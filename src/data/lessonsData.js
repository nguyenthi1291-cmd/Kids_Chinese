/**
 * GIÁO TRÌNH TIẾNG TRUNG TIỂU HỌC & TRẺ EM CHUẨN QUỐC TẾ (YCT LEVEL 1)
 * 100% Sử dụng Icon Vector chuẩn FONT AWESOME sắc nét, chân thực, chuyên nghiệp
 */

export const DEFAULT_LESSONS = [
  {
    lesson_id: 'L01',
    topic_vn: 'Bài 1: Chào Hỏi & Lễ Phép',
    topic_cn: '问候篇 (Wènhòu)',
    level: 1,
    bgColor: 'from-amber-100 to-yellow-200',
    borderColor: 'border-amber-300',
    badgeColor: 'bg-amber-400 text-amber-950',
    faIcon: 'fa-solid fa-hand-peace',
    iconColor: 'text-amber-500',
    content: [
      { id: 'w_1', cn: '你好', pinyin: 'nǐ hǎo', vn: 'Xin chào', faIcon: 'fa-solid fa-hand-peace', iconColor: 'text-amber-500', sentence: '你好！很高兴见到你。', sentenceVn: 'Xin chào! Rất vui được gặp bạn.' },
      { id: 'w_2', cn: '老师好', pinyin: 'lǎoshī hǎo', vn: 'Em chào thầy / cô giáo', faIcon: 'fa-solid fa-chalkboard-user', iconColor: 'text-indigo-500', sentence: '老师好，早上好！', sentenceVn: 'Em chào cô giáo, chúc cô buổi sáng tốt lành!' },
      { id: 'w_3', cn: '谢谢', pinyin: 'xièxie', vn: 'Cảm ơn', faIcon: 'fa-solid fa-hands-holding-child', iconColor: 'text-rose-500', sentence: '谢谢妈妈送我的礼物。', sentenceVn: 'Cảm ơn mẹ đã tặng quà cho con.' },
      { id: 'w_4', cn: '不客气', pinyin: 'bú kèqi', vn: 'Đừng khách sáo / Không có gì', faIcon: 'fa-solid fa-face-smile', iconColor: 'text-emerald-500', sentence: '不用客气，我们是好朋友。', sentenceVn: 'Không có chi đâu, chúng mình là bạn tốt mà.' },
      { id: 'w_5', cn: '对不起', pinyin: 'duìbuqǐ', vn: 'Xin lỗi', faIcon: 'fa-solid fa-person-praying', iconColor: 'text-sky-500', sentence: '对不起，我不是故意的。', sentenceVn: 'Xin lỗi bạn, mình không cố ý đâu.' },
      { id: 'w_6', cn: '没关系', pinyin: 'méi guānxi', vn: 'Không sao đâu', faIcon: 'fa-solid fa-circle-check', iconColor: 'text-teal-500', sentence: '没关系，下次注意就好。', sentenceVn: 'Không sao đâu, lần sau chú ý là được rồi.' },
      { id: 'w_7', cn: '再见', pinyin: 'zàijiàn', vn: 'Tạm biệt', faIcon: 'fa-solid fa-hand', iconColor: 'text-orange-500', sentence: '明天见，老师再见！', sentenceVn: 'Hẹn mai gặp, em chào cô tạm biệt!' }
    ]
  },
  {
    lesson_id: 'L02',
    topic_vn: 'Bài 2: Làm Quen Bính Âm & Nguyên Âm',
    topic_cn: '拼音篇 (Pīnyīn)',
    level: 1,
    bgColor: 'from-sky-100 to-blue-200',
    borderColor: 'border-sky-300',
    badgeColor: 'bg-sky-400 text-sky-950',
    faIcon: 'fa-solid fa-font',
    iconColor: 'text-sky-500',
    content: [
      { id: 'py_1', cn: '阿姨', pinyin: 'āyí', vn: 'Cô / Dì (Nguyên âm A: ā á ǎ à)', faIcon: 'fa-solid fa-person-dress', iconColor: 'text-pink-500', sentence: '阿姨好！', sentenceVn: 'Cháu chào cô ạ!' },
      { id: 'py_2', cn: '大公鸡', pinyin: 'ō (gōngjī)', vn: 'Gà trống gáy (Nguyên âm O: ō ó ǒ ò)', faIcon: 'fa-solid fa-crow', iconColor: 'text-amber-600', sentence: '大公鸡喔喔啼。', sentenceVn: 'Chú gà trống gáy vang ó ó o.' },
      { id: 'py_3', cn: '白鹅', pinyin: 'é', vn: 'Con ngỗng trắng (Nguyên âm E: ē é ě è)', faIcon: 'fa-solid fa-feather-pointed', iconColor: 'text-cyan-500', sentence: '美丽的大白鹅。', sentenceVn: 'Chú ngỗng trắng xinh đẹp.' },
      { id: 'py_4', cn: '衣服', pinyin: 'yīfu', vn: 'Quần áo (Nguyên âm I: yī yí yǐ yì)', faIcon: 'fa-solid fa-shirt', iconColor: 'text-blue-500', sentence: '漂亮的新衣服。', sentenceVn: 'Bộ quần áo mới thật đẹp.' },
      { id: 'py_5', cn: '乌龟', pinyin: 'wūguī', vn: 'Con rùa (Nguyên âm U: wū wú wǔ wù)', faIcon: 'fa-solid fa-shield-halved', iconColor: 'text-emerald-600', sentence: '小乌龟慢慢爬。', sentenceVn: 'Bé rùa bò chầm chậm.' },
      { id: 'py_6', cn: '小鱼', pinyin: 'yú', vn: 'Con cá (Nguyên âm Ü: yū yú yǔ yù)', faIcon: 'fa-solid fa-fish', iconColor: 'text-sky-400', sentence: '小鱼在水里游。', sentenceVn: 'Cá con bơi tung tăng dưới nước.' }
    ]
  },
  {
    lesson_id: 'L03',
    topic_vn: 'Bài 3: Số Đếm & Hỏi Tuổi Của Bé',
    topic_cn: '数字与年龄 (Shùzì)',
    level: 1,
    bgColor: 'from-orange-100 to-amber-200',
    borderColor: 'border-orange-300',
    badgeColor: 'bg-orange-400 text-orange-950',
    faIcon: 'fa-solid fa-arrow-down-1-9',
    iconColor: 'text-orange-500',
    content: [
      { id: 'num_1', cn: '一', pinyin: 'yī', vn: 'Số Một (1)', faIcon: 'fa-solid fa-1', iconColor: 'text-blue-600', sentence: '我有一张嘴巴。', sentenceVn: 'Con có một cái miệng xinh.' },
      { id: 'num_2', cn: '二', pinyin: 'èr', vn: 'Số Hai (2)', faIcon: 'fa-solid fa-2', iconColor: 'text-emerald-600', sentence: '我有两只眼睛。', sentenceVn: 'Con có hai con mắt sáng.' },
      { id: 'num_3', cn: '三', pinyin: 'sān', vn: 'Số Ba (3)', faIcon: 'fa-solid fa-3', iconColor: 'text-amber-600', sentence: '我们家有三口人。', sentenceVn: 'Nhà con có ba người.' },
      { id: 'num_4', cn: '四', pinyin: 'sì', vn: 'Số Bốn (4)', faIcon: 'fa-solid fa-4', iconColor: 'text-purple-600', sentence: '一年有四个季节。', sentenceVn: 'Một năm có bốn mùa.' },
      { id: 'num_5', cn: '五', pinyin: 'wǔ', vn: 'Số Năm (5)', faIcon: 'fa-solid fa-5', iconColor: 'text-rose-600', sentence: '一只手有五个手指。', sentenceVn: 'Một bàn tay có năm ngón tay.' },
      { id: 'num_6', cn: '六', pinyin: 'liù', vn: 'Số Sáu (6)', faIcon: 'fa-solid fa-6', iconColor: 'text-teal-600', sentence: '六只小鸭子。', sentenceVn: 'Sáu chú vịt con.' },
      { id: 'num_7', cn: '七', pinyin: 'qī', vn: 'Số Bảy (7)', faIcon: 'fa-solid fa-7', iconColor: 'text-indigo-600', sentence: '彩虹有七种颜色。', sentenceVn: 'Cầu vồng có bảy sắc màu.' },
      { id: 'num_8', cn: '八', pinyin: 'bā', vn: 'Số Tám (8)', faIcon: 'fa-solid fa-8', iconColor: 'text-pink-600', sentence: '八个气球。', sentenceVn: 'Tám quả bóng bay.' },
      { id: 'num_9', cn: '九', pinyin: 'jiǔ', vn: 'Số Chín (9)', faIcon: 'fa-solid fa-9', iconColor: 'text-sky-600', sentence: '九朵鲜花。', sentenceVn: 'Chín bông hoa tươi.' },
      { id: 'num_10', cn: '十', pinyin: 'shí', vn: 'Số Mười (10)', faIcon: 'fa-solid fa-award', iconColor: 'text-amber-500', sentence: '我考了十分！', sentenceVn: 'Con được mười điểm!' },
      { id: 'num_age', cn: '岁', pinyin: 'suì', vn: 'Tuổi (Bé mấy tuổi?)', faIcon: 'fa-solid fa-cake-candles', iconColor: 'text-red-500', sentence: '我今年五岁。', sentenceVn: 'Năm nay con năm tuổi.' }
    ]
  },
  {
    lesson_id: 'L04',
    topic_vn: 'Bài 4: Các Bộ Phận Cơ Thể Bé',
    topic_cn: '身体部位 (Shēntǐ)',
    level: 2,
    bgColor: 'from-pink-100 to-rose-200',
    borderColor: 'border-pink-300',
    badgeColor: 'bg-pink-400 text-pink-950',
    faIcon: 'fa-solid fa-child',
    iconColor: 'text-pink-500',
    content: [
      { id: 'bd_1', cn: '眼睛', pinyin: 'yǎnjing', vn: 'Đôi mắt', faIcon: 'fa-solid fa-eye', iconColor: 'text-sky-600', sentence: '小明的眼睛大又亮。', sentenceVn: 'Đôi mắt của bạn Minh to và sáng.' },
      { id: 'bd_2', cn: '耳朵', pinyin: 'ěrduo', vn: 'Cái tai', faIcon: 'fa-solid fa-ear-listen', iconColor: 'text-amber-600', sentence: '小兔子有长长的耳朵。', sentenceVn: 'Thỏ con có đôi tai dài.' },
      { id: 'bd_3', cn: '鼻子', pinyin: 'bízi', vn: 'Cái mũi', faIcon: 'fa-solid fa-head-side-cough', iconColor: 'text-rose-500', sentence: '小狗的鼻子真灵敏。', sentenceVn: 'Chiếc mũi của chú cún thật thính.' },
      { id: 'bd_4', cn: '嘴巴', pinyin: 'zuǐba', vn: 'Cái miệng', faIcon: 'fa-solid fa-comment-dots', iconColor: 'text-red-500', sentence: '笑一笑，张开嘴巴。', sentenceVn: 'Cười lên nào, mở miệng xinh ra.' },
      { id: 'bd_5', cn: '头发', pinyin: 'tóufa', vn: 'Mái tóc', faIcon: 'fa-solid fa-scissors', iconColor: 'text-slate-700', sentence: '妈妈的头发黑又长。', sentenceVn: 'Mái tóc của mẹ đen và dài.' },
      { id: 'bd_6', cn: '手', pinyin: 'shǒu', vn: 'Bàn tay', faIcon: 'fa-solid fa-hand', iconColor: 'text-amber-500', sentence: '饭前要洗手。', sentenceVn: 'Trước khi ăn cơm phải rửa tay.' },
      { id: 'bd_7', cn: '脚', pinyin: 'jiǎo', vn: 'Bàn chân', faIcon: 'fa-solid fa-shoe-prints', iconColor: 'text-indigo-600', sentence: '穿上鞋子，迈开双脚。', sentenceVn: 'Xỏ giày vào, sải bước đôi chân.' }
    ]
  },
  {
    lesson_id: 'L05',
    topic_vn: 'Bài 5: Gia Đình & Đại Từ Xưng Hô',
    topic_cn: '我的家庭 (Jiātíng)',
    level: 2,
    bgColor: 'from-purple-100 to-indigo-200',
    borderColor: 'border-purple-300',
    badgeColor: 'bg-purple-400 text-purple-950',
    faIcon: 'fa-solid fa-people-roof',
    iconColor: 'text-purple-600',
    content: [
      { id: 'fm_1', cn: '我', pinyin: 'wǒ', vn: 'Con / Tôi / Em', faIcon: 'fa-solid fa-user', iconColor: 'text-blue-500', sentence: '我是一个好孩子。', sentenceVn: 'Con là một đứa trẻ ngoan.' },
      { id: 'fm_2', cn: '爸爸', pinyin: 'bàba', vn: 'Bố / Ba', faIcon: 'fa-solid fa-user-tie', iconColor: 'text-slate-700', sentence: '爸爸工作辛苦了。', sentenceVn: 'Bố đi làm vất vả rồi.' },
      { id: 'fm_3', cn: '妈妈', pinyin: 'māma', vn: 'Mẹ', faIcon: 'fa-solid fa-heart', iconColor: 'text-rose-500', sentence: '妈妈我爱你！', sentenceVn: 'Mẹ ơi con yêu mẹ!' },
      { id: 'fm_4', cn: '哥哥', pinyin: 'gēge', vn: 'Anh trai', faIcon: 'fa-solid fa-person', iconColor: 'text-sky-600', sentence: '哥哥陪我搭积木。', sentenceVn: 'Anh trai chơi xếp hình cùng em.' },
      { id: 'fm_5', cn: '姐姐', pinyin: 'jiějie', vn: 'Chị gái', faIcon: 'fa-solid fa-person-dress', iconColor: 'text-pink-500', sentence: '姐姐唱歌真好听。', sentenceVn: 'Chị gái hát nghe thật hay.' },
      { id: 'fm_6', cn: '弟弟', pinyin: 'dìdi', vn: 'Em trai', faIcon: 'fa-solid fa-baby', iconColor: 'text-teal-500', sentence: '小弟弟真可爱。', sentenceVn: 'Em trai nhỏ thật là đáng yêu.' },
      { id: 'fm_7', cn: '妹妹', pinyin: 'mèimei', vn: 'Em gái', faIcon: 'fa-solid fa-ribbon', iconColor: 'text-purple-500', sentence: '妹妹扎着小辫子。', sentenceVn: 'Em gái cột bím tóc xinh xắn.' },
      { id: 'fm_8', cn: '爱', pinyin: 'ài', vn: 'Yêu thương', faIcon: 'fa-solid fa-heart-pulse', iconColor: 'text-red-500', sentence: '我们一家人相亲相爱。', sentenceVn: 'Cả nhà chúng mình yêu thương nhau.' }
    ]
  },
  {
    lesson_id: 'L06',
    topic_vn: 'Bài 6: Thế Giới Động Vật Đáng Yêu (Chuẩn YCT 1)',
    topic_cn: '可爱动物 (Dòngwù)',
    level: 2,
    bgColor: 'from-emerald-100 to-green-200',
    borderColor: 'border-emerald-300',
    badgeColor: 'bg-emerald-400 text-emerald-950',
    faIcon: 'fa-solid fa-paw',
    iconColor: 'text-emerald-600',
    content: [
      { id: 'an_1', cn: '熊猫', pinyin: 'xióngmāo', vn: 'Gấu trúc', faIcon: 'fa-solid fa-otter', iconColor: 'text-slate-800', sentence: '大熊猫是中国的国宝。', sentenceVn: 'Gấu trúc là quốc bảo của Trung Quốc.' },
      { id: 'an_2', cn: '猫', pinyin: 'māo', vn: 'Con mèo', faIcon: 'fa-solid fa-cat', iconColor: 'text-amber-500', sentence: '小猫在屋顶上晒太阳。', sentenceVn: 'Mèo con phơi nắng trên mái nhà.' },
      { id: 'an_3', cn: '狗', pinyin: 'gǒu', vn: 'Con chó', faIcon: 'fa-solid fa-dog', iconColor: 'text-yellow-700', sentence: '小狗忠诚又勇敢。', sentenceVn: 'Chú chó nhỏ trung thành và dũng cảm.' },
      { id: 'an_4', cn: '鸟', pinyin: 'niǎo', vn: 'Con chim', faIcon: 'fa-solid fa-dove', iconColor: 'text-sky-500', sentence: '小鸟在树枝上快乐歌唱。', sentenceVn: 'Chim non cất tiếng hót vui vẻ trên cành cây.' },
      { id: 'an_5', cn: '鱼', pinyin: 'yú', vn: 'Con cá', faIcon: 'fa-solid fa-fish-fins', iconColor: 'text-cyan-500', sentence: '热带鱼五颜六色。', sentenceVn: 'Cá nhiệt đới mang đủ sắc màu.' },
      { id: 'an_6', cn: '兔子', pinyin: 'tùzi', vn: 'Con thỏ', faIcon: 'fa-solid fa-shield-cat', iconColor: 'text-rose-400', sentence: '小白兔最爱吃胡萝卜。', sentenceVn: 'Thỏ trắng thích ăn cà rốt nhất.' },
      { id: 'an_7', cn: '大象', pinyin: 'dàxiàng', vn: 'Con voi', faIcon: 'fa-solid fa-hippo', iconColor: 'text-indigo-500', sentence: '大象的长鼻子会喷水。', sentenceVn: 'Cái vòi dài của chú voi biết phun nước.' }
    ]
  },
  {
    lesson_id: 'L07',
    topic_vn: 'Bài 7: Sắc Màu Quanh Em (YCT 1)',
    topic_cn: '神奇颜色 (Yánsè)',
    level: 3,
    bgColor: 'from-rose-100 to-red-200',
    borderColor: 'border-rose-300',
    badgeColor: 'bg-rose-400 text-rose-950',
    faIcon: 'fa-solid fa-palette',
    iconColor: 'text-rose-500',
    content: [
      { id: 'cl_1', cn: '红色', pinyin: 'hóngsè', vn: 'Màu đỏ', faIcon: 'fa-solid fa-droplet', iconColor: 'text-red-500', sentence: '红红的苹果甜又香。', sentenceVn: 'Quả táo màu đỏ vừa ngọt vừa thơm.' },
      { id: 'cl_2', cn: '黄色', pinyin: 'huángsè', vn: 'Màu vàng', faIcon: 'fa-solid fa-sun', iconColor: 'text-yellow-500', sentence: '金黄色的太阳暖洋洋。', sentenceVn: 'Mặt trời màu vàng ấm áp.' },
      { id: 'cl_3', cn: '蓝色', pinyin: 'lánsè', vn: 'Màu xanh da trời / Xanh dương', faIcon: 'fa-solid fa-cloud', iconColor: 'text-blue-500', sentence: '蓝天白云真漂亮。', sentenceVn: 'Bầu trời xanh mây trắng thật đẹp.' },
      { id: 'cl_4', cn: '绿色', pinyin: 'lǜsè', vn: 'Màu xanh lá cây', faIcon: 'fa-solid fa-leaf', iconColor: 'text-emerald-500', sentence: '草地上长满了绿色的嫩草。', sentenceVn: 'Trên bãi cỏ mọc đầy những ngọn cỏ xanh tươi.' },
      { id: 'cl_5', cn: '白色', pinyin: 'báisè', vn: 'Màu trắng', faIcon: 'fa-solid fa-snowflake', iconColor: 'text-slate-400', sentence: '白色的雪花飘落下来。', sentenceVn: 'Từng bông tuyết trắng rơi xuống.' },
      { id: 'cl_6', cn: '黑色', pinyin: 'hēisè', vn: 'Màu đen', faIcon: 'fa-solid fa-moon', iconColor: 'text-slate-900', sentence: '黑色的猫咪眼睛好亮。', sentenceVn: 'Mắt chú mèo đen sáng lấp lánh.' },
      { id: 'cl_7', cn: '喜欢', pinyin: 'xǐhuan', vn: 'Thích', faIcon: 'fa-solid fa-thumbs-up', iconColor: 'text-pink-500', sentence: '你喜欢什么颜色？', sentenceVn: 'Bé thích màu sắc gì nào?' }
    ]
  },
  {
    lesson_id: 'L08',
    topic_vn: 'Bài 8: Trái Cây & Đồ Ăn Bé Thích',
    topic_cn: '水果与美食 (Shíwù)',
    level: 3,
    bgColor: 'from-amber-100 to-emerald-200',
    borderColor: 'border-emerald-300',
    badgeColor: 'bg-emerald-500 text-white',
    faIcon: 'fa-solid fa-apple-whole',
    iconColor: 'text-red-500',
    content: [
      { id: 'fd_1', cn: '苹果', pinyin: 'píngguǒ', vn: 'Quả táo', faIcon: 'fa-solid fa-apple-whole', iconColor: 'text-red-500', sentence: '每天吃一个苹果。', sentenceVn: 'Mỗi ngày ăn một quả táo.' },
      { id: 'fd_2', cn: '香蕉', pinyin: 'xiāngjiāo', vn: 'Quả chuối', faIcon: 'fa-solid fa-lemon', iconColor: 'text-yellow-500', sentence: '弯弯的香蕉像月亮。', sentenceVn: 'Quả chuối cong cong giống vầng trăng.' },
      { id: 'fd_3', cn: '西瓜', pinyin: 'xīguā', vn: 'Quả dưa hấu', faIcon: 'fa-solid fa-bowl-food', iconColor: 'text-emerald-500', sentence: '夏天吃西瓜最解渴。', sentenceVn: 'Mùa hè ăn dưa hấu giải khát nhất.' },
      { id: 'fd_4', cn: '牛奶', pinyin: 'niúnǎi', vn: 'Sữa tươi', faIcon: 'fa-solid fa-mug-saucer', iconColor: 'text-sky-500', sentence: '每天早上一杯牛奶。', sentenceVn: 'Mỗi buổi sáng uống một cốc sữa tươi.' },
      { id: 'fd_5', cn: '面包', pinyin: 'miànbāo', vn: 'Bánh mì', faIcon: 'fa-solid fa-bread-slice', iconColor: 'text-amber-600', sentence: '新鲜烤出的面包好香。', sentenceVn: 'Bánh mì mới nướng thơm phức.' },
      { id: 'fd_6', cn: '水', pinyin: 'shuǐ', vn: 'Nước lọc', faIcon: 'fa-solid fa-glass-water', iconColor: 'text-blue-400', sentence: '多喝水对身体好。', sentenceVn: 'Uống nhiều nước rất tốt cho cơ thể.' },
      { id: 'fd_7', cn: '吃', pinyin: 'chī', vn: 'Ăn', faIcon: 'fa-solid fa-utensils', iconColor: 'text-orange-500', sentence: '我们一起吃饭吧。', sentenceVn: 'Chúng mình cùng ăn cơm nào.' },
      { id: 'fd_8', cn: '喝', pinyin: 'hē', vn: 'Uống', faIcon: 'fa-solid fa-mug-hot', iconColor: 'text-amber-500', sentence: '我想喝果汁。', sentenceVn: 'Bé muốn uống nước hoa quả.' }
    ]
  },
  {
    lesson_id: 'L09',
    topic_vn: 'Bài 9: Trường Học & Đồ Dùng Của Bé',
    topic_cn: '学校与文具 (Xuéxiào)',
    level: 3,
    bgColor: 'from-cyan-100 to-sky-200',
    borderColor: 'border-sky-300',
    badgeColor: 'bg-sky-500 text-white',
    faIcon: 'fa-solid fa-school',
    iconColor: 'text-sky-600',
    content: [
      { id: 'sc_1', cn: '老师', pinyin: 'lǎoshī', vn: 'Thầy / Cô giáo', faIcon: 'fa-solid fa-chalkboard-user', iconColor: 'text-indigo-600', sentence: '老师教我们学中文。', sentenceVn: 'Cô giáo dạy chúng em học tiếng Trung.' },
      { id: 'sc_2', cn: '同学', pinyin: 'tóngxué', vn: 'Bạn học / Bạn cùng lớp', faIcon: 'fa-solid fa-children', iconColor: 'text-teal-600', sentence: '我们都是好同学。', sentenceVn: 'Chúng mình đều là bạn học tốt.' },
      { id: 'sc_3', cn: '书', pinyin: 'shū', vn: 'Quyển sách', faIcon: 'fa-solid fa-book-open', iconColor: 'text-blue-500', sentence: '我喜欢看故事书。', sentenceVn: 'Em thích đọc sách truyện.' },
      { id: 'sc_4', cn: '笔', pinyin: 'bǐ', vn: 'Cây bút', faIcon: 'fa-solid fa-pen-fancy', iconColor: 'text-purple-500', sentence: '用铅笔写汉字。', sentenceVn: 'Dùng bút chì viết chữ Hán.' },
      { id: 'sc_5', cn: '书包', pinyin: 'shūbāo', vn: 'Cặp sách / Balo', faIcon: 'fa-solid fa-bag-shopping', iconColor: 'text-rose-500', sentence: '我背着书包上学去。', sentenceVn: 'Em đeo cặp sách đến trường.' },
      { id: 'sc_6', cn: '尺子', pinyin: 'chǐzi', vn: 'Thước kẻ', faIcon: 'fa-solid fa-ruler-combined', iconColor: 'text-amber-600', sentence: '我的文具盒里有尺子。', sentenceVn: 'Trong hộp bút của em có thước kẻ.' }
    ]
  },
  {
    lesson_id: 'L10',
    topic_vn: 'Bài 10: Động Tác & Hoạt Động Hàng Ngày',
    topic_cn: '日常动作 (Huódòng)',
    level: 3,
    bgColor: 'from-teal-100 to-emerald-200',
    borderColor: 'border-teal-300',
    badgeColor: 'bg-teal-500 text-white',
    faIcon: 'fa-solid fa-person-running',
    iconColor: 'text-teal-600',
    content: [
      { id: 'ac_1', cn: '看', pinyin: 'kàn', vn: 'Nhìn / Xem / Đọc', faIcon: 'fa-solid fa-glasses', iconColor: 'text-blue-500', sentence: '看绘本真有趣。', sentenceVn: 'Xem tranh truyện thật là thú vị.' },
      { id: 'ac_2', cn: '听', pinyin: 'tīng', vn: 'Lắng nghe', faIcon: 'fa-solid fa-headphones', iconColor: 'text-purple-500', sentence: '认真听老师说话。', sentenceVn: 'Chăm chú lắng nghe lời cô giáo.' },
      { id: 'ac_3', cn: '说', pinyin: 'shuō', vn: 'Nói', faIcon: 'fa-solid fa-bullhorn', iconColor: 'text-rose-500', sentence: '大声说汉语。', sentenceVn: 'Nói tiếng Hán to và rõ ràng.' },
      { id: 'ac_4', cn: '走', pinyin: 'zǒu', vn: 'Đi bộ', faIcon: 'fa-solid fa-person-walking', iconColor: 'text-amber-600', sentence: '放学走路回家。', sentenceVn: 'Tan học đi bộ về nhà.' },
      { id: 'ac_5', cn: '跑', pinyin: 'pǎo', vn: 'Chạy nhanh', faIcon: 'fa-solid fa-person-running', iconColor: 'text-emerald-500', sentence: '我们在操场上跑步。', sentenceVn: 'Chúng em chạy nhảy trên sân trường.' },
      { id: 'ac_6', cn: '唱', pinyin: 'chàng', vn: 'Hát ca', faIcon: 'fa-solid fa-microphone', iconColor: 'text-pink-500', sentence: '大家一起唱儿歌。', sentenceVn: 'Cả lớp cùng hát bài đồng dao.' },
      { id: 'ac_7', cn: '跳', pinyin: 'tiào', vn: 'Nhảy múa / Nhảy nhót', faIcon: 'fa-solid fa-child-reaching', iconColor: 'text-cyan-500', sentence: '小兔子在草地上跳。', sentenceVn: 'Thỏ con nhảy nhót trên bãi cỏ.' }
    ]
  }
];

export const AVATAR_OPTIONS = [
  { id: 'student', faIcon: 'fa-solid fa-graduation-cap', color: 'text-indigo-600', name: 'Học Sinh Nhí' },
  { id: 'cat', faIcon: 'fa-solid fa-cat', color: 'text-amber-500', name: 'Mèo Thông Minh' },
  { id: 'dog', faIcon: 'fa-solid fa-dog', color: 'text-yellow-700', name: 'Cún Nhanh Nhẹn' },
  { id: 'dove', faIcon: 'fa-solid fa-dove', color: 'text-sky-500', name: 'Chim Bồ Câu' },
  { id: 'fish', faIcon: 'fa-solid fa-fish-fins', color: 'text-cyan-500', name: 'Cá Nhỏ Bơi Lội' },
  { id: 'otter', faIcon: 'fa-solid fa-otter', color: 'text-slate-800', name: 'Gấu Trúc Panda' },
  { id: 'star', faIcon: 'fa-solid fa-star', color: 'text-yellow-500', name: 'Ngôi Sao Sáng' },
  { id: 'heart', faIcon: 'fa-solid fa-heart-pulse', color: 'text-rose-500', name: 'Trái Tim Vui' },
];
