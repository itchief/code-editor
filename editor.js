import {EditorView, basicSetup} from "codemirror"
import {html} from "@codemirror/lang-html"

let editor = new EditorView({
  extensions: [basicSetup, html()],
  parent: document.querySelector('#editor')
})
