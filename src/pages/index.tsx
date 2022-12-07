import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { NextPage } from "next";
import Link from "next/link";
import { Row, Card, Button, Space } from "antd";
import NavBar from "../components/NavBar";
import React, { useState } from "react";

interface Client {
  id: number;
  name: string;
}

interface Address {
  id: number;
  title: string;
}

interface Props {
  clientList: [Client];
}

const Home: NextPage<Props> = (props) => {
  const [addresses, setAddresses] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Clients</title>
        <meta name="description" content="Deliveries app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Row>
        <div>
          {props.clientList.map((client) => (
            <Card
              size="small"
              title={client.name}
              style={{ width: 300, margin: "10px", cursor: "default" }}
              hoverable={true}
              key={client.id}
            >
              <Space wrap>
                <Button
                  onClick={() => {
                    fetchAddresses(client.id).then((data) => {
                      setAddresses(data);
                    });
                  }}
                >
                  Parādīt adreses
                </Button>

                <Link href={`deliveries/${client.id}`}>Atvērt piegādes</Link>
              </Space>
            </Card>
          ))}
        </div>

        <ul style={{ position: "fixed", left: "50%" }}>
          {addresses.map((address: Address) => (
            <li key={address.id}>{address.title}</li>
          ))}
        </ul>
      </Row>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/clients`);
  const clientList = await res.json();
  return {
    props: {
      clientList,
    },
  };
}

export async function fetchAddresses(clientId: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/clients/${clientId}/addresses`
  );
  return await res.json();
}

export default Home;
