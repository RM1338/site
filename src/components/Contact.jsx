import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-12">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Get In Touch</h3>

            <div>
                <p className="text-2xl font-light text-slate-800 mb-8">
                    Connect with me on <a href="https://linkedin.com/in/ronelm" target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-all">LinkedIn</a> or
                    shoot an <a href="mailto:rma80070@gmail.com" className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-all">email</a>.
                </p>

                <div className="flex gap-6">
                    <a href="mailto:rma80070@gmail.com" className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                        <Mail size={24} />
                    </a>
                    <a href="https://linkedin.com/in/ronelm" target="_blank" rel="noreferrer" className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/RM1338" target="_blank" rel="noreferrer" className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                        <Github size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
