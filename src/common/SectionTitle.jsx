import { motion } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (

    <motion.div
      initial={{ x: -350 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="text-primary-700 p-6 noselect"
    >
      <span
        className="opacity-50"
        style={{
          textTransform: "uppercase",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
        }}
      >
        {subtitle}
      </span>
      <h2
        className="tracking-wider text-7xl sm:text-8xl md:text-9xl"
        style={{ fontFamily: "Poppins, sans-serif",  fontWeight: "600", }}
      >
        {title.split("").map((char, index) => {
          if (char === " ") {
            return " ";
          }
          return <span key={index} className="bounce">{char}</span>
        })}
      </h2>
    </motion.div>


  );
};

export default SectionTitle;
