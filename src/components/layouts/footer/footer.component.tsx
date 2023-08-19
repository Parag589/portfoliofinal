import { BsGithub } from 'react-icons/bs';

import styles from './footer.module.scss';

const Footer = () =>
{
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <span>©2020 - { new Date().getFullYear() } Parag Agarwal</span>
                {/* <a
                    href='https://github.com/IntelligentQuantum/IntelligentQuantum.github.io'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub />
                    Source Code
                </a> */}
            </div>
        </footer>
    );
};

export default Footer;
