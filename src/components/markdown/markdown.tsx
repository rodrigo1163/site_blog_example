import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export const MarkDown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-4 mt-8 text-heading-msm md:text-heading-lg">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="mb-6 leading-relaxed text-gray-200">{children}</p>
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-blue-200 hover:underline">
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-gray-100">{children}</strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
