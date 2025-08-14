"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newOpenItems = new Set(prev);

      if (newOpenItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        if (!allowMultiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(id);
      }

      return newOpenItems;
    });
  };

  return (
    <div className="accordion-container space-y-4">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div
            key={item.id}
            className="accordion-item border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="accordion-header w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between">
                <h3 className="accordion-title text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <svg
                  className={`accordion-icon w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
