"use client";

import { useEffect } from "react";
import { FaqAccordion } from "@common/utilits";

const FaqSection = ( { title, items } ) => {
    useEffect(() => {
        FaqAccordion();
    }, []);

    return (
        <>
            {/* faq */}
            {title &&
            <h3 className="mil-fade-up mil-mb-40">{title}</h3>
            }
            {items !== undefined &&
            <div className="mil-faq-section mil-mb-100">
                {items.map((item, key) => (
                <div className={key === 0 ? "mil-faq-item mil-fade-up active" : "mil-faq-item mil-fade-up"} key={`faq-item-${key}`}>
                    <div className="mil-faq-question">
                        <span className="mil-icon">+</span>
                        <h3>{item.label}</h3>
                    </div>
                    <div className="mil-faq-answer mil-text" dangerouslySetInnerHTML={{__html : item.value}} />
                </div>
                ))}
            </div>
            }
            {/* faq end */}
        </>
    );
};
export default FaqSection;