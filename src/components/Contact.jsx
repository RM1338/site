import { Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '../data/profile';
import { renderInline } from '../lib/richText';

const Contact = () => {
    const { blurb, email, linkedin, github } = profile.contact;

    return (
        <section id="contact" className="py-12">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Get In Touch</h3>

            <div>
                <p className="text-2xl font-light text-slate-800 mb-8">
                    {renderInline(blurb, { linkClass: 'underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-all' })}.
                </p>

                <div className="flex gap-6">
                    <a href={`mailto:${email}`} className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                        <Mail size={24} />
                    </a>
                    <a href={linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                        <Linkedin size={24} />
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                        <Github size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
