import Layout from '@theme/Layout';
import Plugin from '@babel/plugin-proposal-numeric-separator';
import React from "react";
import "./styles.css";
import {
  Link,
  Heading,
  FormField,
  TextInput,
  Paragraph,
  Pane,
  Card,
  Strong,
  RadioGroup
} from "evergreen-ui";

const NEBULA = 5000;
const RED_GIANT = 500_000;
const SUPERNOVA = 1_000_000;

function getTierInfo(value: number, multiplier: number) {
  let finalValue = value * multiplier;
  // · One (1) lottery ticket for every 5,000 $ZERO tokens.
  // · One (1) bonus lottery ticket for every 25,000 $ZERO tokens
  let tickets = Math.floor(finalValue / 5000);
  tickets += Math.floor(finalValue / 25_000);
  if (finalValue < NEBULA) {
    return { tickets: 0, name: "No tier for tokens under 5,000 $ZERO tokens." };
  } else if (finalValue < RED_GIANT) {
    return {
      tickets,
      name: "Nebula: Any wallet with at least 5,000 $ZERO tokens."
    };
  } else if (finalValue < SUPERNOVA) {
    return {
      tickets,
      name: "Red Giant: A wallet with 500,000+ $ZERO tokens.",
      guaranteedPublicAllocation: true
    };
  } else {
    return {
      tickets,
      name: "Supernova: A wallet with 1,000,000+ $ZERO tokens",
      guaranteedPublicAllocation: true,
      guaranteedPrivateAllocation: true
    };
  }
}

// No Lockup will have a multiplier of 1x
// 7-Day Lockup will have a multiplier of 2x
// 30-Day Lockup will have a multiplier of 3x
// 30-Day LP will have a multiplier of 5x *for select pools
// type LockupPhase2 = "none" | "7_day" | "30_day" | "30_day_lp";

// const lockupOptionsPhase2: Array<{ label: string; value: Lockup }> = [
//   { label: "No Lockup will have a multiplier of 1x", value: "none" },
//   { label: "7-Day Lockup will have a multiplier of 2x", value: "7_day" },
//   { label: "30-Day Lockup will have a multiplier of 3x", value: "30_day" },
//   {
//     label: "30-Day LP will have a multiplier of 5x for select pools",
//     value: "30_day_lp"
//   }
// ];

export default function App() {
  const [value, setValue] = React.useState("");
  // const [lockup, setLockup] = React.useState<Lockup>("none");
  const [lpValue, setLpValue] = React.useState("none");
  const multiplier = lpValue === "none" ? 1 : 2;
  const tierInfo = getTierInfo(Number(value), multiplier);
  const isValidNumber = !Number.isNaN(Number(value));

  let result;
  if (isValidNumber && value.trim().length > 0 && Number(value) > 0) {
    result = (
      <>
        <Paragraph>
          For{" "}
          <Strong>
            {Number.isNaN(Number(value))
              ? "Not a valid number"
              : numberWithCommas(Number(value))}{" "}
            $ZERO
          </Strong>{" "}
          with a {multiplier}x multiplier{" "}
          {multiplier > 1 &&
            `(${numberWithCommas(multiplier * Number(value))})`}{" "}
          you get:
        </Paragraph>
        <Heading marginTop={24}>
          <Strong>{tierInfo?.name}</Strong>
        </Heading>
        {/* <Paragraph>Multiplier: {lockupInfo[lockup]}</Paragraph> */}
        <Paragraph>
          Lottery tickets: {numberWithCommas(tierInfo?.tickets)}
        </Paragraph>
        {tierInfo?.guaranteedPrivateAllocation && (
          <Paragraph>✅ Guaranteed private sale allocation</Paragraph>
        )}
        {tierInfo?.guaranteedPublicAllocation && (
          <Paragraph>✅ Guaranteed public sale allocation</Paragraph>
        )}
      </>
    );
  } else if (!isValidNumber) {
    result = <Strong>Not valid number</Strong>;
  } else {
    result = (
      <Paragraph>
        First, enter a number of tokens. Your result will appear here.
      </Paragraph>
    );
  }

  return (
    <div className="App">
      <Card
        elevation={2}
        marginTop={16}
        background="white"
        maxWidth={480}
        marginX="auto"
        overflow="hidden"
      >
        <Pane
          marginBottom={16}
          background="#111"
          paddingX={24}
          paddingY={16}
          display="flex"
          alignItems="center"
        >
          <img
            src="https://www.0.exchange/0-icon.png"
            width={40}
            alt="Zero Exchange"
            style={{ display: "block", margin: 0 }}
          />
          <Heading marginLeft={16} color="white">
            ZeroGravity calculator (unofficial)
          </Heading>
        </Pane>
        <Pane padding={24}>
          <Pane marginBottom={32}>
            <Heading marginBottom={16}>
              ZeroGravity{" "}
              <Link size={500} href="https://www.0.exchange/">
                0.Exchange
              </Link>{" "}
              tier and lottery ticket calculator.
            </Heading>
            <Paragraph marginTop={16}>
              ZeroGravity is currently in the Phase 1 roll out. Liquidity
              providers will receive a 2x multiplier.
              <br />
              <br />
              <Link href="https://medium.com/@OfficialZeroDex/introducing-the-zerogravity-launchpad-61fd8f751918">
                Learn more about the Zero Exchange tier information
              </Link>
            </Paragraph>
            <Card background="yellowTint" padding={12} marginTop={24}>
              <Paragraph>
                This tool does not collect your information.{" "}
                <Link href="https://codesandbox.io/s/zero-exhange-tier-calculator-cu4qr?file=/src/App.tsx">
                  The code is public
                </Link>
                .
              </Paragraph>
            </Card>
          </Pane>
          <Pane borderTop paddingTop={24}>
            <FormField label="Zero token amount">
              <TextInput
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
              />
            </FormField>
          </Pane>
          <RadioGroup
            marginTop={24}
            label="Do you provide liquidity?"
            value={lpValue}
            options={[
              {
                label: "I do not provide liquidity (1x multiplier)",
                value: "none"
              },
              { label: "I provide liquidity (2x multiplier)", value: "yes" }
            ]}
            onChange={(event) => setLpValue(event.target.value)}
          />
          {/* <RadioGroup
          marginTop={24}
          label="Lockup"
          value={lockup}
          options={lockupOptions}
          onChange={(event) => setLockup(event.target.value as Lockup)}
        /> */}
          <Pane borderTop marginTop={24} paddingTop={24}>
            {result}
          </Pane>
        </Pane>
      </Card>
    </div>
  );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}