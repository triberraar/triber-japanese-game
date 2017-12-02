// should have settings for ja voice, ask for mic access
<template lang="pug">
  v-container(fluid fill-height)
    v-layout
      v-flex(xs12)
        v-card()
          v-card-title(primary-title)
            h3.headline.mb-0 Settings
          v-divider
          v-card-text
            v-layout
              v-flex(xs10 md5 lg4 xl3)
                v-select(
                  :items="voices"
                  v-model="voice",
                  label="Voice"
                  single-line,
                  item-text="name",
                )
              v-flex.pt-3(xs1)
                v-btn(flat icon @click="preview" :disabled="!voice || speaking")
                  v-icon play_arrow
            v-btn(color="primary") Save
</template>


<script>
export default {
  name: 'SettingsPage',
  data: () => ({
    synth: speechSynthesis,
    voiceList: [],
    voices: [],
    voice: null,
    speaking: false
  }),
  created: function () {
    this.voiceList = this.synth.getVoices()
    this.voices = this.voiceList.filter(it => it.lang === 'ja-JP')
    this.synth.onvoiceschanged = () => {
      this.voiceList = this.synth.getVoices()
      this.voices = this.voiceList.filter(it => it.lang === 'ja-JP')
    }
  },
  computed: {
  },
  methods: {
    preview () {
      const message = new window.SpeechSynthesisUtterance()
      message.text = 'おはよう'
      message.voice = this.voice
      message.rate = 0.5
      this.speaking = true
      message.onend = () => {
        this.speaking = false
      }
      this.synth.speak(message)
    }
  }
}
</script>
