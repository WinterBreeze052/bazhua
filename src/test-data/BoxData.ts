interface MockDataItem {
  image: string;
  line1: string;
  line2: string;
}

const mockData: MockDataItem[] = [
  {
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+1',
    line1: '第一段文本，描述内容1。',
    line2: '第二段文本，描述内容2。',
  },
  {
    image: 'https://via.placeholder.com/300/33FF57/FFFFFF?text=Image+2',
    line1: '第一段文本，描述内容3。',
    line2: '第二段文本，描述内容4。',
  },
  {
    image: 'https://via.placeholder.com/300/3357FF/FFFFFF?text=Image+3',
    line1: '第一段文本，描述内容5。',
    line2: '第二段文本，描述内容6。',
  },
  {
    image: 'https://via.placeholder.com/300/FF33A1/FFFFFF?text=Image+4',
    line1: '第一段文本，描述内容7。',
    line2: '第二段文本，描述内容8。',
  },
  {
    image: 'https://via.placeholder.com/300/FFDB33/FFFFFF?text=Image+5',
    line1: '第一段文本，描述内容9。',
    line2: '第二段文本，描述内容10。',
  },
];

export default mockData;
