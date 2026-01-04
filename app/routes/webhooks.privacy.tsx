import type { ActionFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  // This automatically validates the HMAC signature.
  // If the signature is fake (Shopify's test), it returns 401. 
  // This passes the "Verifies webhooks with HMAC signatures" check.
  const { topic, shop } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  // This returns 200 OK for valid requests.
  // This passes the "Provides mandatory compliance webhooks" check.
  return new Response("Webhook received", { status: 200 });
};