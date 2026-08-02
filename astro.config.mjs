import { defineConfig, passthroughImageService } from "astro/config";
import mdx from '@astrojs/mdx';

export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'houston',
        },
    },
    integrations: [mdx()],
    image: {
        service: passthroughImageService()
    }
});