// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://Josue-Ramos1.github.io',
  	base: '/Notas',
	integrations: [
		starlight({
			title: 'Mis Notas',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Ciberseguridad Google',
					autogenerate: { directory: 'Ciberseguridad' },
				},
				{
					label: 'Redes Cisco Basico',
					autogenerate: { directory: 'RedesCiscoBasico' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
			],
		}),
	],
});
