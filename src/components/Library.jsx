import React from 'react';

const BookSection = ({ category, books }) => (
    <div className="mb-12">
        <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">{category}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {books.map((book, index) => (
                <div key={index}>
                    <h5 className="font-medium text-slate-900">{book.title}</h5>
                    <p className="text-sm text-slate-500 font-light">{book.author}</p>
                </div>
            ))}
        </div>
    </div>
);

const Library = () => {
    return (
        <section id="library" className="py-12">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Library</h3>

            <div className="max-w-4xl">
                <BookSection
                    category="Dev"
                    books={[
                        { title: "Linux Kernel Development", author: "Robert Love" },
                        { title: "Hacking: The Art of Exploitation", author: "Jon Erickson" },
                        { title: "Linux in a Nutshell", author: "Ellen Siever, Stephen Figgins, et al." },
                        { title: "The Art of Electronics", author: "Paul Horowitz and Winfield Hill" },
                        { title: "Nmap Cookbook", author: "Nicholas Marsh" },
                    ]}
                />
                <BookSection
                    category="Casual Reads"
                    books={[
                        { title: "Hooked: How to Build Habit-Forming Products", author: "Nir Eyal" },
                        { title: "The Lean Startup", author: "Eric Ries" },
                        { title: "Zero to One", author: "Peter Thiel" },
                        { title: "Deep Work", author: "Cal Newport" },
                        { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson" },
                    ]}
                />
                <p className="text-xs text-slate-400 italic mt-8">*and many more, these are just one of my best reads</p>
            </div>
        </section>
    );
};

export default Library;
