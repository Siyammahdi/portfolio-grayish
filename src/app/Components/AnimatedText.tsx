import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedTextProps = {
  text: string | string[];
  el?: React.ElementType; 
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  delay?: number;
  duration?: number;
};

const defaultAnimations = (duration: number): {
  hidden: { opacity: number; filter: string; scale: number };
  visible: { opacity: number; filter: string; scale: number; transition: { duration: number } };
} => ({
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
    scale: 2,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: duration,
    },
  },
});

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  delay = 0,
  duration = 0.5,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef<HTMLSpanElement>(null); 
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { 
            transition: { 
              staggerChildren: 0.05, 
              delayChildren: delay,
            },
          },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={defaultAnimations(duration)}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};