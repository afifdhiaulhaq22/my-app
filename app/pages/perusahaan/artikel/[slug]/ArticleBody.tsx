
import type { ReactNode } from "react";

type RichNode = {
  type?: string;
  text?: string;
  format?: number | string;
  tag?: string;
  listType?: string;
  url?: string;
  fields?: {
    url?: string;
    newTab?: boolean;
  };
  children?: RichNode[];
  root?: {
    children?: RichNode[];
  };
  value?:
    | {
        url?: string;
        alt?: string;
        filename?: string;
      }
    | string
    | number;
};

type ArticleBodyProps = {
  content: unknown;
};

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"
).replace(/\/+$/, "");

function getChildren(node: RichNode): ReactNode[] {
  const children: RichNode[] = node.children ?? [];

  return children.map((child: RichNode, index: number) => (
    <RichNodeView key={index} node={child} />
  ));
}

function resolveImageUrl(value: RichNode["value"]): string {
  if (!value || typeof value !== "object" || !value.url) {
    return "";
  }

  if (/^https?:\/\//i.test(value.url)) {
    return value.url;
  }

  return `${PAYLOAD_URL}${
    value.url.startsWith("/") ? "" : "/"
  }${value.url}`;
}

function RichNodeView({ node }: { node: RichNode }) {
  const children = getChildren(node);

  if (node.type === "text") {
    let text: ReactNode = node.text ?? "";

    const format = typeof node.format === "number" ? node.format : 0;

    if (format & 16) {
      text = (
        <code className="rounded bg-surface-container px-1.5 py-0.5 text-[0.9em]">
          {text}
        </code>
      );
    }

    if (format & 8) text = <u>{text}</u>;
    if (format & 4) text = <s>{text}</s>;
    if (format & 2) text = <em>{text}</em>;
    if (format & 1) text = <strong>{text}</strong>;

    return <>{text}</>;
  }

  switch (node.type) {
    case "root":
      return <>{children}</>;

    case "paragraph":
      return (
        <p className="mb-5 text-base leading-8 text-on-surface-variant">
          {children}
        </p>
      );

    case "heading": {
      const headingClasses =
        "mb-4 mt-10 font-bold leading-snug tracking-tight text-primary";

      if (node.tag === "h1" || node.tag === "h2") {
        return (
          <h2
            className={`${headingClasses} ${
              node.tag === "h1" ? "text-3xl" : "text-2xl"
            }`}
          >
            {children}
          </h2>
        );
      }

      if (
        node.tag === "h4" ||
        node.tag === "h5" ||
        node.tag === "h6"
      ) {
        return (
          <h4 className={`${headingClasses} text-lg`}>
            {children}
          </h4>
        );
      }

      return (
        <h3 className={`${headingClasses} text-xl`}>
          {children}
        </h3>
      );
    }

    case "list":
      return node.listType === "number" ? (
        <ol className="mb-6 list-decimal space-y-2 pl-6 leading-7 text-on-surface-variant">
          {children}
        </ol>
      ) : (
        <ul className="mb-6 list-disc space-y-2 pl-6 leading-7 text-on-surface-variant">
          {children}
        </ul>
      );

    case "listitem":
      return <li className="pl-1">{children}</li>;

    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-secondary bg-white px-6 py-4 text-lg italic leading-8 text-primary">
          {children}
        </blockquote>
      );

    case "link":
    case "autolink": {
      const href = node.fields?.url ?? node.url ?? "#";
      const newTab = node.fields?.newTab ?? false;

      return (
        <a
          href={href}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-4 hover:text-primary"
        >
          {children}
        </a>
      );
    }

    case "linebreak":
      return <br />;

    case "upload": {
      const imageUrl = resolveImageUrl(node.value);

      if (!imageUrl) return null;

      const alt =
        node.value && typeof node.value === "object"
          ? node.value.alt ?? ""
          : "";

      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={alt}
            loading="lazy"
            className="w-full rounded-xl object-cover"
          />

          {alt && (
            <figcaption className="mt-3 text-center text-sm text-on-surface-variant">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      return <>{children}</>;
  }
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  if (!content || typeof content !== "object") {
    return (
      <p className="text-on-surface-variant">
        Isi artikel belum tersedia.
      </p>
    );
  }

  const data = content as RichNode;

  const nodes: RichNode[] =
    data.root?.children ?? data.children ?? [];

  if (nodes.length === 0) {
    return (
      <p className="text-on-surface-variant">
        Isi artikel belum tersedia.
      </p>
    );
  }

  return (
    <div className="article-content min-w-0">
      {nodes.map((node: RichNode, index: number) => (
        <RichNodeView key={index} node={node} />
      ))}
    </div>
  );
}
