const blogPosts = [
    {
        date: "2026/07/15 21:14 BJT",  // 1. 补上逗号
        title: "我写的第一篇博客",      // 2. 补上逗号
        summary: "今天，我成功地把我的博客托管到了Cloudflare Workers，感觉很好。什么？国内用户访问？我不知道，反正我是挂着VPN的😂", // 3. 把换行去掉，写成一行，并补上逗号
        link: "#",                     // 4. 将 links 改为 link，以匹配渲染逻辑
        tags: ["文章", "Cloudflare"]   // 5. 标签之间加上逗号
    } // 最后一篇文章，结尾不需要逗号

    ,{
        date: "2026/07/17 20：48 BJT",
        title: "我的第二篇博客",
        summary: "ok呀也是写了第二篇文章，之后我会尝试单开一页写文章，就这样吧",
        link: "#",
        tags: ["文章", "JavaScript"]
    }
];