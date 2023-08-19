import { Fragment, useRef } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation } from 'swiper';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import useTyped from '@/hooks/useTyped';
import Tooltip from '@/components/ui/tooltip/tooltip.component';

import home from '@/data/home.data.json';

import RepositoryCard from '@/components/pages/home/repository-card/repository-card.component';
import OrganizationCard from '@/components/pages/home/organization-card/organization-card.component';
import ServiceCard from '@/components/pages/home/service-card/service-card.component';

import 'swiper/css';
import styles from '@/styles/home.module.scss';

const Home: NextPage = (props: any) =>
{
    const { t } = useTranslation();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const typed = useTyped([
        t('home:typed.0.desktop'),
        t('home:typed.1.web'),
        t('home:typed.2.restfull'),
        t('home:typed.3.games'),
        t('home:typed.4.cyber'),
        t('home:typed.5.languages'),
        t('home:typed.6.frontend'),
        t('home:typed.7.backend'),
        t('home:typed.8.cross'),
    ]);

    return (
        <Fragment>
            <Head>
                <title>Parag Agarwal &mdash; Full-Stack Developer</title>
            </Head>
            <section className={styles.home}>
                <header className={styles.homeHeader}>
                    <div className={styles.homeHeaderTop} />
                    <div className={styles.homeHeaderContent}>
                        <h1 className={styles.homeHeaderContentHeading}>{t('home:headers.0.heading')}</h1>

                        <div className={styles.homeHeaderContentDescription}>
                            <div>&lt;<i>code</i>&gt;</div>
                            <span>{ typed }</span>
                            <div>&lt;/<i>code</i>&gt;</div>
                        </div>
                    </div>
                    <div className={styles.homeHeaderLogs}>
                        <div className={styles.homeHeaderLogsBox}>
                            <span className={styles.homeHeaderLogsBoxNumber}>5+</span>
                            <p className={styles.homeHeaderLogsBoxParagraph}>{t('home:headers.1.customers')}</p>
                        </div>
                        <div className={styles.homeHeaderLogsBox}>
                            <span className={styles.homeHeaderLogsBoxNumber}>10+</span>
                            <p className={styles.homeHeaderLogsBoxParagraph}>{t('home:headers.2.projects')}</p>
                        </div>
                        <div className={styles.homeHeaderLogsBox}>
                            <span className={styles.homeHeaderLogsBoxNumber}>2</span>
                            <p className={styles.homeHeaderLogsBoxParagraph}>{t('home:headers.3.experience')}</p>
                        </div>
                        <div className={styles.homeHeaderLogsBox}>
                            <span className={styles.homeHeaderLogsBoxNumber}>11+</span>
                            <p className={styles.homeHeaderLogsBoxParagraph}>{t('home:headers.4.honors')}</p>
                        </div>
                    </div>
                </header>
                <h4 className={styles.homeHeadingSecondary}>{t('home:about.0.heading')}</h4>
                <div className={styles.homeAbout}>
                    <h2 className={styles.homeAboutParagraph}>{t('home:about.1.paragraph')}</h2>

                    <ul className={styles.homeAboutFAT}>
                        <li className={styles.homeAboutFATItem}>
                            <h6>{t('home:about.2.fat')}</h6>
                        </li>
                        <li className={styles.homeAboutFATItem}>
                            <h5>Front-End:</h5>

                            <ul className={styles.homeAboutFATItemListLogo}>
                                {
                                    home.fats.frontend.map(front =>
                                    {
                                        return (
                                            <Tooltip key={front.id} content={front.name}>
                                                <li key={front.id} className={styles.homeAboutFATItemListLogoItem}>
                                                    <Image
                                                        src={front.src}
                                                        alt={front.alt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                </li>
                                            </Tooltip>
                                        );
                                    })
                                }
                            </ul>
                        </li>
                        <li className={styles.homeAboutFATItem}>
                            <h5>Back-End:</h5>
                            <ul className={styles.homeAboutFATItemListLogo}>
                                {
                                    home.fats.backend.map(back =>
                                    {
                                        return (
                                            <Tooltip key={back.id} content={back.name}>
                                                <li key={back.id} className={styles.homeAboutFATItemListLogoItem}>
                                                    <Image
                                                        src={back.src}
                                                        alt={back.alt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                </li>
                                            </Tooltip>
                                        );
                                    })
                                }
                            </ul>
                        </li>
                        <li className={styles.homeAboutFATItem}>
                            <h5>Database:</h5>

                            <ul className={styles.homeAboutFATItemListLogo}>
                                {
                                    home.fats.crossPlatforms.map(cross =>
                                    {
                                        return (
                                            <Tooltip key={cross.id} content={cross.name}>
                                                <li key={cross.id} className={styles.homeAboutFATItemListLogoItem}>
                                                    <Image
                                                        src={cross.src}
                                                        alt={cross.alt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                </li>
                                            </Tooltip>
                                        );
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
                <h4 className={styles.homeHeadingPrimary}>{t('home:services.6.heading')}</h4>
                <div className={styles.homeServices}>
                    {
                        home.services.map(service =>
                        {
                            return (
                                <ServiceCard
                                    key={service.id}
                                    title={t(service.title)}
                                    description={t(service.description)}
                                />
                            );
                        })
                    }
                </div>

                <div className={styles.homeOrganizations}>
                </div>
            </section>
        </Fragment>
    );
};


export default Home;
