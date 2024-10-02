// import React from "react";
import { Card } from "antd";
import { data } from "@/data";

interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params }: IParams) {
  return {
    title: `博客详情-${params.id}`,
  };
}
export default function Page({ params }: IParams) {
  const item = data.find((item) => item.userId === +params.id);
  return (
    <div>
      <Card title={item?.title}>
        <p>{item?.body}</p>
      </Card>
    </div>
  );
}
