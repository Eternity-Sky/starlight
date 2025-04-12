// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ETOJ Docs',
               		customCss: [
              			'./src/styles/concsss.css',
      			],
			social: {
				github: 'https://github.com/CB-X2-Jun/starlight-1',
			},
			
			sidebar: [
				{
					label: 'ETOJ Docs',
					autogenerate: { directory: 'ETOJ_DOCS' },
				},
			        {
					label: '信息学奥赛一本通C++版例题代码',
					autogenerate: { directory: 'ybt' },
				},
			],
		}),
	],
});
