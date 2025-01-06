"use client";
import Image from 'next/image';
import '../styles/Article.css';

const Article: React.FC = () => {
    return (
        <div className='Article-container'>
            <Image
                src="/img/Article/article_1.png" 
                alt="Article Image" 
                width={700} 
                height={300} 
                className="article-image"
            />
        </div>
    );
}

export default Article;
