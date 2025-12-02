import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div
      className="
        prose prose-slate max-w-none mx-auto
        prose-h1:text-3xl prose-h1:font-semibold
        prose-h2:text-2xl prose-h2:font-semibold
        prose-h3:text-xl prose-h3:font-medium
      "
       
    >
     <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
