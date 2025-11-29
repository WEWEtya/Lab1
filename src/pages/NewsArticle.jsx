import { useParams } from "react-router-dom";
import { newsData } from "../data/newsData";
import "./NewsArticle.css";



export default function NewsArticle() {
  const { id } = useParams();
  const article = newsData[id];

  if (!article) {
    return <h2 style={{ textAlign: "center", padding: "60px" }}>Article not found.</h2>;
  }

  return (
    <div className="news-article-page">
      {/* ---------- HERO ---------- */}
      <div 
        className="article-hero"
      />

      {/* ---------- CONTENT ---------- */}
      <div className="article-content-wrapper">
        <h1 className="article-title">{article.title}</h1>

        <div className="article-meta">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.author}</span>
        </div>

        <div className="article-body">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
