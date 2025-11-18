import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [showLiveOutput, setShowLiveOutput] = useState(false);
  const [outputStep, setOutputStep] = useState(0);

  // Scroll animations
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation({
    threshold: 0.2,
    delay: 200,
  });
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation({
    threshold: 0.2,
    delay: 400,
  });
  const { elementRef: heroRef } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev >= 20) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    if (showLiveOutput) {
      setOutputStep(0);
      const interval = setInterval(() => {
        setOutputStep((prev) => {
          if (prev >= 15) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [showLiveOutput]);

  useEffect(() => {
    if (showLiveOutput) {
      const timeout = setTimeout(() => {
        setShowLiveOutput(false);
      }, 5000); // Auto-hide after 5 seconds

      return () => clearTimeout(timeout);
    }
  }, [showLiveOutput]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLiveClick = () => {
    setShowLiveOutput(true);
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-32 px-4 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`relative transition-all duration-1000 ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
              <Sparkles
                size={16}
                className="text-blue-600 dark:text-blue-400"
              />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Frontend Developer & Web3 Specialist
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Building the Future of
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Web3
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
              I create beautiful, responsive interfaces and decentralized
              applications. Specializing in React, TypeScript, and blockchain
              technologies. Let's bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("#projects")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div
                className={`transition-all duration-700 ${
                  leftVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  10+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Projects Completed
                </p>
              </div>
              <div
                className={`transition-all duration-700 delay-100 ${
                  leftVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                  1/2+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Years Experience
                </p>
              </div>
              <div
                className={`transition-all duration-700 delay-200 ${
                  leftVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  5+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 delay-300 ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Animated gradient orb */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>

              {/* Code card */}
              <div className="relative bg-gray-900 dark:bg-black rounded-2xl p-8 border border-gray-800">
                <div className="space-y-4 font-mono text-sm">
                  <div
                    className={`text-gray-400 transition-all duration-300 ${
                      animationStep >= 1 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-400">portfolio</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                  </div>
                  <div
                    className={`text-gray-400 pl-4 transition-all duration-300 ${
                      animationStep >= 4 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-blue-300">name</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-400">
                      "SOYOBI JOHN OLUWASEUN"
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div
                    className={`text-gray-400 pl-4 transition-all duration-300 ${
                      animationStep >= 8 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-blue-300">skills</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-yellow-400">['</span>
                    <span className="text-green-400">React</span>
                    <span className="text-yellow-400">', '</span>
                    <span className="text-green-400">Web3</span>
                    <span className="text-yellow-400">', '</span>
                    <span className="text-green-400">Blockchain</span>
                    <span className="text-yellow-400">']</span>
                    <span className="text-white">,</span>
                  </div>
                  <div
                    className={`text-gray-400 pl-4 transition-all duration-300 ${
                      animationStep >= 14 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-blue-300">passionate</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-purple-400">true</span>
                    <span className="text-white">,</span>
                  </div>
                  <div
                    className={`text-gray-400 transition-all duration-300 ${
                      animationStep >= 18 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-yellow-400">{"};"}</span>
                  </div>

                  {/* Live button */}
                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={handleLiveClick}
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
                    >
                      Live
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Output Panel */}
              {showLiveOutput && (
                <div className="absolute -bottom-4 left-4 right-4 bg-gray-800 dark:bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl transform transition-all duration-500 scale-100 opacity-100">
                  <div className="text-xs font-mono">
                    <div className="text-green-400 mb-2">Output:</div>
                    <div className="text-gray-300 space-y-1">
                      <div
                        className={`transition-all duration-300 ${
                          outputStep >= 1 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {"{"}
                      </div>
                      <div
                        className={`pl-4 transition-all duration-300 ${
                          outputStep >= 3 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span className="text-blue-300">name</span>:{" "}
                        <span className="text-green-400">
                          "SOYOBI JOHN OLUWASEUN"
                        </span>
                      </div>
                      <div
                        className={`pl-4 transition-all duration-300 ${
                          outputStep >= 6 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span className="text-blue-300">skills</span>:{" "}
                        <span className="text-yellow-400">[</span>
                        <span className="text-green-400">"React"</span>
                        <span className="text-yellow-400">, </span>
                        <span className="text-green-400">"Web3"</span>
                        <span className="text-yellow-400">, </span>
                        <span className="text-green-400">"Blockchain"</span>
                        <span className="text-yellow-400">]</span>
                      </div>
                      <div
                        className={`pl-4 transition-all duration-300 ${
                          outputStep >= 10 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span className="text-blue-300">passionate</span>:{" "}
                        <span className="text-purple-400">true</span>
                      </div>
                      <div
                        className={`transition-all duration-300 ${
                          outputStep >= 13 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {"}"}
                      </div>
                      <div
                        className={`text-green-400 transition-all duration-300 ${
                          outputStep >= 15 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        ✓ Object created successfully
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
