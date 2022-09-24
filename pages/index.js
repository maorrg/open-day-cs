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
} from "@mantine/core";
import { Input } from "@mantine/core";
import { AiFillCloud } from "react-icons/ai";

async function handleSubmit(event) {
  event.preventDefault();
  setLoading(true);
  if (sentence === "") {
    alert("Ingresa una oración para ejecutar la operacion");
    return setLoading(false);
  }
  await axios({
    method: "post",
    url: "http://localhost:8000/generate",
    data: {
      sentence: sentence,
    },
  })
    .then((data) => {
      setLoading(false);
      // props.setImage(data.data.id);
      props.setImage(data.data.url);
      console.log(data.data.id);
      props.setQr(data.data.id);
      props.setSection(2);
    })
    .catch(() => setLoading(false));
}

export default function Home() {
  return (
    <Container style={{ padding: "50px" }}>
      <Card shadow="sm" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://utec.edu.pe/sites/default/files/styles/1920x500/public/cabecera_ciencia_computacion.jpg"
            height={300}
            alt="Norway"
          />
        </Card.Section>
        <Container style={{ paddingBottom: 20 }}>
          <Center style={{ marginTop: 15 }}>
            <Title order={1}> Dream Painter </Title>
          </Center>

          <Text size="sm" color="dimmed" align="center">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>
        </Container>

        <Input icon={<AiFillCloud />} placeholder="Mi sueño es ... " />

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          style={{ marginTop: 50 }}
        >
          ¡Soñar!
        </Button>
      </Card>
    </Container>
  );
}
