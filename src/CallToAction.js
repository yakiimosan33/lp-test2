import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <Container className="my-5 text-center">
      <Row>
        <Col>
          <h2>さあ、あなたも「つくる側」へ</h2>
          <p className="lead">完璧じゃなくても、うまくできなくても大丈夫。<br />AIと共に、新しい創作の扉を開きましょう。</p>
          <Button variant="success" size="lg" href="#" className="mb-3">
            週刊！AIクリエイター・スタジオを覗いてみる
          </Button>
          <p>ご不明点やご相談は、お気軽にどうぞ！</p>
          <a href="https://x.com/se_yakiimosan" className="me-3">X (Twitter)</a>
          <a href="https://line.me/R/ti/p/%40123xyz" className="me-3">公式LINE</a>
          <a href="https://yakiimosan.com/">ブログ</a>
        </Col>
      </Row>
    </Container>
  );
}

export default CallToAction;