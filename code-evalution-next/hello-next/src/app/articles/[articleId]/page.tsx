import Link from "next/link";
import React from "react";

const ArticleDetails = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News article id</h1>
      <p>Reading in language {lang}</p>
      <div>
        <Link href={`"articles/${articleId}?lang=en`}>English</Link>
        <Link href={`"articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`"articles/${articleId}?lang=fr`}>Freanch</Link>
      </div>
    </div>
  );
};

export default ArticleDetails;
