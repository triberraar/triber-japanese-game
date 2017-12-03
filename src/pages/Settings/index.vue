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
            v-form(v-model="valid")
              v-layout
                v-flex(xs10 md5 lg4 xl3)
                  v-select(
                    :items="voiceNames"
                    :value="voice" @change="v => voice = v"
                    label="Voice"
                  )
                v-flex.pt-3(xs1)
                  v-btn(flat icon @click="preview" :disabled="!voice || speaking")
                    v-icon play_arrow
              v-layout()
                v-flex.pt-3(xs12 md5 lg4 xl3)
                  v-subheader.pl-0 Speech Recognition:
                    v-chip(color="red" outline v-if="speechRecognitionEnabled===false || !speechRecognitionFeature") Disabled
                    v-chip(color="green" outline v-if="speechRecognitionEnabled===true") Enabled
                    v-chip(color="blue" outline v-if="speechRecognitionEnabled===null && speechRecognitionFeature") Unknown
                    v-btn(color="secondary" v-if="speechRecognitionEnabled===null && speechRecognitionFeature" @click="enableSpeechRecognition") Enable
                v-flex(xs12 md7 lg8 xl9)
                  v-alert(outline color="info" icon="info" :value="speechRecognitionEnabled===null && speechRecognitionFeature") Please give access to the microphone to use speech recognition.
                  v-alert(outline color="error" icon="error" :value="speechRecognitionEnabled===false && speechRecognitionFeature") You denied access to the microphone, if you change your mind you will have to change the setting in the browser.
                  v-alert(outline color="error" icon="error" :value="!speechRecognitionFeature") Your browser doesn't support the MediaRecorder API, please switch to a compatible browser.
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

import { SET_SETTINGS } from '@/store/Settings/constants'

export default {
  name: 'SettingsPage',
  data: () => ({
    valid: false,
    synth: speechSynthesis,
    voiceNames: [],
    voices: [],
    speaking: false
  }),
  created: function () {
    const synthVoices = this.synth.getVoices()
    this.voices = synthVoices.filter(it => it.lang === 'ja-JP')
    this.voiceNames = this.voices.map(it => { return it.name })
    this.synth.onvoiceschanged = () => {
      const synthVoices = this.synth.getVoices()
      this.voices = synthVoices.filter(it => it.lang === 'ja-JP')
      this.voiceNames = this.voices.map(it => { return it.name })
    }
  },
  computed: {
    ...mapGetters({
      settings: 'settings'
    }),
    speechRecognitionFeature: function () {
      return navigator.mediaDevices && navigator.mediaDevices.getUserMedia
    },
    voice: {
      get () {
        return this.settings.voice
      },
      set (voice) {
        this.setSettings({voice})
      }
    },
    speechRecognitionEnabled: function () {
      return this.settings.speechRecognitionEnabled
    }
  },
  methods: {
    ...mapMutations({
      setSettings: SET_SETTINGS
    }),
    preview () {
      const message = new window.SpeechSynthesisUtterance()
      message.text = 'おはよう'
      message.voice = this.voices.find(it => it.name === this.voice)
      message.rate = 0.5
      this.speaking = true
      message.onend = () => {
        this.speaking = false
      }
      this.synth.speak(message)
    },
    enableSpeechRecognition () {
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.setSettings({ speechRecognitionEnabled: true })
        stream.getTracks().forEach(track => track.stop())
      })
      .catch(() => {
        this.setSettings({ speechRecognitionEnabled: false })
      })
    }
  }
}
</script>
