import React, { useState } from "react";

import styles from "../styles/CusFlipHover.less";

const CusFlip = (props) => {
  const [flipImg, setFlipImg] = useState(false);

  return (
    <div>
      <div className={styles.transformCard}>
        <div className={styles.scene}>
          <div className={`${styles.card} ${flipImg ? styles.card_flip : ""}`}>
            <div className={`${styles.card__face} ${styles.card__face__front}`}>
              <img
                alt="net"
                src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"
              />
            </div>
            <div className={`${styles.card__face} ${styles.card__face__back}`}>
              <img
                alt="net"
                src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={`${styles.card__face} ${styles.card__face__front}`}>
              <img
                alt="net"
                src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg"
              />
            </div>
            <div className={`${styles.card__face} ${styles.card__face__back}`}>
              <img
                alt="net"
                src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={`${styles.card__face} ${styles.card__face__front}`}>
              <img
                alt="net"
                src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
              />
            </div>
            <div className={`${styles.card__face} ${styles.card__face__back}`}>
              <img
                alt="net"
                src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <figure class="imghvr-flip-vert">
        <img
          width="200px"
          height="200px"
          alt="this fade"
          src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"
        />
        <figcaption>Hover Content</figcaption>
      </figure>
    </div>
  );
};

export default CusFlip;
