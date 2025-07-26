import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Features() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">週刊！AIクリエイターズ・スタジオの特徴</h2>
      <Row>
        <Col md={4} className="text-center">
          <i class="material-icons" style={{ fontSize: '48px' }}>code</i>
          <h4>AIテクニック</h4>
          <p>GPTsの作り方からAPI連携まで、初心者から上級者までをカバーした実践的なテクニックを学べます。</p>
        </Col>
        <Col md={4} className="text-center">
          <i class="material-icons" style={{ fontSize: '48px' }}>edit</i>
          <h4>マインド・マーケティング</h4>
          <p>AI作品の収益化や、ファンを増やすための思考法・実践法を、制作者のリアルな体験談と共にお届けします。</p>
        </Col>
        <Col md={4} className="text-center">
          <i class="material-icons" style={{ fontSize: '48px' }}>people</i>
          <h4>コミュニティ</h4>
          <p>クリエイター同士が交流し、相談できるコミュニティ。仲間と共に、創作活動のモチベーションを維持できます。</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;