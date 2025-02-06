const events = [
  {
    year: "2023",
    month: "12月",
    description: "全国人工智能应用场景创新挑战赛总决赛一等奖",
  },
  {
    year: "2023",
    month: "06月",
    description: "推出业内首个销售大模型SaaS产品“探迹SalesGPT”",
  },
  {
    year: "2023",
    month: "04月",
    description: "确定新愿景“打造全球新商业连接方式”",
  },
  {
    year: "2023",
    month: "02月",
    description: "荣获广东省计算机协会科学进步二等奖",
  },
  { year: "2023", month: "02月", description: "荣获科创中国奖新锐企业" },
  { year: "2023", month: "01月", description: "荣登广东省专精特新企业" },
  {
    year: "2023",
    month: "01月",
    description: "后疫情时代，确定以“纵情向前”为年度主题",
  },
];

const Timeline = () => (
  <div
    class="timeline flex flex-row items-start p-4 text-left"
    style={{ background: "rgb(0,119,255)" }}
  >
    <div class="year-column flex flex-col items-end space-y-4">
      {events.map((event, index) => (
        <div key={index} class="year text-white font-bold">{event.year}</div>
      ))}
    </div>
    <div class="timeline-line relative w-2 bg-white mx-4"></div>
    <div class="event-column flex flex-col items-start space-y-4">
      {events.map((event, index) => (
        <div key={index} class="event flex items-center space-x-4">
          <div class="dot w-4 h-4 bg-white rounded-full"></div>
          <div class="description text-white">
            <strong class="font-bold">{event.month}</strong> -{" "}
            {event.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
