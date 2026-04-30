"use client";
import { motion } from 'framer-motion';
import {
    MapPin, Sparkles, Map, Users, FileText, ExternalLink, Wifi, Lock,
    Home, Plus, Shield, ArrowUpRight, Dog, Phone, Wind, Lightbulb,
    Key, Coffee, Trash2, Briefcase, ShoppingBag, ShoppingCart, Wine,
    Music, Store, Utensils, Mountain
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SECTIONS = [
    { id: 'hosts', title: 'MEET YOUR HOSTS', num: '02' },
    { id: 'place', title: 'ABOUT THE PLACE', num: '03' },
    { id: 'things', title: 'THINGS TO KNOW', num: '04' },
    { id: 'wifi', title: 'CONNECT TO WIFI', num: '05' },
    { id: 'logistics', title: 'BEFORE YOUR STAY, CHECK IN, & CHECK OUT', num: '06' },
    { id: 'notes', title: 'A FEW NOTES FOR YOUR STAY (INCLUDING EMERGENCY INFO)', num: '07' },
    { id: 'go', title: 'DEPARTURE CHECKLIST', num: '08' },
    { id: 'area', title: 'ABOUT THE AREA', num: '09' },
    { id: 'shopping', title: 'NEAREST SHOPPING', num: '10' },
    { id: 'local', title: 'LOCAL RECOMMENDATIONS', num: '11' },
];

const HIGHLIGHTS = [
    { icon: Map, text: ["BEAUTIFUL", "CITY VIEW"] },
    { icon: Sparkles, text: ["WALK TO", "BROADWAY"] },
    { icon: Users, text: ["4 GUESTS", "1 BEDROOM", "1 KING + QUEEN", "1 BATHROOM"] }
];

export default function CityGuidebook() {
    const [copied, setCopied] = React.useState(false);
    const [showNav, setShowNav] = React.useState(false);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for the sticky header
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setShowNav(false); // Close nav after clicking
    };

    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] pt-24 sm:pt-28 pb-32 sm:pb-40 transition-colors duration-500">
            {/* Mobile Section Navigation */}
            <button
                onClick={() => setShowNav(!showNav)}
                className="fixed bottom-8 right-8 sm:bottom-12 sm:right-12 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--fg)] border border-[var(--border)] text-[var(--bg)] flex items-center justify-center hover:opacity-80 transition-all shadow-lg"
                title="Navigation"
            >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Navigation Drawer */}
            {showNav && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowNav(false)}
                    className="fixed inset-0 bg-black/50 z-30"
                />
            )}
            <motion.div
                initial={{ x: 400 }}
                animate={{ x: showNav ? 0 : 400 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed right-0 top-0 bottom-0 w-80 bg-[var(--bg)] border-l border-[var(--border)] z-40 overflow-y-auto shadow-2xl"
            >
                <div className="pt-20 sm:pt-24 p-6 space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-lg font-bold uppercase tracking-tight">Sections</h2>
                        <p className="text-sm text-stone-500 uppercase tracking-wider">Quick Navigation</p>
                    </div>

                    <nav className="space-y-1">
                        {SECTIONS.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollTo(section.id)}
                                className="w-full text-left px-4 py-3 rounded-lg hover:bg-[var(--fg)]/8 transition-colors text-sm font-medium hover:opacity-100 opacity-70 group"
                            >
                                <span className="text-sm text-stone-400 block mb-0.5">{section.num}</span>
                                <span className="group-hover:translate-x-1 inline-block transition-transform">{section.title}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </motion.div>

            <div className="max-w-4xl mx-auto px-6 sm:px-8">

                {/* SECTION 01: WELCOME & RECEPTION */}
                <section id="welcome" className="text-center mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-2">WELCOME</h1>
                        <p className="text-sm tracking-[0.4em] uppercase text-stone-500 font-medium">FROM PALINDROME PROJECTS</p>
                    </motion.div>

                    {/* Image + Address: stacked on mobile, side-by-side on desktop */}
                    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }} className="mt-8 sm:mt-12 mb-12 sm:mb-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch text-left">
                        {/* Image — consistent 4:6 crop from top only */}
                        <div className="aspect-[4/6] sm:aspect-auto rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-sm">
                            <img src="/nashville-4.jpeg" className="w-full h-full object-cover object-bottom" />
                        </div>

                        {/* Address + Highlights — fills height of image on desktop */}
                        <div className="flex flex-col gap-4">
                            <Link href="https://maps.app.goo.gl/Ds34kPRXzyV1Jf8P8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-6 py-5 bg-stone-100 dark:bg-stone-900 rounded-2xl border border-[var(--border)] hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors shrink-0">
                                <MapPin size={20} className="text-stone-400 shrink-0" />
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-base font-semibold leading-tight tracking-tight">Sentral Sobro</span>
                                    <span className="text-sm text-stone-500 underline underline-offset-2 decoration-stone-300">516 Lea Ave, Unit 1018, Nashville, TN 37203</span>
                                </div>
                            </Link>
                            {HIGHLIGHTS.map((h, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-6 border border-[var(--border)] rounded-2xl bg-stone-50 dark:bg-stone-900/50 justify-center flex-1">
                                    <h.icon size={18} className="mb-3 opacity-65 shrink-0" />
                                    <div className="flex flex-col gap-1">
                                        {h.text.map((line, li) => (
                                            <span key={li} className="text-sm tracking-widest font-bold uppercase leading-tight">{line}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>


                    <div className="flex flex-col items-center gap-6 sm:gap-10">
                        <div className="space-y-4">
                            <div className="h-px w-8 sm:w-12 bg-stone-300 dark:bg-stone-700 mx-auto" />
                            <p className="text-sm tracking-[0.2em] font-medium opacity-80 uppercase">WE HOPE YOU ENJOY YOUR STAY!</p>
                            <div className="h-px w-8 sm:w-12 bg-stone-300 dark:bg-stone-700 mx-auto" />
                        </div>

                        <Link href="https://tinyurl.com/welcome-apr26" target="_blank" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[var(--border)] text-sm font-semibold tracking-widest uppercase text-stone-600 hover:text-[var(--fg)] transition-all">
                            <FileText className="w-3 h-3 sm:w-4 sm:h-4" /> View PDF Version <ExternalLink className="w-3 h-3 sm:w-3 sm:h-3 opacity-50" />
                        </Link>
                    </div>
                </section>

                {/* TABLE OF CONTENTS */}
                <section className="py-24 border-t border-[var(--border)]">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-baseline gap-4">
                            <span className="text-base font-bold tracking-[0.2em] text-stone-700 uppercase">Table of Contents</span>
                            <span className="text-sm text-stone-400 italic">— click any section to jump</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 sm:gap-y-8">
                            {SECTIONS.map((item) => (
                                <button key={item.id} onClick={() => scrollTo(item.id)} className="flex items-start gap-3 sm:gap-4 group text-left transition-all hover:translate-x-1">
                                    <span className={`text-2xl sm:text-4xl font-serif italic transition-all shrink-0 ${item.num === '06' ? 'opacity-100' : 'opacity-20 group-hover:opacity-100'}`}>{item.num}</span>
                                    <span className={`text-sm sm:text-sm font-bold tracking-widest uppercase leading-tight pt-1 underline decoration-transparent group-hover:decoration-[var(--fg)] underline-offset-4 transition-all ${item.num === '06' ? 'opacity-100 font-extrabold' : 'text-stone-600 group-hover:text-[var(--fg)]'}`}>{item.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 02: MEET YOUR HOSTS */}
                <section id="hosts" className="pt-32 pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-16 items-start">

                        {/* Host Image/Visual */}
                        <div className="w-full md:w-5/12 aspect-[3/4] bg-stone-100 dark:bg-stone-900 rounded-2xl sm:rounded-[2.5rem] overflow-hidden relative group">
                            <div
                                className="w-full h-full bg-cover bg-center hover:grayscale-0 transition-all duration-700"
                                style={{ backgroundImage: `url('/nashville-0.jpeg')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Host Content */}
                        <div className="w-full md:w-7/12">
                            {/* Number and Title stacked vertically */}
                            <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                                <span className="text-4xl sm:text-5xl font-serif italic opacity-20">02</span>
                                <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter leading-tight uppercase">
                                    Meet Your Hosts
                                </h3>
                            </div>
                            <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
                                <p>Hello from the team at Palindrome Projects! We are a
                                    family-owned small business based in Chicago, IL.</p>
                                <p>Our cozy apartment is located in the heart of Nashville,
                                    offering a perfect blend of comfort and convenience.
                                    Whether you're here for work or leisure, we hope you feel
                                    at home and enjoy everything the area has to offer. If you
                                    need anything during your stay, don't hesitate to reach out
                                    to Anu (local to Nashville), and she’ll be happy to help.</p>
                            </div>
                            <div className="mt-10 flex gap-4">
                                <div className="px-6 py-3 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-[var(--border)] text-sm font-bold tracking-widest uppercase">Host: Anu</div>
                                <a
                                    href="tel:2196709511"
                                    className="inline-block px-6 py-3 rounded-2xl border border-[var(--border)] text-sm font-bold tracking-widest uppercase hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
                                >
                                    (219) 670-9511
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 03: ABOUT THE PLACE */}
                <section id="place" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col gap-8 sm:gap-12">

                        {/* Cinematic Top Image */}
                        <div className="w-full aspect-video sm:aspect-[21/9] bg-stone-100 dark:bg-stone-900 rounded-2xl sm:rounded-[2.5rem] overflow-hidden relative group">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                style={{ backgroundImage: `url('/nashville-3.jpeg')` }}
                            />
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
                        </div>

                        {/* Content Row */}
                        <div className="flex flex-col md:flex-row gap-12 sm:gap-16">
                            <div className="w-full md:w-4/12">
                                {/* Title below number */}
                                <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                                    <span className="text-4xl sm:text-5xl font-serif italic opacity-20">03</span>
                                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter leading-tight uppercase">
                                        About <br /> the Place
                                    </h3>
                                </div>
                            </div>
                            <div className="w-full md:w-8/12 space-y-6 sm:space-y-8">
                                <div className="space-y-4 sm:space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed text-base sm:text-lg">
                                    <p>
                                        Enjoy skyline and pool views from the 10th-floor
                                        balcony of this peaceful, centrally located loft-style
                                        apartment. Just half a mile from Broadway, you'll be
                                        close to Nashville's best music, bars, and restaurants.
                                        Inside, you'll have everything you need including a full
                                        kitchen, bathroom, king bed + queen sofa bed,
                                        fireplace, washer/dryer, hair tools, Yamaha guitar, and
                                        complementary coffee & tea.
                                    </p>
                                    <p>
                                        Head out to enjoy the city—or stay in and relax. Either way, you’re taken care of.
                                    </p>
                                    <p>
                                        If you need any thing during your stay, we’re just a message away.
                                    </p>
                                </div>

                                {/* Amenity Pills */}
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {['BEAUTIFUL CITY VIEW', '4 GUESTS • 1 BEDROOM • 1 BATHROOM', 'WALK TO BROADWAY'].map((tag) => (
                                        <span key={tag} className="px-3 sm:px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-900 text-base font-bold tracking-widest uppercase text-[var(--fg)]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION 04: THINGS TO KNOW */}
                <section id="things" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-start">

                        {/* Left Side: Visual Anchor */}
                        <div className="w-full md:w-5/12 aspect-[3/4] bg-stone-100 dark:bg-stone-900 rounded-2xl sm:rounded-[2.5rem] overflow-hidden relative shadow-sm">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-110"
                                style={{ backgroundImage: `url('/nashville-9.jpeg')` }}
                            />
                        </div>

                        {/* Right Side: Content */}
                        <div className="w-full md:w-7/12">
                            {/* Title stacked below number */}
                            <div className="flex flex-col gap-4 mb-8 sm:mb-12">
                                <span className="text-4xl sm:text-5xl font-serif italic opacity-20">04</span>
                                <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter leading-tight uppercase">
                                    Things to Know
                                </h3>
                            </div>

                            <div className="space-y-12 sm:space-y-16">
                                {/* Supplies Block */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-8 bg-stone-300 dark:bg-stone-700" />
                                        <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Supplies</span>
                                    </div>

                                    <div className="grid grid-cols-1 gap-8 border-l border-stone-100 dark:border-stone-800 pl-8">
                                        <div className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg space-y-4">
                                            <p>
                                                Inside the apartment, you&apos;ll find everything you need for a comfortable, relaxing stay.
                                                We&apos;ve stocked the kitchen with essentials like cookware, dishes, and coffee mugs.
                                                We&apos;ve also included helpful extras you might have forgotten—such as toothbrushes, toothpaste, hair tools, and feminine hygiene products.
                                            </p>
                                            <p className="text-base opacity-80 italic">
                                                If you need anything else, several convenience stores are just minutes away. Keep reading for nearest options.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
                                            <div className="space-y-1">
                                                <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)]">Bed & Bath</span>
                                                <p className="text-sm sm:text-base">Extra blankets in bedroom basket. Additional towels, iron, and steamer in the closet.</p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)]">Laundry</span>
                                                <p className="text-sm sm:text-base">Washer/Dryer available with detergent provided. Vacuum located in laundry area.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Garbage Block */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-8 bg-stone-300 dark:bg-stone-700" />
                                        <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Garbage</span>
                                    </div>

                                    <div className="border-l border-stone-100 dark:border-stone-800 pl-8 space-y-4">
                                        <div className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
                                            <p>
                                                Trash chutes are located by the elevators on the <span className="text-[var(--fg)] font-semibold">10th floor</span>.
                                                Extra bags are under the kitchen sink.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-stone-50 dark:bg-stone-900/40 rounded-2xl">
                                            <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)]">Cardboard & Large Items</span>
                                            <p className="text-sm leading-relaxed">
                                                Dispose of boxes on the <span className="font-semibold text-[var(--fg)]">P3 parking level</span>.
                                                Head to the parking garage, turn right, and look for the two large dumpsters.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION 05: CONNECT TO WIFI */}
                <section id="wifi" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-start">

                        {/* Left Side: Stock Image */}
                        <div className="w-full md:w-5/12 aspect-[3/4] bg-stone-100 dark:bg-stone-900 rounded-2xl sm:rounded-[2.5rem] overflow-hidden relative shadow-sm">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                                style={{ backgroundImage: `url('/laptop.jpeg')` }}
                            />
                        </div>

                        {/* Right Side: Credentials */}
                        <div className="w-full md:w-7/12">
                            <div className="flex flex-col gap-4 mb-12 sm:mb-16">
                                <span className="text-4xl sm:text-5xl font-serif italic opacity-20">05</span>
                                <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter leading-tight uppercase">
                                    Connect <br /> to WiFi
                                </h3>
                            </div>

                            <div className="space-y-12">
                                {/* Network Name */}
                                <div className="space-y-2">
                                    <span className="text-base font-bold tracking-[0.3em] uppercase text-[var(--fg)]">Network</span>
                                    <div className="flex items-center gap-4">
                                        <Wifi size={24} className="opacity-20" />
                                        <p className="text-3xl font-bold tracking-tight uppercase">1018</p>
                                    </div>
                                </div>

                                {/* Password with Success State */}
                                <div className="space-y-4">
                                    <span className="text-base font-bold tracking-[0.3em] uppercase text-[var(--fg)]">Password</span>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText("welcomeguest");
                                            setCopied(true);
                                            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
                                        }}
                                        className="group flex flex-col items-start w-full text-left gap-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Lock size={24} className="opacity-20" />
                                            <p className="text-3xl font-bold tracking-tight transition-opacity group-hover:opacity-60">
                                                welcomeguest
                                            </p>
                                        </div>

                                        {/* Animated Success Pill */}
                                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${copied
                                            ? "bg-green-500/10 border-green-500/50 text-green-600 dark:text-green-400"
                                            : "bg-stone-100 dark:bg-stone-900 border-[var(--border)] group-hover:bg-[var(--fg)] group-hover:text-[var(--bg)]"
                                            }`}>
                                            <span className="text-sm font-bold tracking-widest uppercase">
                                                {copied ? "Password Copied!" : "Tap to Copy Password"}
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION 06: LOGISTICS */}
                <section id="logistics" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-start">

                        {/* Left Side: Visual Anchor */}
                        <div className="w-full md:w-5/12 aspect-[3/4] bg-stone-100 dark:bg-stone-900 rounded-2xl sm:rounded-[2.5rem] overflow-hidden relative shadow-sm">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url('/nashville-43.jpeg')` }}
                            />
                        </div>

                        {/* Right Side: Content */}
                        <div className="w-full md:w-7/12">
                            <div className="flex flex-col gap-4 mb-12 sm:mb-16">
                                <span className="text-4xl sm:text-5xl font-serif italic opacity-20">06</span>
                                <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter leading-tight uppercase">
                                    Before Your Stay,<br />Check In, &amp; Check Out
                                </h3>
                            </div>

                            <div className="space-y-20">
                                {/* 1. BEFORE YOUR STAY */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[var(--fg)] text-sm font-bold">1</span>
                                        <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Before Your Stay</span>
                                    </div>
                                    <div className="border-l border-stone-100 dark:border-stone-800 ml-3 pl-8 space-y-6">
                                        <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                                            Please provide us with a <span className="text-[var(--fg)] font-bold">phone number</span> to link to our KeyCafe.
                                            You&apos;ll receive a text with instructions to retrieve your keys upon arrival.
                                        </p>
                                        <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-900/40 border border-[var(--border)]">
                                            <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)]">Parking Request</span>
                                            <p className="text-sm text-stone-600 dark:text-stone-400">
                                                Need a spot? Send us your vehicle&apos;s <span className="font-bold text-[var(--fg)]">Make, Model, Year, and State</span>.
                                                Garage access is $35/night.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. CHECK IN */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[var(--fg)] text-sm font-bold">2</span>
                                        <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Check In</span>
                                    </div>
                                    <div className="border-l border-stone-100 dark:border-stone-800 ml-3 pl-8 space-y-8">
                                        {/* Arrival Cheat Sheet */}
                                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                            <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-stone-100 dark:bg-stone-900 border border-[var(--border)]">
                                                <span className="text-sm font-bold text-stone-500 block uppercase">Parking Spot</span>
                                                <span className="text-lg sm:text-xl font-bold">259 (P4)</span>
                                            </div>
                                            <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-stone-100 dark:bg-stone-900 border border-[var(--border)]">
                                                <span className="text-sm font-bold text-stone-500 block uppercase">Building Code</span>
                                                <span className="text-lg sm:text-xl font-bold">6098#</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                                            <p className="font-bold text-[var(--fg)] uppercase tracking-tight">Check in: 4:00 PM</p>
                                            <p>
                                                When you arrive at Sentral Sobro, you’ll enter the parking garage, open the gate using the building code above.
                                                Park in <span className="font-bold text-[var(--fg)]">Spot 259 on P4</span>.
                                                Enter the building using the code above and take the elevator to <span className="font-bold text-[var(--fg)]">P3</span>.
                                            </p>
                                            <p>
                                                Look for the <span className="font-bold text-[var(--fg)] uppercase">Keycafe Lockers</span> immediately outside the elevator.
                                                Use the code sent to your phone (avoid the web link) to grab your keys.
                                                Your sanctuary is <span className="font-bold text-[var(--fg)]">Unit 1018</span> on the 10th floor.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. CHECK OUT */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[var(--fg)] text-sm font-bold">3</span>
                                        <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Check Out</span>
                                    </div>
                                    <div className="border-l border-stone-100 dark:border-stone-800 ml-3 pl-8 space-y-6">
                                        <p className="text-xl font-bold text-[var(--fg)] uppercase tracking-tight">Check out: 11:00 AM</p>
                                        <div className="text-lg text-stone-600 dark:text-stone-400 space-y-4 leading-relaxed">
                                            <p>
                                                To return the keys, head to <span className="font-bold text-[var(--fg)]">P3</span> and scan the <span className="font-bold text-[var(--fg)] uppercase">Blue Fob</span> on the lockers.
                                                A door will open automatically for drop-off.
                                            </p>
                                            <p className="text-base italic opacity-80 border-t border-stone-100 dark:border-stone-800 pt-4">
                                                Need more time? Let us know in advance and we&apos;ll check availability for a late check-out.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION 07: NOTES & SAFETY */}
                <section id="notes" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-start">

                        {/* Rules Image/Visual */}
                        <div className="w-full md:w-5/12 aspect-[3/4] bg-stone-100 dark:bg-stone-900 rounded-2xl sm:rounded-[2.5rem] overflow-hidden relative shadow-sm">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-110"
                                style={{ backgroundImage: `url('/nashville-34.jpeg')` }}
                            />
                            <div className="absolute inset-0 bg-stone-900/10" />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-7/12">
                            <div className="flex flex-col gap-4 mb-12 sm:mb-16">
                                <span className="text-4xl sm:text-5xl font-serif italic opacity-20">07</span>
                                <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter leading-tight uppercase">
                                    A few notes <br /> for your stay
                                </h3>
                            </div>

                            <div className="space-y-16 sm:space-y-24">
                                {/* SUB-SECTION: HOUSE RULES */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3">
                                        <Home size={20} strokeWidth={1.5} className="opacity-40" />
                                        <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">House Rules</span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-12 pl-8 border-l border-stone-100 dark:border-stone-800">
                                        {[
                                            { id: "01", text: "No smoking or vaping." },
                                            { id: "02", text: "No unregistered guests." },
                                            { id: "03", text: "No pets." },
                                            { id: "04", text: "No excessive noise." },
                                            { id: "05", text: "Notify us of any damage as soon as possible." }
                                        ].map((rule) => (
                                            <div key={rule.id} className="space-y-3">
                                                <span className="text-sm sm:text-sm font-mono font-bold text-stone-400 block">{rule.id}</span>
                                                <p className="text-lg sm:text-xl font-bold tracking-tight leading-tight text-[var(--fg)]">
                                                    {rule.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* SUB-SECTION: YOUR SAFETY */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3">
                                        <Plus size={20} strokeWidth={1.5} className="opacity-40" />
                                        <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Your Safety</span>
                                    </div>

                                    <div className="pl-8 border-l border-stone-100 dark:border-stone-800 space-y-12">
                                        {/* Emergency Callout */}
                                        <p className="text-3xl font-bold tracking-tight">
                                            In case of emergency, <br /> please <a href="tel:911" className="underline underline-offset-8">call 911</a>.
                                        </p>

                                        {/* Emergency Locations (Hospital & Police) */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            {/* Hospital Card */}
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=Ascension+Saint+Thomas+Hospital+Midtown+Emergency"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group p-4 sm:p-6 rounded-xl sm:rounded-[2rem] bg-stone-50 dark:bg-stone-900/40 border border-[var(--border)] hover:border-[var(--fg)] transition-all"
                                            >
                                                <div className="flex justify-between items-start mb-4 sm:mb-6">
                                                    <div className="p-2 rounded-lg bg-red-500/10 text-red-600"><Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5" /></div>
                                                    <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-20 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)] block mb-1">Emergency Room</span>
                                                <p className="text-sm sm:text-base font-bold uppercase leading-tight">Saint Thomas Midtown</p>
                                                <p className="text-sm text-stone-500 mt-2 italic">2000 Church St, Nashville, TN 37203</p>

                                                {/* Added Clickable Phone Number */}
                                                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-stone-200/50 dark:border-stone-700/50">
                                                    <span onClick={(e) => { e.preventDefault(); window.location.href = 'tel:6152845555'; }} className="text-sm font-bold hover:text-red-600 transition-colors cursor-pointer">
                                                        (615) 284-5555
                                                    </span>
                                                </div>
                                            </a>

                                            {/* Police Card */}
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=Midtown+Hills+Police+Precinct+Nashville"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group p-4 sm:p-6 rounded-xl sm:rounded-[2rem] bg-stone-50 dark:bg-stone-900/40 border border-[var(--border)] hover:border-[var(--fg)] transition-all"
                                            >
                                                <div className="flex justify-between items-start mb-4 sm:mb-6">
                                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600"><Shield className="w-4 h-4 sm:w-4.5 sm:h-4.5" /></div>
                                                    <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-20 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)] block mb-1">Police Precinct</span>
                                                <p className="text-sm sm:text-base font-bold uppercase leading-tight">Midtown Hills Precinct</p>
                                                <p className="text-sm text-stone-500 mt-2 italic">1441 12th Ave S, Nashville, TN 37203</p>

                                                {/* Added Clickable Phone Number */}
                                                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-stone-200/50 dark:border-stone-700/50">
                                                    <span onClick={(e) => { e.preventDefault(); window.location.href = 'tel:6158801411'; }} className="text-sm font-bold hover:text-blue-600 transition-colors cursor-pointer">
                                                        (615) 880-1411
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        {/* Building Assistance */}
                                        <div className="space-y-8 pt-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)]">Front Desk / Security</span>
                                                    <a href="tel:6159795013" className="group flex items-center gap-2 text-xl font-bold">
                                                        <Phone size={16} className="opacity-20 group-hover:text-[var(--fg)] group-hover:opacity-100 transition-all" />
                                                        (615) 979-5013
                                                    </a>
                                                </div>
                                                <div className="space-y-3">
                                                    <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)]">After Hours Support</span>
                                                    <a href="tel:6159655637" className="group flex items-center gap-2 text-xl font-bold">
                                                        <Phone size={16} className="opacity-20 group-hover:text-[var(--fg)] group-hover:opacity-100 transition-all" />
                                                        (615) 965-5637
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* HEADS UP: ROVER / PETS */}
                                <div className="p-6 sm:p-10 rounded-xl sm:rounded-[2.5rem] bg-stone-50 dark:bg-stone-900/40 border border-[var(--border)] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                                        <Dog className="w-24 h-24 sm:w-28 sm:h-28" />
                                    </div>
                                    <div className="relative flex flex-col gap-4 sm:gap-6 max-w-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-[var(--fg)] text-[var(--bg)]">
                                                <Dog className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
                                            </div>
                                            <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)]">A note on furry friends</span>
                                        </div>
                                        <p className="text-base sm:text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                                            While pets aren&apos;t allowed in this specific unit, we have you covered.
                                            Anu is a <span className="text-[var(--fg)] font-bold">certified dog sitter on Rover</span>.
                                            If your pup needs a vacation of their own while you&apos;re here, let us know and we&apos;ll check the schedule!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 08: BEFORE YOU GO */}
                <section id="go" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-start">

                        {/* Content Side */}
                        <div className="w-full md:w-7/12">
                            {/* Header with 11AM Reminder */}
                            <div className="flex flex-col gap-4 mb-12 sm:mb-16">
                                <span className="text-4xl sm:text-5xl font-serif italic opacity-20">08</span>
                                <div className="space-y-2">
                                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter leading-tight uppercase">
                                        Departure Checklist
                                    </h3>
                                    <p className="text-lg sm:text-2xl font-medium tracking-tight">
                                        Check out is 11:00 AM.
                                    </p>
                                    <p className="text-sm sm:text-base">
                                        We hope you enjoyed your stay with us!
                                    </p>
                                </div>
                            </div>

                            {/* Checklist Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-12 pl-8 border-l border-stone-100 dark:border-stone-800">
                                {[
                                    {
                                        icon: <Wind size={20} />,
                                        title: "Laundry",
                                        desc: (
                                            <>
                                                Please place all used towels, dishcloths and bedding in the hamper provided (in the bedroom closet), and we will ensure they are laundered.{" "}
                                                <strong>
                                                    Please also load bedding into the washing machine and start the wash cycle.
                                                </strong>{" "}
                                                Detergent pods are located next to the washing machine!
                                            </>
                                        )
                                    },
                                    {
                                        icon: <Lightbulb size={20} />,
                                        title: "Lights",
                                        desc: "Please make sure all lights and electronics are turned off before you leave."
                                    },
                                    {
                                        icon: <Key size={20} />,
                                        title: "Keys",
                                        desc: "Please make sure all doors and windows are closed and locked. Return keys to their original location."
                                    },
                                    {
                                        icon: <Coffee size={20} />,
                                        title: "Dishes",
                                        desc: "Please rinse dishes, load them into the dishwasher and start the cycle before you leave."
                                    },
                                    {
                                        icon: <Trash2 size={20} />,
                                        title: "Perishables & Leftovers",
                                        desc: "Anything left in the fridge, cabinets, or counters will be disposed of."
                                    },
                                    {
                                        icon: <Briefcase size={20} />,
                                        title: "Personal Belongings",
                                        desc: "Please make sure you are taking all of your personal belongings with you."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="space-y-4 group">
                                        <div className="flex items-center gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                                            {item.icon}
                                            <span className="text-base font-bold tracking-[0.2em] uppercase">{item.title}</span>
                                        </div>
                                        <p className="text-base font-medium leading-relaxed text-stone-600 dark:text-stone-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="w-full md:w-5/12 aspect-[3/4] bg-stone-100 dark:bg-stone-900 rounded-[2.5rem] overflow-hidden relative shadow-sm">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                                style={{ backgroundImage: `url('/nashville-19.jpeg')` }}
                            />
                            <div className="absolute inset-0 bg-stone-900/5" />
                        </div>

                    </div>
                </section>
                {/* SECTION 09: ABOUT THE AREA */}
                <section id="area" className="pt-32 pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-16 items-start">

                        {/* Text Content */}
                        <div className="w-full md:w-7/12">
                            {/* Header Stack */}
                            <div className="flex flex-col gap-4 mb-12">
                                <span className="text-5xl font-serif italic opacity-20">09</span>
                                <div className="flex items-center gap-3">
                                    <MapPin size={18} strokeWidth={1.5} className="opacity-40" />
                                    <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Local Perspective</span>
                                </div>
                                <h3 className="text-5xl font-bold tracking-tighter leading-[0.9] uppercase mt-4">
                                    About the Area
                                </h3>
                                <p className="text-2xl font-medium tracking-tight">
                                    Welcome to Nashville!
                                </p>
                            </div>

                            {/* Narrative Paragraphs */}
                            <div className="pl-8 border-l border-stone-100 dark:border-stone-800 space-y-8 max-w-xl">
                                <p className="text-lg font-medium leading-relaxed text-stone-700 dark:text-stone-300">
                                    You’ll be staying in SoBro, one
                                    of Downtown Nashville’s most
                                    vibrant and walkable
                                    neighborhoods. The area is
                                    packed with energy—live
                                    music, rooftop bars, great
                                    restaurants, and iconic spots
                                    like the Ryman Auditorium,
                                    Bridgestone Arena, and the
                                    Country Music Hall of Fame
                                    are all close by. Whether you’re
                                    here for nightlife, sightseeing,
                                    or great food, this location puts
                                    you right in the middle of it.
                                </p>

                                <p className="text-m leading-relaxed text-stone-600 dark:text-stone-400">
                                    We’ve provided some
                                    recommendations in this book,
                                    but let us know if you’d like
                                    more!
                                </p>
                            </div>
                        </div>

                        {/* Skyscraper Image (The "Pretty" Side) */}
                        <div className="w-full md:w-5/12 aspect-[2/3] bg-stone-100 dark:bg-stone-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-[2000ms] hover:scale-110"
                                style={{ backgroundImage: `url('/nashville-city.jpeg')` }}
                            />
                            {/* Subtle Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />

                            {/* Floating Caption */}
                            <div className="absolute bottom-8 left-8">
                                <p className="text-sm font-bold tracking-widest text-white/80 uppercase">The South Central Bell Building</p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* SECTION 10: NEAREST SHOPPING */}
                <section id="shopping" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col gap-12 sm:gap-16">

                        {/* Section Header */}
                        <div className="flex flex-col gap-4">
                            <span className="text-4xl sm:text-5xl font-serif italic opacity-20">10</span>
                            <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter uppercase">Nearest Shopping</h3>
                        </div>

                        {/* Shopping List */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-stretch">

                            {/* Recommendation 1: Grocery */}
                            <div className="flex flex-col h-full space-y-4 sm:space-y-6">
                                <div className="p-3 w-fit rounded-lg sm:rounded-2xl bg-stone-50 dark:bg-stone-900 border border-[var(--border)]">
                                    <ShoppingCart size={18} className="opacity-40" />
                                </div>

                                <div className="flex-grow space-y-3 sm:space-y-4">
                                    <div className="space-y-1">
                                        <h4 className="text-base sm:text-lg font-bold uppercase leading-tight">
                                            Publix Super Market <br /> at Capitol View
                                        </h4>
                                        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                                            1010 Dr. Martin L. King Jr. Blvd <br />
                                            Nashville, TN 37206
                                        </p>
                                    </div>
                                    <a href="tel:6152596072" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--fg)] transition-all underline decoration-[var(--border)] underline-offset-4">
                                        <Phone className="w-3 h-3 opacity-65" />
                                        (615) 259-6072
                                    </a>
                                </div>

                                <div className="pt-3 sm:pt-4 border-t border-[var(--border)] space-y-3 sm:space-y-4">
                                    <div className="space-y-2 min-h-[80px] sm:min-h-[110px]">
                                        <p className="text-base font-bold uppercase tracking-widest text-[var(--fg)]">Hours</p>
                                        <div className="text-sm space-y-1">
                                            <p className="font-medium uppercase">Monday to Sunday</p>
                                            <p className="text-stone-500 italic text-sm">7:00 AM – 10:00 PM</p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Publix+Super+Market+at+Capitol+View"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-widest text-[var(--fg)] hover:text-[var(--fg)] transition-colors"
                                    >
                                        <MapPin className="w-3 h-3" /> Open in Maps
                                    </a>
                                </div>
                            </div>

                            {/* Recommendation 2: Essentials / CVS */}
                            <div className="flex flex-col h-full space-y-6">
                                <div className="p-3 w-fit rounded-2xl bg-stone-50 dark:bg-stone-900 border border-[var(--border)]">
                                    <ShoppingBag size={20} className="opacity-40" />
                                </div>

                                <div className="flex-grow space-y-4">
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold uppercase leading-tight">
                                            CVS Pharmacy
                                        </h4>
                                        <p className="text-sm text-stone-600 leading-relaxed">
                                            426 21st Ave S <br />
                                            Nashville, TN 37203
                                        </p>
                                    </div>
                                    <a href="tel:6153212590" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--fg)] transition-all underline decoration-[var(--border)] underline-offset-4">
                                        <Phone size={12} className="opacity-40" />
                                        (615) 321-2590
                                    </a>
                                </div>

                                <div className="pt-4 border-t border-[var(--border)] space-y-4">
                                    <div className="space-y-2 min-h-[110px]">
                                        <p className="text-base font-bold uppercase tracking-widest text-[var(--fg)]">Hours</p>
                                        <div className="text-sm space-y-1">
                                            <p className="font-medium uppercase">Monday to Sunday</p>
                                            <p className="text-stone-500 italic text-sm">7:00 AM – 11:00 PM</p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=CVS+Pharmacy+426+21st+Ave+S+Nashville"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-widest text-[var(--fg)] hover:text-[var(--fg)] transition-colors"
                                    >
                                        <MapPin size={12} /> Open in Maps
                                    </a>
                                </div>
                            </div>

                            {/* Recommendation 3: Spirits / Frugal MacDoogal */}
                            <div className="flex flex-col h-full space-y-6">
                                <div className="p-3 w-fit rounded-2xl bg-stone-50 dark:bg-stone-900 border border-[var(--border)]">
                                    <Wine size={20} className="opacity-40" />
                                </div>

                                <div className="flex-grow space-y-4">
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold uppercase leading-tight">
                                            Frugal MacDoogal
                                        </h4>
                                        <p className="text-sm text-stone-600 leading-relaxed">
                                            701 Division St <br />
                                            Nashville, TN 37203
                                        </p>
                                    </div>
                                    <a href="tel:6152423863" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--fg)] transition-all underline decoration-[var(--border)] underline-offset-4">
                                        <Phone size={12} className="opacity-40" />
                                        (615) 242-3863
                                    </a>
                                </div>

                                <div className="pt-4 border-t border-[var(--border)] space-y-4">
                                    <div className="space-y-2 min-h-[110px]">
                                        <p className="text-base font-bold uppercase tracking-widest text-[var(--fg)]">Hours</p>
                                        <div className="text-sm space-y-2">
                                            <div className="space-y-0.5">
                                                <p className="font-medium uppercase">Monday to Thursday</p>
                                                <p className="text-stone-500 italic text-sm">9:00 AM – 9:00 PM</p>
                                            </div>
                                            <div className="space-y-0.5">
                                                <p className="font-medium uppercase">Friday to Saturday</p>
                                                <p className="text-stone-500 italic text-sm">9:00 AM – 10:00 PM</p>
                                            </div>
                                            <div className="space-y-0.5">
                                                <p className="font-medium uppercase">Sunday</p>
                                                <p className="text-stone-500 italic text-sm">10:00 AM – 6:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Frugal+MacDoogal+Nashville"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-widest text-[var(--fg)] hover:text-[var(--fg)] transition-colors"
                                    >
                                        <MapPin size={12} /> Open in Maps
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* SECTION 11: LOCAL RECOMMENDATIONS */}
                <section id="local" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col gap-12 sm:gap-16">

                        {/* Section Header */}
                        <div className="flex flex-col gap-4">
                            <span className="text-4xl sm:text-5xl font-serif italic opacity-20">11</span>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-65" strokeWidth={1.5} />
                                <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Palindrome's List</span>
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter uppercase">Local Recommendations</h3>
                        </div>

                        {/* Recommendations Grid - Aligned */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-16">
                            {[
                                {
                                    name: "Broadway",
                                    desc: "It wouldn’t be Nashville without Broadway! See what all the hype is about on this lively strip of clubs and bars.",
                                    address: "Intersection of 5th + Broadway",
                                    icon: <Music size={22} />,
                                    link: "https://www.google.com/maps/search/?api=1&query=Broadway+Nashville"
                                },
                                {
                                    name: "Little Hats Market",
                                    desc: "Grab a bite at this cozy dining spot with indoor and outdoor seating! Wonderful Italian food and plenty to see in the Germantown area.",
                                    address: "1120 4th Ave N #101",
                                    icon: <Store size={22} />,
                                    link: "https://www.google.com/maps/search/?api=1&query=Little+Hats+Market+Nashville"
                                },
                                {
                                    name: "Baam Burger",
                                    desc: "Grab a late night bite to eat just minutes from Broadway! The Baam Burger is a classic, and one of the best burgers we’ve had :)",
                                    address: "223 4th Ave N",
                                    icon: <Utensils size={22} />,
                                    link: "https://www.google.com/maps/search/?api=1&query=Baam+Burger+Nashville"
                                },
                                {
                                    name: "Love Circle",
                                    desc: "Enjoy the Nashville skyline and sunset at this beautiful hilltop park. The perfect quiet escape from the city heat.",
                                    address: "Love Park",
                                    icon: <Mountain size={22} />,
                                    link: "https://www.google.com/maps/search/?api=1&query=Love+Circle+Nashville"
                                }
                            ].map((place, idx) => (
                                <div key={idx} className="flex flex-col border-l border-[var(--border)] pl-8 py-2">
                                    {/* Header with Icon */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="opacity-30">
                                            {place.icon}
                                        </div>
                                        <h4 className="text-2xl font-bold tracking-tight uppercase">{place.name}</h4>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 font-medium mb-6">
                                        {place.desc}
                                    </p>

                                    {/* Address & Action */}
                                    <div className="mt-auto space-y-2">
                                        <p className="text-base font-bold uppercase tracking-widest text-[var(--fg)]">Location</p>
                                        <a
                                            href={place.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-col gap-1 w-fit"
                                        >
                                            <span className="text-sm font-bold underline decoration-[var(--border)] underline-offset-4 group-hover:text-[var(--fg)] transition-colors">
                                                {place.address}
                                            </span>
                                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500 group-hover:text-[var(--fg)] transition-colors flex items-center gap-1 mt-1">
                                                <MapPin size={10} /> Open in Maps
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cursive Sign-off */}
                        <div className="pt-12 border-t border-[var(--border)] inline-block px-12 text-center">
                            <p
                                className="text-4xl opacity-60 lowercase leading-none"
                                style={{ fontFamily: "'Dancing Script', 'Great Vibes', 'Snell Roundhand', cursive" }}
                            >
                                make beautiful memories
                            </p>
                        </div>
                    </div>
                </section>
                {/* SECTION 12: A LITTLE THANK YOU */}
                <section id="perks" className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-t border-[var(--border)] scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-start">

                        {/* Left Side: Header */}
                        <div className="w-full md:w-5/12">
                            <div className="flex flex-col gap-4">
                                <span className="text-5xl font-serif italic opacity-20">12</span>
                                <div className="flex items-center gap-3">
                                    <Sparkles size={18} strokeWidth={1.5} className="opacity-40" />
                                    <span className="text-base font-bold tracking-[0.2em] uppercase text-[var(--fg)]">Guest Exclusive</span>
                                </div>
                                <h3 className="text-4xl font-bold tracking-tighter uppercase leading-[0.9]">
                                    A Little <br /> Thank You
                                </h3>
                                <p className="text-base font-bold tracking-[0.3em] uppercase text-[var(--fg)] mt-2">
                                    For being our guests
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Offer & Hours */}
                        <div className="w-full md:w-7/12 space-y-12">
                            <div className="pl-8 border-l border-[var(--border)] space-y-8">
                                <p className="text-lg font-medium leading-relaxed text-stone-600 dark:text-stone-400">
                                    To show our appreciation, please enjoy <span className="text-[var(--fg)] font-bold underline decoration-[var(--border)] underline-offset-4">10% off</span> at
                                    Tipsy Scoop and Kosho! Both are conveniently connected to our building.
                                </p>

                                {/* Voucher Callout */}
                                <div className="p-6 bg-stone-50 dark:bg-stone-900/40 rounded-2xl border border-[var(--border)]">
                                    <span className="text-base font-bold tracking-widest uppercase text-[var(--fg)]">Voucher Required</span>
                                    <p className="text-sm leading-relaxed">
                                        Please make sure you collect a voucher from the <span className="font-bold">Front Desk</span> before heading over to Kosho to redeem your discount.
                                    </p>
                                </div>

                                {/* Hours Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">

                                    {/* Tipsy Scoop */}
                                    <div className="space-y-4">
                                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/tipsy.jpeg')` }} />
                                        </div>
                                        <div className="flex items-center gap-2 text-stone-600">
                                            <Store size={16} />
                                            <span className="text-base font-bold tracking-widest uppercase">Tipsy Scoop</span>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-base font-bold uppercase tracking-widest text-[var(--fg)]">Hours</p>
                                            <p className="text-sm font-medium uppercase">Thursday to Sunday</p>
                                            <p className="text-stone-500 italic text-sm">1:00 PM – 9:00 PM</p>
                                        </div>
                                    </div>

                                    {/* Kosho */}
                                    <div className="space-y-4">
                                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/kosho.jpeg')` }} />
                                        </div>
                                        <div className="flex items-center gap-2 text-stone-600">
                                            <Utensils size={16} />
                                            <span className="text-base font-bold tracking-widest uppercase">Kosho</span>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-base font-bold uppercase tracking-widest text-[var(--fg)]">Hours</p>
                                            <div className="space-y-2">
                                                <div className="space-y-0.5">
                                                    <p className="text-sm font-medium uppercase">Sunday to Thursday</p>
                                                    <p className="text-stone-500 italic text-sm">5:00 PM – 10:00 PM</p>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-sm font-medium uppercase">Friday to Saturday</p>
                                                    <p className="text-stone-500 italic text-sm">5:00 PM – 11:00 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FINAL FOOTER / THANK YOU */}
                <footer className="mt-24 sm:mt-32 border-t border-[var(--border)]">
                    {/* Cinematic Image Container */}
                    <div className="relative w-full h-[40vh] sm:h-[60vh] overflow-hidden group">
                        <img
                            src="/nashville-16.jpeg"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Dark Overlay for Typography Legibility */}
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                            <span className="text-white/60 text-sm font-bold tracking-[0.4em] uppercase mb-2 sm:mb-4">
                                Nashville, Tennessee
                            </span>
                            <h2 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] uppercase">
                                Thank you <br />
                                <span className="opacity-80">for staying</span> <br />
                                with us
                            </h2>
                        </div>
                    </div>

                    {/* Final Message & Sign-off */}
                    <div className="max-w-2xl mx-auto py-8 sm:py-12 px-6 sm:px-8 text-center space-y-8 sm:space-y-12">
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-base sm:text-lg font-medium leading-relaxed opacity-80">
                                Thank you for choosing to stay with Palindrome
                                Projects, we hope you had an amazing time and that
                                we will see you again very soon!
                            </p>
                        </div>

                        {/* The Cursive Signature - No extra space, perfectly centered */}
                        <div className="pt opacity-70 text-sm font-bold uppercase tracking-[0.3em] leading-loose">
                            Sentral Sobro
                            <br />
                            <Link href="https://maps.app.goo.gl/Ds34kPRXzyV1Jf8P8" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-current hover:opacity-100 transition-opacity">
                                516 Lea Ave, Unit 1018, Nashville, TN 37203
                            </Link>
                        </div>
                    </div>
                </footer>
            </div >
        </main >
    );
}