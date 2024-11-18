import { Separator } from '@radix-ui/react-separator';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { BookMarked } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui';
//모듈은 사용할 이름을 정해주어야함
//같은 컴포넌트를 모듈화하지않으면 css중첩이 일어남

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles[`header__logobox`]}>
        <Link to={'/bookmark'}>
          <img
            src="src/assets/logo.svg"
            className={styles.header__logobox__logo}
          />
        </Link>
      </div>
      <div className={styles.header__userbox}>
        <Button variant="secondary">
          <BookMarked />
          북마크
        </Button>
        <Separator orientation="vertical" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
          <small className="text-sm font-semibold leading-none">
            이민아
          </small>
          <small className="text-sm font-semibold leading-none">
            myemail@email.com
          </small>
        </div>
      </div>
    </header>
  );
}

export { Header };
