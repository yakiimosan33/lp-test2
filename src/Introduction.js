import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Introduction() {
  return (
    <Container className="my-5 text-center">
      <Row>
        <Col>
          <h1 className="display-4">「苦手」を「創造」に変える場所</h1>
          <p className="lead">AIと共に、あなたの「やってみたい」をカタチに。</p>
          <p>文章が苦手、話すのが苦手、考えがまとまらない...<br />そんなあなたの「ちょっとした苦手」を、AIが強力にサポートします。</p>
          <Button variant="primary" size="lg" href="#pricing">プランを見る</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;