"use client"
import React, {JSXElementConstructor, Key, ReactElement, ReactNode, useEffect, useState} from "react";
import { useSwipeable } from "react-swipeable";
import {BsFillCaretLeftFill, BsFillCaretRightFill} from "react-icons/bs";
interface Props {
    children: ReactNode
    key: Key | null | undefined
}
interface childer{
    child: ReactElement<any, string | JSXElementConstructor<any>>
}
interface PropsCarousel {
    children: ReactNode
}
export const CarouselItem = ({ children, key }: Props) => {
    return (
        <div key={key} className="carousel-item min-w-full">
            {children}
        </div>
    );
};

const Carousel = ({ children }: PropsCarousel) => {
    const setChildrenView = 3
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex:number) => {
        if (newIndex < 0) {
            newIndex = Math.round(React.Children.count(children)) - setChildrenView;
        } else if (newIndex >= Math.round(React.Children.count(children)-(setChildrenView-1))) {
            newIndex = 0;
        }
        console.log(newIndex)
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers}
            className="overflow-hidden w-full h-fit items-center flex"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <BsFillCaretLeftFill
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
                className="absolute z-10 transition-all duration-[250ms] ease-out cursor-pointer ml-4 text-2xl text-[#0096FF]/[0.7] hover:text-blue-900 cursor "/>
            <BsFillCaretRightFill
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
                className="right-4 z-10 absolute transition-all duration-[250ms] ease-out cursor-pointer text-2xl text-[#0096FF]/[0.7] hover:text-blue-900 cursor "/>

            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100/setChildrenView}%)` }}>
                {React.Children.map(children, (child, index) => {
                    if (!child) {
                        return null; // Skip undefined or null children
                    }
                    return (
                        <div style={{ width: `${100 / setChildrenView}%` }}>
                            {child}
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Carousel;
