// Renders a lightweight markdown subset as React nodes:
//   [label](url)  ->  <a>
//   **bold**      ->  <strong>
// Used by normal-mode components so content authored once in src/data/profile.js
// becomes real links/bold. The agent view prints the same raw strings verbatim,
// which is why the markdown markers double as its terminal aesthetic.
export function renderInline(text, { linkClass = '' } = {}) {
    const nodes = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    let last = 0;
    let key = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > last) {
            nodes.push(text.slice(last, match.index));
        }
        if (match[1] !== undefined) {
            const href = match[2];
            const external = /^https?:\/\//.test(href);
            nodes.push(
                <a
                    key={key++}
                    href={href}
                    className={linkClass}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                    {match[1]}
                </a>
            );
        } else if (match[3] !== undefined) {
            nodes.push(<strong key={key++}>{match[3]}</strong>);
        }
        last = regex.lastIndex;
    }

    if (last < text.length) {
        nodes.push(text.slice(last));
    }

    return nodes;
}
