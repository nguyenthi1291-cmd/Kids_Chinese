/**
 * AUDIO & SPEECH SYNTHESIS UTILITIES
 * - Phát âm tiếng Trung chuẩn (Web Speech API zh-CN)
 * - Tự tổng hợp âm thanh tương tác vui nhộn (Web Audio API Synthesizer)
 */

class SoundService {
  constructor() {
    this.audioCtx = null;
    this.chineseVoice = null;
    this.voicesLoaded = false;
    this.initSpeech();
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  initSpeech() {
    if (!('speechSynthesis' in window)) return;

    const findVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      // Ưu tiên giọng Trung Quốc đại lục zh-CN / cmn
      const cnVoice = voices.find(v => 
        v.lang === 'zh-CN' || 
        v.lang.startsWith('zh') || 
        v.lang.toLowerCase().includes('chinese') ||
        v.name.toLowerCase().includes('chinese')
      );
      if (cnVoice) {
        this.chineseVoice = cnVoice;
      }
      this.voicesLoaded = true;
    };

    findVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = findVoice;
    }
  }

  /**
   * Phát âm tiếng Trung bằng Web Speech API
   * @param {string} text - Chữ Hán hoặc câu cần phát âm
   * @param {number} rate - Tốc độ (1.0 là bình thường, 0.6 là chậm)
   */
  speak(text, rate = 0.8) {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser');
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Dừng câu đang đọc dở

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = rate;
      utterance.pitch = 1.1; // Giọng hơi cao một chút để vui tươi cho trẻ

      if (this.chineseVoice) {
        utterance.voice = this.chineseVoice;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Error speaking text:', e);
    }
  }

  /**
   * Phát âm chậm cho bé nghe rõ thanh điệu
   */
  speakSlowly(text) {
    this.speak(text, 0.55);
  }

  /**
   * Âm thanh Bong Bóng / Click nút (Pop)
   */
  playPop() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  }

  /**
   * Âm thanh Trả Lời Đúng (Ding-ding tươi vui)
   */
  playSuccess() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Hợp âm Đô trưởng vui tươi)
      notes.forEach((freq, idx) => {
        const startTime = ctx.currentTime + idx * 0.08;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.25);
      });
    } catch (e) {}
  }

  /**
   * Âm thanh Trả Lời Sai (Âm thanh mềm mại, không gây sợ hãi cho trẻ)
   */
  playWrong() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const notes = [330, 260]; // Mi - Đô trầm xuống
      notes.forEach((freq, idx) => {
        const startTime = ctx.currentTime + idx * 0.12;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.2, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.2);
      });
    } catch (e) {}
  }

  /**
   * Âm thanh Ngôi Sao Vàng (Lấp lánh leng keng)
   */
  playStarSound() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const freqs = [880, 1174.66, 1318.51, 1760];
      freqs.forEach((freq, idx) => {
        const startTime = ctx.currentTime + idx * 0.07;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.3);
      });
    } catch (e) {}
  }

  /**
   * Âm thanh Kèn Chiến Thắng (Hoàn thành bài học)
   */
  playFanfare() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      // Chuỗi giai điệu chiến thắng rực rỡ
      const melody = [
        { f: 523.25, d: 0.12 }, // C
        { f: 659.25, d: 0.12 }, // E
        { f: 783.99, d: 0.15 }, // G
        { f: 1046.50, d: 0.35 } // High C
      ];

      let elapsed = 0;
      melody.forEach(item => {
        const startTime = ctx.currentTime + elapsed;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.f, startTime);

        gain.gain.setValueAtTime(0.35, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + item.d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + item.d);

        elapsed += item.d * 0.8;
      });
    } catch (e) {}
  }
}

export const sound = new SoundService();
