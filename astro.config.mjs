import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'houston',
        },
    },

    adapter: cloudflare()
});