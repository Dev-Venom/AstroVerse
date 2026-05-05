type TheoryCardProps = {
  title: string;
  description: string;
};

export default function TheoryCard({
  title,
  description,
}: TheoryCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:scale-105 hover:border-purple-400/30 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
}