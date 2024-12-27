import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css"

const getPostBySlug = async (slug) => {
    const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);

    if (!response.ok) {
        logger.error(`Request failed with status ${response.status}`);
    
        return {};
    }
    logger.info("Requisição de post feita com sucesso!");

    const data = await response.json();

    if(data.length == 0) {
        return {};
    }

    const post = data[0];

    const processedContent = await remark()
        .use(html)
        .process(post.markdown);

    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post;
}

export const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug);

  return (
    <div>
        <CardPost post={post} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
    </div>
  )
}

export default PagePost
