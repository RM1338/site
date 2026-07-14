import React from 'react';
import { profile } from '../data/profile';

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
                <BookSection category="Dev" books={profile.library.dev} />
                <BookSection category="Casual Reads" books={profile.library.casual} />
                <p className="text-xs text-slate-400 italic mt-8">{profile.library.note}</p>
            </div>
        </section>
    );
};

export default Library;
