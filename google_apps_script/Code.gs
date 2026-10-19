/**
 * KIDS CHINESE LEARNING APP - GOOGLE APPS SCRIPT BACKEND
 * File: Code.gs
 *
 * HƯỚNG DẪN CÀI ĐẶT:
 * 1. Mở Google Sheets mới (hoặc Google Sheet có sẵn).
 * 2. Chọn menu Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xóa hết mã cũ và dán toàn bộ nội dung file này vào.
 * 4. Nhấn nút "Chạy" (Run) hàm setupDatabase() một lần để tự động tạo 3 sheet:
 *    - Users
 *    - Lessons
 *    - User_Progress
 *    và tự động nạp sẵn toàn bộ bài học mẫu song ngữ Trung - Việt!
 * 5. Nhấn nút "Triển khai" (Deploy) -> "Quản lý bản triển khai mới" (New deployment).
 *    - Loại triển khai: Chọn "Ứng dụng web" (Web App).
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me).
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone).
 * 6. Sao chép URL Web App nhận được và dán vào phần "Cài đặt Google Sheets" trong Kids Chinese App!
 */

// Tên các Sheets
const SHEET_USERS = 'Users';
const SHEET_LESSONS = 'Lessons';
const SHEET_PROGRESS = 'User_Progress';

/**
 * Xử lý yêu cầu GET từ Web App
 */
function doGet(e) {
  try {
    const params = e ? e.parameter : {};
    const action = params.action;
    let result = {};

    if (action === 'getLessons') {
      result = { success: true, data: getLessonsData() };
    } else if (action === 'getUserProgress') {
      const userId = params.userId;
      result = { success: true, data: getUserProgressData(userId) };
    } else if (action === 'login') {
      result = loginOrRegisterUser(params.childName, params.userId, params.avatar);
    } else if (action === 'saveProgress') {
      result = saveUserProgress(
        params.userId,
        params.lessonId,
        params.status,
        params.score,
        params.starsToAdd || 0
      );
    } else if (action === 'setup') {
      setupDatabase();
      result = { success: true, message: 'Database setup successfully with 3 sheets and sample lessons!' };
    } else {
      result = { 
        success: true, 
        message: 'Kids Chinese API is running!', 
        availableActions: ['getLessons', 'getUserProgress', 'saveProgress', 'login', 'setup']
      };
    }

    return createJsonResponse(result);
  } catch (err) {
    return createJsonResponse({ success: false, error: err.toString() });
  }
}

/**
 * Xử lý yêu cầu POST từ Web App
 */
function doPost(e) {
  try {
    let body = {};
    if (e && e.postData && e.postData.contents) {
      try {
        body = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        body = {};
      }
    }
    const action = body.action || (e && e.parameter ? e.parameter.action : null);
    let result = {};

    if (action === 'login') {
      result = loginOrRegisterUser(body.childName, body.userId, body.avatar);
    } else if (action === 'saveProgress') {
      result = saveUserProgress(
        body.userId,
        body.lessonId,
        body.status,
        body.score,
        body.starsToAdd || 0
      );
    } else if (action === 'saveAllLessons') {
      result = syncLessonsFromApp(body.lessons);
    } else {
      result = { success: false, error: 'Unknown action: ' + action };
    }

    return createJsonResponse(result);
  } catch (err) {
    return createJsonResponse({ success: false, error: err.toString() });
  }
}

/**
 * Trả về HTTP JSON Response với CORS Headers
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Lấy danh sách bài học từ Tab "Lessons"
 */
function getLessonsData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_LESSONS);
  if (!sheet) {
    setupDatabase();
    sheet = ss.getSheetByName(SHEET_LESSONS);
  }

  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return [];

  const headers = rows[0];
  const lessons = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row[0]) continue;

    let content = [];
    try {
      content = typeof row[4] === 'string' && row[4].trim() !== '' ? JSON.parse(row[4]) : row[4];
    } catch (e) {
      content = [];
    }

    lessons.push({
      lesson_id: String(row[0]),
      topic_vn: String(row[1] || ''),
      topic_cn: String(row[2] || ''),
      level: Number(row[3] || 1),
      content: content
    });
  }

  return lessons;
}

/**
 * Lấy dữ liệu người dùng và tiến độ học từ 2 tab "Users" và "User_Progress"
 */
function getUserProgressData(userId) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const usersSheet = ss.getSheetByName(SHEET_USERS);
  const progressSheet = ss.getSheetByName(SHEET_PROGRESS);

  if (!usersSheet || !progressSheet) {
    setupDatabase();
    return { user: null, progress: [] };
  }

  // 1. Tìm thông tin User
  let userInfo = null;
  const userRows = usersSheet.getDataRange().getValues();
  for (let i = 1; i < userRows.length; i++) {
    if (String(userRows[i][0]) === String(userId)) {
      userInfo = {
        user_id: userRows[i][0],
        child_name: userRows[i][1],
        last_login: userRows[i][2],
        total_stars: Number(userRows[i][3] || 0),
        avatar: userRows[i][4] || '🐼'
      };
      break;
    }
  }

  // 2. Lấy danh sách tiến độ các bài
  const progressList = [];
  const progRows = progressSheet.getDataRange().getValues();
  for (let j = 1; j < progRows.length; j++) {
    if (String(progRows[j][0]) === String(userId)) {
      progressList.push({
        user_id: progRows[j][0],
        lesson_id: progRows[j][1],
        status: progRows[j][2],
        score: Number(progRows[j][3] || 0),
        updated_at: progRows[j][4]
      });
    }
  }

  return {
    user: userInfo,
    progress: progressList
  };
}

/**
 * Đăng nhập hoặc Tạo học viên mới
 */
function loginOrRegisterUser(childName, userId, avatar) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_USERS);
  if (!sheet) {
    setupDatabase();
    sheet = ss.getSheetByName(SHEET_USERS);
  }

  const nowStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'GMT+7', 'yyyy-MM-dd HH:mm:ss');
  const rows = sheet.getDataRange().getValues();
  let foundRow = -1;
  let targetId = userId;

  // Nếu không truyền userId, tìm theo tên bé
  for (let i = 1; i < rows.length; i++) {
    if (userId && String(rows[i][0]) === String(userId)) {
      foundRow = i + 1;
      targetId = rows[i][0];
      break;
    } else if (!userId && String(rows[i][1]).toLowerCase() === String(childName).toLowerCase()) {
      foundRow = i + 1;
      targetId = rows[i][0];
      break;
    }
  }

  if (foundRow > 0) {
    // Đã tồn tại -> Cập nhật last_login
    sheet.getRange(foundRow, 3).setValue(nowStr);
    if (avatar) sheet.getRange(foundRow, 5).setValue(avatar);

    const currentUser = {
      user_id: rows[foundRow - 1][0],
      child_name: rows[foundRow - 1][1],
      last_login: nowStr,
      total_stars: Number(rows[foundRow - 1][3] || 0),
      avatar: rows[foundRow - 1][4] || avatar || '🐼'
    };

    return {
      success: true,
      isNewUser: false,
      user: currentUser,
      progress: getUserProgressData(currentUser.user_id).progress
    };
  } else {
    // Tạo user mới
    const newUserId = targetId || ('U' + ('000' + rows.length).slice(-3));
    const newChildName = childName || 'Bé ' + newUserId;
    const initialStars = 0;
    const userAvatar = avatar || '🐼';

    sheet.appendRow([newUserId, newChildName, nowStr, initialStars, userAvatar]);

    return {
      success: true,
      isNewUser: true,
      user: {
        user_id: newUserId,
        child_name: newChildName,
        last_login: nowStr,
        total_stars: initialStars,
        avatar: userAvatar
      },
      progress: []
    };
  }
}

/**
 * Lưu tiến độ bài học & Cập nhật số sao tích lũy
 */
function saveUserProgress(userId, lessonId, status, score, starsToAdd) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let progSheet = ss.getSheetByName(SHEET_PROGRESS);
  let userSheet = ss.getSheetByName(SHEET_USERS);

  if (!progSheet || !userSheet) {
    setupDatabase();
    progSheet = ss.getSheetByName(SHEET_PROGRESS);
    userSheet = ss.getSheetByName(SHEET_USERS);
  }

  const nowStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'GMT+7', 'yyyy-MM-dd HH:mm:ss');
  const progRows = progSheet.getDataRange().getValues();
  let existingRow = -1;

  for (let i = 1; i < progRows.length; i++) {
    if (String(progRows[i][0]) === String(userId) && String(progRows[i][1]) === String(lessonId)) {
      existingRow = i + 1;
      break;
    }
  }

  if (existingRow > 0) {
    progSheet.getRange(existingRow, 3).setValue(status || 'Completed');
    progSheet.getRange(existingRow, 4).setValue(score || 100);
    progSheet.getRange(existingRow, 5).setValue(nowStr);
  } else {
    progSheet.appendRow([userId, lessonId, status || 'Completed', score || 100, nowStr]);
  }

  // Cập nhật total_stars trong Users nếu có thêm sao
  let newTotalStars = 0;
  if (starsToAdd && Number(starsToAdd) > 0) {
    const userRows = userSheet.getDataRange().getValues();
    for (let u = 1; u < userRows.length; u++) {
      if (String(userRows[u][0]) === String(userId)) {
        const currentStars = Number(userRows[u][3] || 0);
        newTotalStars = currentStars + Number(starsToAdd);
        userSheet.getRange(u + 1, 4).setValue(newTotalStars);
        break;
      }
    }
  }

  return {
    success: true,
    message: 'Progress saved successfully',
    updated_at: nowStr,
    total_stars: newTotalStars
  };
}

/**
 * Tự động tạo và cấu hình 3 Sheets chuẩn + Dữ liệu mẫu ban đầu
 */
function setupDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. Tạo hoặc lấy Tab Users
  let usersSheet = ss.getSheetByName(SHEET_USERS);
  if (!usersSheet) {
    usersSheet = ss.insertSheet(SHEET_USERS);
  }
  if (usersSheet.getLastRow() === 0) {
    usersSheet.appendRow(['user_id', 'child_name', 'last_login', 'total_stars', 'avatar']);
    usersSheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#FFE5EC');
    usersSheet.appendRow(['U001', 'Bảo Minh', Utilities.formatDate(new Date(), 'GMT+7', 'yyyy-MM-dd HH:mm:ss'), 15, '🐼']);
  }

  // 2. Tạo hoặc lấy Tab Lessons
  let lessonsSheet = ss.getSheetByName(SHEET_LESSONS);
  if (!lessonsSheet) {
    lessonsSheet = ss.insertSheet(SHEET_LESSONS);
  }
  if (lessonsSheet.getLastRow() === 0) {
    lessonsSheet.appendRow(['lesson_id', 'topic_vn', 'topic_cn', 'level', 'content_json']);
    lessonsSheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#E2F0D9');

    // Chèn dữ liệu mẫu 6 bài học chuẩn
    const defaultLessons = getInitialCurriculumData();
    defaultLessons.forEach(l => {
      lessonsSheet.appendRow([
        l.lesson_id,
        l.topic_vn,
        l.topic_cn,
        l.level,
        JSON.stringify(l.content)
      ]);
    });
  }

  // 3. Tạo hoặc lấy Tab User_Progress
  let progSheet = ss.getSheetByName(SHEET_PROGRESS);
  if (!progSheet) {
    progSheet = ss.insertSheet(SHEET_PROGRESS);
  }
  if (progSheet.getLastRow() === 0) {
    progSheet.appendRow(['user_id', 'lesson_id', 'status', 'score', 'updated_at']);
    progSheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#FFF2CC');
    progSheet.appendRow(['U001', 'L01', 'Completed', 100, Utilities.formatDate(new Date(), 'GMT+7', 'yyyy-MM-dd HH:mm:ss')]);
  }
}

/**
 * Bộ giáo trình chuẩn YCT 1 & Tiếng Trung Tiểu Học vỡ lòng cho bé (10 bài)
 */
function getInitialCurriculumData() {
  return [
    {
      lesson_id: 'L01',
      topic_vn: 'Bài 1: Chào Hỏi & Lễ Phép',
      topic_cn: '问候篇 (Wènhòu)',
      level: 1,
      content: [
        { id: 'w_1', cn: '你好', pinyin: 'nǐ hǎo', vn: 'Xin chào', emoji: '👋', sentence: '你好！很高兴见到你。' },
        { id: 'w_2', cn: '老师好', pinyin: 'lǎoshī hǎo', vn: 'Em chào thầy / cô giáo', emoji: '👩‍🏫', sentence: '老师好，早上好！' },
        { id: 'w_3', cn: '谢谢', pinyin: 'xièxie', vn: 'Cảm ơn', emoji: '🙏', sentence: '谢谢妈妈送我的礼物。' },
        { id: 'w_4', cn: '不客气', pinyin: 'bú kèqi', vn: 'Đừng khách sáo / Không có gì', emoji: '😊', sentence: '不用客气，我们是好朋友。' },
        { id: 'w_5', cn: '对不起', pinyin: 'duìbuqǐ', vn: 'Xin lỗi', emoji: '🙇‍♂️', sentence: '对不起，我不是故意的。' },
        { id: 'w_6', cn: '没关系', pinyin: 'méi guānxi', vn: 'Không sao đâu', emoji: '🙆‍♀️', sentence: '没关系，下次注意就好。' },
        { id: 'w_7', cn: '再见', pinyin: 'zàijiàn', vn: 'Tạm biệt', emoji: '🙋‍♂️', sentence: '明天见，老师再见！' }
      ]
    },
    {
      lesson_id: 'L02',
      topic_vn: 'Bài 2: Làm Quen Bính Âm & Nguyên Âm',
      topic_cn: '拼音篇 (Pīnyīn)',
      level: 1,
      content: [
        { id: 'py_1', cn: '阿姨', pinyin: 'āyí', vn: 'Cô / Dì (Nguyên âm A: ā á ǎ à)', emoji: '👩', sentence: '阿姨好！' },
        { id: 'py_2', cn: '大公鸡', pinyin: 'ō (gōngjī)', vn: 'Gà trống gáy (Nguyên âm O: ō ó ǒ ò)', emoji: '🐓', sentence: '大公鸡喔喔啼。' },
        { id: 'py_3', cn: '白鹅', pinyin: 'é', vn: 'Con ngỗng trắng (Nguyên âm E: ē é ě è)', emoji: '🦢', sentence: '美丽的大白鹅。' },
        { id: 'py_4', cn: '衣服', pinyin: 'yīfu', vn: 'Quần áo (Nguyên âm I: yī yí yǐ yì)', emoji: '👕', sentence: '漂亮的新衣服。' },
        { id: 'py_5', cn: '乌龟', pinyin: 'wūguī', vn: 'Con rùa (Nguyên âm U: wū wú wǔ wù)', emoji: '🐢', sentence: '小乌龟慢慢爬。' },
        { id: 'py_6', cn: '小鱼', pinyin: 'yú', vn: 'Con cá (Nguyên âm Ü: yū yú yǔ yù)', emoji: '🐟', sentence: '小鱼在水里游。' }
      ]
    },
    {
      lesson_id: 'L03',
      topic_vn: 'Bài 3: Số Đếm & Hỏi Tuổi Của Bé',
      topic_cn: '数字与年龄 (Shùzì)',
      level: 1,
      content: [
        { id: 'num_1', cn: '一', pinyin: 'yī', vn: 'Số Một (1)', emoji: '1️⃣', sentence: '我有一张嘴巴。' },
        { id: 'num_2', cn: '二', pinyin: 'èr', vn: 'Số Hai (2)', emoji: '2️⃣', sentence: '我有两只眼睛。' },
        { id: 'num_3', cn: '三', pinyin: 'sān', vn: 'Số Ba (3)', emoji: '3️⃣', sentence: '我们家有三口人。' },
        { id: 'num_4', cn: '四', pinyin: 'sì', vn: 'Số Bốn (4)', emoji: '4️⃣', sentence: '一年有四个季节。' },
        { id: 'num_5', cn: '五', pinyin: 'wǔ', vn: 'Số Năm (5)', emoji: '5️⃣', sentence: '一只手有五个手指。' },
        { id: 'num_6', cn: '六', pinyin: 'liù', vn: 'Số Sáu (6)', emoji: '6️⃣', sentence: '六只小鸭子。' },
        { id: 'num_7', cn: '七', pinyin: 'qī', vn: 'Số Bảy (7)', emoji: '7️⃣', sentence: '彩虹有七种颜色。' },
        { id: 'num_8', cn: '八', pinyin: 'bā', vn: 'Số Tám (8)', emoji: '8️⃣', sentence: '八个气球。' },
        { id: 'num_9', cn: '九', pinyin: 'jiǔ', vn: 'Số Chín (9)', emoji: '9️⃣', sentence: '九朵鲜花。' },
        { id: 'num_10', cn: '十', pinyin: 'shí', vn: 'Số Mười (10)', emoji: '🔟', sentence: '我考了十分！' },
        { id: 'num_age', cn: '岁', pinyin: 'suì', vn: 'Tuổi (Bé mấy tuổi?)', emoji: '🎂', sentence: '我今年五岁。' }
      ]
    },
    {
      lesson_id: 'L04',
      topic_vn: 'Bài 4: Các Bộ Phận Cơ Thể Bé',
      topic_cn: '身体部位 (Shēntǐ)',
      level: 2,
      content: [
        { id: 'bd_1', cn: '眼睛', pinyin: 'yǎnjing', vn: 'Đôi mắt', emoji: '👀', sentence: '小明的眼睛大又亮。' },
        { id: 'bd_2', cn: '耳朵', pinyin: 'ěrduo', vn: 'Cái tai', emoji: '👂', sentence: '小兔子有长长的耳朵。' },
        { id: 'bd_3', cn: '鼻子', pinyin: 'bízi', vn: 'Cái mũi', emoji: '👃', sentence: '小狗的鼻子真灵敏。' },
        { id: 'bd_4', cn: '嘴巴', pinyin: 'zuǐba', vn: 'Cái miệng', emoji: '👄', sentence: '笑一笑，张开嘴巴。' },
        { id: 'bd_5', cn: '头发', pinyin: 'tóufa', vn: 'Mái tóc', emoji: '💇', sentence: '妈妈的头发黑又长。' },
        { id: 'bd_6', cn: '手', pinyin: 'shǒu', vn: 'Bàn tay', emoji: '✋', sentence: '饭前要洗手。' },
        { id: 'bd_7', cn: '脚', pinyin: 'jiǎo', vn: 'Bàn chân', emoji: '🦶', sentence: '穿上鞋子，迈开双脚。' }
      ]
    },
    {
      lesson_id: 'L05',
      topic_vn: 'Bài 5: Gia Đình & Đại Từ Xưng Hô',
      topic_cn: '我的家庭 (Jiātíng)',
      level: 2,
      content: [
        { id: 'fm_1', cn: '我', pinyin: 'wǒ', vn: 'Con / Tôi / Em', emoji: '🧒', sentence: '我是一个好孩子。' },
        { id: 'fm_2', cn: '爸爸', pinyin: 'bàba', vn: 'Bố / Ba', emoji: '👨', sentence: '爸爸工作辛苦了。' },
        { id: 'fm_3', cn: '妈妈', pinyin: 'māma', vn: 'Mẹ', emoji: '👩', sentence: '妈妈我爱你！' },
        { id: 'fm_4', cn: '哥哥', pinyin: 'gēge', vn: 'Anh trai', emoji: '👦', sentence: '哥哥陪我搭积木。' },
        { id: 'fm_5', cn: '姐姐', pinyin: 'jiějie', vn: 'Chị gái', emoji: '👧', sentence: '姐姐唱歌真好听。' },
        { id: 'fm_6', cn: '弟弟', pinyin: 'dìdi', vn: 'Em trai', emoji: '👶', sentence: '小弟弟真可爱。' },
        { id: 'fm_7', cn: '妹妹', pinyin: 'mèimei', vn: 'Em gái', emoji: '🎀', sentence: '妹妹扎着小辫子。' },
        { id: 'fm_8', cn: '爱', pinyin: 'ài', vn: 'Yêu thương', emoji: '❤️', sentence: '我们一家人相亲相爱。' }
      ]
    },
    {
      lesson_id: 'L06',
      topic_vn: 'Bài 6: Thế Giới Động Vật Đáng Yêu (Chuẩn YCT 1)',
      topic_cn: '可爱动物 (Dòngwù)',
      level: 2,
      content: [
        { id: 'an_1', cn: '熊猫', pinyin: 'xióngmāo', vn: 'Gấu trúc', emoji: '🐼', sentence: '大熊猫是中国的国宝。' },
        { id: 'an_2', cn: '猫', pinyin: 'māo', vn: 'Con mèo', emoji: '🐱', sentence: '小猫在屋顶上晒太阳。' },
        { id: 'an_3', cn: '狗', pinyin: 'gǒu', vn: 'Con chó', emoji: '🐶', sentence: '小狗忠诚又勇敢。' },
        { id: 'an_4', cn: '鸟', pinyin: 'niǎo', vn: 'Con chim', emoji: '🐦', sentence: '小鸟在树枝上快乐歌唱。' },
        { id: 'an_5', cn: '鱼', pinyin: 'yú', vn: 'Con cá', emoji: '🐠', sentence: '热带鱼五颜六色。' },
        { id: 'an_6', cn: '兔子', pinyin: 'tùzi', vn: 'Con thỏ', emoji: '🐰', sentence: '小白兔最爱吃胡萝卜。' },
        { id: 'an_7', cn: '大象', pinyin: 'dàxiàng', vn: 'Con voi', emoji: '🐘', sentence: '大象的长鼻子会喷水。' }
      ]
    },
    {
      lesson_id: 'L07',
      topic_vn: 'Bài 7: Sắc Màu Quanh Em (YCT 1)',
      topic_cn: '神奇颜色 (Yánsè)',
      level: 3,
      content: [
        { id: 'cl_1', cn: '红色', pinyin: 'hóngsè', vn: 'Màu đỏ', emoji: '🔴', sentence: '红红的苹果甜又香。' },
        { id: 'cl_2', cn: '黄色', pinyin: 'huángsè', vn: 'Màu vàng', emoji: '🟡', sentence: '金黄色的太阳暖洋洋。' },
        { id: 'cl_3', cn: '蓝色', pinyin: 'lánsè', vn: 'Màu xanh da trời / Xanh dương', emoji: '🔵', sentence: '蓝天白云真漂亮。' },
        { id: 'cl_4', cn: '绿色', pinyin: 'lǜsè', vn: 'Màu xanh lá cây', emoji: '🟢', sentence: '草地上长满了绿色的嫩草。' },
        { id: 'cl_5', cn: '白色', pinyin: 'báisè', vn: 'Màu trắng', emoji: '⚪', sentence: '白色的雪花飘落下来。' },
        { id: 'cl_6', cn: '黑色', pinyin: 'hēisè', vn: 'Màu đen', emoji: '⚫', sentence: '黑色的猫咪眼睛好亮。' },
        { id: 'cl_7', cn: '喜欢', pinyin: 'xǐhuan', vn: 'Thích', emoji: '💖', sentence: '你喜欢什么颜色？' }
      ]
    },
    {
      lesson_id: 'L08',
      topic_vn: 'Bài 8: Trái Cây & Đồ Ăn Bé Thích',
      topic_cn: '水果与美食 (Shíwù)',
      level: 3,
      content: [
        { id: 'fd_1', cn: '苹果', pinyin: 'píngguǒ', vn: 'Quả táo', emoji: '🍎', sentence: '每天吃一个苹果。' },
        { id: 'fd_2', cn: '香蕉', pinyin: 'xiāngjiāo', vn: 'Quả chuối', emoji: '🍌', sentence: '弯弯的香蕉像月亮。' },
        { id: 'fd_3', cn: '西瓜', pinyin: 'xīguā', vn: 'Quả dưa hấu', emoji: '🍉', sentence: '夏天吃西瓜最解渴。' },
        { id: 'fd_4', cn: '牛奶', pinyin: 'niúnǎi', vn: 'Sữa tươi', emoji: '🥛', sentence: '每天早上一杯牛奶。' },
        { id: 'fd_5', cn: '面包', pinyin: 'miànbāo', vn: 'Bánh mì', emoji: '🍞', sentence: '新鲜烤出的面包好香。' },
        { id: 'fd_6', cn: '水', pinyin: 'shuǐ', vn: 'Nước lọc', emoji: '💧', sentence: '多喝水对身体好。' },
        { id: 'fd_7', cn: '吃', pinyin: 'chī', vn: 'Ăn', emoji: '🍽️', sentence: '我们一起吃饭吧。' },
        { id: 'fd_8', cn: '喝', pinyin: 'hē', vn: 'Uống', emoji: '🥤', sentence: '我想喝果汁。' }
      ]
    },
    {
      lesson_id: 'L09',
      topic_vn: 'Bài 9: Trường Học & Đồ Dùng Của Bé',
      topic_cn: '学校与文具 (Xuéxiào)',
      level: 3,
      content: [
        { id: 'sc_1', cn: '老师', pinyin: 'lǎoshī', vn: 'Thầy / Cô giáo', emoji: '👩‍🏫', sentence: '老师教我们学中文。' },
        { id: 'sc_2', cn: '同学', pinyin: 'tóngxué', vn: 'Bạn học / Bạn cùng lớp', emoji: '👫', sentence: '我们都是好同学。' },
        { id: 'sc_3', cn: '书', pinyin: 'shū', vn: 'Quyển sách', emoji: '📖', sentence: '我喜欢看故事书。' },
        { id: 'sc_4', cn: '笔', pinyin: 'bǐ', vn: 'Cây bút', emoji: '✏️', sentence: '用铅笔写汉字。' },
        { id: 'sc_5', cn: '书包', pinyin: 'shūbāo', vn: 'Cặp sách / Balo', emoji: '🎒', sentence: '我背着书包上学去。' },
        { id: 'sc_6', cn: '尺子', pinyin: 'chǐzi', vn: 'Thước kẻ', emoji: '📏', sentence: '我的文具盒里有尺子。' }
      ]
    },
    {
      lesson_id: 'L10',
      topic_vn: 'Bài 10: Động Tác & Hoạt Động Hàng Ngày',
      topic_cn: '日常动作 (Huódòng)',
      level: 3,
      content: [
        { id: 'ac_1', cn: '看', pinyin: 'kàn', vn: 'Nhìn / Xem / Đọc', emoji: '👀', sentence: '看绘本真有趣。' },
        { id: 'ac_2', cn: '听', pinyin: 'tīng', vn: 'Lắng nghe', emoji: '👂', sentence: '认真听老师说话。' },
        { id: 'ac_3', cn: '说', pinyin: 'shuō', vn: 'Nói', emoji: '🗣️', sentence: '大声说汉语。' },
        { id: 'ac_4', cn: '走', pinyin: 'zǒu', vn: 'Đi bộ', emoji: '🚶‍♂️', sentence: '放学走路回家。' },
        { id: 'ac_5', cn: '跑', pinyin: 'pǎo', vn: 'Chạy nhanh', emoji: '🏃‍♂️', sentence: '我们在操场上跑步。' },
        { id: 'ac_6', cn: '唱', pinyin: 'chàng', vn: 'Hát ca', emoji: '🎤', sentence: '大家一起唱儿歌。' },
        { id: 'ac_7', cn: '跳', pinyin: 'tiào', vn: 'Nhảy múa / Nhảy nhót', emoji: '💃', sentence: '小兔子在草地上跳。' }
      ]
    }
  ];
}
