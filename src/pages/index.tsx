import Text from "../components/Text";
import Stack from "../components/Stack";
import Frame from "../components/Frame";
import Coat from "../components/Coat";
import Link from "../components/Link";

export default function Home() {
  return (
    <>
      <Coat py="large" px="large">
        <Stack
          direction={{ mobile: "column", tablet: "row" }}
          // wrap="wrap"
          gap="medium"
          align="center"
        >
          <Frame w="1/2" h={400}>
            <Coat bg="secondary" curve="narrow" fill>
              <Text
                as="small"
                color={{ mobile: "primary", desktop: "secondary" }}
                size={{ mobile: "l", desktop: "m" }}
                lh="loose"
              >
                hoge hoge
              </Text>
            </Coat>
          </Frame>
          <Frame w="1/4" h={400}>
            <Coat bg="primary" curve="tight" px={"large"} py={"large"} fill>
              <Text as="mark">hoge hoge</Text>
            </Coat>
          </Frame>
        </Stack>
        <Stack direction="column" gap="medium">
          <Frame maxW={400}>
            <Link to={"/"}>
              <Coat py="large" curve="button" bg="primary" fill>
                Button!
              </Coat>
            </Link>
          </Frame>
          <Frame maxW={400}>
            <Link to={"/"}>
              <Coat py="large" curve="button" bg="primary" fill>
                Button!
              </Coat>
            </Link>
          </Frame>
        </Stack>
      </Coat>
    </>
  );
}
