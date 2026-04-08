// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus ACE 6",
			image: "/images/device/oneplusace6.png",
			specs: "快银 / 12G + 256GB",
			description: "骁龙 8 至尊版 × 新一代「风驰游戏内核」",
			link: "https://www.oneplus.com/cn/ace-6",
		},
	],
	Earphone: [
		{
			name: "OPPO Enco Air5 Pro",
			image: "/images/device/oppoencoair5pro.png",
			specs: "月珀白 / 6.0 / ANC主动降噪",
			description: "55dB+5000Hz超宽频|降噪效果提升200%",
			link: "https://www.opposhop.cn/cn/web/products/39203.html?utm_source=guanwang&utm_medium=oppo-enco-air5-pro",
		},
	],
};
