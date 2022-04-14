import { Grid, Row, Col, Typography, Space } from "antd";
import Image from "next/image";
import styles from './Section.module.css'
const { Title } = Typography;
function SectionText({ data }) {
  return (
    <div className={styles.section}>
      <Title className={styles.subtitleTop} level={5}>{data.subtitleTop}</Title>
      <Title className={styles.title} level={2}>{data.title}</Title>
      <Title className={styles.subtitle} level={3}>{data.subtitle}</Title>
      <Title className={styles.content} level={4}>{data.contents}</Title>
    </div>
  )
}

export default function Section({
  paddingBottomCustom,
  isMore = true,
  isFullWidth,
  image,
  data,
  reverse,
  column
}) {
  const paddingBottom = paddingBottomCustom || "5rem";
  return data && !data.contents ? '' : (
    <section>
      <Row style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <Col flex={6}>
          <SectionText data={data} ></SectionText>
        </Col>
        <Col flex={6}>
          {data.image && data.image.length > 1 ?
            data.image.map((img) =>
              <Image key={img.key} src={img.image} width={img.size} height={img.size
              }></Image>
            )
            :
            data.image && <Image src={data.image} width={400} height={400}></Image>
          }
        </Col>
      </Row>
    </section>
  );
}
