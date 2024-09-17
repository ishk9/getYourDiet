"use client";;
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PiLockSimpleBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName
}) => {
  
  const isSubscribed = true;   
  const router = useRouter();

  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  
  return (
    <div className='flex flex-col lg:flex-row justify-center items-start'>
      <div
        className={cn(
          "flex flex-col items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-[20%]",
          containerClassName
        )}>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              if(isSubscribed){
                moveSelectedTabToTop(idx);
              }
              else {
                router.push("/Pricing");
              }
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-xl bg-[#6EC0FF] my-1  border-black h-20 w-60", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}>
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-[#4e9ad4] rounded-xl ",
                  activeTabClassName
                )} />
            )}

            <span className="relative  text-white dark:text-white flex justify-between items-center">
              {tab.title}
              {
                !isSubscribed && idx != 0 && <PiLockSimpleBold />
              }
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn(contentClassName)} />
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    (<div className="relative w-full lg:w-1/2 h-full flex justify-start items-start">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-300 to-blue-800">
            <p className='mb-4 text-[50px] font-medium'>{tab.title}</p>
            <hr className='mb-4'/>
            {
              tab.options.map((opt, ind) => (
                <div key={ind}>
                  <li className='text-[25px] my-2 font-normal'>{opt}</li>
                </div>
              ))
            }
          </div>
        </motion.div>
      ))}
    </div>)
  );
};
