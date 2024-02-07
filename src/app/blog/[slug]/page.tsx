import Image from "next/image";
import styles from "./singlePost.module.css";

//singlepostpage
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            width={50}
            height={50}
            src="/post.png"
            alt=""
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry </span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024 </span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nisi
          cupiditate soluta itaque debitis! Suscipit ipsum atque temporibus
          quibusdam! Tempora quos blanditiis minima consequatur alias optio
          ipsam aliquam nesciunt vero.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
