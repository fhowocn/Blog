// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Susu",
		imgurl: "https://susu.nappig.com/assets/assets/g.jpeg",
		desc: "一只喜欢编程、音乐和可爱事物的小鲨鱼!",
		siteurl: "https://susu.icu/",
		tags: ["Blog", "Susu事务所"],
	},
	{
		id: 2,
		title: "NorthZero",
		imgurl: "https://nzdnzd.top/favicon.svg",
		desc: "O.o",
		siteurl: "https://nzdnzd.top/",
		tags: ["Blog"],
	},
	{
		id: 3,
		title: "张听南的博客",
		imgurl: "http://xn--6kr3s16x.site/wp-content/uploads/2025/08/cropped-1754382876-yuanjiao.png",
		desc: "这 是 一 段 经 典 的 旋 律",
		siteurl: "http://xn--6kr3s16x.site/",
		tags: ["Blog"],
	},
	{
		id: 4,
		title: "午夜的Blog",
		imgurl: "https://q.qlogo.cn/headimg_dl?dst_uin=1343394737&spec=640&img_type=jpg",
		desc: "用代码表达言语的魅力，用代码书写山河的壮丽",
		siteurl: "https://www.wuye2004.top/",
		tags: ["Blog"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
