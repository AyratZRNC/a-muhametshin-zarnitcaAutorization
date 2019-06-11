import React from "react";
import Card from "../common/Card";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Wrapper = styled.div`
  position: relative;
  margin: 50px auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class News extends React.Component {
  state = {};
  componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0499d05f37c44e139486bc9734ad125b";
    fetch(url)
      .then(responce => responce.json())
      .then(m => this.setState({ news: [...m.articles] }));
  }
  render() {
    const { news } = this.state;
    return (
      <Wrapper>
        <div style={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Новости
          </Typography>
        </div>

        {news &&
          news.map(newsItem => (
            <Card
              title={newsItem.title}
              key={
                new Date(newsItem.publishedAt).getTime() - Math.random() * 25
              }
              urlToImage={newsItem.urlToImage}
              description={newsItem.description}
            />
          ))}
      </Wrapper>
    );
  }
}

export default News;
