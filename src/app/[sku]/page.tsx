import React from "react";

export default async function SkuPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const sku = (await params).sku;
  return <div>My product: {sku}</div>;
}
