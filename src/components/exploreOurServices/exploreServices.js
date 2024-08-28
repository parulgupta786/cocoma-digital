import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AppImages from "../../utils/images";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: AppImages.videoproduction,
    title: "video_production",
    subtitle: "video_production_details",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: AppImages.designservices,
    title: "design_services",
    subtitle: "design_services_details",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: AppImages.postproduction,
    title: "post_production",
    subtitle: "post_production_details",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: AppImages.videoediting,
    title: "video_editing",
    subtitle: "video_editing_details",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: AppImages.designservices,
    title: "motion_graphics",
    subtitle: "motion_graphics_details",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: AppImages.postproduction,
    title: "copywriting",
    subtitle: "copywriting_details",
  },
];

const buttonData = [
  "content_service",
  "performance_marketing_services",
  "it_web_services",
];

function ExploreServices() {
  const { t } = useTranslation();
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>{t("explore_our_services")}</h2>
          <div className="subtitle">{t("explore_our_awesome_works")}</div>
        </div>
        <Row className="portfoliolist-button" fluid={"sm"}>
          {buttonData.map((data, idx) => (
            <Col>
              <Button
                variant="none"
                className={idx === 0 ? "active-btn" : "none"}
              >
                {t(data)}
              </Button>
            </Col>
          ))}
        </Row>
        <Row className="portfoliolist">
          {worksData.map((works) => {
            return (
              <Col sm={4} key={works.id}>
                <Container className="portfolio-wrapper">
                  <Row className="image-panel">
                    <Image src={works.image} />
                  </Row>
                  <Row className="portfolio-span">
                    <h4>{t(`${works.title}`)}</h4>
                  </Row>

                  <div className="label text-center">
                    <h3>{t(`${works.title}`)}</h3>
                    <p>{t(`${works.subtitle}`)}</p>
                  </div>
                </Container>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default ExploreServices;
