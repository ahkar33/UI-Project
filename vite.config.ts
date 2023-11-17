import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		// alias: {
		//   // for TypeScript path alias import like : @/x/y/z
		//   "@": fileURLToPath(new URL("./src", import.meta.url)),
		// },
		alias: {
			"@": path.resolve(__dirname, "./src/"),
		},
	},
})
