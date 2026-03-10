import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                neutral: {
                    850: '#1f1f22',
                    900: '#131316',
                    950: '#09090b',
                },
                brand: {
                    primary: '#3b82f6',
                    secondary: '#8b5cf6',
                    accent: '#ec4899',
                }
            },
            animation: {
                'blob': 'blob 7s infinite',
                'tilt': 'tilt 10s infinite linear',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                },
                tilt: {
                    '0%, 50%, 100%': {
                        transform: 'rotate(0deg)',
                    },
                    '25%': {
                        transform: 'rotate(1deg)',
                    },
                    '75%': {
                        transform: 'rotate(-1deg)',
                    },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            },
        },
    },
    plugins: [],
};
export default config;
