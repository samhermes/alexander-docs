import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';

export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'houston',
        },
    },
    integrations: [mdx()],
});