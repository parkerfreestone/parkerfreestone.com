import { useEffect, useState } from "react";

const TerminalAnimation = () => {
  const [text, setText] = useState("");
  const [isInstalling, setIsInstalling] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const typeText = (
      targetText: string,
      currentIndex: number,
      delay: number
    ) => {
      setTimeout(() => {
        setText(targetText.slice(0, currentIndex + 1));

        if (currentIndex + 1 === targetText.length) {
          setIsInstalling(true);
          setTimeout(() => {
            setIsDone(true);
          }, 3000);
        } else {
          typeText(targetText, currentIndex + 1, delay);
        }
      }, delay);
    };

    const targetText = "npm i about-me";
    const initialDelay = 2000;
    const typingDelay = 50;

    setTimeout(() => {
      typeText(targetText, 0, typingDelay);
    }, initialDelay);
  }, []);

  return (
    <div className="mockup-code" data-aos="fade-up" data-aos-delay="50">
      <pre data-prefix="$">
        <code>{text}</code>
      </pre>
      {isInstalling && (
        <pre
          data-prefix=">"
          className={isDone ? "text-success" : "text-warning"}
        >
          {isDone ? "done!" : "installing..."}
        </pre>
      )}
    </div>
  );
};

export default TerminalAnimation;
