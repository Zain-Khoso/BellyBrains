// Utils
import { ArrowDownCircle } from "react-feather";

// Assets
import styles from "./styles/hero.module.css";
import favicon from "../../assets/favicon.png";

// Components
import Button from "../Global/Button";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <img src={favicon} alt="Company Logo" />
            </div>

            <h1 className={styles.title}>Belly Brains</h1>

            <p className={styles.slogon}>
                Savor the Brew, Delight in the Chew!
            </p>

            <Button text="Explore" svg={<ArrowDownCircle />} />
        </section>
    );
}