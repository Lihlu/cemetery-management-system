"use client";
import { useEffect, useState } from "react";
import { getAxiosInstance } from "@/utils/axios-instance";
import { YocoInlineInstance } from "@/types/yoco";
import { useGravesiteActions } from "@/providers/gravesite";
import { IGravesite } from "@/providers/gravesite/context";
import { useAuthState } from "@/providers/auth";

interface PaymentFormProps {
  gravesite: IGravesite;
  gravesitePrice: number;
}

const PaymentForm = ({ gravesite, gravesitePrice }: PaymentFormProps) => {
  const { updateGravesite } = useGravesiteActions();
  const { currentUser } = useAuthState();
  const [inlineInstance, setInlineInstance] =
    useState<YocoInlineInstance | null>(null);
  const [loading, setLoading] = useState(false);
  const instance = getAxiosInstance();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.yoco.com/sdk/v1/yoco-sdk-web.js";
    script.async = true;

    script.onload = () => {
      const publicKey = process.env.NEXT_PUBLIC_YOCO_PUBLIC_KEY;

      if (!publicKey) {
        console.error("Yoco public key is not defined.");
        return;
      }

      const yoco = new window.YocoSDK({ publicKey });

      const inline = yoco.inline({
        layout: "basic",
        amountInCents: gravesitePrice,
        currency: "ZAR",
      });

      inline.mount("#card-element");
      setInlineInstance(inline);
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
      setInlineInstance((prev) => {
        prev?.unmount();
        return null;
      });
    };
  }, [gravesitePrice]);

  const updateGravesiteOwner = () => {
    const updatedGravesite = {
      ...gravesite,
      ownerId: currentUser.id,
      isReserved: true,
    };
    updateGravesite(updatedGravesite);
  };

  const handlePayment = async () => {
    if (!inlineInstance) {
      alert("Payment form not ready yet.");
      return;
    }

    setLoading(true);

    try {
      const result = await inlineInstance.createToken();

      if (result.error) {
        alert(result.error.message);
        return;
      }
      console.log(gravesite);
      await instance.post(`/api/services/app/Payment/Charge`, {
        token: result.id,
        amount: gravesitePrice,
        gravesiteName: gravesite.siteNumber,
      });

      alert("Payment successful!");
      updateGravesiteOwner();
    } catch (error) {
      console.error("Payment failed:", error);
      const errorMessage =
        error.response?.data || error.message || "An error occurred";
      alert(`Payment failed: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Purchase {gravesite?.siteNumber}</h1>

      <div style={{ marginBottom: "1rem" }}>
        <strong>Amount:</strong> R {(gravesitePrice / 100).toFixed(2)}
      </div>

      <div id="card-element" style={{ marginBottom: "1rem" }}></div>

      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          padding: "0.5rem 1rem",
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default PaymentForm;
