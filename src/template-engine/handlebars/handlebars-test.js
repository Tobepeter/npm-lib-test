import Handlebars from 'handlebars'
import { join } from 'path'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta)

// 基础模板渲染测试
function test_basic() {
  console.log('\n=== 测试基础模板渲染 ===')
  const template = '<h1>{{title}}</h1><ul>{{#each users}}<li>{{this}}</li>{{/each}}</ul>'
  const data = {
    title: '用户列表',
    users: ['张三', '李四', '王五'],
  }
  const compiledTemplate = Handlebars.compile(template)
  const html = compiledTemplate(data)
  console.log('渲染结果：')
  console.log(html)
}

// 条件渲染测试
function test_cond() {
  console.log('\n=== 测试条件渲染 ===')
  const template = `
    {{#if admin}}
      <h2>管理员界面</h2>
      {{#each users}}
        <div>
          <span>{{name}}</span>
          <button>删除用户</button>
        </div>
      {{/each}}
    {{else}}
      <h2>普通用户界面</h2>
      <p>欢迎，{{currentUser}}</p>
    {{/if}}
  `
  // 测试管理员视图
  const adminData = {
    admin: true,
    users: [
      { name: '张三', id: 1 },
      { name: '李四', id: 2 },
    ],
  }
  const compiledTemplate = Handlebars.compile(template)
  console.log('管理员视图：')
  console.log(compiledTemplate(adminData))

  // 测试普通用户视图
  const userData = {
    admin: false,
    currentUser: '访客',
  }
  console.log('\n普通用户视图：')
  console.log(compiledTemplate(userData))
}

// 文件模板测试
function test_file() {
  console.log('\n=== 测试文件模板渲染 ===')

  const templateDir = join(__dirname, 'templates')
  const outputDir = join(__dirname, 'output')

  // 创建必要的目录
  try {
    mkdirSync(templateDir, { recursive: true })
    mkdirSync(outputDir, { recursive: true })
  } catch (err) {
    console.log('目录已存在，继续执行...')
  }

  // 创建模板文件
  const templateFile = join(templateDir, 'page.handlebars')
  const templateContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>{{pageTitle}}</title>
    </head>
    <body>
      <h1>{{pageTitle}}</h1>
      <div class="content">
        {{{content}}}
      </div>
      <footer>
        <p>生成时间：{{generatedTime}}</p>
      </footer>
    </body>
    </html>
  `

  writeFileSync(templateFile, templateContent)

  // 渲染文件模板
  const pageData = {
    pageTitle: '测试页面',
    content: '<strong>这是一段包含 HTML 的内容</strong>',
    generatedTime: new Date().toLocaleString(),
  }

  const compiledTemplate = Handlebars.compile(templateContent)
  const rendered = compiledTemplate(pageData)
  const outputFile = join(outputDir, 'result.html')
  writeFileSync(outputFile, rendered)
  console.log('文件已生成：', outputFile)
}

async function main() {
  test_basic()
  test_cond()
  test_file()
}

main() 