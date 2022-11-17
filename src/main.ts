import { createApp } from 'vue'

import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import Prism from 'prismjs'
import { store } from './store'
import router from './router'
import '@/style/index.less'
import './permission'
import App from './App.vue'

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
})
const app = createApp(App)

app.use(TDesign)
app.use(store)
app.use(router)
app.use(VueMarkdownEditor)

app.mount('#app')
