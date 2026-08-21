import styles from './EmptyPage.module.scss';

interface IEmptyPageProps {
    className?: string;
}

const EmptyPage = ({className}: IEmptyPageProps) => {
    return (
        <p className={`${styles.container} ${className ?? ''}`}>
            Мы уже работаем над этой страницей. Еще немного, и всё завертится!
        </p>
    );
};

export {EmptyPage};
