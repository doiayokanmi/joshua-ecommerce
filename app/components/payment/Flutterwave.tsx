import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

interface Props {
  total: number;
} 

export default function Flutterwave({total}: Props) {
  const formattedTotal =  total.toLocaleString('en-US', { maximumFractionDigits: 2 })

  const config = {
    public_key: "FLWPUBK_TEST-5cd0893ffb7cc6809354c25e7649d746-X",
    tx_ref: Date.now().toString(),
    amount: total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "oloyedammy@gmail.com",
      phone_number: "08057896279",
      name: "Damilola",
    },
    customizations: {
      title: "Dammy Digital Concepts",
      description: "Payment for items in cart",
      logo: "/image/logo.png",
    },
  };

  const fwConfig = {
    ...config,
    text: `Checkout (₦${formattedTotal})`,
    callback: (response: any) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="flex justify-center bg-black items-center mt-4 p-2">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
