import { FC } from 'react';
import dynamic from 'next/dynamic';
import { ModerationBadge } from '../ChatUserBadge/ModerationBadge';

import styles from './ChatPartMessage.module.scss';

// Lazy loaded components

const TeamOutlined = dynamic(() => import('@ant-design/icons/TeamOutlined'), {
  ssr: false,
});

export type ChatPartMessageProps = {
  isAuthorModerator: boolean;
  userColor: number;
  displayName: string;
};

export const ChatPartMessage: FC<ChatPartMessageProps> = ({
  isAuthorModerator,
  userColor,
  displayName,
}) => {
  const color = `var(--theme-color-users-${userColor})`;

  return (
    <div className={styles.root}>
      <span style={{ color }}>
        <span className={styles.icon}>
          <TeamOutlined />
        </span>
        <span className={styles.user}>{displayName}</span>
        {isAuthorModerator && (
          <span className={styles.moderatorBadge}>
            <ModerationBadge userColor={userColor} />
          </span>
        )}
      </span>
      left the chat.
    </div>
  );
};
