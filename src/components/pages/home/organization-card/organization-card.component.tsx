import Image from 'next/image';

import Tooltip from '../../../ui/tooltip/tooltip.component';

import styles from './organization-card.module.scss';

const OrganizationCard = ({ login, avatarUrl }: any) =>
{
    return (
        <Tooltip content={login}>
            <a
                className={styles.organization}
                href={`${ login }`}
                target='_blank'
                rel="noreferrer"
            >
                <Image
                    src={avatarUrl}
                    alt={`Parag ${ login }`}
                    width={120}
                    height={120}
                />
            </a>
        </Tooltip>
    );
};

export default OrganizationCard;
