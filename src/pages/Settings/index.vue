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
              v-layout(row wrap)
                v-flex(xs10 md5 lg4 xl3)
                  v-select(
                    :items="voiceNames"
                    :value="voice" @change="v => voice = v"
                    label="Voice"
                  )
                v-flex.pt-3(xs1)
                  v-btn(flat icon @click="preview" :disabled="!voice || speaking")
                    v-icon play_arrow
                v-flex(xs12 md7 lg7 xl8)
                  v-alert(outline color="error" icon="info" :value="settings.voiceSupported === false") You don't have any japanese voices installed. Please add a japanese TTS (Text-To-Speech) voice.
              v-layout(row wrap)
                v-flex.pt-3(xs12 md5 lg4 xl3)
                  v-subheader.pl-0 Speech Recognition:
                    v-chip(color="red" outline v-if="speechRecognitionEnabled===false || !settings.speechRecognitionSupported") Disabled
                    v-chip(color="green" outline v-if="speechRecognitionEnabled===true") Enabled
                    v-chip(color="blue" outline v-if="speechRecognitionEnabled===null && settings.speechRecognitionSupported") Unknown
                    v-btn(color="secondary" v-if="speechRecognitionEnabled===null && settings.speechRecognitionSupported" @click="enableSpeechRecognition") Enable
                v-flex(offset-md1 xs12 md7 lg7 xl8)
                  v-alert(outline color="info" icon="info" :value="speechRecognitionEnabled===null && settings.speechRecognitionSupported") Please give access to the microphone to use speech recognition.
                  v-alert(outline color="error" icon="error" :value="speechRecognitionEnabled===false && settings.speechRecognitionSupported") You denied access to the microphone, if you change your mind you will have to change the setting in the browser.
                  v-alert(outline color="error" icon="error" :value="settings.speechRecognitionSupported === false") Your browser doesn't support the MediaRecorder API, please switch to a compatible browser.
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

import { SET_SETTINGS } from '@/store/Settings/constants'
import { POP } from '@/store/Snackbar/constants'

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
    this.voices = synthVoices.filter(it => it.lang === 'ja-JP' || it.lang === 'ja_JP')
    this.voiceNames = this.voices.map(it => { return it.name })
    this.setSettings({voiceSupported: this.voiceNames.length !== 0})
    this.synth.onvoiceschanged = () => {
      const synthVoices = this.synth.getVoices()
      this.voices = synthVoices.filter(it => it.lang === 'ja-JP' || it.lang === 'ja_JP')
      this.voiceNames = this.voices.map(it => { return it.name })
      this.setSettings({voiceSupported: this.voiceNames.length !== 0})
    }
    this.setSettings({speechRecognitionSupported: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)})
  },
  computed: {
    ...mapGetters({
      settings: 'settings'
    }),
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
      setSettings: SET_SETTINGS,
      popSnackbar: POP
    }),
    preview () {
      const message = new window.SpeechSynthesisUtterance()
      message.text = 'おはよう'
      message.lang = 'ja'
      message.voice = this.voices.find(it => it.name === this.voice)
      message.rate = 0.5
      this.speaking = true
      message.onend = () => {
        this.speaking = false
      }
      message.onerror = (err) => {
        console.log(err)
        this.popSnackbar({message: 'Speech failed', type: 'error'})
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
