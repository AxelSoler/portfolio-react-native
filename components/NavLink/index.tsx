"use client";

// import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["#about", "#projects", "#contact"];

const NavLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = activeSection === href;

  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-md transition-colors text-xl ${
        isActive
          ? "dark:text-green-400 text-green-700 font-bold"
          : "text-gray-500 hover:text-green-400"
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;
