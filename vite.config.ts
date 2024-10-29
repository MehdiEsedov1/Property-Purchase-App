import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
});

//Plugin svgr is added for convert svgs to react components but it isn't work Date 29.10.2024
