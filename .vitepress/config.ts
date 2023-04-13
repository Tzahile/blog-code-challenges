import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code Challenges",
  base: "/blog-code-challenges/",
  srcDir: "src",
  description: "A blog for code challenges and how I solved them",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "challenges", link: "/challenges" },
    ],

    sidebar: {
      challenges: [
        {
          text: "Challenges",
          items: [
            { text: "2023", link: "/2023/" },
            // { text: 'Runtime API Examples', link: '/api-examples' }
          ],
        },
      ],
      "2023": [
        {
          text: "2023",
          items: [
            { text: "HackerRank", link: "2023/hackerrank/" },
            { text: "leetcode", link: "2023/leetcode/" },
            {
              text: "javascript-algorithms",
              link: "2023/javascript-algorithms/",
            },
            { text: "kickstart", link: "2023/kickstart/" },
          ],
        },
      ],
      "2023/hackerrank": [
        {
          text: "hackerrank",
          items: [
            { text: "easy", link: "/2023/hackerrank/easy/" },
            { text: "medium", link: "/2023/hackerrank/medium/" },
            { text: "hard", link: "/2023/hackerrank/hard/" },
          ],
        },
      ],
      "2023/leetcode/": [
        {
          text: "leetcode",
          items: [
            { text: "easy", link: "/2023/leetcode/easy/" },
            { text: "medium", link: "/2023/leetcode/medium/" },
            { text: "hard", link: "/2023/leetcode/hard/" },
          ],
        },
      ],
      "2023/javascript-algorithms/": [
        {
          text: "javascript-algorithms",
          items: [
            { text: "easy", link: "/2023/javascript-algorithms/easy/" },
            { text: "medium", link: "/2023/javascript-algorithms/medium/" },
            { text: "hard", link: "/2023/javascript-algorithms/hard/" },
          ],
        },
      ],
      "2023/kickstart/": [
        {
          text: "kickstart",
          items: [
            { text: "easy", link: "/2023/kickstart/easy/" },
            { text: "medium", link: "/2023/kickstart/medium/" },
            { text: "hard", link: "/2023/kickstart/hard/" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Tzahile/blog-code-challenges",
      },
    ],
  },
});
