#!/usr/bin/env node

const { readFile, writeFile } = require('fs/promises')
const MarkdownIt = require('markdown-it')
const markdownItContainer = require('markdown-it-container')
const ejs = require('ejs')

async function mdToHtml () {
  const md = new MarkdownIt()
  // dynamic class containers tweak
  md.use(markdownItContainer, 'dynamic', {
    validate: function() { return true },
    render: function(tokens, idx) {
      var token = tokens[idx]
      
      if (token.nesting === 1) {
        return '<div class="' + token.info.trim() + '">'
      } else {
        return '</div>'
      }
    },
  })

  const contentMD = await readFile('./content.md', 'utf-8')
  const indexHTMLTemplate = await readFile('./src/index.html', 'utf-8')

  const contentHTML = md.render(contentMD)

  const html = ejs.render(indexHTMLTemplate, { data: { content: contentHTML } })
  await writeFile('./index.html', html)
}

mdToHtml()
.then(() => console.log('success'))
.catch(console.error)


