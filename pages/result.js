import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Container,
  Center,
  Title,
  Alert,
  Blockquote,
} from "@mantine/core";

import { AiOutlineCloud } from "react-icons/ai";

export default function Result() {
  return (
    <Container style={{ position: "relative" }}>
      <Container
        style={{
          padding: "50px",
          height: "100%",
          width: "95%",
          display: "inline-block",
        }}
      >
        <Card shadow="sm" radius="md" style={{ padding: 70 }}>
          <Center style={{ marginBottom: 20 }}>
            <Title size={30} weight={500}>
              {<AiOutlineCloud />} &nbsp; Sheldon couper bailando salsa
            </Title>
          </Center>
          <Card.Section>
            <Center>
              <Image
                radius={10}
                fit="contain"
                width={712}
                height={712}
                src="https://slm-assets.secondlife.com/assets/3789237/lightbox/512x512%20PNG%20Landscape%20Texture%20-%20Dandelion%20Field.jpg?1308962739"
              />
            </Center>
          </Card.Section>
        </Card>
      </Container>
      <Container style={{ display: "inline-block", verticalAlign: "top" }}>
        <Container
          style={{
            width: "5%",
            position: "absolute",
            bottom: "33%",
            width: 270,
          }}
        >
          <Card shadow="sm" radius="md">
            <Image
              radius={10}
              fit="contain"
              width={212}
              height={212}
              src="https://qrcode.tec-it.com/API/QRCode?data=tel%3A555-555-5555&method=download"
            />
            <Text
              size="xl"
              color="dimmed"
              align="center"
              style={{ marginTop: 15 }}
            >
              #OpenDayUTEC
            </Text>
            <Title size={20} align="center" style={{ marginTop: 10 }}>
              Compartelo en tus redes
            </Title>
          </Card>
        </Container>
      </Container>
    </Container>
  );
}
