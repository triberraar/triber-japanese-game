export default {
  data () {
    return {
      synth: speechSynthesis,
      voiceList: [],
      speaking: false
    }
  },
  created: function () {
    this.voiceList = this.synth.getVoices()
    this.synth.onvoiceschanged = () => {
      this.voiceList = this.synth.getVoices()
    }
  },
  methods: {
    speak (voice, words) {
      this.speaking = true
      const message = new window.SpeechSynthesisUtterance()
      message.text = words
      message.lang = 'ja'
      message.voice = this.voiceList.find(it => it.name === this.voice)
      message.rate = 0.5
      message.onend = () => {
        this.speaking = false
      }
      this.synth.speak(message)
    }
  }
}
