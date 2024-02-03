import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

interface Props {
  post: any;
}

const PostCard: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.png" alt="" fill className={styles.img} />
        </div>

        <span className={styles.date}>
          {/* {post.createdAt?.toString().slice(4, 16)} */}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Title</p>
        {/* <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link> */}
      </div>
    </div>
  );
};

export default PostCard;
