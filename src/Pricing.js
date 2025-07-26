import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Pricing() {
  return (
    <Container id="pricing" className="my-5">
      <h2 className="text-center mb-4">料金プラン</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header as="h5">のぞき見スタジオ</Card.Header>
            <Card.Body>
              <Card.Title>月額500円</Card.Title>
              <Card.Text>
                まずは気軽に始めたい方向けの、読むだけプランです。
              </Card.Text>
              <ul>
                <li>毎週1〜2本の記事更新（全記事読み放題）</li>
                <li>AI最新トレンド（不定期更新）</li>
              </ul>
              <Button variant="outline-primary" href="#">プランに申し込む</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header as="h5">みんなのスタジオ</Card.Header>
            <Card.Body>
              <Card.Title>月額980円</Card.Title>
              <Card.Text>
                仲間と交流しながら、AIコンテンツ制作を学びたい方向けのプランです。
              </Card.Text>
              <ul>
                <li>のぞき見スタジオの全内容</li>
                <li>Discordコミュニティへの招待</li>
                <li>テキストでの相談</li>
                <li>月1回のオンライン活動会</li>
              </ul>
              <Button variant="primary" href="#">プランに申し込む</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header as="h5">ガチ相談</Card.Header>
            <Card.Body>
              <Card.Title>月額3,980円</Card.Title>
              <Card.Text>
                マンツーマンで、集中的にサポートを受けたい方向けのプランです。
              </Card.Text>
              <ul>
                <li>みんなのスタジオの全内容</li>
                <li>個別Web相談（1時間×2回/月）</li>
              </ul>
              <Button variant="outline-primary" href="#">プランに申し込む</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Pricing;