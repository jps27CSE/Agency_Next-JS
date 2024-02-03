import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <PostCard />
      </div>
      <div className={styles.posts}>
        <PostCard />
      </div>
      <div className={styles.posts}>
        <PostCard />
      </div>
      <div className={styles.posts}>
        <PostCard />
      </div>
    </div>
  );
};

export default Blog;
