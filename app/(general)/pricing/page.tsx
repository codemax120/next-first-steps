import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina de precios de mi servicio',
};

export default function pricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    );
}