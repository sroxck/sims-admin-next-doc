
import { sidebarConfig } from "../type/config"

const sidebar: sidebarConfig[] = [
  {
    text: '指南',
    items: [
      { text: '快速开始', link: '/getting-started/' },
      { text: '路由', link: '/router/' },
      { text: '菜单', link: '/menu/' },
      { text: '权限', link: '/permissions/' },
      { text: '图标', link: '/icon/' },
    ]
  },
  {
    text: '组件',
    items: [
      { text: '全局组件', link: '/component/global' },
      { text: '常用组件', link: '/component/often' },
      { text: '函数式组件', link: '/component/hooks' }
    ]
  },
  {
    text: '工具',
    items: [
      { text: 'utils', link: '/utils/' },
      { text: 'hooks', link: '/hooks/' },
    ]
  },
  {
    text: '其他',
    items: [
      { text: '项目规范', link: '/component/' },
    ]
  },


]

export default sidebar
