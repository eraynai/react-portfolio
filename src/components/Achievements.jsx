const achievementList = [
  {
    metric: "Projects",
    value: "20+",
  },
  {
    metric: "Industries Served",
    value: "Marketing, eCommerce, Education",
  },
  {
    metric: "Learning Adaptability",
    value: "High",
  },
  {
    metric: "Certifications",
    value: "6",
  },
];

const Achievements = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353f] border rounded-md py-8 px-4 flex flex-col sm:flex-row items-center justify-center">
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center mx-2 sm:mx-4 my-2 sm:my-0"
            >
              <h2 className="text-center text-white text-s sm:text-2xl md:text-4xl font-bold">
                {achievement.value}
              </h2>
              <p className="text-[#adb7be] text-sm sm:text-base">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Achievements;
